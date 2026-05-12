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
            { id: 'bowl', name: 'Bowl', icon: '🥗', menu: 9.90, seul: 9.90, options: ['Viande', 'Sauce'] },
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
let allTodayOrders = [];
let allOrdersSearchTerm = '';
let orderMode = 'surplace'; // 'surplace' or 'emporter'
let orderCounter = 1;
let selectedProduct = null;
let selectedFormat = 'menu';
let selectedQty = 1;
let selectedOptions = {};
let eventSource = null;

// Mode édition d'une commande existante
let editingOrderId = null;        // ID de la commande en cours d'édition (null = nouvelle commande)
let editingOrderNumber = null;    // N° pour affichage dans le banner
let editingOriginalOrder = null;  // Sauvegarde pour annulation

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
    allOrders: document.getElementById('allOrders'),
    allOrdersSearch: document.getElementById('allOrdersSearch'),
    allOrdersRefresh: document.getElementById('allOrdersRefresh'),
    optionsModal: document.getElementById('optionsModal'),
    optionsTitle: document.getElementById('optionsTitle'),
    optionsBody: document.getElementById('optionsBody'),
    optQtyValue: document.getElementById('optQtyValue'),
    optPrice: document.getElementById('optPrice'),
    editBanner: document.getElementById('editBanner'),
    editOrderNum: document.getElementById('editOrderNum'),
    exitEditBtn: document.getElementById('exitEditBtn'),
    validateBtn: document.getElementById('validateOrder'),
    paymentModal: document.getElementById('paymentModal'),
    paymentClose: document.getElementById('paymentClose'),
    paymentSimple: document.getElementById('paymentSimple'),
    paymentMixed: document.getElementById('paymentMixed'),
    payTotalSimple: document.getElementById('payTotalSimple'),
    paySimpleCard: document.getElementById('paySimpleCard'),
    paySimpleCash: document.getElementById('paySimpleCash'),
    paymentShowMixed: document.getElementById('paymentShowMixed'),
    paymentShowSimple: document.getElementById('paymentShowSimple'),
    payTotal: document.getElementById('payTotal'),
    payRemaining: document.getElementById('payRemaining'),
    payRemainingRow: document.getElementById('payRemainingRow'),
    payValidate: document.getElementById('payValidate'),
    modeCardAmount: document.getElementById('modeCardAmount'),
    modeCashAmount: document.getElementById('modeCashAmount'),
    modeTRAmount: document.getElementById('modeTRAmount'),
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

            // Charger l'historique du jour quand on ouvre l'onglet "Toutes"
            if (tab.dataset.tab === 'all') {
                loadAllTodayOrders();
            }
        });
    });

    // Recherche dans l'historique du jour
    if (DOM.allOrdersSearch) {
        DOM.allOrdersSearch.addEventListener('input', (e) => {
            allOrdersSearchTerm = e.target.value.toLowerCase().trim();
            renderAllTodayOrders();
        });
    }
    if (DOM.allOrdersRefresh) {
        DOM.allOrdersRefresh.addEventListener('click', loadAllTodayOrders);
    }

    // Order actions
    document.getElementById('cancelOrder').addEventListener('click', cancelOrder);
    document.getElementById('printOrder').addEventListener('click', () => printCurrentOrder());
    document.getElementById('validateOrder').addEventListener('click', validateOrder);

    // Sortir du mode édition
    if (DOM.exitEditBtn) {
        DOM.exitEditBtn.addEventListener('click', exitEditMode);
    }

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

    // Vue SIMPLE : boutons Carte / Espèces (un clic = encaissement direct)
    DOM.paySimpleCard.addEventListener('click', () => payAllAs('Carte Bancaire'));
    DOM.paySimpleCash.addEventListener('click', () => payAllAs('Espèces'));

    // Basculer entre vue simple ↔ mixte
    DOM.paymentShowMixed.addEventListener('click', showPaymentMixed);
    DOM.paymentShowSimple.addEventListener('click', showPaymentSimple);

    // Vue MIXTE : sélection du mode actif (Carte / Espèces / TR)
    document.querySelectorAll('.payment-mode').forEach(btn => {
        btn.addEventListener('click', () => {
            setActivePaymentMode(btn.dataset.mode);
        });
    });

    // Vue MIXTE : pavé numérique
    document.querySelectorAll('.num-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const digit = btn.dataset.digit;
            const action = btn.dataset.action;
            if (digit !== undefined) numpadDigit(digit);
            else if (action === 'clear') numpadClear();
            else if (action === 'back') numpadBack();
        });
    });

    // Validation finale (vue mixte)
    DOM.payValidate.addEventListener('click', confirmPayment);

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

    // Cacher le sélecteur Menu/Seul si les deux prix sont identiques
    const formatRow = document.querySelector('.options-format');
    if (formatRow) {
        formatRow.style.display = (item.menu === item.seul) ? 'none' : '';
    }

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
    // Pas de format à afficher quand Menu = Seul (Bowls, Buckets, Suppl., etc.)
    const hasFormat = selectedProduct.menu !== selectedProduct.seul;

    const orderItem = {
        id: Date.now(),
        productId: selectedProduct.id,
        name: selectedProduct.name,
        icon: selectedProduct.icon,
        price: price,
        qty: selectedQty,
        format: selectedFormat,
        hasFormat: hasFormat,
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
                    <div class="item-details">${(item.hasFormat !== false) ? (item.format === 'menu' ? 'Menu' : 'Seul') : ''}${(item.hasFormat !== false && optStr) ? ' • ' : ''}${optStr}</div>
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
    // En mode édition, c'est équivalent à sortir du mode édition
    if (editingOrderId) {
        if (confirm('Abandonner les modifications en cours ?')) {
            exitEditMode();
        }
        return;
    }
    if (currentOrder.length === 0) return;
    if (confirm('Annuler la commande en cours ?')) {
        currentOrder = [];
        renderCurrentOrder();
        broadcastOrderUpdate();
    }
}

let pendingCallback = null;
let pendingOrderId = null;
let paymentTotal = 0;
// Montants en CENTIMES (entiers) pour éviter les erreurs flottantes
let paymentCents = { card: 0, cash: 0, tr: 0 };
let activePaymentMode = 'card';

async function validateOrder() {
    if (currentOrder.length === 0) {
        alert('Aucun article dans la commande');
        return;
    }

    // Mode édition : sauvegarder les modifs (PUT) sans repasser par le paiement
    if (editingOrderId) {
        await saveEditedOrder();
        return;
    }

    const total = currentOrder.reduce((sum, item) => sum + (item.price * item.qty), 0);
    pendingCallback = null;
    pendingOrderId = null;

    openPaymentModal(total, `Total à régler : ${total.toFixed(2)} €`);
}

// ===== MODE ÉDITION =====
function startEditOrder(orderId) {
    // Trouver la commande dans nos listes locales
    const order = allTodayOrders.find(o => o.id === orderId)
        || webOrders.find(o => o.id === orderId);
    if (!order) {
        alert('Commande introuvable');
        return;
    }

    // Si on a déjà des items dans une nouvelle commande, demander confirmation
    if (!editingOrderId && currentOrder.length > 0) {
        if (!confirm('La commande en cours sera perdue. Continuer ?')) return;
    }

    // Activer mode édition
    editingOrderId = order.id;
    editingOrderNumber = order.order_number || ('#' + order.id);
    editingOriginalOrder = JSON.parse(JSON.stringify(order));

    // Charger les items dans currentOrder (avec des IDs uniques pour le rendu)
    currentOrder = (order.items || []).map((item, idx) => ({
        ...item,
        id: Date.now() + idx, // ID unique pour la ligne de panier
        productId: item.productId || item.id,
        // Garantir les flags
        format: item.format || 'menu',
        hasFormat: item.hasFormat !== false,
        options: item.options || {}
    }));

    // Switch sur l'onglet "En cours"
    document.querySelectorAll('.right-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.right-panel').forEach(p => p.classList.remove('active'));
    document.querySelector('.right-tab[data-tab="current"]').classList.add('active');
    document.getElementById('currentPanel').classList.add('active');

    // Afficher le banner
    DOM.editBanner.style.display = 'flex';
    DOM.editOrderNum.textContent = editingOrderNumber;

    // Changer le label du bouton valider
    DOM.validateBtn.textContent = '💾 Enregistrer';

    renderCurrentOrder();
}

function exitEditMode() {
    editingOrderId = null;
    editingOrderNumber = null;
    editingOriginalOrder = null;
    currentOrder = [];
    DOM.editBanner.style.display = 'none';
    DOM.validateBtn.textContent = '✅ Valider';
    renderCurrentOrder();
}

async function saveEditedOrder() {
    if (!editingOrderId) return;

    const newTotal = currentOrder.reduce((sum, item) => sum + (item.price * item.qty), 0);

    try {
        const res = await fetch(`${API_URL}/api/orders.php?id=${editingOrderId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                items: currentOrder,
                total: newTotal
            })
        });
        if (!res.ok) throw new Error('Erreur serveur');
    } catch (e) {
        console.error('Error saving edit:', e);
        alert('Erreur lors de l\'enregistrement. Réessayez.');
        return;
    }

    const savedNum = editingOrderNumber;
    exitEditMode();

    // Rafraîchir les listes
    loadWebOrders();
    const allTabActive = document.querySelector('.right-tab[data-tab="all"]')?.classList.contains('active');
    if (allTabActive) loadAllTodayOrders();

    alert(`Commande ${savedNum} mise à jour ✓`);
}

function openPaymentModal(total, _msg) {
    paymentTotal = Number(total) || 0;
    paymentCents = { card: 0, cash: 0, tr: 0 };
    activePaymentMode = 'card';

    // Vue simple par défaut
    showPaymentSimple();
    DOM.payTotalSimple.textContent = `Total : ${paymentTotal.toFixed(2)} €`;

    // Préparer aussi la vue mixte (cachée)
    DOM.payTotal.textContent = paymentTotal.toFixed(2) + ' €';
    refreshPaymentUI();
    document.querySelectorAll('.payment-mode').forEach(m => {
        m.classList.toggle('active', m.dataset.mode === 'card');
    });

    DOM.paymentModal.classList.add('active');
}

function showPaymentSimple() {
    DOM.paymentSimple.style.display = '';
    DOM.paymentMixed.style.display = 'none';
}

function showPaymentMixed() {
    DOM.paymentSimple.style.display = 'none';
    DOM.paymentMixed.style.display = '';
    refreshPaymentUI();
}

// Encaissement simple : un seul mode (Carte ou Espèces), montant = total exact
async function payAllAs(method) {
    paymentCents = { card: 0, cash: 0, tr: 0 };
    const totalCents = Math.round(paymentTotal * 100);
    if (method === 'Carte Bancaire') paymentCents.card = totalCents;
    else if (method === 'Espèces') paymentCents.cash = totalCents;
    refreshPaymentUI();
    await confirmPayment();
}

function closePaymentModal() {
    DOM.paymentModal.classList.remove('active');
    pendingCallback = null;
    pendingOrderId = null;
}

function centsToEuros(c) {
    return (c / 100);
}

function refreshPaymentUI() {
    const card = centsToEuros(paymentCents.card);
    const cash = centsToEuros(paymentCents.cash);
    const tr = centsToEuros(paymentCents.tr);

    DOM.modeCardAmount.textContent = card.toFixed(2) + ' €';
    DOM.modeCashAmount.textContent = cash.toFixed(2) + ' €';
    DOM.modeTRAmount.textContent = tr.toFixed(2) + ' €';

    const entered = card + cash + tr;
    const remaining = paymentTotal - entered;

    DOM.payRemaining.textContent = remaining.toFixed(2) + ' €';
    DOM.payRemainingRow.classList.remove('ok', 'over');

    const tolerance = 0.005;
    if (Math.abs(remaining) < tolerance) {
        DOM.payRemainingRow.classList.add('ok');
        DOM.payValidate.disabled = false;
    } else if (remaining < -tolerance) {
        DOM.payRemainingRow.classList.add('over');
        DOM.payValidate.disabled = true;
    } else {
        DOM.payValidate.disabled = true;
    }
}

function setActivePaymentMode(mode) {
    activePaymentMode = mode;
    document.querySelectorAll('.payment-mode').forEach(m => {
        m.classList.toggle('active', m.dataset.mode === mode);
    });
}

// Saisie style POS : chaque digit décale d'un cran à gauche
function numpadDigit(d) {
    const cur = paymentCents[activePaymentMode] || 0;
    paymentCents[activePaymentMode] = cur * 10 + Number(d);
    refreshPaymentUI();
}

function numpadBack() {
    const cur = paymentCents[activePaymentMode] || 0;
    paymentCents[activePaymentMode] = Math.floor(cur / 10);
    refreshPaymentUI();
}

function numpadClear() {
    paymentCents[activePaymentMode] = 0;
    refreshPaymentUI();
}

function buildPaymentsArray() {
    const card = centsToEuros(paymentCents.card);
    const cash = centsToEuros(paymentCents.cash);
    const tr = centsToEuros(paymentCents.tr);
    const payments = [];
    if (card > 0) payments.push({ method: 'Carte Bancaire', amount: Number(card.toFixed(2)) });
    if (cash > 0) payments.push({ method: 'Espèces', amount: Number(cash.toFixed(2)) });
    if (tr > 0) payments.push({ method: 'Ticket Resto', amount: Number(tr.toFixed(2)) });
    return payments;
}

function formatPaymentMethod(payments) {
    if (!payments || payments.length === 0) return 'Non spécifié';
    if (payments.length === 1) return payments[0].method;
    return 'Mixte (' + payments.map(p => `${p.method}: ${p.amount.toFixed(2)}€`).join(', ') + ')';
}

async function confirmPayment() {
    const payments = buildPaymentsArray();
    if (payments.length === 0) return;
    const paymentMethod = formatPaymentMethod(payments);

    if (pendingCallback) {
        // Cas : commande web qu'on encaisse, ou édition d'une commande
        pendingCallback({ paymentMethod, payments });
        closePaymentModal();
        return;
    }

    if (currentOrder.length === 0) return;

    const total = currentOrder.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const orderNumber = generateOrderNumber();

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
                payments: payments,
                status: 'done'
            })
        });
    } catch (e) {
        console.error('Error saving order:', e);
    }

    printTicket(orderNumber, currentOrder, total, orderMode, paymentMethod, payments);

    currentOrder = [];
    renderCurrentOrder();
    broadcastOrderUpdate();
    closePaymentModal();

    const allTabActive = document.querySelector('.right-tab[data-tab="all"]')?.classList.contains('active');
    if (allTabActive) {
        loadAllTodayOrders();
    }

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

// Helper : rendu compact pour les listes (une ligne)
function renderPaymentShort(payments, paymentMethod) {
    if (Array.isArray(payments) && payments.length > 0) {
        const icons = { 'Carte Bancaire': '💳', 'Espèces': '💶', 'Ticket Resto': '🎫' };
        return payments.map(p => `${icons[p.method] || ''} ${Number(p.amount).toFixed(2)}€`).join(' + ');
    }
    return paymentMethod || '';
}

// Helper : rendu multi-ligne (tickets imprimés)
function renderPaymentDetail(payments, paymentMethod) {
    if (Array.isArray(payments) && payments.length > 0) {
        if (payments.length === 1) {
            const p = payments[0];
            return `${p.method} : ${Number(p.amount).toFixed(2)} €`;
        }
        return 'PAIEMENT MIXTE<br>' + payments.map(p => `${p.method} : ${Number(p.amount).toFixed(2)} €`).join('<br>');
    }
    return paymentMethod || '';
}

// ===== PRINTING =====
function printTicket(orderNum, items, total, mode, paymentMethod, payments) {
    const now = new Date();
    const time = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    const date = now.toLocaleDateString('fr-FR');

    // TVA calculation (10% for restaurant)
    const tvaRate = 10;
    const totalHT = total / (1 + tvaRate / 100);
    const tvaAmount = total - totalHT;

    const itemsHtml = items.map(item => {
        const optStr = Object.values(item.options || {}).filter(v => v).join(', ');
        const formatLabel = (item.hasFormat !== false) ? (item.format === 'menu' ? 'Menu' : 'Seul') : '';
        const subline = formatLabel && optStr ? `${formatLabel} - ${optStr}` : (formatLabel || optStr);
        return `
            <tr>
                <td style="text-align:left;">${item.qty}x ${item.name}</td>
                <td style="text-align:right;">${(item.price * item.qty).toFixed(2)}€</td>
            </tr>
            ${subline ? `<tr><td colspan="2" style="font-size:10px;color:#555;padding-left:10px;">${subline}</td></tr>` : ''}
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
    </div>

    <div class="order-num">${orderNum}</div>

    <table>${itemsHtml}</table>

    <div class="total">
        <span>TOTAL</span>
        <span>${total.toFixed(2)} EUR</span>
    </div>

    ${paymentMethod || (payments && payments.length) ? `<div style="margin-top:14px; padding:12px; border:2px solid black; text-align:center; font-size:18px;">${renderPaymentDetail(payments, paymentMethod)}</div>` : ''}

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
                    <button class="btn-edit" onclick="startEditOrder(${order.id})">✏️ Modifier</button>
                    <button class="btn-done" onclick="markWebOrderDone(${order.id})">✅ Terminée</button>
                    <button class="btn-delete" onclick="deleteOrder(${order.id}, '${order.order_number}')">🗑️ Supprimer</button>
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
        const formatLabel = (item.hasFormat !== false) ? (item.format === 'menu' ? 'Menu' : 'Seul') : '';
        const subline = formatLabel && optStr ? `${formatLabel} - ${optStr}` : (formatLabel || optStr);
        return `
            <tr>
                <td>${item.qty}x ${item.name}</td>
                <td style="text-align:right">${(item.price * item.qty).toFixed(2)}€</td>
            </tr>
            ${subline ? `<tr><td colspan="2" style="font-size:11px;padding-left:8px">${subline}</td></tr>` : ''}
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

    pendingCallback = async ({ paymentMethod, payments }) => {
        try {
            await fetch(`${API_URL}/api/orders.php?id=${orderId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    status: 'done',
                    payment_method: paymentMethod,
                    payments: payments
                })
            });
            webOrders = webOrders.filter(o => o.id !== orderId);
            renderWebOrders();
            // Rafraîchir l'historique si visible
            const allTabActive = document.querySelector('.right-tab[data-tab="all"]')?.classList.contains('active');
            if (allTabActive) loadAllTodayOrders();
        } catch (e) {
            console.error('Error:', e);
        }
    };

    openPaymentModal(order.total, `Web ${order.order_number} - Total : ${Number(order.total).toFixed(2)} €`);
}

// ===== TOUTES LES COMMANDES DU JOUR =====
async function loadAllTodayOrders() {
    try {
        // Date locale (Europe/Paris) au format YYYY-MM-DD, pas UTC
        const now = new Date();
        const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
        const res = await fetch(`${API_URL}/api/orders.php?date=${today}`);
        const orders = await res.json();
        allTodayOrders = Array.isArray(orders) ? orders : [];
        renderAllTodayOrders();
    } catch (e) {
        console.error('Error loading today orders:', e);
    }
}

function renderAllTodayOrders() {
    if (!DOM.allOrders) return;

    let list = allTodayOrders;
    if (allOrdersSearchTerm) {
        list = list.filter(o => {
            const num = (o.order_number || '').toLowerCase();
            const name = (o.customer_name || '').toLowerCase();
            const phone = (o.customer_phone || '').toLowerCase();
            return num.includes(allOrdersSearchTerm)
                || name.includes(allOrdersSearchTerm)
                || phone.includes(allOrdersSearchTerm);
        });
    }

    if (list.length === 0) {
        DOM.allOrders.innerHTML = `
            <div class="order-empty">
                <span>📋</span>
                <p>${allOrdersSearchTerm ? 'Aucun résultat' : 'Aucune commande aujourd\'hui'}</p>
            </div>
        `;
        return;
    }

    DOM.allOrders.innerHTML = list.map(order => {
        const time = new Date(order.created_at).toLocaleTimeString('fr-FR', {
            hour: '2-digit', minute: '2-digit'
        });

        const statusLabel = {
            'pending': '⏳ En attente',
            'preparing': '👨‍🍳 En prépa',
            'ready': '✅ Prête',
            'done': '✔️ Terminée'
        }[order.status] || order.status;

        const sourceLabel = (order.customer_name === 'Sur place' || order.customer_name === 'À emporter')
            ? `🏪 ${order.customer_name}`
            : `🌐 ${order.customer_name}`;

        const itemsHtml = (order.items || []).map(item =>
            `<div class="all-order-item">${item.qty}x ${item.name}</div>`
        ).join('');

        return `
            <div class="all-order-card all-order-${order.status}" data-id="${order.id}">
                <div class="all-order-header">
                    <span class="all-order-num">${order.order_number || '#' + order.id}</span>
                    <span class="all-order-time">${time}</span>
                </div>
                <div class="all-order-meta">
                    <span class="all-order-source">${sourceLabel}</span>
                    <span class="all-order-status">${statusLabel}</span>
                </div>
                ${order.customer_phone ? `<div class="all-order-phone">📞 ${order.customer_phone}</div>` : ''}
                <div class="all-order-items">${itemsHtml}</div>
                <div class="all-order-footer">
                    <span class="all-order-total">${Number(order.total).toFixed(2)} €</span>
                    <span class="all-order-payment">${renderPaymentShort(order.payments, order.payment_method)}</span>
                </div>
                <div class="all-order-actions">
                    <button class="btn-edit" onclick="startEditOrder(${order.id})">✏️ Modifier</button>
                    <button class="btn-delete" onclick="deleteOrder(${order.id}, '${(order.order_number || '').replace(/'/g, "\\'")}')">🗑️ Supprimer</button>
                </div>
            </div>
        `;
    }).join('');
}

// ===== DELETE ORDER (web ou caisse) =====
async function deleteOrder(orderId, orderNumber) {
    const label = orderNumber || `#${orderId}`;
    if (!confirm(`Supprimer la commande ${label} ?\n\nCette action est définitive.`)) {
        return;
    }
    try {
        const res = await fetch(`${API_URL}/api/orders.php?id=${orderId}`, {
            method: 'DELETE'
        });
        if (!res.ok) throw new Error('Erreur serveur');

        // Retirer de la liste web orders si présent
        webOrders = webOrders.filter(o => o.id !== orderId);
        renderWebOrders();

        // Recharger l'historique du jour si visible
        if (typeof loadAllTodayOrders === 'function') {
            loadAllTodayOrders();
        }
    } catch (e) {
        console.error('Error deleting order:', e);
        alert('Erreur lors de la suppression. Réessayez.');
    }
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
            const allTabActive = document.querySelector('.right-tab[data-tab="all"]')?.classList.contains('active');
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
            // Rafraîchir l'historique du jour si visible
            if (allTabActive) {
                loadAllTodayOrders();
            }
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
window.deleteOrder = deleteOrder;
window.startEditOrder = startEditOrder;
