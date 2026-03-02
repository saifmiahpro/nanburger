// ===== DASHBOARD CUISINE - NAN BURGER =====

const API_URL = window.location.origin;
let orders = [];
let eventSource = null;

// ===== DOM ELEMENTS =====
const DOM = {
    ordersPending: document.getElementById('ordersPending'),
    ordersPreparing: document.getElementById('ordersPreparing'),
    ordersReady: document.getElementById('ordersReady'),
    countPending: document.getElementById('countPending'),
    countPreparing: document.getElementById('countPreparing'),
    countReady: document.getElementById('countReady'),
    statPending: document.getElementById('statPending'),
    statPreparing: document.getElementById('statPreparing'),
    statReady: document.getElementById('statReady'),
    statRevenue: document.getElementById('statRevenue'),
    statusDot: document.getElementById('statusDot'),
    statusText: document.getElementById('statusText'),
    printArea: document.getElementById('printArea'),
    notificationSound: document.getElementById('notificationSound')
};

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', () => {
    loadOrders();
    connectSSE();
});

// ===== CHARGER LES COMMANDES =====
async function loadOrders() {
    try {
        const res = await fetch(`${API_URL}/api/orders`);
        orders = await res.json();
        renderOrders();
        updateStats();
    } catch (error) {
        console.error('Erreur chargement commandes:', error);
    }
}

// ===== CONNEXION SSE (TEMPS RÉEL) =====
function connectSSE() {
    eventSource = new EventSource(`${API_URL}/api/orders/stream`);

    eventSource.onopen = () => {
        DOM.statusDot.className = 'status-dot connected';
        DOM.statusText.textContent = 'Connecté';
    };

    eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data);
        handleSSEMessage(data);
    };

    eventSource.onerror = () => {
        DOM.statusDot.className = 'status-dot disconnected';
        DOM.statusText.textContent = 'Déconnecté - Reconnexion...';

        // Reconnexion auto après 3 secondes
        setTimeout(() => {
            eventSource.close();
            connectSSE();
        }, 3000);
    };
}

function handleSSEMessage(data) {
    switch (data.type) {
        case 'new_order':
            orders.unshift(data.order);
            renderOrders();
            updateStats();
            playNotification();
            highlightNewOrder(data.order.id);
            break;

        case 'order_updated':
            const idx = orders.findIndex(o => o.id === data.order.id);
            if (idx !== -1) {
                orders[idx] = data.order;
                renderOrders();
                updateStats();
            }
            break;

        case 'order_deleted':
            orders = orders.filter(o => o.id !== data.id);
            renderOrders();
            updateStats();
            break;
    }
}

// ===== NOTIFICATION SONORE =====
function playNotification() {
    // Flash visuel sur l'écran
    flashScreen();

    // Son de notification FORT avec Web Audio API
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

        // Séquence de beeps forts type fast-food
        playBeep(audioCtx, 880, 0, 0.8);      // La
        playBeep(audioCtx, 988, 0.15, 0.8);   // Si
        playBeep(audioCtx, 1047, 0.3, 0.8);   // Do
        playBeep(audioCtx, 1047, 0.5, 0.8);   // Do (répété)
        playBeep(audioCtx, 880, 0.65, 0.8);   // La
        playBeep(audioCtx, 1047, 0.8, 0.8);   // Do final
    } catch (e) {
        console.log('Audio non supporté');
    }
}

function playBeep(audioCtx, frequency, delay, volume = 0.5) {
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = 'square'; // Plus fort et plus perçant que 'sine'

    gainNode.gain.setValueAtTime(volume, audioCtx.currentTime + delay);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + delay + 0.12);

    oscillator.start(audioCtx.currentTime + delay);
    oscillator.stop(audioCtx.currentTime + delay + 0.12);
}

function flashScreen() {
    // Créer un overlay flash orange
    const flash = document.createElement('div');
    flash.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(255, 107, 0, 0.3);
        z-index: 9999;
        pointer-events: none;
        animation: flashAnim 0.5s ease-out;
    `;

    // Ajouter l'animation si elle n'existe pas
    if (!document.getElementById('flashStyle')) {
        const style = document.createElement('style');
        style.id = 'flashStyle';
        style.textContent = `
            @keyframes flashAnim {
                0%, 50%, 100% { opacity: 0; }
                25%, 75% { opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 500);
}

function highlightNewOrder(orderId) {
    setTimeout(() => {
        const card = document.querySelector(`[data-order-id="${orderId}"]`);
        if (card) {
            card.classList.add('new');
            setTimeout(() => card.classList.remove('new'), 2000);
        }
    }, 100);
}

// ===== RENDU DES COMMANDES =====
function renderOrders() {
    const pending = orders.filter(o => o.status === 'pending');
    const preparing = orders.filter(o => o.status === 'preparing');
    const ready = orders.filter(o => o.status === 'ready');

    DOM.ordersPending.innerHTML = pending.length
        ? pending.map(o => createOrderCard(o)).join('')
        : emptyState('Aucune commande en attente');

    DOM.ordersPreparing.innerHTML = preparing.length
        ? preparing.map(o => createOrderCard(o)).join('')
        : emptyState('Aucune commande en cours');

    DOM.ordersReady.innerHTML = ready.length
        ? ready.map(o => createOrderCard(o)).join('')
        : emptyState('Aucune commande prête');

    DOM.countPending.textContent = pending.length;
    DOM.countPreparing.textContent = preparing.length;
    DOM.countReady.textContent = ready.length;
}

function createOrderCard(order) {
    const time = new Date(order.created_at).toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit'
    });

    const itemsHtml = order.items.map(item => {
        const options = Object.values(item.options || {}).filter(v => v).join(', ');
        return `
            <div class="order-item">
                <span class="order-item-qty">${item.qty}x</span>
                <span class="order-item-name">${item.name} (${item.format === 'menu' ? 'Menu' : 'Seul'})</span>
            </div>
            ${options ? `<div class="order-item-options">→ ${options}</div>` : ''}
        `;
    }).join('');

    let actionsHtml = '';

    if (order.status === 'pending') {
        actionsHtml = `
            <button class="order-btn primary" onclick="updateStatus(${order.id}, 'preparing')">
                🍳 Commencer
            </button>
            <button class="order-btn print" onclick="printOrder(${order.id})">
                🖨️
            </button>
        `;
    } else if (order.status === 'preparing') {
        actionsHtml = `
            <button class="order-btn success" onclick="updateStatus(${order.id}, 'ready')">
                ✅ Prête
            </button>
            <button class="order-btn print" onclick="printOrder(${order.id})">
                🖨️
            </button>
        `;
    } else if (order.status === 'ready') {
        actionsHtml = `
            <button class="order-btn secondary" onclick="updateStatus(${order.id}, 'done')">
                📦 Récupérée
            </button>
            <button class="order-btn print" onclick="printOrder(${order.id})">
                🖨️
            </button>
        `;
    }

    return `
        <div class="order-card ${order.status}" data-order-id="${order.id}">
            <div class="order-header">
                <span class="order-number">${order.order_number}</span>
                <span class="order-time">${time}</span>
            </div>
            <div class="order-customer">
                <strong>${order.customer_name || 'Client'}</strong>
                ${order.customer_phone ? `<br>📞 ${order.customer_phone}` : ''}
            </div>
            <div class="order-items">
                ${itemsHtml}
            </div>
            <div class="order-total">
                <span>Total</span>
                <span class="order-total-value">${order.total.toFixed(2)} €</span>
            </div>
            <div class="order-actions">
                ${actionsHtml}
            </div>
        </div>
    `;
}

function emptyState(message) {
    return `
        <div class="empty-state">
            <div class="empty-state-icon">📭</div>
            <p>${message}</p>
        </div>
    `;
}

// ===== MISE À JOUR STATUT =====
async function updateStatus(orderId, newStatus) {
    try {
        await fetch(`${API_URL}/api/orders/${orderId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: newStatus })
        });
    } catch (error) {
        console.error('Erreur mise à jour:', error);
        alert('Erreur lors de la mise à jour');
    }
}

// ===== STATISTIQUES =====
function updateStats() {
    const pending = orders.filter(o => o.status === 'pending').length;
    const preparing = orders.filter(o => o.status === 'preparing').length;
    const ready = orders.filter(o => o.status === 'ready').length;
    const revenue = orders.reduce((sum, o) => sum + o.total, 0);

    DOM.statPending.textContent = pending;
    DOM.statPreparing.textContent = preparing;
    DOM.statReady.textContent = ready;
    DOM.statRevenue.textContent = `${revenue.toFixed(2)} €`;
}

// ===== IMPRESSION TICKET =====
function printOrder(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;

    const time = new Date(order.created_at).toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit'
    });

    const date = new Date(order.created_at).toLocaleDateString('fr-FR');

    const itemsHtml = order.items.map(item => {
        const options = Object.values(item.options || {}).filter(v => v).join(', ');
        const price = (item.price * item.qty).toFixed(2);
        return `
            <div class="print-item">
                <span>${item.qty}x ${item.name}</span>
                <span>${price} €</span>
            </div>
            ${options ? `<div class="print-item-options">${item.format === 'menu' ? 'Menu' : 'Seul'} - ${options}</div>` : `<div class="print-item-options">${item.format === 'menu' ? 'Menu' : 'Seul'}</div>`}
        `;
    }).join('');

    DOM.printArea.innerHTML = `
        <div class="print-header">
            <h1>NAN BURGER</h1>
            <p>100% HALAL</p>
            <p>${date} - ${time}</p>
        </div>

        <div class="print-order-num">
            ${order.order_number}
        </div>

        <div class="print-customer">
            <strong>${order.customer_name || 'Client'}</strong><br>
            ${order.customer_phone ? `Tel: ${order.customer_phone}` : ''}
        </div>

        <div class="print-items">
            ${itemsHtml}
        </div>

        <div class="print-total">
            <span>TOTAL</span>
            <span>${order.total.toFixed(2)} €</span>
        </div>

        <div class="print-footer">
            <p>Merci de votre visite!</p>
            <p>À bientôt chez NAN BURGER</p>
        </div>
    `;

    window.print();
}
