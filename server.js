const express = require('express');
const Database = require('better-sqlite3');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// === BASE DE DONNÉES SQLite ===
const db = new Database('nanburger.db');

// Créer la table des commandes
db.exec(`
    CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        order_number TEXT UNIQUE,
        customer_name TEXT,
        customer_phone TEXT,
        items TEXT,
        total REAL,
        status TEXT DEFAULT 'pending',
        payment_method TEXT DEFAULT 'Non spécifié',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);

// Migration for existing databases
try {
    db.exec(`ALTER TABLE orders ADD COLUMN payment_method TEXT DEFAULT 'Non spécifié'`);
} catch (e) {
    // Column likely already exists, ignore
}

// === MIDDLEWARE ===
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/')));

// Route pour le dashboard admin
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// Route pour la caisse (POS)
app.get('/caisse', (req, res) => {
    res.sendFile(path.join(__dirname, 'caisse.html'));
});

// Route pour l'écran client
app.get('/display', (req, res) => {
    res.sendFile(path.join(__dirname, 'display.html'));
});

// Route pour le rapport journalier
app.get('/rapport', (req, res) => {
    res.sendFile(path.join(__dirname, 'rapport.html'));
});

// === CLIENTS SSE (Server-Sent Events) ===
let sseClients = [];

function sendToAllClients(data) {
    sseClients.forEach(client => {
        client.res.write(`data: ${JSON.stringify(data)}\n\n`);
    });
}

// === ROUTES API ===

// Générer un numéro de commande unique (ex: NB-001, NB-002...)
function generateOrderNumber() {
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const result = db.prepare(`
        SELECT COUNT(*) as count FROM orders
        WHERE date(created_at) = date('now')
    `).get();
    const num = (result.count + 1).toString().padStart(3, '0');
    return `NB-${today}-${num}`;
}

// POST /api/orders - Créer une nouvelle commande
app.post('/api/orders', (req, res) => {
    try {
        const { customer_name, customer_phone, items, total, payment_method } = req.body;

        if (!items || items.length === 0) {
            return res.status(400).json({ error: 'Panier vide' });
        }

        const order_number = generateOrderNumber();
        const payment = payment_method || 'Non spécifié';

        const stmt = db.prepare(`
            INSERT INTO orders (order_number, customer_name, customer_phone, items, total, status, payment_method)
            VALUES (?, ?, ?, ?, ?, 'pending', ?)
        `);

        const result = stmt.run(
            order_number,
            customer_name || 'Client',
            customer_phone || '',
            JSON.stringify(items),
            total,
            payment
        );

        const newOrder = {
            id: result.lastInsertRowid,
            order_number,
            customer_name,
            customer_phone,
            items,
            total,
            status: 'pending',
            payment_method: payment,
            created_at: new Date().toISOString()
        };

        // Notifier tous les clients SSE (dashboard cuisine)
        sendToAllClients({ type: 'new_order', order: newOrder });

        res.status(201).json({
            success: true,
            order_number,
            message: 'Commande enregistrée!'
        });

    } catch (error) {
        console.error('Erreur création commande:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// GET /api/orders - Liste des commandes du jour
app.get('/api/orders', (req, res) => {
    try {
        const orders = db.prepare(`
            SELECT * FROM orders
            WHERE date(created_at) = date('now')
            ORDER BY created_at DESC
        `).all();

        // Parser les items JSON
        const parsed = orders.map(o => ({
            ...o,
            items: JSON.parse(o.items)
        }));

        res.json(parsed);
    } catch (error) {
        console.error('Erreur liste commandes:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// PATCH /api/orders/:id - Mettre à jour le statut
app.patch('/api/orders/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { status, payment_method } = req.body;

        if (status) {
            const validStatuses = ['pending', 'preparing', 'ready', 'done'];
            if (!validStatuses.includes(status)) {
                return res.status(400).json({ error: 'Statut invalide' });
            }
            db.prepare('UPDATE orders SET status = ? WHERE id = ?').run(status, id);
        }

        if (payment_method) {
            db.prepare('UPDATE orders SET payment_method = ? WHERE id = ?').run(payment_method, id);
        }

        const order = db.prepare('SELECT * FROM orders WHERE id = ?').get(id);

        if (order) {
            order.items = JSON.parse(order.items);
            sendToAllClients({ type: 'order_updated', order });
        }

        res.json({ success: true });
    } catch (error) {
        console.error('Erreur mise à jour:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// DELETE /api/orders/:id - Supprimer une commande
app.delete('/api/orders/:id', (req, res) => {
    try {
        const { id } = req.params;
        db.prepare('DELETE FROM orders WHERE id = ?').run(id);
        sendToAllClients({ type: 'order_deleted', id: parseInt(id) });
        res.json({ success: true });
    } catch (error) {
        console.error('Erreur suppression:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// GET /api/orders/stream - SSE pour temps réel
app.get('/api/orders/stream', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Envoyer un ping initial
    res.write(`data: ${JSON.stringify({ type: 'connected' })}\n\n`);

    // Ajouter ce client à la liste
    const clientId = Date.now();
    sseClients.push({ id: clientId, res });

    console.log(`Client SSE connecté: ${clientId} (Total: ${sseClients.length})`);

    // Nettoyer quand le client se déconnecte
    req.on('close', () => {
        sseClients = sseClients.filter(c => c.id !== clientId);
        console.log(`Client SSE déconnecté: ${clientId} (Total: ${sseClients.length})`);
    });
});

// GET /api/stats - Stats du jour
app.get('/api/stats', (req, res) => {
    try {
        const stats = db.prepare(`
            SELECT
                COUNT(*) as total_orders,
                SUM(total) as total_revenue,
                SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) as pending,
                SUM(CASE WHEN status = 'preparing' THEN 1 ELSE 0 END) as preparing,
                SUM(CASE WHEN status = 'ready' THEN 1 ELSE 0 END) as ready,
                SUM(CASE WHEN status = 'done' THEN 1 ELSE 0 END) as done
            FROM orders
            WHERE date(created_at) = date('now')
        `).get();

        res.json(stats);
    } catch (error) {
        console.error('Erreur stats:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// === DÉMARRAGE SERVEUR ===
app.listen(PORT, () => {
    console.log(`
    ╔═══════════════════════════════════════════════════════╗
    ║                                                       ║
    ║   🍔 NAN BURGER - Serveur démarré!                    ║
    ║                                                       ║
    ║   📱 Site client:    http://localhost:${PORT}            ║
    ║   🍳 Dashboard:      http://localhost:${PORT}/admin       ║
    ║   💰 Caisse (POS):   http://localhost:${PORT}/caisse      ║
    ║   📺 Écran client:   http://localhost:${PORT}/display     ║
    ║   📊 Rapport/Compta: http://localhost:${PORT}/rapport     ║
    ║                                                       ║
    ╚═══════════════════════════════════════════════════════╝
    `);
});
