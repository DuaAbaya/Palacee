// ============================================
// DUA ABAYA PALACE - Main JavaScript
// ============================================

// ============================================
// PRODUCT DATA
// ============================================
const products = [
    {
        id: 1,
        name: "Ambroidery Nakab",
        category: "Closed Abaya",
        price: 14.46,
        originalPrice: 18.07,
        description: "Elegant black ambroidery nakab abaya with premium golden detailing. Comfortable flowy fabric, ideal for daily wear and occasions.",
        image: "images/abaya_full_1_9x16.png",
        images: [
            "images/abaya_full_1_9x16.png",
            "images/abaya_full_2_9x16.png",
            "images/abaya_full_3_9x16.png"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black"],
        rating: 4.8,
        reviews: 32,
        fabric: "Premium Nidha",
        badge: "new"
    }
];

// ============================================
// TRANSLATIONS
// ============================================
const translations = {
    en: {
        home: "Home",
        shop: "Shop",
        about: "About",
        contact: "Contact",
        cart: "Cart",
        account: "Account",
        search: "Search",
        login: "Login",
        signup: "Sign Up",
        logout: "Logout",
        addToCart: "Add to Cart",
        addToWishlist: "Add to Wishlist",
        removeFromWishlist: "Remove from Wishlist",
        quickView: "Quick View",
        viewDetails: "View Details",
        newArrivals: "New Arrivals",
        bestSellers: "Best Sellers",
        featured: "Featured",
        categories: "Categories",
        price: "Price",
        color: "Color",
        size: "Size",
        filter: "Filter",
        sort: "Sort",
        all: "All",
        subTotal: "Subtotal",
        shipping: "Shipping",
        total: "Total",
        checkout: "Checkout",
        continueShopping: "Continue Shopping",
        emptyCart: "Your cart is empty",
        newsletter: "Newsletter",
        subscribeText: "Subscribe to get special offers",
        emailPlaceholder: "Enter your email",
        subscribe: "Subscribe",
        quickLinks: "Quick Links",
        customerService: "Customer Service",
        myAccount: "My Account",
        orders: "Orders",
        addresses: "Addresses",
        wishlist: "Wishlist",
        recentlyViewed: "Recently Viewed",
        language: "Language",
        currency: "Currency",
        darkMode: "Dark Mode",
        lightMode: "Light Mode"
    },
    ur: {
        home: "گھر",
        shop: "دکان",
        about: "ہمارے بارے میں",
        contact: "رابطہ",
        cart: "کارٹ",
        account: "اکاؤنٹ",
        search: "تلاش",
        login: "لاگ ان",
        signup: "سائن اپ",
        logout: "لاگ آوٹ",
        addToCart: "کارٹ میں شامل کریں",
        addToWishlist: "ویش لسٹ میں شامل کریں",
        removeFromWishlist: "ویش لسٹ سے ہٹائیں",
        quickView: "جلدی دیکھیں",
        viewDetails: "تفصیلات دیکھیں",
        newArrivals: "نیا آنے والا",
        bestSellers: "بہترین فروخت",
        featured: "خصوصی",
        categories: "زمرے",
        price: "قیمت",
        color: "رنگ",
        size: "سائز",
        filter: "فلٹر",
        sort: "ترتیب دیں",
        all: "سب",
        subTotal: "ذیلی رقم",
        shipping: "شپنگ",
        total: "کل",
        checkout: "چیک آؤٹ",
        continueShopping: "خریداری جاری رکھیں",
        emptyCart: "آپ کا کارٹ خالی ہے",
        newsletter: "نیوز لیٹر",
        subscribeText: "خاص پیشکشیں حاصل کرنے کے لیے سائن اپ کریں",
        emailPlaceholder: "ای میل درج کریں",
        subscribe: "سائن اپ",
        quickLinks: "فوری روابط",
        customerService: "گاہک کی خدمت",
        myAccount: "میرا اکاؤنٹ",
        orders: "احکامات",
        addresses: "پتے",
        wishlist: "ویش لسٹ",
        recentlyViewed: "حال ہی میں دیکھا گیا",
        language: "زبان",
        currency: "کرنسی",
        darkMode: "ڈارک موڈ",
        lightMode: "لائٹ موڈ"
    },
    hi: {
        home: "होम",
        shop: "दुकान",
        about: "हमारे बारे में",
        contact: "संपर्क",
        cart: "कार्ट",
        account: "खाता",
        search: "खोजें",
        login: "लॉगिन",
        signup: "साइन अप",
        logout: "लॉगआउट",
        addToCart: "कार्ट में जोड़ें",
        addToWishlist: "विशलिस्ट में जोड़ें",
        removeFromWishlist: "विशलिस्ट से हटाएं",
        quickView: "त्वरित देखें",
        viewDetails: "विवरण देखें",
        newArrivals: "नए आगमन",
        bestSellers: "बेस्ट सेलर",
        featured: "विशेष",
        categories: "श्रेणियाँ",
        price: "कीमत",
        color: "रंग",
        size: "आकार",
        filter: "फ़िल्टर",
        sort: "क्रमबद्ध करें",
        all: "सभी",
        subTotal: "उप-कुल",
        shipping: "शिपिंग",
        total: "कुल",
        checkout: "चेकआउट",
        continueShopping: "खरीदारी जारी रखें",
        emptyCart: "आपका कार्ट खाली है",
        newsletter: "न्यूज़लेटर",
        subscribeText: "विशेष ऑफ़र प्राप्त करने के लिए साइन अप करें",
        emailPlaceholder: "ईमेल दर्ज करें",
        subscribe: "साइन अप",
        quickLinks: "त्वरित लिंक",
        customerService: "ग्राहक सेवा",
        myAccount: "मेरा खाता",
        orders: "आदेश",
        addresses: "पते",
        wishlist: "विशलिस्ट",
        recentlyViewed: "हाल ही में देखा गया",
        language: "भाषा",
        currency: "मुद्रा",
        darkMode: "डार्क मोड",
        lightMode: "लाइट मोड"
    }
};

// ============================================
// APP STATE
// ============================================
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentLanguage = localStorage.getItem('language') || 'en';
const storedCurrency = localStorage.getItem('currency');
let currentCurrency = storedCurrency && storedCurrency !== 'USD' ? storedCurrency : 'INR';
let currentTheme = localStorage.getItem('theme') || 'light';

const CUSTOM_PRODUCTS_KEY = 'customProducts';
let customProductsLoaded = false;

const currencySymbols = {
    INR: '₹',
    PKR: '₨',
    USD: '$',
    SAR: '﷼',
    AED: 'د.إ'
};

const exchangeRates = {
    INR: 83,
    PKR: 280,
    USD: 1,
    SAR: 3.75,
    AED: 3.67
};

const TRACKING_CONFIG = {
    ga4MeasurementId: "",
    metaPixelId: "",
    orderWebhookUrl: "https://formsubmit.co/ajax/tanveerkhan.ltp786786@gmail.com",
    adminEmail: "tanveerkhan.ltp786786@gmail.com"
};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function normalizeCustomProduct(rawProduct) {
    const fallbackImage = 'images/abaya_full_1_9x16.png';
    const parsedPrice = Number(rawProduct.price || 0);
    const parsedOriginal = Number(rawProduct.originalPrice || 0);
    const imageList = Array.isArray(rawProduct.images) ? rawProduct.images.filter(Boolean) : [];
    const mainImage = rawProduct.image || imageList[0] || fallbackImage;

    return {
        id: Number(rawProduct.id) || Date.now(),
        name: (rawProduct.name || 'Custom Abaya').trim(),
        category: (rawProduct.category || 'Closed Abaya').trim(),
        price: parsedPrice > 0 ? parsedPrice : 1,
        originalPrice: parsedOriginal > parsedPrice ? parsedOriginal : undefined,
        description: (rawProduct.description || `${rawProduct.name || 'Custom Abaya'} - handcrafted elegant abaya.`).trim(),
        image: mainImage,
        images: imageList.length ? imageList : [mainImage],
        sizes: Array.isArray(rawProduct.sizes) && rawProduct.sizes.length ? rawProduct.sizes : ['S', 'M', 'L', 'XL'],
        colors: Array.isArray(rawProduct.colors) && rawProduct.colors.length ? rawProduct.colors : ['Black'],
        rating: Number(rawProduct.rating || 4.8),
        reviews: Number(rawProduct.reviews || 0),
        fabric: (rawProduct.fabric || 'Premium Nidha').trim(),
        badge: (rawProduct.badge || 'new').trim(),
        isCustom: true
    };
}

function getStoredCustomProducts() {
    const raw = localStorage.getItem(CUSTOM_PRODUCTS_KEY);
    if (!raw) return [];
    try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed.map(normalizeCustomProduct) : [];
    } catch (error) {
        return [];
    }
}

function saveStoredCustomProducts(customProducts) {
    localStorage.setItem(CUSTOM_PRODUCTS_KEY, JSON.stringify(customProducts));
}

function loadCustomProducts() {
    if (customProductsLoaded) return;
    const customProducts = getStoredCustomProducts();
    customProducts.forEach(product => {
        if (!products.find(p => Number(p.id) === Number(product.id))) {
            products.push(product);
        }
    });
    customProductsLoaded = true;
}

function addAdminProduct(rawProduct) {
    const newProduct = normalizeCustomProduct({
        ...rawProduct,
        id: Date.now()
    });

    const customProducts = getStoredCustomProducts();
    customProducts.unshift(newProduct);
    saveStoredCustomProducts(customProducts);

    products.push(newProduct);
    return newProduct;
}

function removeAdminProduct(productId) {
    const targetId = Number(productId);
    const customProducts = getStoredCustomProducts();
    const nextCustom = customProducts.filter(product => Number(product.id) !== targetId);
    if (nextCustom.length === customProducts.length) {
        return false;
    }

    saveStoredCustomProducts(nextCustom);

    const index = products.findIndex(product => Number(product.id) === targetId && product.isCustom);
    if (index !== -1) {
        products.splice(index, 1);
    }
    return true;
}
function initializeApp() {
    loadCustomProducts();
    initializeTrackingScripts();
    loadTheme();
    loadLanguage();
    updateCartCount();
    updateWishlistCount();
    setupEventListeners();
    showWelcomePopup();
}

// ============================================
// THEME
// ============================================
function loadTheme() {
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const themeIcon = document.querySelector('.theme-toggle');
    if (themeIcon) {
        themeIcon.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';
    }
}

// ============================================
// LANGUAGE
// ============================================
function loadLanguage() {
    currentLanguage = localStorage.getItem('language') || 'en';
    updateLanguageSelector();
    updateTranslations();
}

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateLanguageSelector();
    updateTranslations();
    showToast(translations[lang].language + ' changed successfully!');
}

function updateLanguageSelector() {
    const langSelect = document.getElementById('language-select');
    if (langSelect) {
        langSelect.value = currentLanguage;
    }
}

function updateTranslations() {
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

// ============================================
// CURRENCY
// ============================================
function changeCurrency(currency) {
    currentCurrency = currency;
    localStorage.setItem('currency', currency);
    updatePrices();
    showToast('Currency changed to ' + currency);
}

function convertPrice(priceUSD) {
    return (priceUSD * exchangeRates[currentCurrency]).toFixed(2);
}

function convertPriceToCurrency(priceUSD, currencyCode = currentCurrency) {
    const rate = exchangeRates[currencyCode] || 1;
    return Number((priceUSD * rate).toFixed(2));
}

function formatPrice(priceUSD) {
    const converted = convertPrice(priceUSD);
    return currencySymbols[currentCurrency] + converted;
}

function updatePrices() {
    document.querySelectorAll('.price-convert').forEach(element => {
        const usdPrice = parseFloat(element.dataset.price);
        element.textContent = formatPrice(usdPrice);
    });
}

// ============================================
// CART FUNCTIONS
// ============================================
function addToCart(productId, size = null, color = null, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cartItem = {
        ...product,
        cartId: Date.now(),
        size: size || product.sizes[0],
        color: color || product.colors[0],
        quantity: quantity
    };

    cart.push(cartItem);
    saveCart();
    updateCartCount();
    showToast('Product added to cart!');
}

function removeFromCart(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    saveCart();
    updateCartCount();
    renderCart();
    showToast('Product removed from cart');
}

function updateCartQuantity(cartId, change) {
    const item = cart.find(i => i.cartId === cartId);
    if (item) {
        item.quantity += change;
        if (item.quantity < 1) {
            removeFromCart(cartId);
            return;
        }
        saveCart();
        updateCartCount();
        renderCart();
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const countElements = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    countElements.forEach(el => {
        el.textContent = totalItems;
        el.style.display = totalItems > 0 ? 'flex' : 'none';
    });
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function getCartTotalFormatted() {
    return formatPrice(getCartTotal());
}

// ============================================
// CHECKOUT / TRACKING
// ============================================
function initializeTrackingScripts() {
    if (TRACKING_CONFIG.ga4MeasurementId && !window.gtag) {
        const gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${TRACKING_CONFIG.ga4MeasurementId}`;
        document.head.appendChild(gaScript);

        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag() {
            window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', TRACKING_CONFIG.ga4MeasurementId);
    }

    if (TRACKING_CONFIG.metaPixelId && !window.fbq) {
        window.fbq = function fbq() {
            window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments);
        };
        if (!window._fbq) {
            window._fbq = window.fbq;
        }
        window.fbq.push = window.fbq;
        window.fbq.loaded = true;
        window.fbq.version = '2.0';
        window.fbq.queue = [];

        const pixelScript = document.createElement('script');
        pixelScript.async = true;
        pixelScript.src = 'https://connect.facebook.net/en_US/fbevents.js';
        document.head.appendChild(pixelScript);

        window.fbq('init', TRACKING_CONFIG.metaPixelId);
        window.fbq('track', 'PageView');
    }
}

function generateOrderId() {
    return `ORD-${Date.now()}`;
}

function getCheckoutFormValue(form, selector) {
    const field = form.querySelector(selector);
    return field ? field.value.trim() : '';
}

function createCheckoutOrder(formElement) {
    const selectedPayment = formElement.querySelector('input[name="payment"]:checked');
    const subtotalUSD = getCartTotal();
    const subtotalINR = convertPriceToCurrency(subtotalUSD, 'INR');

    const items = cart.map(item => ({
        id: item.id,
        name: item.name,
        priceUSD: item.price,
        priceINR: convertPriceToCurrency(item.price, 'INR'),
        quantity: item.quantity,
        size: item.size,
        color: item.color
    }));

    return {
        orderId: generateOrderId(),
        createdAt: new Date().toISOString(),
        currency: 'INR',
        displayCurrency: currentCurrency,
        displayTotal: `${currencySymbols.INR}${subtotalINR.toFixed(2)}`,
        subtotal: subtotalINR,
        total: subtotalINR,
        subtotalUSD: Number(subtotalUSD.toFixed(2)),
        totalUSD: Number(subtotalUSD.toFixed(2)),
        itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
        paymentMethod: selectedPayment ? selectedPayment.value : 'card',
        customer: {
            firstName: getCheckoutFormValue(formElement, '[name="firstName"]') || getCheckoutFormValue(formElement, 'input[placeholder="Enter first name"]'),
            lastName: getCheckoutFormValue(formElement, '[name="lastName"]') || getCheckoutFormValue(formElement, 'input[placeholder="Enter last name"]'),
            email: getCheckoutFormValue(formElement, '[name="email"]') || getCheckoutFormValue(formElement, 'input[type="email"]'),
            phone: getCheckoutFormValue(formElement, '[name="phone"]') || getCheckoutFormValue(formElement, 'input[type="tel"]'),
            street: getCheckoutFormValue(formElement, '[name="street"]') || getCheckoutFormValue(formElement, 'input[placeholder="Enter street address"]'),
            apartment: getCheckoutFormValue(formElement, '[name="apartment"]') || getCheckoutFormValue(formElement, 'input[placeholder="Enter apartment details"]'),
            city: getCheckoutFormValue(formElement, '[name="city"]') || getCheckoutFormValue(formElement, 'input[placeholder="Enter city"]'),
            state: getCheckoutFormValue(formElement, '[name="state"]') || getCheckoutFormValue(formElement, 'input[placeholder="Enter state"]'),
            postalCode: getCheckoutFormValue(formElement, '[name="postalCode"]') || getCheckoutFormValue(formElement, 'input[placeholder="Enter postal code"]'),
            country: getCheckoutFormValue(formElement, '[name="country"]') || getCheckoutFormValue(formElement, 'select')
        },
        items: items,
        paymentScreenshotName: (function () {
            const screenshotInput = (formElement && formElement.querySelector('input[name="paymentScreenshot"]')) || document.getElementById('popupPaymentScreenshotInput');
            if (!screenshotInput || !screenshotInput.files || !screenshotInput.files.length) return '';
            return screenshotInput.files[0].name || '';
        })(),
        source: {
            page: window.location.href,
            userAgent: navigator.userAgent
        }
    };
}

function trackPurchase(order) {
    if (typeof window.gtag === 'function') {
        window.gtag('event', 'purchase', {
            transaction_id: order.orderId,
            value: order.total,
            currency: order.currency,
            items: order.items.map(item => ({
                item_id: item.id,
                item_name: item.name,
                price: item.priceINR,
                quantity: item.quantity
            }))
        });
    }

    if (typeof window.fbq === 'function') {
        window.fbq('track', 'Purchase', {
            value: order.total,
            currency: order.currency,
            contents: order.items.map(item => ({
                id: item.id,
                quantity: item.quantity,
                item_price: item.priceINR
            })),
            content_type: 'product'
        });
    }
}

async function notifyOrderWebhook(order, formElement) {
    if (!TRACKING_CONFIG.orderWebhookUrl) return;

    const isFormSubmit = TRACKING_CONFIG.orderWebhookUrl.includes('formsubmit.co');
    if (isFormSubmit) {
        await sendOrderToFormSubmit(order, formElement);
        return;
    }

    const payload = {
        ...order,
        adminEmail: TRACKING_CONFIG.adminEmail || null
    };

    const response = await fetch(TRACKING_CONFIG.orderWebhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        throw new Error(`Webhook failed with status ${response.status}`);
    }
}

async function sendOrderToFormSubmit(order, formElement) {
    const payload = createFormSubmitPayload(order);
    const emailTarget = encodeURIComponent(TRACKING_CONFIG.adminEmail);
    const screenshotInput = (formElement && formElement.querySelector('input[name="paymentScreenshot"]')) || document.getElementById('popupPaymentScreenshotInput');
    const screenshotFile = screenshotInput && screenshotInput.files && screenshotInput.files.length ? screenshotInput.files[0] : null;

    // For attachments, send multipart directly to non-AJAX FormSubmit endpoint.
    // This is the most reliable path for file delivery in email.
    if (screenshotFile) {
        const formData = new FormData();
        Object.entries(payload).forEach(([key, value]) => formData.append(key, value));
        formData.append('attachment', screenshotFile, screenshotFile.name || 'payment-screenshot.png');

        await fetch(`https://formsubmit.co/${emailTarget}`, {
            method: 'POST',
            mode: 'no-cors',
            body: formData,
            keepalive: true
        });
        return;
    }

    try {
        const ajaxResponse = await fetch(`https://formsubmit.co/ajax/${emailTarget}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (ajaxResponse.ok) {
            return;
        }
    } catch (error) {
        console.warn('FormSubmit AJAX failed, using fallback POST.', error);
    }

    // Fallback POST works even where CORS blocks AJAX response reading.
    const formBody = new URLSearchParams(payload).toString();
    await fetch(`https://formsubmit.co/${emailTarget}`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody,
        keepalive: true
    });
}
function createFormSubmitPayload(order) {
    const customerName = `${order.customer.firstName} ${order.customer.lastName}`.trim();
    const addressParts = [
        order.customer.street,
        order.customer.apartment,
        order.customer.city,
        order.customer.state,
        order.customer.postalCode,
        order.customer.country
    ].filter(Boolean);

    const itemLines = order.items.map((item, index) =>
        `${index + 1}. ${item.name} | Qty: ${item.quantity} | Size: ${item.size} | Color: ${item.color} | Unit: INR ${item.priceINR.toFixed(2)} | Line: INR ${(item.priceINR * item.quantity).toFixed(2)}`
    ).join('\n');

        const orderDetails = [
        `Order ID: ${order.orderId}`,
        `Date: ${order.createdAt}`,
        `Payment: ${order.paymentMethod}`,
        `Currency: INR`,
        `Subtotal: INR ${order.subtotal.toFixed(2)}`,
        `Total: INR ${order.total.toFixed(2)}`,
        `Reference USD Total: $${order.totalUSD.toFixed(2)}`,
        `Payment Screenshot: ${order.paymentScreenshotName || 'Not uploaded'}`,
        '',
        'Customer Details:',
        `Name: ${customerName}`,
        `Email: ${order.customer.email}`,
        `Phone: ${order.customer.phone}`,
        `Address: ${addressParts.join(', ')}`,
        '',
        'Items:',
        itemLines
    ].join('\n');

    return {
        _subject: `New Checkout Order: ${order.orderId}`,
        name: customerName || 'Website Customer',
        email: TRACKING_CONFIG.adminEmail,
        _replyto: order.customer.email || TRACKING_CONFIG.adminEmail,
        phone: order.customer.phone || '',
        order_id: order.orderId,
        payment_method: order.paymentMethod,
        order_total_inr: String(order.total),
        order_total_usd: String(order.totalUSD),
        order_details: orderDetails,
        message: orderDetails,
        _captcha: 'false',
        _template: 'table',
        _autoresponse: '',
        order_json: JSON.stringify(order, null, 2)
    };
}

function saveRecentOrder(order) {
    localStorage.setItem('lastOrder', JSON.stringify(order));
}

// ============================================
// WISHLIST FUNCTIONS
// ============================================
function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (!wishlist.find(p => p.id === productId)) {
        wishlist.push(product);
        saveWishlist();
        updateWishlistCount();
        showToast('Added to wishlist!');
        updateWishlistButtons();
    }
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(p => p.id !== productId);
    saveWishlist();
    updateWishlistCount();
    showToast('Removed from wishlist');
    updateWishlistButtons();
    renderWishlist();
}

function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function updateWishlistCount() {
    const countElements = document.querySelectorAll('.wishlist-count');
    countElements.forEach(el => {
        el.textContent = wishlist.length;
        el.style.display = wishlist.length > 0 ? 'flex' : 'none';
    });
}

function updateWishlistButtons() {
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        const productId = parseInt(btn.dataset.productId);
        const isInWishlist = wishlist.find(p => p.id === productId);
        btn.classList.toggle('active', !!isInWishlist);
    });
}

function isInWishlist(productId) {
    return wishlist.find(p => p.id === productId);
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    // Navbar scroll
    window.addEventListener('scroll', handleScroll);
    
    // Mobile menu
    setupMobileMenu();
    
    // Search
    setupSearch();
    
    // Quick view modal
    setupQuickView();
    
    // Newsletter
    setupNewsletter();
    
    // Popup
    setupPopup();
    
    // Product tabs
    setupProductTabs();
    
    // Filter
    setupFilters();
    
    // Theme toggle
    setupThemeToggle();
}

// ============================================
// SCROLL HANDLER
// ============================================
function handleScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Scroll to top button
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
        if (window.scrollY > 300) {
            scrollTop.classList.add('visible');
        } else {
            scrollTop.classList.remove('visible');
        }
    }
}

// ============================================
// MOBILE MENU
// ============================================
function setupMobileMenu() {
    const toggle = document.querySelector('.navbar-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.mobile-menu-close');
    const overlay = document.querySelector('.mobile-overlay');
    
    if (toggle && mobileMenu) {
        toggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        if (closeBtn) {
            closeBtn.addEventListener('click', closeMobileMenu);
        }
        
        if (overlay) {
            overlay.addEventListener('click', closeMobileMenu);
        }
    }
}

function closeMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-overlay');
    
    if (mobileMenu) mobileMenu.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// SEARCH
// ============================================
function setupSearch() {
    const searchIcon = document.querySelector('.search-toggle');
    const searchBar = document.querySelector('.search-bar');
    const closeSearch = document.querySelector('.search-close');
    
    if (searchIcon && searchBar) {
        searchIcon.addEventListener('click', () => {
            searchBar.classList.toggle('active');
            if (searchBar.classList.contains('active')) {
                searchBar.querySelector('input')?.focus();
            }
        });
        
        if (closeSearch) {
            closeSearch.addEventListener('click', () => {
                searchBar.classList.remove('active');
            });
        }
    }
}

// ============================================
// QUICK VIEW
// ============================================
function setupQuickView() {
    const modal = document.getElementById('quickViewModal');
    const closeBtn = document.querySelector('.modal-close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeQuickView);
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeQuickView();
            }
        });
    }
}

function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('quickViewModal');
    if (!modal) return;
    
    const content = modal.querySelector('.quick-view-content');
    const gallery = product.images && product.images.length ? product.images : [product.image];
    content.innerHTML = `
        <div class="quick-view-image">
            <img id="quickViewMainImage" src="${gallery[0]}" alt="${product.name}">
            <div class="quick-view-thumbnails">
                ${gallery.map((img, i) => `
                    <button class="quick-view-thumb ${i === 0 ? 'active' : ''}" type="button" data-image="${img}">
                        <img src="${img}" alt="${product.name} view ${i + 1}">
                    </button>
                `).join('')}
            </div>
        </div>
        <div class="quick-view-info">
            <span class="product-detail-category">${product.category}</span>
            <h3>${product.name}</h3>
            <div class="product-price">
                <span class="current price-convert" data-price="${product.price}">${formatPrice(product.price)}</span>
                ${product.originalPrice ? `<span class="original price-convert" data-price="${product.originalPrice}">${formatPrice(product.originalPrice)}</span>` : ''}
            </div>
            <p>${product.description}</p>
            <div class="product-options">
                <div class="product-option">
                    <label>Size:</label>
                    <div class="size-options">
                        ${product.sizes.map(s => `<div class="size-option">${s}</div>`).join('')}
                    </div>
                </div>
                <div class="product-option">
                    <label>Color:</label>
                    <div class="color-options">
                        ${product.colors.map(c => `<div class="color-option" style="background: ${c.toLowerCase()}"></div>`).join('')}
                    </div>
                </div>
            </div>
            <button class="btn btn-primary" onclick="addToCart(${product.id})">
                ${translations[currentLanguage].addToCart}
            </button>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Setup size/color selection in quick view
    setupQuickViewOptions();
}

function closeQuickView() {
    const modal = document.getElementById('quickViewModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function setupQuickViewOptions() {
    document.querySelectorAll('.quick-view-info .size-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.quick-view-info .size-option').forEach(o => o.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    document.querySelectorAll('.quick-view-info .color-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.quick-view-info .color-option').forEach(o => o.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const mainImage = document.getElementById('quickViewMainImage');
    document.querySelectorAll('.quick-view-thumb').forEach(thumb => {
        thumb.addEventListener('click', function() {
            if (!mainImage) return;
            mainImage.src = this.dataset.image;
            document.querySelectorAll('.quick-view-thumb').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// ============================================
// NEWSLETTER
// ============================================
function setupNewsletter() {
    const form = document.querySelector('.newsletter-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input').value;
            if (email) {
                showToast('Thank you for subscribing!');
                form.reset();
            }
        });
    }
}

// ============================================
// POPUP
// ============================================
function showWelcomePopup() {
    const popup = document.getElementById('welcomePopup');
    const shown = localStorage.getItem('popupShown');
    
    // Show popup if not shown in this session or after 24 hours
    if (!shown || Date.now() - parseInt(shown) > 86400000) {
        setTimeout(() => {
            if (popup) {
                popup.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }, 3000);
        
        localStorage.setItem('popupShown', Date.now());
    }
}

function setupPopup() {
    const closeButtons = document.querySelectorAll('.popup-close, .popup .btn');
    const popup = document.getElementById('welcomePopup');
    
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (popup) {
                popup.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    if (popup) {
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// ============================================
// PRODUCT TABS
// ============================================
function setupProductTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(tabId)?.classList.add('active');
        });
    });
}

// ============================================
// FILTERS
// ============================================
function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-option input');
    const filterPanel = document.querySelector('.shop-filters');
    const filterToggleBtn = document.querySelector('.shop-filter-toggle');
    const filterCloseBtn = document.querySelector('.shop-filter-close');
    const filterOverlay = document.querySelector('.shop-filter-overlay');
    const applyBtn = filterPanel?.querySelector('.btn.btn-primary');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('change', applyFilters);
    });

    if (!filterPanel || !filterToggleBtn || !filterOverlay) return;

    const closeFiltersPanel = () => {
        filterPanel.classList.remove('is-open');
        filterOverlay.classList.remove('active');
        document.body.classList.remove('filters-open');
        filterToggleBtn.setAttribute('aria-expanded', 'false');
    };

    const openFiltersPanel = () => {
        filterPanel.classList.add('is-open');
        filterOverlay.classList.add('active');
        document.body.classList.add('filters-open');
        filterToggleBtn.setAttribute('aria-expanded', 'true');
    };

    filterToggleBtn.addEventListener('click', openFiltersPanel);
    filterToggleBtn.addEventListener('touchstart', openFiltersPanel, { passive: true });
    filterCloseBtn?.addEventListener('click', closeFiltersPanel);
    filterCloseBtn?.addEventListener('touchstart', closeFiltersPanel, { passive: true });
    filterOverlay.addEventListener('click', closeFiltersPanel);
    filterOverlay.addEventListener('touchstart', closeFiltersPanel, { passive: true });
    applyBtn?.addEventListener('click', () => {
        if (window.innerWidth <= 992) closeFiltersPanel();
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) closeFiltersPanel();
    });
}

function applyFilters() {
    // Get selected categories
    const categories = Array.from(document.querySelectorAll('.filter-option input:checked'))
        .map(input => input.value);
    
    // Get price range
    const minPrice = parseFloat(document.getElementById('minPrice')?.value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice')?.value) || Infinity;
    
    // Filter products
    let filtered = products.filter(product => {
        const categoryMatch = categories.length === 0 || categories.includes(product.category);
        const priceMatch = product.price >= minPrice && product.price <= maxPrice;
        return categoryMatch && priceMatch;
    });
    
    // Sort
    const sortValue = document.getElementById('sortSelect')?.value;
    if (sortValue === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'newest') {
        filtered.sort((a, b) => (b.badge === 'new' ? 1 : 0) - (a.badge === 'new' ? 1 : 0));
    }
    
    renderProducts(filtered);
}

// ============================================
// THEME TOGGLE
// ============================================
function setupThemeToggle() {
    const themeBtn = document.querySelector('.theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
        updateThemeIcon();
    }
}

// ============================================
// RENDER FUNCTIONS
// ============================================
function renderProducts(productsToRender = products) {
    const grid = document.querySelector('.products-grid, .shop-products-grid');
    if (!grid) return;
    
    grid.innerHTML = productsToRender.map(product => createProductCard(product)).join('');
    const results = document.querySelector('.shop-results');
    if (results) {
        results.textContent = `Showing ${productsToRender.length} products`;
    }
    updateWishlistButtons();
    updatePrices();
}

function createProductCard(product) {
    const isWishlisted = isInWishlist(product.id);
    return `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.badge ? `<div class="product-badges">
                    <span class="product-badge ${product.badge}">${product.badge}</span>
                </div>` : ''}
                <div class="product-actions">
                    <button class="product-action-btn wishlist ${isWishlisted ? 'active' : ''}" 
                            onclick="${isWishlisted ? `removeFromWishlist(${product.id})` : `addToWishlist(${product.id})`}"
                            data-product-id="${product.id}">
                        ♥
                    </button>
                    <button class="product-action-btn" onclick="openQuickView(${product.id})">
                        👁
                    </button>
                </div>
                <div class="product-quick-view" onclick="openQuickView(${product.id})">
                    Quick View
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">
                    <a href="product.html?id=${product.id}">${product.name}</a>
                </h3>
                <div class="product-price">
                    <span class="current price-convert" data-price="${product.price}">${formatPrice(product.price)}</span>
                    ${product.originalPrice ? `<span class="original price-convert" data-price="${product.originalPrice}">${formatPrice(product.originalPrice)}</span>` : ''}
                </div>
                <div class="product-rating">
                    ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                    <span>(${product.reviews})</span>
                </div>
            </div>
        </div>
    `;
}

function renderCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartSummary = document.querySelector('.cart-summary');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="cart-empty">
                <i>🛒</i>
                <h3>${translations[currentLanguage].emptyCart}</h3>
                <p>Add some products to your cart to see them here.</p>
                <a href="shop.html" class="btn btn-primary">${translations[currentLanguage].continueShopping}</a>
            </div>
        `;
        if (cartSummary) cartSummary.style.display = 'none';
        return;
    }
    
    if (cartSummary) cartSummary.style.display = 'block';
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>Size: ${item.size}</p>
                <p>Color: ${item.color}</p>
            </div>
            <div class="cart-item-price price-convert" data-price="${item.price}">
                ${formatPrice(item.price)}
            </div>
            <div class="cart-item-quantity">
                <button onclick="updateCartQuantity(${item.cartId}, -1)">−</button>
                <span>${item.quantity}</span>
                <button onclick="updateCartQuantity(${item.cartId}, 1)">+</button>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.cartId})">✕</button>
        </div>
    `).join('');
    
    // Update summary
    const summaryRows = document.querySelectorAll('.cart-summary-row');
    if (summaryRows.length >= 2) {
        summaryRows[0].querySelector('span:last-child').textContent = getCartTotalFormatted();
        summaryRows[1].querySelector('span:last-child').textContent = getCartTotalFormatted();
    }
    
    updatePrices();
}

function renderWishlist() {
    const container = document.querySelector('.wishlist-products');
    if (!container) return;
    
    if (wishlist.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <i>♡</i>
                <h3>Your wishlist is empty</h3>
                <p>Save your favorite items here.</p>
                <a href="shop.html" class="btn btn-primary">Continue Shopping</a>
            </div>
        `;
        return;
    }
    
    container.innerHTML = wishlist.map(product => createProductCard(product)).join('');
    updatePrices();
}

// ============================================
// TOAST
// ============================================
function showToast(message, type = 'success') {
    const toast = document.querySelector('.toast');
    if (!toast) return;
    
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================================
// SCROLL TO TOP
// ============================================
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// GET PRODUCT BY ID
// ============================================
function getProductById(id) {
    return products.find(p => p.id === parseInt(id));
}

// Export for global use
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.addToWishlist = addToWishlist;
window.removeFromWishlist = removeFromWishlist;
window.openQuickView = openQuickView;
window.closeQuickView = closeQuickView;
window.scrollToTop = scrollToTop;
window.changeLanguage = changeLanguage;
window.changeCurrency = changeCurrency;
window.toggleTheme = toggleTheme;
window.getProductById = getProductById;
window.formatPrice = formatPrice;
window.translations = translations;
window.products = products;
window.getAdminProducts = getStoredCustomProducts;
window.addAdminProduct = addAdminProduct;
window.removeAdminProduct = removeAdminProduct;










