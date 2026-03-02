// ===== MENU DATA =====
const menuData = {
    burgers: {
        title: 'Smash Burgers',
        icon: '🍔',
        items: [
            { id: 'cheese', name: 'Cheese Burger', desc: '1 Steak • Cheddar • Crudités • Sauces', icon: '🍔', menu: 7.50, seul: 5.50, badge: 'BEST', options: ['Sauce'] },
            { id: 'potatoes', name: 'Potatoes Burger', desc: 'Steak végétarien • Cheddar • Crudités', icon: '🍔', menu: 7.50, seul: 5.50, options: ['Sauce'] },
            { id: 'fish', name: 'Fish Burger', desc: 'Fish • Cheddar • Crudités • Sauce', icon: '🍔', menu: 7.50, seul: 5.50, options: ['Sauce'] },
            { id: 'chicken', name: 'Chicken Burger', desc: 'Tenders • Cheddar • Crudités • Sauce', icon: '🍔', menu: 8.00, seul: 6.00, options: ['Sauce'] },
            { id: 'double', name: 'Double Cheese', desc: '2 Steak • 2 Cheddar • Crudités • Sauces', icon: '🍔', menu: 11.50, seul: 9.50, badge: 'POP', options: ['Sauce', 'Sauce 2'] },
            { id: 'chicken-country', name: 'Chicken Country', desc: 'Steak • Galette pomme de terre', icon: '🍔', menu: 11.50, seul: 9.50, options: ['Sauce'] },
            { id: 'triple', name: 'Triple Cheese', desc: '3 Steak • 3 Cheddar • Crudités • Sauces', icon: '🍔', menu: 13.50, seul: 11.50, badge: 'XL', options: ['Sauce', 'Sauce 2'] },
            { id: 'super', name: 'Super Burger', desc: 'Steak • Galette • Cheddar', icon: '🍔', menu: 13.50, seul: 11.50, options: ['Sauce', 'Sauce 2'] }
        ]
    },
    naans: {
        title: 'Naan Burgers',
        icon: '🫓',
        items: [
            { id: 'naan-simple', name: 'Naan Burger', desc: 'Pain Naan • Viande au choix', icon: '🫓', menu: 11.50, seul: 9.00, options: ['Viande', 'Sauce'] },
            { id: 'naan-double', name: 'Naan Double', desc: 'Pain Naan • Double viande', icon: '🫓', menu: 13.50, seul: 11.00, badge: 'XL', options: ['Viande', 'Sauce', 'Sauce 2'] },
            { id: 'naan-triple', name: 'Naan Triple', desc: 'Pain Naan • Triple viande', icon: '🫓', menu: 15.00, seul: 13.00, badge: 'XXL', options: ['Viande', 'Sauce', 'Sauce 2'] }
        ]
    },
    tacos: {
        title: 'Tacos',
        icon: '🌯',
        items: [
            { id: 'tacos-simple', name: 'Tacos Simple', desc: '1 viande • Frites • Fromage', icon: '🌯', menu: 9.00, seul: 7.00, options: ['Viande', 'Sauce'] },
            { id: 'tacos-maxi', name: 'Tacos Maxi', desc: '2 viandes • Double galette', icon: '🌯', menu: 14.00, seul: 11.50, badge: 'XL', options: ['Viande', 'Viande 2', 'Sauce', 'Sauce 2'] },
            { id: 'tacos-gratine', name: 'Supplément Gratiné', desc: '+Cheddar • Oignon frit • Lardons', icon: '🧀', menu: 3.00, seul: 3.00, badge: 'SUPPL' }
        ]
    },
    sandwichs: {
        title: 'Sandwichs',
        icon: '🥙',
        items: [
            { id: 'naan-indien', name: 'Naan Indien', desc: 'Pain Naan fromage ou nature • Crudités', icon: '🫓', menu: 9.00, seul: 7.00, badge: 'POP', options: ['Naan', 'Viande', 'Sauce'] },
            { id: 'galette', name: 'Galette', desc: 'Galette • Viande • Crudités', icon: '🌯', menu: 9.00, seul: 7.00, options: ['Viande', 'Sauce'] },
            { id: 'wrap', name: 'Wrap', desc: 'Tortilla • Viande • Crudités', icon: '🌯', menu: 9.00, seul: 7.00, options: ['Viande', 'Sauce'] },
            { id: 'pain', name: 'Pain Classique', desc: 'Pain • Viande • Crudités', icon: '🥖', menu: 9.00, seul: 7.00, options: ['Viande', 'Sauce'] }
        ]
    },
    paninis: {
        title: 'Paninis',
        icon: '🥪',
        items: [
            { id: 'panini-americain', name: 'Panini Américain', desc: 'Panini avec fromage', icon: '🥪', menu: 10.00, seul: 8.50, badge: 'POP', options: ['Viande', 'Sauce'] },
            { id: 'panini-viande', name: 'Panini Viande', desc: 'Pain Panini • Viande au choix • Fromage', icon: '🥪', menu: 9.00, seul: 7.00, options: ['Viande', 'Sauce'] },
            { id: 'panini-3fromages', name: 'Panini 3 Fromages', desc: 'Pain Panini • 3 Fromages', icon: '🧀', menu: 9.00, seul: 7.00, options: ['Sauce'] },
            { id: 'panini-nutella', name: 'Panini Nutella', desc: 'Panini sucré au Nutella', icon: '🍫', menu: 4.00, seul: 4.00, badge: 'SWEET' }
        ]
    },
    buckets: {
        title: 'Buckets',
        icon: '🍗',
        items: [
            { id: 'bucket-two', name: 'Bucket Two', desc: '18 wings ou 14 tenders • 2 boissons • 2 frites', icon: '🪣', menu: 20.00, seul: 20.00, badge: 'x2', options: ['Bucket'] },
            { id: 'bucket-family', name: 'Bucket Family', desc: '24 wings ou 18 tenders • 1.5L • 4 frites', icon: '🪣', menu: 35.00, seul: 35.00, badge: 'FAM', options: ['Bucket'] },
            { id: 'bucket-team', name: 'Bucket Team', desc: '24 wings + 18 tenders + 4 cheese + 1.5L + 4 frites', icon: '🪣', menu: 50.00, seul: 50.00, badge: 'TEAM' },
            { id: 'menu-tenders', name: 'Menu 8 Tenders', desc: '8 Tenders • Frites • Boisson', icon: '🍗', menu: 11.50, seul: 11.50, options: ['Sauce'] },
            { id: 'menu-wings', name: 'Menu 8 Wings', desc: '8 Wings • Frites • Boisson', icon: '🍗', menu: 10.00, seul: 10.00, options: ['Sauce'] },
            { id: 'menu-enfant', name: 'Menu Enfant', desc: 'Burger/Nuggets x6 • Frites • Caprisun', icon: '👶', menu: 7.00, seul: 7.00, badge: 'KIDS', options: ['Enfant'] }
        ]
    },
    texmex: {
        title: 'Tex-Mex',
        icon: '🥟',
        items: [
            { id: 'pomme-noisette', name: 'Pomme Noisette x10', desc: 'x10 pièces croustillantes', icon: '🥔', menu: 4.00, seul: 4.00 },
            { id: 'falafel-6', name: 'Falafel x6', desc: '6 pièces maison', icon: '🧆', menu: 5.90, seul: 5.90, options: ['Sauce'] },
            { id: 'falafel-12', name: 'Falafel x12', desc: '12 pièces maison', icon: '🧆', menu: 11.00, seul: 11.00, options: ['Sauce'] },
            { id: 'samoussa-3', name: 'Samoussa x3', desc: '3 pièces viande épicées', icon: '🥟', menu: 5.00, seul: 5.00, options: ['Sauce'] },
            { id: 'samoussa-6', name: 'Samoussa x6', desc: '6 pièces viande épicées', icon: '🥟', menu: 9.00, seul: 9.00, options: ['Sauce'] },
            { id: 'nuggets-6', name: 'Nuggets x6', desc: '6 pièces', icon: '🍗', menu: 5.00, seul: 5.00, options: ['Sauce'] },
            { id: 'nuggets-10', name: 'Nuggets x10', desc: '10 pièces', icon: '🍗', menu: 9.00, seul: 9.00, options: ['Sauce'] },
            { id: 'nems-3', name: 'Nems Poulet x3', desc: '3 pièces', icon: '🥟', menu: 3.50, seul: 3.50, options: ['Sauce'] },
            { id: 'nems-6', name: 'Nems Poulet x6', desc: '6 pièces', icon: '🥟', menu: 6.00, seul: 6.00, options: ['Sauce'] },
            { id: 'wings-3', name: 'Wings x3', desc: '3 pièces', icon: '🍗', menu: 3.50, seul: 3.50, badge: 'HOT', options: ['Sauce'] },
            { id: 'wings-6', name: 'Wings x6', desc: '6 pièces', icon: '🍗', menu: 5.50, seul: 5.50, badge: 'HOT', options: ['Sauce'] },
            { id: 'wings-12', name: 'Wings x12', desc: '12 pièces', icon: '🍗', menu: 10.00, seul: 10.00, badge: 'HOT', options: ['Sauce'] },
            { id: 'tenders-3', name: 'Tenders x3', desc: '3 pièces', icon: '🍗', menu: 3.90, seul: 3.90, options: ['Sauce'] },
            { id: 'tenders-6', name: 'Tenders x6', desc: '6 pièces', icon: '🍗', menu: 6.50, seul: 6.50, options: ['Sauce'] },
            { id: 'tenders-12', name: 'Tenders x12', desc: '12 pièces', icon: '🍗', menu: 12.00, seul: 12.00, options: ['Sauce'] },
            { id: 'naan-nature', name: 'Naan Nature', desc: 'Pain Naan traditionnel', icon: '🫓', menu: 2.00, seul: 2.00 },
            { id: 'naan-fromage', name: 'Naan Fromage', desc: 'Pain Naan au fromage', icon: '🧀', menu: 3.00, seul: 3.00 }
        ]
    },
    assiettes: {
        title: 'Assiettes',
        icon: '🍛',
        items: [
            { id: 'assiette-simple', name: 'Assiette Simple', desc: '1 viande • Frites/Riz • Naan • Café/Thé', icon: '🍛', menu: 14.00, seul: 12.00, options: ['Viande', 'Accomp', 'Naan', 'Sauce'] },
            { id: 'assiette-mixte', name: 'Assiette Mixte', desc: '3 viandes • Frites/Riz • Naan • Café/Thé', icon: '🍛', menu: 18.00, seul: 16.00, badge: 'BEST', options: ['Viande', 'Viande 2', 'Viande 3', 'Accomp', 'Naan', 'Sauce'] }
        ]
    },
    bowls: {
        title: 'Bowls',
        icon: '🥗',
        items: [
            { id: 'bowl', name: 'Bowl', desc: 'Viande au choix • Frites • Sauce au choix', icon: '🥗', menu: 10.00, seul: 10.00, options: ['Viande', 'Sauce'] },
            { id: 'crousty-tenders', name: 'Crousty Tenders', desc: 'Riz basmati • Tenders • Sauce fromagère • Chili thaï', icon: '🥗', menu: 10.00, seul: 10.00 },
            { id: 'crousty-curry', name: 'Crousty Curry', desc: 'Riz basmati • Poulet Curry • Sauce fromagère • Chili thaï', icon: '🥗', menu: 10.00, seul: 10.00 },
            { id: 'crousty-tikka', name: 'Crousty Tikka', desc: 'Riz basmati • Poulet Tikka • Sauce fromagère • Chili thaï', icon: '🥗', menu: 10.00, seul: 10.00 },
            { id: 'crousty-viande', name: 'Crousty Viande', desc: 'Riz basmati • Viande Hachée • Sauce fromagère • Chili thaï', icon: '🥗', menu: 10.00, seul: 10.00 },
            { id: 'riz', name: 'Riz Parfumé', desc: 'Riz basmati aux épices', icon: '🍚', menu: 4.00, seul: 4.00 }
        ]
    },
    sides: {
        title: 'Extras',
        icon: '🍟',
        items: [
            { id: 'frites-p', name: 'Frites Petite', desc: 'Portion classique', icon: '🍟', menu: 2.50, seul: 2.50, options: ['Sauce'] },
            { id: 'frites-g', name: 'Frites Grande', desc: 'Grande portion', icon: '🍟', menu: 4.00, seul: 4.00, options: ['Sauce'] },
            { id: 'frites-cheddar', name: 'Frites Cheddar', desc: 'Frites + Sauce cheddar', icon: '🧀', menu: 6.00, seul: 6.00, badge: 'YUM', options: ['Sauce'] },
            { id: 'salade', name: 'Salade César', desc: 'Salade fraîche', icon: '🥗', menu: 8.00, seul: 8.00 },
            { id: 'tiramisu', name: 'Tiramisu', desc: 'Dessert maison crémeux', icon: '🍰', menu: 3.50, seul: 3.50 },
            { id: 'tarte-daim', name: 'Tarte Daim', desc: 'Tarte chocolat Daim', icon: '🥧', menu: 3.50, seul: 3.50 }
        ]
    },
    boissons: {
        title: 'Boissons',
        icon: '🥤',
        items: [
            { id: 'canette', name: 'Canette 33cl', desc: 'Coca, Fanta, Sprite, Ice Tea...', icon: '🥤', menu: 2.00, seul: 2.00, options: ['Boisson'] },
            { id: 'bouteille-50', name: 'Bouteille 50cl', desc: 'Coca, Fanta, Sprite, Ice Tea...', icon: '🥤', menu: 3.00, seul: 3.00, options: ['Boisson'] },
            { id: 'bouteille-125', name: 'Bouteille 1.25L', desc: 'Grande à partager', icon: '🥤', menu: 4.50, seul: 4.50, options: ['Boisson'] },
            { id: 'eau-50', name: 'Eau 50cl', desc: 'Eau minérale', icon: '💧', menu: 1.80, seul: 1.80 },
            { id: 'eau-150', name: 'Eau 1.5L', desc: 'Grande bouteille', icon: '💧', menu: 2.80, seul: 2.80 },
            { id: 'redbull', name: 'Red Bull', desc: 'Boisson énergisante', icon: '⚡', menu: 3.00, seul: 3.00, badge: 'NRJ' }
        ]
    },
    supplements: {
        title: 'Suppléments',
        icon: '➕',
        items: [
            { id: 'supp-cheddar', name: 'Supplément Cheddar', desc: 'Cheddar fondu', icon: '🧀', menu: 1.00, seul: 1.00 },
            { id: 'supp-chevre', name: 'Supplément Chèvre', desc: 'Fromage de chèvre', icon: '🧀', menu: 1.00, seul: 1.00 },
            { id: 'supp-kiri', name: 'Supplément Vache Kiri', desc: 'Vache qui rit / Kiri', icon: '🧀', menu: 1.50, seul: 1.50 },
            { id: 'supp-emmental', name: 'Supplément Emmental', desc: 'Emmental râpé', icon: '🧀', menu: 1.00, seul: 1.00 },
            { id: 'supp-oeuf', name: 'Supplément Oeuf', desc: 'Oeuf au plat', icon: '🍳', menu: 2.00, seul: 2.00 },
            { id: 'supp-steak', name: 'Supplément Steak', desc: 'Steak haché supplémentaire', icon: '🥩', menu: 2.50, seul: 2.50 },
            { id: 'supp-viande', name: 'Supplément Viande', desc: 'Viande supplémentaire', icon: '🍖', menu: 2.50, seul: 2.50 },
            { id: 'supp-frites', name: 'Supplément Frites', desc: 'Portion de frites', icon: '🍟', menu: 3.00, seul: 3.00 },
            { id: 'supp-gde-frites', name: 'Supplément Gde Frites', desc: 'Grande portion de frites', icon: '🍟', menu: 5.00, seul: 5.00 }
        ]
    }
};

// Options disponibles
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

// ===== STATE =====
let cart = [];
let currentProduct = null;
let currentQty = 1;
let currentFormat = 'menu';
let currentOptions = {};
let activeCategory = 'all';

// ===== DOM ELEMENTS =====
const DOM = {
    categoryPills: document.getElementById('categoryPills'),
    menuContent: document.getElementById('menuContent'),
    cartBadge: document.getElementById('cartBadge'),
    sheetBackdrop: document.getElementById('sheetBackdrop'),
    productBackdrop: document.getElementById('productBackdrop'),
    cartSheet: document.getElementById('cartSheet'),
    cartNavBtn: document.getElementById('cartNavBtn'),
    cartContent: document.getElementById('cartContent'),
    cartItems: document.getElementById('cartItems'),
    emptyCart: document.getElementById('emptyCart'),
    cartFooter: document.getElementById('cartFooter'),
    subtotal: document.getElementById('subtotal'),
    totalAmount: document.getElementById('totalAmount'),
    checkoutPrice: document.getElementById('checkoutPrice'),
    checkoutBtn: document.getElementById('checkoutBtn'),
    clearCart: document.getElementById('clearCart'),
    productSheet: document.getElementById('productSheet'),
    productClose: document.getElementById('productClose'),
    productIcon: document.getElementById('productIcon'),
    productTag: document.getElementById('productTag'),
    productName: document.getElementById('productName'),
    productDesc: document.getElementById('productDesc'),
    priceMenu: document.getElementById('priceMenu'),
    priceSeul: document.getElementById('priceSeul'),
    productOptions: document.getElementById('productOptions'),
    qtyValue: document.getElementById('qtyValue'),
    qtyMinus: document.getElementById('qtyMinus'),
    qtyPlus: document.getElementById('qtyPlus'),
    addToCartBtn: document.getElementById('addToCartBtn'),
    addPrice: document.getElementById('addPrice'),
    searchView: document.getElementById('searchView'),
    searchInput: document.getElementById('searchInput'),
    searchClear: document.getElementById('searchClear'),
    searchResults: document.getElementById('searchResults'),
    toast: document.getElementById('toast'),
    toastMsg: document.getElementById('toastMsg'),
    navItems: document.querySelectorAll('.nav-item')
};

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    renderMenu('all');
    setupEvents();
});

// ===== EVENT SETUP =====
function setupEvents() {
    // Category pills
    DOM.categoryPills.addEventListener('click', (e) => {
        const pill = e.target.closest('.pill');
        if (pill) {
            document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            activeCategory = pill.dataset.cat;
            renderMenu(activeCategory);
        }
    });

    // Nav items
    DOM.navItems.forEach(item => {
        item.addEventListener('click', () => {
            const view = item.dataset.view;

            DOM.navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Fermer toutes les vues
            closeSearch();
            closeInfoView();

            if (view === 'search') {
                openSearch();
            } else if (view === 'info') {
                openInfoView();
            }
        });
    });

    // Cart nav button
    DOM.cartNavBtn.addEventListener('click', () => openCart());

    // Cart sheet backdrop
    DOM.sheetBackdrop.addEventListener('click', closeCart);
    DOM.clearCart.addEventListener('click', clearCart);
    DOM.checkoutBtn.addEventListener('click', checkout);

    // Product sheet backdrop - only close if clicking directly on backdrop, not on modal
    DOM.productBackdrop.addEventListener('click', (e) => {
        if (e.target === DOM.productBackdrop) {
            closeProductSheet();
        }
    });
    DOM.productClose.addEventListener('click', closeProductSheet);

    // Price options
    document.querySelectorAll('.price-option').forEach(opt => {
        opt.addEventListener('click', () => {
            document.querySelectorAll('.price-option').forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            currentFormat = opt.dataset.type;
            updateAddPrice();
        });
    });

    // Quantity
    DOM.qtyMinus.addEventListener('click', () => {
        if (currentQty > 1) {
            currentQty--;
            DOM.qtyValue.textContent = currentQty;
            updateAddPrice();
        }
    });

    DOM.qtyPlus.addEventListener('click', () => {
        currentQty++;
        DOM.qtyValue.textContent = currentQty;
        updateAddPrice();
    });

    // Add to cart
    DOM.addToCartBtn.addEventListener('click', addToCart);

    // Search
    DOM.searchInput.addEventListener('input', handleSearch);
    DOM.searchClear.addEventListener('click', () => {
        DOM.searchInput.value = '';
        DOM.searchClear.classList.remove('visible');
        renderSearchResults([]);
    });

    // Swipe down to close sheets
    let startY = 0;
    let currentY = 0;

    [DOM.cartSheet, DOM.productSheet].forEach(sheet => {
        sheet.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
        });

        sheet.addEventListener('touchmove', (e) => {
            currentY = e.touches[0].clientY;
            const diff = currentY - startY;
            if (diff > 0) {
                sheet.style.transform = `translateY(${diff}px)`;
            }
        });

        sheet.addEventListener('touchend', () => {
            const diff = currentY - startY;
            if (diff > 100) {
                closeAllSheets();
            } else {
                sheet.style.transform = '';
            }
            startY = 0;
            currentY = 0;
        });
    });
}

// ===== RENDER MENU =====
function renderMenu(category) {
    DOM.menuContent.innerHTML = '';

    const categories = category === 'all'
        ? Object.keys(menuData)
        : [category];

    categories.forEach((cat, idx) => {
        const data = menuData[cat];
        if (!data) return;

        const section = document.createElement('div');
        section.className = 'category-group fade-in';
        section.style.animationDelay = `${idx * 0.1}s`;

        section.innerHTML = `
            <h2 class="category-title">${data.icon} ${data.title}</h2>
            <div class="products-grid">
                ${data.items.map(item => createProductCard(item, cat)).join('')}
            </div>
        `;

        DOM.menuContent.appendChild(section);
    });

    // Add click events to cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const cat = card.dataset.cat;
            const id = card.dataset.id;
            const item = menuData[cat].items.find(i => i.id === id);
            if (item) openProductSheet(item, cat);
        });
    });
}

function createProductCard(item, cat) {
    const badgeClass = item.badge === 'BEST' || item.badge === 'POP' ? 'popular' : '';

    return `
        <div class="product-card" data-id="${item.id}" data-cat="${cat}">
            ${item.badge ? `<span class="product-badge ${badgeClass}">${item.badge}</span>` : ''}
            <div class="product-icon">${item.icon}</div>
            <div class="product-name">${item.name}</div>
            <div class="product-desc">${item.desc}</div>
            <div class="product-bottom">
                <div class="product-price">
                    <span class="menu-price">${item.menu.toFixed(2)} €</span>
                    ${item.seul !== item.menu ? `<span class="solo-price">seul ${item.seul.toFixed(2)} €</span>` : ''}
                </div>
                <button class="product-add">+</button>
            </div>
        </div>
    `;
}

// ===== PRODUCT SHEET =====
function openProductSheet(item, cat) {
    currentProduct = { ...item, category: cat };
    currentQty = 1;
    currentFormat = 'menu';
    currentOptions = {};

    // Reset UI
    DOM.productIcon.textContent = item.icon;
    DOM.productTag.textContent = menuData[cat].title.toUpperCase();
    DOM.productName.textContent = item.name;
    DOM.productDesc.textContent = item.desc;
    DOM.priceMenu.textContent = `${item.menu.toFixed(2)} €`;
    DOM.priceSeul.textContent = `${item.seul.toFixed(2)} €`;
    DOM.qtyValue.textContent = '1';

    // Reset format selection
    document.querySelectorAll('.price-option').forEach(o => o.classList.remove('selected'));
    document.querySelector('.price-option[data-type="menu"]').classList.add('selected');

    // Render options
    if (item.options && item.options.length > 0) {
        DOM.productOptions.innerHTML = item.options.map(opt => {
            const choices = optionChoices[opt] || ['Option 1', 'Option 2'];
            currentOptions[opt] = choices[0];

            return `
                <div class="option-group">
                    <label class="option-label">${opt}</label>
                    <div class="option-choices">
                        ${choices.map((choice, idx) => `
                            <button class="option-chip ${idx === 0 ? 'selected' : ''}" data-opt="${opt}" data-val="${choice}">
                                ${choice}
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;
        }).join('');

        // Option click events
        DOM.productOptions.querySelectorAll('.option-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                const opt = chip.dataset.opt;
                const val = chip.dataset.val;

                chip.parentElement.querySelectorAll('.option-chip').forEach(c => c.classList.remove('selected'));
                chip.classList.add('selected');
                currentOptions[opt] = val;
            });
        });
    } else {
        DOM.productOptions.innerHTML = '';
    }

    updateAddPrice();

    // Show sheet with its own backdrop
    DOM.productBackdrop.classList.add('active');
    DOM.productSheet.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductSheet() {
    DOM.productSheet.classList.remove('active');
    DOM.productSheet.style.transform = '';
    DOM.productBackdrop.classList.remove('active');
    document.body.style.overflow = '';
    currentProduct = null;
}

function updateAddPrice() {
    if (!currentProduct) return;
    const price = currentFormat === 'menu' ? currentProduct.menu : currentProduct.seul;
    const total = price * currentQty;
    DOM.addPrice.textContent = `${total.toFixed(2)} €`;
}

// ===== CART =====
function openCart() {
    DOM.sheetBackdrop.classList.add('active');
    DOM.cartSheet.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCartItems();
}

function closeCart() {
    DOM.cartSheet.classList.remove('active');
    DOM.cartSheet.style.transform = '';
    DOM.sheetBackdrop.classList.remove('active');
    document.body.style.overflow = '';
}

function closeAllSheets() {
    closeCart();
    closeProductSheet();
}

function addToCart() {
    if (!currentProduct) return;

    const price = currentFormat === 'menu' ? currentProduct.menu : currentProduct.seul;

    const cartItem = {
        id: `${currentProduct.id}-${Date.now()}`,
        productId: currentProduct.id,
        name: currentProduct.name,
        icon: currentProduct.icon,
        price: price,
        qty: currentQty,
        format: currentFormat,
        options: { ...currentOptions }
    };

    cart.push(cartItem);
    saveCart();
    updateCartBadge();
    closeProductSheet();
    showToast('Ajouté au panier');
}

function renderCartItems() {
    if (cart.length === 0) {
        DOM.emptyCart.classList.remove('hidden');
        DOM.cartFooter.classList.add('hidden');
        DOM.cartItems.innerHTML = '';
        return;
    }

    DOM.emptyCart.classList.add('hidden');
    DOM.cartFooter.classList.remove('hidden');

    DOM.cartItems.innerHTML = cart.map(item => {
        const optStr = Object.values(item.options).filter(v => v).join(', ');
        return `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-icon">${item.icon}</div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-options">${item.format === 'menu' ? 'Menu' : 'Seul'}${optStr ? ' • ' + optStr : ''}</div>
                    <div class="cart-item-bottom">
                        <div class="cart-item-price">${(item.price * item.qty).toFixed(2)} €</div>
                        <div class="cart-item-controls">
                            <button class="cart-control-btn ${item.qty === 1 ? 'delete' : ''}" data-action="minus" data-id="${item.id}">
                                ${item.qty === 1 ? '🗑' : '−'}
                            </button>
                            <span class="cart-item-qty">${item.qty}</span>
                            <button class="cart-control-btn" data-action="plus" data-id="${item.id}">+</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Control events
    DOM.cartItems.querySelectorAll('.cart-control-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = btn.dataset.id;
            const action = btn.dataset.action;
            updateCartQty(id, action === 'plus' ? 1 : -1);
        });
    });

    updateCartTotals();
}

function updateCartQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== id);
    }

    saveCart();
    updateCartBadge();
    renderCartItems();
}

function updateCartTotals() {
    const total = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    DOM.subtotal.textContent = `${total.toFixed(2)} €`;
    DOM.totalAmount.textContent = `${total.toFixed(2)} €`;
    DOM.checkoutPrice.textContent = `${total.toFixed(2)} €`;
}

function updateCartBadge() {
    const count = cart.reduce((sum, i) => sum + i.qty, 0);
    DOM.cartBadge.textContent = count;
    DOM.cartBadge.classList.toggle('visible', count > 0);
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartBadge();
    renderCartItems();
}

function checkout() {
    if (cart.length === 0) return;
    closeCart();
    openCheckoutModal();
}

function saveCart() {
    localStorage.setItem('nanburger_cart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('nanburger_cart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartBadge();
    }
}

// ===== SEARCH =====
function openSearch() {
    DOM.searchView.classList.add('active');
    DOM.searchInput.focus();
}

function closeSearch() {
    DOM.searchView.classList.remove('active');
    DOM.searchInput.value = '';
    DOM.searchClear.classList.remove('visible');
}

// ===== INFO VIEW =====
function openInfoView() {
    document.getElementById('infoView').classList.add('active');
}

function closeInfoView() {
    document.getElementById('infoView').classList.remove('active');
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    DOM.searchClear.classList.toggle('visible', query.length > 0);

    if (query.length < 2) {
        renderSearchResults([]);
        return;
    }

    const results = [];
    Object.entries(menuData).forEach(([cat, data]) => {
        data.items.forEach(item => {
            if (item.name.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query)) {
                results.push({ ...item, category: cat, categoryTitle: data.title });
            }
        });
    });

    renderSearchResults(results);
}

function renderSearchResults(results) {
    if (results.length === 0) {
        DOM.searchResults.innerHTML = '<p style="text-align:center;color:var(--text-tertiary);padding:40px;">Aucun résultat</p>';
        return;
    }

    DOM.searchResults.innerHTML = `
        <div class="products-grid">
            ${results.map(item => createProductCard(item, item.category)).join('')}
        </div>
    `;

    // Click events
    DOM.searchResults.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const cat = card.dataset.cat;
            const id = card.dataset.id;
            const item = menuData[cat].items.find(i => i.id === id);
            if (item) openProductSheet(item, cat);
        });
    });
}

// ===== TOAST =====
function showToast(msg) {
    DOM.toastMsg.textContent = msg;
    DOM.toast.classList.add('show');
    setTimeout(() => DOM.toast.classList.remove('show'), 2500);
}

// ===== CHECKOUT MODAL =====
const checkoutDOM = {
    backdrop: document.getElementById('checkoutBackdrop'),
    modal: document.getElementById('checkoutModal'),
    close: document.getElementById('checkoutClose'),
    form: document.getElementById('checkoutForm'),
    customerName: document.getElementById('customerName'),
    customerPhone: document.getElementById('customerPhone'),
    pickupTime: document.getElementById('pickupTime'),
    total: document.getElementById('checkoutTotal'),
    confirmBtn: document.getElementById('confirmOrderBtn'),
    success: document.getElementById('checkoutSuccess'),
    orderNum: document.getElementById('successOrderNum'),
    closeSuccess: document.getElementById('closeSuccessBtn')
};

function openCheckoutModal() {
    const total = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    checkoutDOM.total.textContent = `${total.toFixed(2)} €`;
    checkoutDOM.form.classList.remove('hidden');
    checkoutDOM.success.classList.remove('show');
    checkoutDOM.customerName.value = '';
    checkoutDOM.customerPhone.value = '';

    // Generate pickup time slots
    generatePickupTimeSlots();

    checkoutDOM.backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => checkoutDOM.customerName.focus(), 300);
}

function generatePickupTimeSlots() {
    const select = checkoutDOM.pickupTime;
    select.innerHTML = '<option value="">Choisir une heure</option>';

    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();

    // Restaurant hours (11h-23h en semaine, 11h-00h ven/sam, 12h-22h dim)
    const day = now.getDay();
    let openHour = day === 0 ? 12 : 11; // Dimanche ouvre à 12h
    let closeHour = (day === 5 || day === 6) ? 24 : (day === 0 ? 22 : 23);

    // Start from current time + 20 min (prep time), rounded to next 15 min
    let startMinutes = currentMinutes + 20;
    let startHour = currentHour;

    if (startMinutes >= 60) {
        startHour++;
        startMinutes -= 60;
    }

    // Round to next 15 min slot
    startMinutes = Math.ceil(startMinutes / 15) * 15;
    if (startMinutes >= 60) {
        startHour++;
        startMinutes = 0;
    }

    // If before opening, start at opening time
    if (startHour < openHour) {
        startHour = openHour;
        startMinutes = 0;
    }

    // Generate slots until closing
    for (let h = startHour; h < closeHour; h++) {
        for (let m = (h === startHour ? startMinutes : 0); m < 60; m += 15) {
            const timeStr = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
            const option = document.createElement('option');
            option.value = timeStr;
            option.textContent = timeStr;
            select.appendChild(option);
        }
    }

    // Add "Dès que possible" as first option after placeholder
    if (select.options.length > 1) {
        const asap = document.createElement('option');
        asap.value = 'asap';
        asap.textContent = '⚡ Dès que possible (~20 min)';
        select.insertBefore(asap, select.options[1]);
    }
}

function closeCheckoutModal() {
    checkoutDOM.backdrop.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listeners checkout
checkoutDOM.backdrop.addEventListener('click', (e) => {
    if (e.target === checkoutDOM.backdrop) {
        closeCheckoutModal();
    }
});

checkoutDOM.close.addEventListener('click', closeCheckoutModal);
checkoutDOM.closeSuccess.addEventListener('click', closeCheckoutModal);

checkoutDOM.form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const customerName = checkoutDOM.customerName.value.trim();
    const customerPhone = checkoutDOM.customerPhone.value.trim();
    const pickupTime = checkoutDOM.pickupTime.value;
    const total = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);

    // Préparer les items pour l'API
    const items = cart.map(item => ({
        productId: item.productId,
        name: item.name,
        icon: item.icon,
        price: item.price,
        qty: item.qty,
        format: item.format,
        options: item.options
    }));

    // Désactiver le bouton
    checkoutDOM.confirmBtn.disabled = true;
    checkoutDOM.confirmBtn.innerHTML = '<span>Envoi en cours...</span>';

    try {
        const response = await fetch('/api/orders.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                customer_name: customerName,
                customer_phone: customerPhone,
                pickup_time: pickupTime === 'asap' ? 'Dès que possible' : pickupTime,
                items: items,
                total: total
            })
        });

        const data = await response.json();

        if (data.success) {
            // Afficher le succès
            checkoutDOM.form.classList.add('hidden');
            checkoutDOM.orderNum.textContent = data.order_number;

            // Afficher l'heure de récupération
            const pickupDisplay = document.getElementById('successPickupTime');
            if (pickupTime === 'asap') {
                pickupDisplay.innerHTML = '⏰ <strong>Dès que possible</strong> (~20 min)';
            } else {
                pickupDisplay.innerHTML = `⏰ Récupération à <strong>${pickupTime}</strong>`;
            }

            checkoutDOM.success.classList.add('show');

            // Vider le panier
            clearCart();
        } else {
            throw new Error(data.error || 'Erreur lors de la commande');
        }
    } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur lors de l\'envoi de la commande. Veuillez réessayer.');
    } finally {
        checkoutDOM.confirmBtn.disabled = false;
        checkoutDOM.confirmBtn.innerHTML = '<span>Confirmer la commande</span>';
    }
});
