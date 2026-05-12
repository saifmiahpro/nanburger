const express = require('express');
const Database = require('better-sqlite3');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// === BASE DE DONNÉES SQLite ===
const db = new Database('nanburger.db');

db.exec(`
    CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        order_number TEXT UNIQUE,
        customer_name TEXT,
        customer_phone TEXT,
        items TEXT,
        total REAL,
        status TEXT DEFAULT 'pending',
        order_type TEXT DEFAULT 'web',
        payment_method TEXT DEFAULT 'Non spécifié',
        payments TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);

db.exec(`
    CREATE TABLE IF NOT EXISTS sse_events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        event_type TEXT NOT NULL,
        data TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);

// Migrations pour bases existantes (ignorer si colonne déjà présente)
const migrations = {
    payment_method: `ALTER TABLE orders ADD COLUMN payment_method TEXT DEFAULT 'Non spécifié'`,
    order_type: `ALTER TABLE orders ADD COLUMN order_type TEXT DEFAULT 'web'`,
    payments: `ALTER TABLE orders ADD COLUMN payments TEXT`
};
Object.entries(migrations).forEach(([col, sql]) => {
    try { db.exec(sql); } catch (e) { /* déjà présent */ }
});

// === MIDDLEWARE ===
app.use(cors());
app.use(express.json());

// Routes courtes pour ouvrir les pages
app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'admin.html')));
app.get('/caisse', (req, res) => res.sendFile(path.join(__dirname, 'caisse.html')));
app.get('/display', (req, res) => res.sendFile(path.join(__dirname, 'display.html')));
app.get('/rapport', (req, res) => res.sendFile(path.join(__dirname, 'rapport.html')));
app.get('/health', (req, res) => res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() }));

// === HELPERS ===
function generateOrderNumber() {
    const result = db.prepare(`
        SELECT COUNT(*) as count FROM orders
        WHERE date(created_at) = date('now', 'localtime')
    `).get();
    const num = (result.count + 1).toString().padStart(3, '0');
    return `NB-${num}`;
}

function createSSEEvent(type, data) {
    db.prepare('INSERT INTO sse_events (event_type, data) VALUES (?, ?)')
        .run(type, JSON.stringify(data));
}

function parseOrder(o) {
    if (!o) return o;
    let payments = null;
    if (o.payments) {
        try { payments = JSON.parse(o.payments); } catch (e) { payments = null; }
    }
    return {
        ...o,
        items: typeof o.items === 'string' ? JSON.parse(o.items) : o.items,
        total: Number(o.total),
        payments
    };
}

// ============================================================
// ROUTES PHP-COMPATIBLES (utilisées par le frontend en prod)
// ============================================================

// GET /api/orders.php?id=X | ?status=X | ?date=YYYY-MM-DD | (toutes)
app.get('/api/orders.php', (req, res) => {
    try {
        const { id, status, date } = req.query;

        if (id) {
            const order = db.prepare('SELECT * FROM orders WHERE id = ?').get(id);
            if (!order) return res.status(404).json({ error: 'Order not found' });
            return res.json(parseOrder(order));
        }

        if (status) {
            const orders = db.prepare('SELECT * FROM orders WHERE status = ? ORDER BY created_at DESC').all(status);
            return res.json(orders.map(parseOrder));
        }

        if (date) {
            const orders = db.prepare(`
                SELECT * FROM orders
                WHERE date(created_at, 'localtime') = ?
                ORDER BY created_at DESC
            `).all(date);
            return res.json(orders.map(parseOrder));
        }

        const orders = db.prepare('SELECT * FROM orders ORDER BY created_at DESC LIMIT 100').all();
        res.json(orders.map(parseOrder));
    } catch (e) {
        console.error('GET /api/orders.php', e);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// POST /api/orders.php
app.post('/api/orders.php', (req, res) => {
    try {
        const {
            customer_name = 'Client',
            customer_phone = '',
            items,
            total = 0,
            status = 'pending',
            order_type = 'web',
            payment_method = null,
            payments = null
        } = req.body || {};

        if (!Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ error: 'Items requis' });
        }

        const order_number = generateOrderNumber();

        const info = db.prepare(`
            INSERT INTO orders (order_number, customer_name, customer_phone, items, total, status, order_type, payment_method, payments)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).run(
            order_number,
            customer_name,
            customer_phone,
            JSON.stringify(items),
            total,
            status,
            order_type,
            payment_method || 'Non spécifié',
            payments ? JSON.stringify(payments) : null
        );

        const order = parseOrder(db.prepare('SELECT * FROM orders WHERE id = ?').get(info.lastInsertRowid));

        // Notification SSE seulement pour les commandes web (comme en prod PHP)
        if (order_type === 'web') {
            createSSEEvent('new_order', {
                id: order.id,
                order_number: order.order_number,
                customer_name: order.customer_name,
                total: order.total
            });
        }

        res.status(201).json({ success: true, order, order_number });
    } catch (e) {
        console.error('POST /api/orders.php', e);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// PUT /api/orders.php?id=X
app.put('/api/orders.php', (req, res) => {
    try {
        const { id } = req.query;
        if (!id) return res.status(400).json({ error: 'ID requis' });

        const existing = db.prepare('SELECT * FROM orders WHERE id = ?').get(id);
        if (!existing) return res.status(404).json({ error: 'Order not found' });

        const data = req.body || {};
        const updates = [];
        const params = [];

        ['status', 'payment_method', 'customer_name', 'customer_phone'].forEach(f => {
            if (data[f] !== undefined) {
                updates.push(`${f} = ?`);
                params.push(data[f]);
            }
        });
        if (data.items !== undefined) {
            updates.push('items = ?');
            params.push(JSON.stringify(data.items));
        }
        if (data.total !== undefined) {
            updates.push('total = ?');
            params.push(Number(data.total));
        }
        if (data.payments !== undefined) {
            updates.push('payments = ?');
            params.push(data.payments ? JSON.stringify(data.payments) : null);
        }

        if (updates.length === 0) {
            return res.status(400).json({ error: 'No data to update' });
        }

        params.push(id);
        db.prepare(`UPDATE orders SET ${updates.join(', ')} WHERE id = ?`).run(...params);

        const order = parseOrder(db.prepare('SELECT * FROM orders WHERE id = ?').get(id));

        if (data.status) {
            createSSEEvent('order_updated', { id: Number(id), status: data.status });
        }

        res.json({ success: true, order });
    } catch (e) {
        console.error('PUT /api/orders.php', e);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// DELETE /api/orders.php?id=X
app.delete('/api/orders.php', (req, res) => {
    try {
        const { id } = req.query;
        if (!id) return res.status(400).json({ error: 'ID requis' });

        const info = db.prepare('DELETE FROM orders WHERE id = ?').run(id);
        if (info.changes === 0) return res.status(404).json({ error: 'Order not found' });

        createSSEEvent('order_deleted', { id: Number(id) });
        res.json({ success: true, message: 'Order deleted' });
    } catch (e) {
        console.error('DELETE /api/orders.php', e);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// GET /api/events.php?poll=1&since=X
app.get('/api/events.php', (req, res) => {
    try {
        const since = parseInt(req.query.since || '0', 10);
        const events = db.prepare(`
            SELECT * FROM sse_events
            WHERE id > ?
            ORDER BY id ASC
            LIMIT 50
        `).all(since);

        const formatted = events.map(e => ({
            id: e.id,
            type: e.event_type,
            data: JSON.parse(e.data),
            time: e.created_at
        }));

        const lastId = events.length > 0 ? events[events.length - 1].id : since;

        res.json({
            events: formatted,
            lastId,
            timestamp: Math.floor(Date.now() / 1000)
        });
    } catch (e) {
        console.error('GET /api/events.php', e);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// Health PHP-compatible
app.get('/api/health.php', (req, res) => {
    res.json({ status: 'ok', mode: 'node-local', timestamp: new Date().toISOString() });
});

// === FICHIERS STATIQUES (APRÈS les routes API pour éviter de servir les .php en clair) ===
app.use(express.static(path.join(__dirname, '/'), {
    // Ne pas servir le dossier api/ comme fichiers statiques
    setHeaders: (res, filePath) => {
        if (filePath.includes('/api/')) {
            res.status(404);
        }
    }
}));

// Bloquer explicitement l'accès aux fichiers PHP en clair
app.get('/api/*', (req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

// === DÉMARRAGE SERVEUR ===
app.listen(PORT, () => {
    console.log(`
    ╔═══════════════════════════════════════════════════════╗
    ║   🍔 NAN BURGER - Serveur LOCAL démarré!              ║
    ║                                                       ║
    ║   📱 Site client:    http://localhost:${PORT}            ║
    ║   💰 Caisse (POS):   http://localhost:${PORT}/caisse.html ║
    ║   📊 Rapport:        http://localhost:${PORT}/rapport.html║
    ║                                                       ║
    ║   ✅ Routes PHP-compatibles activées                  ║
    ║      (mirror du backend Hostinger prod)               ║
    ╚═══════════════════════════════════════════════════════╝
    `);
});
