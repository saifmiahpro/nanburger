// ===== POS SYSTEM - NAN BURGER =====

const API_URL = window.location.origin;

// Menu Data (same as client app)
const menuData = {
    burgers: {
        title: 'Smash Burgers', icon: '🍔',
        items: [
            { id: 'cheese', name: 'Cheese Burger', icon: '🍔', menu: 7.50, seul: 5.50, options: ['Sauce'] },
            { id: 'potatoes', name: 'Potatoes Burger', icon: '🍔', menu: 7.50, seul: 5.50, options: ['Sauce'] },
            { id: 'fish', name: 'Fish Burger', icon: '🍔', menu: 7.50, seul: 5.50, options: ['Sauce'] },
            { id: 'chicken', name: 'Chicken Burger', icon: '🍔', menu: 8.00, seul: 6.00, options: ['Sauce'] },
            { id: 'double', name: 'Double Cheese', icon: '🍔', menu: 11.50, seul: 9.50, options: ['Sauce', 'Sauce 2'] },
            { id: 'chicken-country', name: 'Chicken Country', icon: '🍔', menu: 11.50, seul: 9.50, options: ['Sauce'] },
            { id: 'triple', name: 'Triple Cheese', icon: '🍔', menu: 13.50, seul: 11.50, options: ['Sauce', 'Sauce 2'] },
            { id: 'super', name: 'Super Burger', icon: '🍔', menu: 13.50, seul: 11.50, options: ['Sauce', 'Sauce 2'] }
        ]
    },
    naans: {
        title: 'Naan Burgers', icon: '🫓',
        items: [
            { id: 'naan-simple', name: 'Naan Burger', icon: '🫓', menu: 11.50, seul: 9.00, options: ['Viande', 'Sauce'] },
            { id: 'naan-double', name: 'Naan Double', icon: '🫓', menu: 13.50, seul: 11.00, options: ['Viande', 'Sauce', 'Sauce 2'] },
            { id: 'naan-triple', name: 'Naan Triple', icon: '🫓', menu: 15.00, seul: 13.00, options: ['Viande', 'Sauce', 'Sauce 2'] }
        ]
    },
    tacos: {
        title: 'Tacos', icon: '🌯',
        items: [
            { id: 'tacos-simple', name: 'Tacos Simple', icon: '🌯', menu: 9.00, seul: 7.00, options: ['Viande', 'Sauce'] },
            { id: 'tacos-maxi', name: 'Tacos Maxi', icon: '🌯', menu: 14.00, seul: 11.50, options: ['Viande', 'Viande 2', 'Sauce', 'Sauce 2'] },
            { id: 'tacos-gratine', name: 'Supplément Gratiné', icon: '🧀', menu: 3.00, seul: 3.00 }
        ]
    },
    sandwichs: {
        title: 'Sandwichs', icon: '🥙',
        items: [
            { id: 'naan-indien', name: 'Naan Indien', icon: '🫓', menu: 9.00, seul: 7.00, options: ['Naan', 'Viande', 'Sauce'] },
            { id: 'galette', name: 'Galette', icon: '🌯', menu: 9.00, seul: 7.00, options: ['Viande', 'Sauce'] },
            { id: 'wrap', name: 'Wrap', icon: '🌯', menu: 9.00, seul: 7.00, options: ['Viande', 'Sauce'] },
            { id: 'pain', name: 'Pain Classique', icon: '🥖', menu: 9.00, seul: 7.00, options: ['Viande', 'Sauce'] }
        ]
    },
    paninis: {
        title: 'Paninis', icon: '🥪',
        items: [
            { id: 'panini-americain', name: 'Panini Américain', icon: '🥪', menu: 10.00, seul: 8.50, options: ['Viande', 'Sauce'] },
            { id: 'panini-viande', name: 'Panini Viande', icon: '🥪', menu: 9.00, seul: 7.00, options: ['Viande', 'Sauce'] },
            { id: 'panini-3fromages', name: 'Panini 3 Fromages', icon: '🧀', menu: 9.00, seul: 7.00, options: ['Sauce'] },
            { id: 'panini-nutella', name: 'Panini Nutella', icon: '🍫', menu: 4.00, seul: 4.00 }
        ]
    },
    buckets: {
        title: 'Buckets', icon: '🍗',
        items: [
            { id: 'menu-tenders', name: 'Menu 8 Tenders', icon: '🍗', menu: 11.50, seul: 11.50, options: ['Sauce'] },
            { id: 'menu-wings', name: 'Menu 8 Wings', icon: '🍗', menu: 10.00, seul: 10.00, options: ['Sauce'] },
            { id: 'bucket-two', name: 'Bucket Two', icon: '🪣', menu: 20.00, seul: 20.00, options: ['Bucket'] },
            { id: 'bucket-family', name: 'Bucket Family', icon: '🪣', menu: 35.00, seul: 35.00, options: ['Bucket'] },
            { id: 'bucket-team', name: 'Bucket Team', icon: '🪣', menu: 50.00, seul: 50.00 },
            { id: 'menu-enfant', name: 'Menu Enfant', icon: '👶', menu: 7.00, seul: 7.00, options: ['Enfant'] }
        ]
    },
    texmex: {
        title: 'Tex-Mex', icon: '🥟',
        items: [
            { id: 'pomme-noisette', name: 'Pomme Noisette x10', icon: '🥔', menu: 4.00, seul: 4.00 },
            { id: 'falafel-6', name: 'Falafel x6', icon: '🧆', menu: 5.90, seul: 5.90, options: ['Sauce'] },
            { id: 'falafel-12', name: 'Falafel x12', icon: '🧆', menu: 11.00, seul: 11.00, options: ['Sauce'] },
            { id: 'samoussa-3', name: 'Samoussa x3', icon: '🥟', menu: 5.00, seul: 5.00, options: ['Sauce'] },
            { id: 'samoussa-6', name: 'Samoussa x6', icon: '🥟', menu: 9.00, seul: 9.00, options: ['Sauce'] },
            { id: 'nuggets-6', name: 'Nuggets x6', icon: '🍗', menu: 5.00, seul: 5.00, options: ['Sauce'] },
            { id: 'nuggets-10', name: 'Nuggets x10', icon: '🍗', menu: 9.00, seul: 9.00, options: ['Sauce'] },
            { id: 'nems-3', name: 'Nems x3', icon: '🥟', menu: 3.50, seul: 3.50, options: ['Sauce'] },
            { id: 'nems-6', name: 'Nems x6', icon: '🥟', menu: 6.00, seul: 6.00, options: ['Sauce'] },
            { id: 'wings-3', name: 'Wings x3', icon: '🍗', menu: 3.50, seul: 3.50, options: ['Sauce'] },
            { id: 'wings-6', name: 'Wings x6', icon: '🍗', menu: 5.50, seul: 5.50, options: ['Sauce'] },
            { id: 'wings-12', name: 'Wings x12', icon: '🍗', menu: 10.00, seul: 10.00, options: ['Sauce'] },
            { id: 'tenders-3', name: 'Tenders x3', icon: '🍗', menu: 3.90, seul: 3.90, options: ['Sauce'] },
            { id: 'tenders-6', name: 'Tenders x6', icon: '🍗', menu: 6.50, seul: 6.50, options: ['Sauce'] },
            { id: 'tenders-12', name: 'Tenders x12', icon: '🍗', menu: 12.00, seul: 12.00, options: ['Sauce'] },
            { id: 'naan-nature', name: 'Naan Nature', icon: '🫓', menu: 2.00, seul: 2.00 },
            { id: 'naan-fromage', name: 'Naan Fromage', icon: '🧀', menu: 3.00, seul: 3.00 }
        ]
    },
    assiettes: {
        title: 'Assiettes', icon: '🍛',
        items: [
            { id: 'assiette-simple', name: 'Assiette Simple', icon: '🍛', menu: 14.00, seul: 12.00, options: ['Viande', 'Accomp', 'Naan', 'Sauce'] },
            { id: 'assiette-mixte', name: 'Assiette Mixte', icon: '🍛', menu: 18.00, seul: 16.00, options: ['Viande', 'Viande 2', 'Viande 3', 'Accomp', 'Naan', 'Sauce'] }
        ]
    },
    bowls: {
        title: 'Bowls', icon: '🥗',
        items: [
            { id: 'bowl', name: 'Bowl', icon: '🥗', menu: 10.00, seul: 10.00, options: ['Viande', 'Sauce'] },
            { id: 'crousty-tenders', name: 'Crousty Tenders', icon: '🥗', menu: 10.00, seul: 10.00 },
            { id: 'crousty-curry', name: 'Crousty Curry', icon: '🥗', menu: 10.00, seul: 10.00 },
            { id: 'crousty-tikka', name: 'Crousty Tikka', icon: '🥗', menu: 10.00, seul: 10.00 },
            { id: 'crousty-viande', name: 'Crousty Viande', icon: '🥗', menu: 10.00, seul: 10.00 },
            { id: 'riz', name: 'Riz Parfumé', icon: '🍚', menu: 4.00, seul: 4.00 }
        ]
    },
    sides: {
        title: 'Extras', icon: '🍟',
        items: [
            { id: 'frites-p', name: 'Frites P', icon: '🍟', menu: 2.50, seul: 2.50, options: ['Sauce'] },
            { id: 'frites-g', name: 'Frites G', icon: '🍟', menu: 4.00, seul: 4.00, options: ['Sauce'] },
            { id: 'frites-cheddar', name: 'Frites Cheddar', icon: '🧀', menu: 6.00, seul: 6.00, options: ['Sauce'] },
            { id: 'salade', name: 'Salade César', icon: '🥗', menu: 8.00, seul: 8.00 },
            { id: 'tiramisu', name: 'Tiramisu', icon: '🍰', menu: 3.50, seul: 3.50 },
            { id: 'tarte-daim', name: 'Tarte Daim', icon: '🥧', menu: 3.50, seul: 3.50 }
        ]
    },
    boissons: {
        title: 'Boissons', icon: '🥤',
        items: [
            { id: 'canette', name: 'Canette 33cl', icon: '🥤', menu: 2.00, seul: 2.00, options: ['Boisson'] },
            { id: 'bouteille-50', name: 'Bouteille 50cl', icon: '🥤', menu: 3.00, seul: 3.00, options: ['Boisson'] },
            { id: 'bouteille-125', name: 'Bouteille 1.25L', icon: '🥤', menu: 4.50, seul: 4.50, options: ['Boisson'] },
            { id: 'eau-50', name: 'Eau 50cl', icon: '💧', menu: 1.80, seul: 1.80 },
            { id: 'eau-150', name: 'Eau 1.5L', icon: '💧', menu: 2.80, seul: 2.80 },
            { id: 'redbull', name: 'Red Bull', icon: '⚡', menu: 3.00, seul: 3.00 }
        ]
    },
    supplements: {
        title: 'Suppléments', icon: '➕',
        items: [
            { id: 'supp-cheddar', name: '+Cheddar', icon: '🧀', menu: 1.00, seul: 1.00 },
            { id: 'supp-chevre', name: '+Chèvre', icon: '🧀', menu: 1.00, seul: 1.00 },
            { id: 'supp-kiri', name: '+Vache Kiri', icon: '🧀', menu: 1.50, seul: 1.50 },
            { id: 'supp-emmental', name: '+Emmental', icon: '🧀', menu: 1.00, seul: 1.00 },
            { id: 'supp-oeuf', name: '+Oeuf', icon: '🍳', menu: 2.00, seul: 2.00 },
            { id: 'supp-steak', name: '+Steak', icon: '🥩', menu: 2.50, seul: 2.50 },
            { id: 'supp-viande', name: '+Viande', icon: '🍖', menu: 2.50, seul: 2.50 },
            { id: 'supp-frites', name: '+Frites', icon: '🍟', menu: 3.00, seul: 3.00 },
            { id: 'supp-gde-frites', name: '+Gde Frites', icon: '🍟', menu: 5.00, seul: 5.00 }
        ]
    }
};

const optionChoices = {
    'Viande': ['Kebab', 'Kefta', 'Tenders', 'Poulet Tikka', 'Poulet Curry', 'Steak Haché', 'Merguez', 'Cordon Bleu', 'Falafel'],
    'Viande 2': ['Kebab', 'Kefta', 'Tenders', 'Poulet Tikka', 'Poulet Curry', 'Steak Haché', 'Merguez', 'Cordon Bleu', 'Falafel'],
    'Viande 3': ['Kebab', 'Kefta', 'Tenders', 'Poulet Tikka', 'Poulet Curry', 'Steak Haché', 'Merguez', 'Cordon Bleu', 'Falafel'],
    'Sauce': ['Pas de sauce', 'Ketchup', 'Mayo', 'Algérienne', 'Samouraï', 'Biggy', 'Barbecue', 'Curry', 'Blanche', 'Harissa', 'Andalouse'],
    'Sauce 2': ['Pas de sauce', 'Ketchup', 'Mayo', 'Algérienne', 'Samouraï', 'Biggy', 'Barbecue', 'Curry', 'Blanche', 'Harissa', 'Andalouse'],
    'Naan': ['Nature', 'Fromage'],
    'Accomp': ['Frites', 'Riz Parfumé'],
    'Boisson': ['Coca-Cola', 'Coca Zero', 'Fanta', 'Sprite', 'Ice Tea', 'Orangina', 'Eau'],
    'Bucket': ['Wings', 'Tenders', 'Mixte (Wings + Tenders)'],
    'Enfant': ['Burger', 'Nuggets x6']
};

// State
let currentOrder = [];
let webOrders = [];
let orderMode = 'surplace'; // 'surplace' or 'emporter'
let orderCounter = 1;
let selectedProduct = null;
let selectedFormat = 'menu';
let selectedQty = 1;
let selectedOptions = {};
let eventSource = null;

// DOM Elements
const DOM = {
    posCategories: document.getElementById('posCategories'),
    posProducts: document.getElementById('posProducts'),
    orderItems: document.getElementById('orderItems'),
    orderEmpty: document.getElementById('orderEmpty'),
    orderTotal: document.getElementById('orderTotal'),
    currentPanel: document.getElementById('currentPanel'),
    webPanel: document.getElementById('webPanel'),
    webOrders: document.getElementById('webOrders'),
    webBadge: document.getElementById('webBadge'),
    optionsModal: document.getElementById('optionsModal'),
    optionsTitle: document.getElementById('optionsTitle'),
    optionsBody: document.getElementById('optionsBody'),
    optQtyValue: document.getElementById('optQtyValue'),
    optPrice: document.getElementById('optPrice'),
    paymentModal: document.getElementById('paymentModal'),
    paymentClose: document.getElementById('paymentClose'),
    paymentMessage: document.getElementById('paymentMessage'),
    printArea: document.getElementById('printArea'),
    statusDot: document.getElementById('statusDot'),
    statusText: document.getElementById('statusText')
};

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('burgers');
    setupEvents();
    connectSSE();
    loadWebOrders();
    loadOrderCounter();
});

// ===== EVENTS SETUP =====
function setupEvents() {
    // Category tabs
    DOM.posCategories.addEventListener('click', (e) => {
        const tab = e.target.closest('.cat-tab');
        if (tab) {
            document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderProducts(tab.dataset.cat);
        }
    });

    // Order mode toggle
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            orderMode = btn.dataset.mode;
            broadcastOrderUpdate();
        });
    });

    // Right tabs
    document.querySelectorAll('.right-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.right-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.right-panel').forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab + 'Panel').classList.add('active');
        });
    });

    // Order actions
    document.getElementById('cancelOrder').addEventListener('click', cancelOrder);
    document.getElementById('printOrder').addEventListener('click', () => printCurrentOrder());
    document.getElementById('validateOrder').addEventListener('click', validateOrder);

    // Options modal
    document.getElementById('optionsClose').addEventListener('click', closeOptionsModal);
    document.getElementById('optionsModal').addEventListener('click', (e) => {
        if (e.target === DOM.optionsModal) closeOptionsModal();
    });

    // Payment modal
    DOM.paymentClose.addEventListener('click', closePaymentModal);
    DOM.paymentModal.addEventListener('click', (e) => {
        if (e.target === DOM.paymentModal) closePaymentModal();
    });

    document.querySelectorAll('.format-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.format-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedFormat = btn.dataset.format;
            updateOptionPrice();
        });
    });

    document.getElementById('optQtyMinus').addEventListener('click', () => {
        if (selectedQty > 1) {
            selectedQty--;
            DOM.optQtyValue.textContent = selectedQty;
            updateOptionPrice();
        }
    });

    document.getElementById('optQtyPlus').addEventListener('click', () => {
        selectedQty++;
        DOM.optQtyValue.textContent = selectedQty;
        updateOptionPrice();
    });

    document.getElementById('optionsAdd').addEventListener('click', addProductToOrder);
}

// ===== RENDER PRODUCTS =====
function renderProducts(category) {
    const cat = menuData[category];
    if (!cat) return;

    DOM.posProducts.innerHTML = cat.items.map(item => `
        <button class="product-btn" data-id="${item.id}" data-cat="${category}">
            <span class="icon">${item.icon}</span>
            <span class="name">${item.name}</span>
            <span class="price">${item.menu.toFixed(2)} €</span>
        </button>
    `).join('');

    // Click events
    DOM.posProducts.querySelectorAll('.product-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const cat = btn.dataset.cat;
            const id = btn.dataset.id;
            const item = menuData[cat].items.find(i => i.id === id);
            if (item) selectProduct(item, cat);
        });
    });
}

// ===== SELECT PRODUCT =====
function selectProduct(item, category) {
    selectedProduct = { ...item, category };
    selectedFormat = 'menu';
    selectedQty = 1;
    selectedOptions = {};

    // If no options, add directly
    if (!item.options || item.options.length === 0) {
        addProductToOrder();
        return;
    }

    // Show options modal
    DOM.optionsTitle.textContent = item.name;
    DOM.optionsBody.innerHTML = item.options.map(opt => {
        const choices = optionChoices[opt] || ['Option 1', 'Option 2'];
        selectedOptions[opt] = choices[0];
        return `
            <div class="option-group">
                <label class="option-label">${opt}</label>
                <div class="option-chips">
                    ${choices.map((choice, idx) => `
                        <button class="option-chip ${idx === 0 ? 'selected' : ''}" data-opt="${opt}" data-val="${choice}">
                            ${choice}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');

    // Option chip events
    DOM.optionsBody.querySelectorAll('.option-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const opt = chip.dataset.opt;
            chip.parentElement.querySelectorAll('.option-chip').forEach(c => c.classList.remove('selected'));
            chip.classList.add('selected');
            selectedOptions[opt] = chip.dataset.val;
        });
    });

    // Reset format buttons
    document.querySelectorAll('.format-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.format-btn[data-format="menu"]').classList.add('active');
    DOM.optQtyValue.textContent = '1';

    updateOptionPrice();
    DOM.optionsModal.classList.add('active');
}

function updateOptionPrice() {
    if (!selectedProduct) return;
    const price = selectedFormat === 'menu' ? selectedProduct.menu : selectedProduct.seul;
    DOM.optPrice.textContent = (price * selectedQty).toFixed(2) + ' €';
}

function closeOptionsModal() {
    DOM.optionsModal.classList.remove('active');
    selectedProduct = null;
}

// ===== ORDER MANAGEMENT =====
function addProductToOrder() {
    if (!selectedProduct) return;

    const price = selectedFormat === 'menu' ? selectedProduct.menu : selectedProduct.seul;

    const orderItem = {
        id: Date.now(),
        productId: selectedProduct.id,
        name: selectedProduct.name,
        icon: selectedProduct.icon,
        price: price,
        qty: selectedQty,
        format: selectedFormat,
        options: { ...selectedOptions }
    };

    currentOrder.push(orderItem);
    renderCurrentOrder();
    closeOptionsModal();
    broadcastOrderUpdate();
}

function renderCurrentOrder() {
    if (currentOrder.length === 0) {
        DOM.orderEmpty.classList.remove('hidden');
        DOM.orderItems.innerHTML = '';
        DOM.orderTotal.textContent = '0.00 €';
        return;
    }

    DOM.orderEmpty.classList.add('hidden');

    DOM.orderItems.innerHTML = currentOrder.map(item => {
        const optStr = Object.values(item.options).filter(v => v).join(', ');
        return `
            <div class="order-item" data-id="${item.id}">
                <span class="item-icon">${item.icon}</span>
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    <div class="item-details">${item.format === 'menu' ? 'Menu' : 'Seul'}${optStr ? ' • ' + optStr : ''}</div>
                </div>
                <div class="item-qty">
                    <button onclick="updateItemQty(${item.id}, -1)">−</button>
                    <span>${item.qty}</span>
                    <button onclick="updateItemQty(${item.id}, 1)">+</button>
                </div>
                <span class="item-price">${(item.price * item.qty).toFixed(2)} €</span>
            </div>
        `;
    }).join('');

    const total = currentOrder.reduce((sum, item) => sum + (item.price * item.qty), 0);
    DOM.orderTotal.textContent = total.toFixed(2) + ' €';
}

function updateItemQty(itemId, delta) {
    const item = currentOrder.find(i => i.id === itemId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        currentOrder = currentOrder.filter(i => i.id !== itemId);
    }

    renderCurrentOrder();
    broadcastOrderUpdate();
}

function cancelOrder() {
    if (currentOrder.length === 0) return;
    if (confirm('Annuler la commande en cours ?')) {
        currentOrder = [];
        renderCurrentOrder();
        broadcastOrderUpdate();
    }
}

async function validateOrder() {
    if (currentOrder.length === 0) {
        alert('Aucun article dans la commande');
        return;
    }

    const total = currentOrder.reduce((sum, item) => sum + (item.price * item.qty), 0);
    pendingCallback = null;
    pendingOrderId = null;

    DOM.paymentMessage.textContent = `Total à régler : ${total.toFixed(2)} €`;
    DOM.paymentModal.classList.add('active');
}

let pendingCallback = null;
let pendingOrderId = null;

function closePaymentModal() {
    DOM.paymentModal.classList.remove('active');
    pendingCallback = null;
    pendingOrderId = null;
}

async function submitOrderWithPayment(paymentMethod) {
    if (pendingCallback) {
        // This is a web order completion
        pendingCallback(paymentMethod);
        closePaymentModal();
        return;
    }

    if (currentOrder.length === 0) return;

    const total = currentOrder.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const orderNumber = generateOrderNumber();

    // Save order to database
    try {
        await fetch(`${API_URL}/api/orders.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                customer_name: orderMode === 'surplace' ? 'Sur place' : 'À emporter',
                customer_phone: '',
                items: currentOrder,
                total: total,
                order_type: orderMode,
                payment_method: paymentMethod,
                status: 'done'
            })
        });
    } catch (e) {
        console.error('Error saving order:', e);
    }

    // Print ticket
    printTicket(orderNumber, currentOrder, total, orderMode, paymentMethod);

    // Reset
    currentOrder = [];
    renderCurrentOrder();
    broadcastOrderUpdate();
    closePaymentModal();

    // Increment counter
    orderCounter++;
    saveOrderCounter();
}

function generateOrderNumber() {
    const num = orderCounter.toString().padStart(3, '0');
    return `#${num}`;
}

function loadOrderCounter() {
    const saved = localStorage.getItem('nanburger_order_counter');
    const savedDate = localStorage.getItem('nanburger_order_date');
    const today = new Date().toDateString();

    if (savedDate === today && saved) {
        orderCounter = parseInt(saved);
    } else {
        orderCounter = 1;
        localStorage.setItem('nanburger_order_date', today);
    }
}

function saveOrderCounter() {
    localStorage.setItem('nanburger_order_counter', orderCounter);
    localStorage.setItem('nanburger_order_date', new Date().toDateString());
}

// ===== PRINTING =====
function printTicket(orderNum, items, total, mode, paymentMethod) {
    const now = new Date();
    const time = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    const date = now.toLocaleDateString('fr-FR');

    // TVA calculation (10% for restaurant)
    const tvaRate = 10;
    const totalHT = total / (1 + tvaRate / 100);
    const tvaAmount = total - totalHT;

    const itemsHtml = items.map(item => {
        const optStr = Object.values(item.options || {}).filter(v => v).join(', ');
        return `
            <tr>
                <td style="text-align:left;">${item.qty}x ${item.name}</td>
                <td style="text-align:right;">${(item.price * item.qty).toFixed(2)}€</td>
            </tr>
            <tr>
                <td colspan="2" style="font-size:10px;color:#555;padding-left:10px;">${item.format === 'menu' ? 'Menu' : 'Seul'}${optStr ? ' - ' + optStr : ''}</td>
            </tr>
        `;
    }).join('');

    // Créer une fenêtre popup pour l'impression
    const printWindow = window.open('', 'PRINT', 'width=400,height=600');

    printWindow.document.write(`
<!DOCTYPE html>
<html>
<head>
    <title>Ticket ${orderNum}</title>
    <style>
        * { font-weight: bold !important; }
        body {
            font-family: 'Courier New', monospace;
            font-size: 20px;
            width: 72mm;
            margin: 0;
            padding: 8px;
            background: white;
            color: black;
            font-weight: bold;
        }
        .header { text-align: center; border-bottom: 2px dashed black; padding-bottom: 10px; margin-bottom: 10px; }
        h1 { font-size: 32px; margin: 0 0 5px 0; }
        .info { font-size: 18px; margin: 5px 0; }
        .mode { display: inline-block; border: 2px solid black; padding: 8px 14px; margin: 8px 0; font-size: 22px; }
        .order-num { text-align: center; font-size: 56px; border: 3px solid black; padding: 14px; margin: 14px 0; }
        table { width: 100%; border-collapse: collapse; }
        td { padding: 8px 2px; font-size: 20px; }
        .total { border-top: 3px solid black; padding-top: 14px; margin-top: 14px; font-size: 28px; display: flex; justify-content: space-between; }
        .tva { text-align: center; font-size: 18px; margin-top: 12px; }
        .footer { text-align: center; border-top: 2px dashed black; padding-top: 12px; margin-top: 14px; font-size: 18px; }
        @page { size: 80mm auto; margin: 0; }
    </style>
</head>
<body>
    <div class="header">
        <h1>NAN.BURGER</h1>
        <div class="info">100% HALAL</div>
        <div class="info">CC L'Oree du Village</div>
        <div class="info">31620 Castelnau</div>
        <div class="info">SIRET: 995 176 310 00010</div>
        <div style="margin-top:8px;font-size:16px">${date} - ${time}</div>
        <div class="mode">${mode === 'surplace' ? 'SUR PLACE' : 'A EMPORTER'}</div>
        ${paymentMethod ? `<div class="mode">${paymentMethod}</div>` : ''}
    </div>

    <div class="order-num">${orderNum}</div>

    <table>${itemsHtml}</table>

    <div class="total">
        <span>TOTAL</span>
        <span>${total.toFixed(2)} EUR</span>
    </div>

    <div class="tva">HT: ${totalHT.toFixed(2)} | TVA ${tvaRate}%: ${tvaAmount.toFixed(2)}</div>

    <div class="footer">
        <p>Merci de votre visite!</p>
        <p style="margin-top:15px">- - - - - - - - - -</p>
    </div>
</body>
</html>
    `);

    printWindow.document.close();

    // Attendre que le contenu soit chargé puis imprimer
    printWindow.onload = function() {
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    };

    // Fallback si onload ne se déclenche pas
    setTimeout(() => {
        if (!printWindow.closed) {
            printWindow.focus();
            printWindow.print();
            printWindow.close();
        }
    }, 500);
}

function printCurrentOrder() {
    if (currentOrder.length === 0) return;
    const total = currentOrder.reduce((sum, item) => sum + (item.price * item.qty), 0);
    printTicket(generateOrderNumber(), currentOrder, total, orderMode, null);
}

// ===== WEB ORDERS =====
async function loadWebOrders() {
    try {
        const res = await fetch(`${API_URL}/api/orders.php?status=pending`);
        const orders = await res.json();
        webOrders = Array.isArray(orders) ? orders : [];
        renderWebOrders();
    } catch (e) {
        console.error('Error loading orders:', e);
    }
}

function renderWebOrders() {
    const pending = webOrders.filter(o => o.customer_name !== 'Sur place' && o.customer_name !== 'À emporter');

    DOM.webBadge.textContent = pending.length;
    DOM.webBadge.style.display = pending.length > 0 ? 'inline-flex' : 'none';

    if (pending.length === 0) {
        DOM.webOrders.innerHTML = `
            <div class="order-empty">
                <span>📭</span>
                <p>Aucune commande web en attente</p>
            </div>
        `;
        return;
    }

    DOM.webOrders.innerHTML = pending.map(order => {
        const time = new Date(order.created_at).toLocaleTimeString('fr-FR', {
            hour: '2-digit', minute: '2-digit'
        });

        const itemsHtml = order.items.map(item =>
            `<div class="web-order-item">${item.qty}x ${item.name}</div>`
        ).join('');

        return `
            <div class="web-order-card" data-id="${order.id}">
                <div class="web-order-header">
                    <span class="web-order-num">${order.order_number}</span>
                    <span class="web-order-time">${time}</span>
                </div>
                <div class="web-order-customer">
                    <strong>${order.customer_name}</strong>
                    ${order.customer_phone ? `<br>📞 ${order.customer_phone}` : ''}
                </div>
                <div class="web-order-items">${itemsHtml}</div>
                <div class="web-order-total">
                    <span>Total</span>
                    <span>${order.total.toFixed(2)} €</span>
                </div>
                <div class="web-order-actions">
                    <button class="btn-print" onclick="printWebOrder(${order.id})">🖨️ Imprimer</button>
                    <button class="btn-done" onclick="markWebOrderDone(${order.id})">✅ Terminée</button>
                </div>
            </div>
        `;
    }).join('');
}

async function printWebOrder(orderId) {
    const order = webOrders.find(o => o.id === orderId);
    if (!order) return;

    const time = new Date(order.created_at).toLocaleTimeString('fr-FR', {
        hour: '2-digit', minute: '2-digit'
    });
    const date = new Date(order.created_at).toLocaleDateString('fr-FR');

    const itemsHtml = order.items.map(item => {
        const optStr = Object.values(item.options || {}).filter(v => v).join(', ');
        return `
            <tr>
                <td>${item.qty}x ${item.name}</td>
                <td style="text-align:right">${(item.price * item.qty).toFixed(2)}€</td>
            </tr>
            ${optStr ? `<tr><td colspan="2" style="font-size:11px;padding-left:8px">${item.format === 'menu' ? 'Menu' : 'Seul'} - ${optStr}</td></tr>` : ''}
        `;
    }).join('');

    // TVA calculation
    const tvaRate = 10;
    const totalHT = order.total / (1 + tvaRate / 100);
    const tvaAmount = order.total - totalHT;

    // Utiliser fenêtre popup pour impression
    const printWindow = window.open('', 'PRINT', 'width=400,height=600');

    printWindow.document.write(`
<!DOCTYPE html>
<html>
<head>
    <title>Web ${order.order_number}</title>
    <style>
        * { font-weight: bold !important; }
        body {
            font-family: 'Courier New', monospace;
            font-size: 20px;
            width: 72mm;
            margin: 0;
            padding: 8px;
            background: white;
            color: black;
            font-weight: bold;
        }
        .header { text-align: center; border-bottom: 2px dashed black; padding-bottom: 10px; margin-bottom: 10px; }
        h1 { font-size: 32px; margin: 0 0 5px 0; }
        .info { font-size: 18px; margin: 5px 0; }
        .mode { display: inline-block; background: black; color: white; padding: 8px 14px; margin: 8px 0; font-size: 22px; }
        .order-num { text-align: center; font-size: 56px; border: 3px solid black; padding: 14px; margin: 14px 0; }
        .customer { background: #ddd; padding: 12px; margin: 12px 0; font-size: 22px; text-align: center; }
        table { width: 100%; border-collapse: collapse; }
        td { padding: 8px 2px; font-size: 20px; }
        .total { border-top: 3px solid black; padding-top: 14px; margin-top: 14px; font-size: 28px; display: flex; justify-content: space-between; }
        .tva { text-align: center; font-size: 18px; margin-top: 12px; }
        .footer { text-align: center; border-top: 2px dashed black; padding-top: 12px; margin-top: 14px; font-size: 18px; }
        .pickup { background: #000; color: white; padding: 12px; margin: 12px 0; text-align: center; font-size: 24px; }
        @page { size: 80mm auto; margin: 0; }
    </style>
</head>
<body>
    <div class="header">
        <h1>NAN.BURGER</h1>
        <div class="info">100% HALAL</div>
        <div class="info">CC L'Oree du Village</div>
        <div class="info">31620 Castelnau</div>
        <div style="margin-top:8px;font-size:16px">${date} - ${time}</div>
        <div class="mode">COMMANDE WEB</div>
    </div>

    <div class="order-num">${order.order_number}</div>

    <div class="customer">
        ${order.customer_name}
        ${order.customer_phone ? `<br>Tel: ${order.customer_phone}` : ''}
    </div>

    ${order.pickup_time ? `<div class="pickup">RETRAIT: ${order.pickup_time}</div>` : ''}

    <table>${itemsHtml}</table>

    <div class="total">
        <span>TOTAL</span>
        <span>${order.total.toFixed(2)} EUR</span>
    </div>

    <div class="tva">HT: ${totalHT.toFixed(2)} | TVA ${tvaRate}%: ${tvaAmount.toFixed(2)}</div>

    <div class="footer">
        <p>Merci!</p>
        <p style="margin-top:15px">- - - - - - - - - -</p>
    </div>
</body>
</html>
    `);

    printWindow.document.close();
    setTimeout(() => {
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    }, 300);
}

async function markWebOrderDone(orderId) {
    const order = webOrders.find(o => o.id === orderId);
    if (!order) return;

    pendingOrderId = orderId;
    DOM.paymentMessage.textContent = `Commande Web #${order.order_number} - Total : ${order.total.toFixed(2)} €`;

    pendingCallback = async (paymentMethod) => {
        try {
            await fetch(`${API_URL}/api/orders.php?id=${orderId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: 'done', payment_method: paymentMethod })
            });
            webOrders = webOrders.filter(o => o.id !== orderId);
            renderWebOrders();
        } catch (e) {
            console.error('Error:', e);
        }
    };

    DOM.paymentModal.classList.add('active');
}

// ===== POLLING CONNECTION (PHP Compatible) =====
let lastEventId = 0;
let pollInterval = null;

function connectSSE() {
    // Use polling instead of SSE for PHP compatibility
    DOM.statusDot.classList.add('connected');
    DOM.statusText.textContent = 'Connecté';

    // Poll every 3 seconds for new orders
    pollInterval = setInterval(pollForUpdates, 3000);
    pollForUpdates(); // Initial poll
}

async function pollForUpdates() {
    try {
        const res = await fetch(`${API_URL}/api/events.php?poll=1&since=${lastEventId}`);
        const data = await res.json();

        if (data.events && data.events.length > 0) {
            data.events.forEach(event => {
                if (event.type === 'new_order') {
                    // Reload web orders when new order arrives
                    loadWebOrders();
                    playNotification();
                }
                if (event.type === 'order_updated') {
                    loadWebOrders();
                }
            });
            lastEventId = data.lastId;
        }

        DOM.statusDot.classList.add('connected');
        DOM.statusText.textContent = 'Connecté';
    } catch (e) {
        DOM.statusDot.classList.remove('connected');
        DOM.statusText.textContent = 'Déconnecté';
    }
}

function playNotification() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        [880, 988, 1047, 1047, 880, 1047].forEach((freq, i) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.frequency.value = freq;
            osc.type = 'square';
            gain.gain.setValueAtTime(0.5, audioCtx.currentTime + i * 0.15);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + i * 0.15 + 0.1);
            osc.start(audioCtx.currentTime + i * 0.15);
            osc.stop(audioCtx.currentTime + i * 0.15 + 0.1);
        });
    } catch (e) { }
}

// ===== BROADCAST TO CLIENT DISPLAY =====
function broadcastOrderUpdate() {
    const total = currentOrder.reduce((sum, item) => sum + (item.price * item.qty), 0);

    // Use BroadcastChannel to sync with client display
    if (window.BroadcastChannel) {
        const channel = new BroadcastChannel('nanburger_pos');
        channel.postMessage({
            type: 'order_update',
            items: currentOrder,
            total: total,
            mode: orderMode
        });
    }

    // Also store in localStorage for displays that don't support BroadcastChannel
    localStorage.setItem('nanburger_current_order', JSON.stringify({
        items: currentOrder,
        total: total,
        mode: orderMode,
        timestamp: Date.now()
    }));
}

// Make functions global for onclick handlers
window.updateItemQty = updateItemQty;
window.printWebOrder = printWebOrder;
window.markWebOrderDone = markWebOrderDone;
window.submitOrderWithPayment = submitOrderWithPayment;
