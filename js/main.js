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
const AUTH_USERS_KEY = 'authUsers';
const AUTH_SESSION_KEY = 'authSessionUserId';
const LEGACY_LOGIN_FLAG_KEY = 'isLoggedIn';
const LEGACY_CART_KEY = 'cart';
const LEGACY_WISHLIST_KEY = 'wishlist';
const ADMIN_MODE_KEY = 'dapAdminMode';
const ADMIN_SECRET_CODE = 'DAP-ADMIN-786';
const HIDDEN_PRODUCTS_KEY = 'hiddenProductIds';

let cart = [];
let wishlist = [];
let currentUser = null;
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
    adminEmail: "tanveerkhan.ltp786786@gmail.com",
    sendgridApiKey: "", // Optional: Add SendGrid API key for better HTML email support with embedded images
    sendgridFromEmail: "noreply@duaabayapalace.com" // Email address SendGrid will send from
};

const CLOUD_SYNC_CONFIG = {
    enabled: true,
    firebaseApiKey: 'AIzaSyDUTAF4M9IKSV0imxzEeN-6j_ttJ2KX7vE',
    firebaseProjectId: 'duaabaya',
    firebaseDatabaseUrl: 'https://duaabaya-default-rtdb.firebaseio.com'
};

const CLOUD_SESSION_KEY = 'cloudAuthSession';
let cloudSession = safeJSONParse(localStorage.getItem(CLOUD_SESSION_KEY), null);
let cloudSyncTemporarilyDisabled = false;

function isAdminModeEnabled() {
    return localStorage.getItem(ADMIN_MODE_KEY) === 'true';
}

function syncAdminModeClass() {
    if (!document || !document.body) return;
    document.body.classList.toggle('admin-mode', isAdminModeEnabled());
}

function setAdminModeEnabled(enabled) {
    localStorage.setItem(ADMIN_MODE_KEY, enabled ? 'true' : 'false');
    syncAdminModeClass();
}

function getHiddenProductIds() {
    const ids = safeJSONParse(localStorage.getItem(HIDDEN_PRODUCTS_KEY), []);
    return Array.isArray(ids) ? ids.map(id => Number(id)).filter(id => !Number.isNaN(id)) : [];
}

function saveHiddenProductIds(ids) {
    const unique = [...new Set((Array.isArray(ids) ? ids : []).map(id => Number(id)).filter(id => !Number.isNaN(id)))];
    localStorage.setItem(HIDDEN_PRODUCTS_KEY, JSON.stringify(unique));
}

function isProductHidden(productId) {
    return getHiddenProductIds().includes(Number(productId));
}

function hideProductById(productId) {
    const ids = getHiddenProductIds();
    ids.push(Number(productId));
    saveHiddenProductIds(ids);
}

function setupHiddenAdminAccess() {
    if (document.getElementById('hiddenAdminTrigger')) return;

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.id = 'hiddenAdminTrigger';
    trigger.setAttribute('aria-label', 'Admin access');
    trigger.style.position = 'fixed';
    trigger.style.top = '10px';
    trigger.style.left = '10px';
    trigger.style.width = '20px';
    trigger.style.height = '20px';
    trigger.style.opacity = '0.35';
    trigger.style.border = '1px solid rgba(0, 0, 0, 0.2)';
    trigger.style.borderRadius = '50%';
    trigger.style.background = 'rgba(0, 0, 0, 0.08)';
    trigger.style.color = 'transparent';
    trigger.style.zIndex = '6000';
    trigger.style.cursor = 'pointer';
    trigger.style.padding = '0';

    const positionTrigger = () => {
        const logo = document.querySelector('.navbar-logo');
        if (!logo) {
            trigger.style.top = '10px';
            trigger.style.left = '10px';
            return;
        }

        const rect = logo.getBoundingClientRect();
        const size = 30;
        const top = rect.top + Math.max(0, (rect.height - size) / 2);
        const left = rect.right + 6;
        trigger.style.top = `${Math.max(4, top)}px`;
        trigger.style.left = `${Math.max(4, left)}px`;
    };

    trigger.addEventListener('click', () => {
        const input = prompt('Admin access code:');
        if (input === null) return;
        const value = String(input).trim();
        if (value === ADMIN_SECRET_CODE) {
            const next = !isAdminModeEnabled();
            setAdminModeEnabled(next);
            showToast(next ? 'Admin mode enabled.' : 'Admin mode disabled.');
            if (document.querySelector('.products-grid, .shop-products-grid')) {
                renderProducts();
            }
        } else {
            showToast('Invalid admin code.', 'error');
        }
    });

    document.body.appendChild(trigger);
    positionTrigger();
    window.addEventListener('resize', positionTrigger);
    window.addEventListener('scroll', positionTrigger, { passive: true });
}

function safeJSONParse(raw, fallback) {
    if (!raw) return fallback;
    try {
        return JSON.parse(raw);
    } catch (error) {
        return fallback;
    }
}

function normalizeEmail(email) {
    return String(email || '').trim().toLowerCase();
}

function notifyUserStateUpdated() {
    try {
        window.dispatchEvent(new Event('userStateUpdated'));
    } catch (error) {
        // ignore
    }
}

function getProfileCacheKey(userId = getCurrentUserId()) {
    const id = String(userId || '').trim();
    return id ? `profile_${id}` : '';
}

function saveProfileCache(profile, userId = getCurrentUserId()) {
    const key = getProfileCacheKey(userId);
    if (!key) return;
    localStorage.setItem(key, JSON.stringify(profile || {}));
}

function loadProfileCache(userId = getCurrentUserId()) {
    const key = getProfileCacheKey(userId);
    if (!key) return null;
    return safeJSONParse(localStorage.getItem(key), null);
}

function normalizeAddressEntries(input) {
    if (!Array.isArray(input)) return [];
    return input.map(entry => {
        if (entry && typeof entry === 'object' && !Array.isArray(entry)) {
            const label = String(entry.label || '').trim();
            const line1 = String(entry.line1 || '').trim();
            const line2 = String(entry.line2 || '').trim();
            const city = String(entry.city || '').trim();
            const state = String(entry.state || '').trim();
            const postalCode = String(entry.postalCode || '').trim();
            const country = String(entry.country || '').trim();
            const phone = String(entry.phone || '').trim();
            return {
                label: label || 'Address',
                line1,
                line2,
                city,
                state,
                postalCode,
                country,
                phone
            };
        }

        const raw = String(entry || '').trim();
        if (!raw) return null;
        const lines = raw.split('\n').map(item => item.trim()).filter(Boolean);
        if (!lines.length) return null;
        const label = lines[0] || 'Address';
        const line1 = lines[1] || '';
        const line2 = lines[2] || '';
        let city = '';
        let state = '';
        let postalCode = '';
        let country = '';
        let phone = '';

        const cityStatePostal = lines[3] || '';
        const cspMatch = cityStatePostal.match(/^(.+?),\s*(.+?)\s+(\S+)$/);
        if (cspMatch) {
            city = cspMatch[1];
            state = cspMatch[2];
            postalCode = cspMatch[3];
        } else {
            city = cityStatePostal;
        }

        country = lines[4] || '';
        const phoneLine = lines.find(item => item.toLowerCase().startsWith('phone:')) || '';
        phone = phoneLine.replace(/^phone:\s*/i, '').trim();

        return { label, line1, line2, city, state, postalCode, country, phone };
    }).filter(Boolean);
}

function isCloudSyncEnabled() {
    return Boolean(
        !cloudSyncTemporarilyDisabled &&
        CLOUD_SYNC_CONFIG.enabled &&
        CLOUD_SYNC_CONFIG.firebaseApiKey
    );
}

function disableCloudSyncForSession(reason) {
    cloudSyncTemporarilyDisabled = true;
    console.warn('Cloud sync disabled for this session:', reason);
}

function mapCloudAuthError(message) {
    const code = String(message || '').trim();
    if (code === 'NETWORK_REQUEST_FAILED' || code === 'Failed to fetch') {
        return 'Network request failed. Check internet, API key restrictions, and run site on localhost/https.';
    }
    if (code === 'CONFIGURATION_NOT_FOUND') {
        return 'Firebase Authentication setup incomplete (CONFIGURATION_NOT_FOUND). Enable Email/Password sign-in in Firebase Auth.';
    }
    if (code === 'OPERATION_NOT_ALLOWED') {
        return 'Email/Password login is disabled in Firebase Auth (OPERATION_NOT_ALLOWED).';
    }
    if (code === 'API_KEY_HTTP_REFERRER_BLOCKED') {
        return 'Firebase API key is restricted for this domain/device (API_KEY_HTTP_REFERRER_BLOCKED).';
    }
    if (code === 'INVALID_LOGIN_CREDENTIALS') {
        return 'Invalid email or password.';
    }
    if (code === 'EMAIL_EXISTS') {
        return 'Email already registered. Please login.';
    }
    if (code === 'EMAIL_NOT_FOUND') {
        return 'Account not found. Please register first.';
    }
    if (code === 'INVALID_PASSWORD') {
        return 'Invalid email or password.';
    }
    return code || 'Cloud authentication failed.';
}

function setCloudSession(session) {
    cloudSession = session || null;
    if (cloudSession) {
        localStorage.setItem(CLOUD_SESSION_KEY, JSON.stringify(cloudSession));
    } else {
        localStorage.removeItem(CLOUD_SESSION_KEY);
    }
}

async function firebaseAuthRequest(endpoint, payload) {
    if (!isCloudSyncEnabled()) {
        throw new Error('Cloud sync not configured.');
    }
    let response;
    try {
        response = await fetch(`https://identitytoolkit.googleapis.com/v1/${endpoint}?key=${CLOUD_SYNC_CONFIG.firebaseApiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
    } catch (error) {
        throw new Error('NETWORK_REQUEST_FAILED');
    }
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data?.error?.message || 'Cloud auth failed.');
    }
    return data;
}

async function refreshCloudIdToken() {
    if (!isCloudSyncEnabled() || !cloudSession?.refreshToken) {
        throw new Error('Cloud refresh token missing.');
    }

    const tokenUrl = `https://securetoken.googleapis.com/v1/token?key=${CLOUD_SYNC_CONFIG.firebaseApiKey}`;
    let response;
    try {
        response = await fetch(tokenUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `grant_type=refresh_token&refresh_token=${encodeURIComponent(cloudSession.refreshToken)}`
        });
    } catch (error) {
        throw new Error('NETWORK_REQUEST_FAILED');
    }

    const data = await response.json();
    if (!response.ok || !data?.id_token) {
        throw new Error(data?.error?.message || 'Token refresh failed.');
    }

    setCloudSession({
        ...cloudSession,
        idToken: data.id_token,
        refreshToken: data.refresh_token || cloudSession.refreshToken,
        localId: data.user_id || cloudSession.localId
    });
    return cloudSession.idToken;
}

function getDatabaseBaseUrls() {
    const candidates = [];
    const explicit = String(CLOUD_SYNC_CONFIG.firebaseDatabaseUrl || '').replace(/\/+$/, '');
    if (explicit) {
        return [explicit];
    }
    const projectId = String(CLOUD_SYNC_CONFIG.firebaseProjectId || '').trim();
    if (projectId) {
        candidates.push(`https://${projectId}-default-rtdb.firebaseio.com`);
        candidates.push(`https://${projectId}-default-rtdb.firebasedatabase.app`);
    }
    return [...new Set(candidates)];
}

async function firebaseDbRequest(path, method = 'GET', body = null) {
    if (!isCloudSyncEnabled()) {
        throw new Error('Cloud sync not configured.');
    }
    if (!cloudSession?.idToken) {
        throw new Error('Cloud session missing.');
    }

    const baseUrls = getDatabaseBaseUrls();
    if (!baseUrls.length) {
        throw new Error('Realtime Database URL missing.');
    }

    let lastError = null;
    let refreshedOnce = false;
    for (const baseUrl of baseUrls) {
        try {
            for (let attempt = 0; attempt < 2; attempt += 1) {
                const url = `${baseUrl}${path}.json?auth=${encodeURIComponent(cloudSession.idToken)}`;
                const response = await fetch(url, {
                    method,
                    headers: { 'Content-Type': 'application/json' },
                    body: body === null ? null : JSON.stringify(body)
                });

                const text = await response.text();
                const data = text ? safeJSONParse(text, null) : null;
                if (response.ok) {
                    return data;
                }

                const errorMessage = String(data?.error || `Cloud data request failed (${response.status}).`);
                const shouldTryRefresh = !refreshedOnce && (
                    response.status === 401 ||
                    response.status === 403 ||
                    /permission denied/i.test(errorMessage) ||
                    /auth/i.test(errorMessage) ||
                    /token/i.test(errorMessage)
                );

                if (shouldTryRefresh) {
                    try {
                        await refreshCloudIdToken();
                        refreshedOnce = true;
                        continue;
                    } catch (refreshError) {
                        lastError = new Error('Session expired. Please login again.');
                        break;
                    }
                }

                lastError = new Error(errorMessage);
                break;
            }
        } catch (error) {
            lastError = error;
        }
    }
    throw lastError || new Error('Cloud data request failed.');
}

async function runCloudDiagnostics() {
    const result = {
        cloudEnabled: isCloudSyncEnabled(),
        auth: { ok: false, detail: '' },
        database: { ok: false, detail: '' }
    };

    if (!CLOUD_SYNC_CONFIG.firebaseApiKey) {
        result.auth.detail = 'Missing firebaseApiKey in CLOUD_SYNC_CONFIG.';
        result.database.detail = 'Skipped because firebaseApiKey is missing.';
        return result;
    }

    const authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:createAuthUri?key=${CLOUD_SYNC_CONFIG.firebaseApiKey}`;
    try {
        const authResponse = await fetch(authUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                identifier: 'diagnostic@example.com',
                continueUri: 'https://duaabaya.github.io/Palacee/'
            })
        });

        const authText = await authResponse.text();
        const authData = authText ? safeJSONParse(authText, null) : null;
        if (authResponse.ok) {
            result.auth.ok = true;
            result.auth.detail = 'Firebase Auth endpoint reachable.';
        } else {
            result.auth.detail = authData?.error?.message || `Auth failed (${authResponse.status})`;
        }
    } catch (error) {
        result.auth.detail = 'Auth request failed (network/CORS/referrer block).';
    }

    const dbUrls = getDatabaseBaseUrls();
    if (!dbUrls.length) {
        result.database.detail = 'Missing firebaseDatabaseUrl/firebaseProjectId.';
        return result;
    }

    let dbError = '';
    for (const baseUrl of dbUrls) {
        try {
            const dbResponse = await fetch(`${baseUrl}/.json`, { method: 'GET' });
            const dbText = await dbResponse.text();
            const dbData = dbText ? safeJSONParse(dbText, null) : null;
            if (dbResponse.ok) {
                result.database.ok = true;
                result.database.detail = `Realtime DB reachable at ${baseUrl}`;
                break;
            }
            dbError = dbData?.error || `RTDB failed (${dbResponse.status}) at ${baseUrl}`;
        } catch (error) {
            dbError = `RTDB request failed at ${baseUrl}`;
        }
    }

    if (!result.database.ok) {
        result.database.detail = dbError || 'Realtime DB request failed.';
    }
    return result;
}

async function loadCloudUserSnapshot() {
    if (!isCloudSyncEnabled() || !cloudSession?.localId) return null;
    return firebaseDbRequest(`/users/${cloudSession.localId}`, 'GET');
}

async function saveCloudUserField(field, value) {
    if (!isCloudSyncEnabled() || !cloudSession?.localId) return;
    await firebaseDbRequest(`/users/${cloudSession.localId}/${field}`, 'PUT', value);
}

async function syncStateFromCloud() {
    if (!isCloudSyncEnabled() || !cloudSession?.localId) return;
    try {
        const snapshot = await loadCloudUserSnapshot();
        if (!snapshot) return;

        if (snapshot.profile && currentUser && String(currentUser.id) === String(cloudSession.localId)) {
            const normalizedSnapshotAddresses = normalizeAddressEntries(snapshot.profile.addresses);
            currentUser = {
                ...currentUser,
                ...snapshot.profile,
                id: cloudSession.localId,
                email: normalizeEmail(snapshot.profile.email || currentUser.email),
                addresses: normalizedSnapshotAddresses.length ? normalizedSnapshotAddresses : normalizeAddressEntries(currentUser.addresses)
            };
            saveProfileCache(currentUser, cloudSession.localId);
        }

        if (Array.isArray(snapshot.cart)) {
            cart = snapshot.cart;
            saveScopedList('cart', cart);
        }
        if (Array.isArray(snapshot.wishlist)) {
            wishlist = snapshot.wishlist;
            saveScopedList('wishlist', wishlist);
        }
        if (Array.isArray(snapshot.orders)) {
            localStorage.setItem(getScopedKey('orders'), JSON.stringify(snapshot.orders));
        }
        if (snapshot.lastOrder) {
            localStorage.setItem(getScopedKey('lastOrder'), JSON.stringify(snapshot.lastOrder));
            localStorage.setItem('lastOrder', JSON.stringify(snapshot.lastOrder));
        }

        updateCartCount();
        updateWishlistCount();
        notifyUserStateUpdated();
        if (typeof renderCart === 'function') renderCart();
        if (typeof renderWishlist === 'function') renderWishlist();
    } catch (error) {
        console.warn('Cloud sync load failed:', error.message || error);
    }
}

function getUsers() {
    const users = safeJSONParse(localStorage.getItem(AUTH_USERS_KEY), []);
    return Array.isArray(users) ? users : [];
}

function saveUsers(users) {
    localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
}

function getCurrentUserId() {
    return localStorage.getItem(AUTH_SESSION_KEY) || '';
}

function isUserLoggedIn() {
    return !!currentUser;
}

function setCurrentUserById(userId) {
    const nextId = String(userId || '').trim();
    if (!nextId) {
        currentUser = null;
        localStorage.removeItem(AUTH_SESSION_KEY);
        localStorage.setItem(LEGACY_LOGIN_FLAG_KEY, 'false');
        return;
    }

    if (isCloudSyncEnabled() && cloudSession && String(cloudSession.localId) === nextId) {
        const cachedProfile = loadProfileCache(nextId) || {};
        currentUser = currentUser && String(currentUser.id) === nextId ? currentUser : {
            id: nextId,
            firstName: String(cachedProfile.firstName || '').trim(),
            lastName: String(cachedProfile.lastName || '').trim(),
            email: normalizeEmail(cachedProfile.email || cloudSession.email || ''),
            phone: String(cachedProfile.phone || '').trim(),
            addresses: normalizeAddressEntries(cachedProfile.addresses)
        };
        localStorage.setItem(AUTH_SESSION_KEY, nextId);
        localStorage.setItem(LEGACY_LOGIN_FLAG_KEY, 'true');
        return;
    }

    const users = getUsers();
    const user = users.find(item => String(item.id) === nextId) || null;
    currentUser = user;
    if (user) {
        currentUser.addresses = normalizeAddressEntries(currentUser.addresses);
        saveProfileCache(currentUser, user.id);
        localStorage.setItem(AUTH_SESSION_KEY, String(user.id));
        localStorage.setItem(LEGACY_LOGIN_FLAG_KEY, 'true');
    } else {
        localStorage.removeItem(AUTH_SESSION_KEY);
        localStorage.setItem(LEGACY_LOGIN_FLAG_KEY, 'false');
    }
}

function getScopedKey(baseKey, userId = getCurrentUserId()) {
    const id = String(userId || '').trim();
    return id ? `${baseKey}_${id}` : `guest_${baseKey}`;
}

function loadScopedList(baseKey) {
    return safeJSONParse(localStorage.getItem(getScopedKey(baseKey)), []);
}

function saveScopedList(baseKey, value) {
    localStorage.setItem(getScopedKey(baseKey), JSON.stringify(Array.isArray(value) ? value : []));
}

function migrateLegacyGuestData() {
    if (!localStorage.getItem('guest_cart')) {
        const legacyCart = safeJSONParse(localStorage.getItem(LEGACY_CART_KEY), []);
        if (Array.isArray(legacyCart) && legacyCart.length) {
            localStorage.setItem('guest_cart', JSON.stringify(legacyCart));
        }
    }

    if (!localStorage.getItem('guest_wishlist')) {
        const legacyWishlist = safeJSONParse(localStorage.getItem(LEGACY_WISHLIST_KEY), []);
        if (Array.isArray(legacyWishlist) && legacyWishlist.length) {
            localStorage.setItem('guest_wishlist', JSON.stringify(legacyWishlist));
        }
    }
}

function hydrateUserState() {
    setCurrentUserById(getCurrentUserId());
    cart = loadScopedList('cart');
    wishlist = loadScopedList('wishlist');
    notifyUserStateUpdated();
}

function mergeGuestDataIntoUser() {
    if (!isUserLoggedIn()) return;

    const guestCart = safeJSONParse(localStorage.getItem('guest_cart'), []);
    const guestWishlist = safeJSONParse(localStorage.getItem('guest_wishlist'), []);

    if (Array.isArray(guestCart) && guestCart.length) {
        const currentCart = loadScopedList('cart');
        const mergedCart = [...currentCart, ...guestCart].map((item, index) => ({
            ...item,
            cartId: item.cartId || Date.now() + index
        }));
        localStorage.setItem(getScopedKey('cart'), JSON.stringify(mergedCart));
        localStorage.removeItem('guest_cart');
    }

    if (Array.isArray(guestWishlist) && guestWishlist.length) {
        const currentWishlist = loadScopedList('wishlist');
        const seen = new Set(currentWishlist.map(item => Number(item.id)));
        const mergedWishlist = [...currentWishlist];
        guestWishlist.forEach(item => {
            const productId = Number(item.id);
            if (!seen.has(productId)) {
                seen.add(productId);
                mergedWishlist.push(item);
            }
        });
        localStorage.setItem(getScopedKey('wishlist'), JSON.stringify(mergedWishlist));
        localStorage.removeItem('guest_wishlist');
    }
}

function getUserOrders(userId = getCurrentUserId()) {
    return safeJSONParse(localStorage.getItem(getScopedKey('orders', userId)), []);
}

function saveOrderForUser(order, userId = getCurrentUserId()) {
    const existing = getUserOrders(userId);
    existing.unshift(order);
    localStorage.setItem(getScopedKey('orders', userId), JSON.stringify(existing));
    if (isCloudSyncEnabled() && currentUser && String(currentUser.id) === String(userId)) {
        saveCloudUserField('orders', existing).catch(error => {
            console.warn('Cloud orders sync failed:', error.message || error);
        });
    }
}

async function registerAccount(payload) {
    if (isCloudSyncEnabled()) {
        try {
            const email = normalizeEmail(payload.email);
            if (!email) return { ok: false, message: 'Email is required.' };

            const auth = await firebaseAuthRequest('accounts:signUp', {
                email,
                password: String(payload.password || ''),
                returnSecureToken: true
            });

            const user = {
                id: auth.localId,
                firstName: String(payload.firstName || '').trim(),
                lastName: String(payload.lastName || '').trim(),
                email,
                phone: String(payload.phone || '').trim(),
                addresses: [],
                createdAt: new Date().toISOString()
            };

            setCloudSession({
                localId: auth.localId,
                idToken: auth.idToken,
                refreshToken: auth.refreshToken,
                email
            });

            currentUser = user;
            localStorage.setItem(AUTH_SESSION_KEY, user.id);
            localStorage.setItem(LEGACY_LOGIN_FLAG_KEY, 'true');
            mergeGuestDataIntoUser();
            hydrateUserState();
            saveProfileCache(currentUser, user.id);

            await saveCloudUserField('profile', user);
            await saveCloudUserField('cart', cart);
            await saveCloudUserField('wishlist', wishlist);
            if (!localStorage.getItem(getScopedKey('orders'))) {
                await saveCloudUserField('orders', []);
            }
            return { ok: true, user };
        } catch (error) {
            const friendly = mapCloudAuthError(error.message || '');
            return { ok: false, message: friendly };
        }
    }

    const users = getUsers();
    const email = normalizeEmail(payload.email);
    if (!email) return { ok: false, message: 'Email is required.' };
    if (users.some(user => normalizeEmail(user.email) === email)) {
        return { ok: false, message: 'Email already registered. Please login.' };
    }

    const user = {
        id: `u_${Date.now()}`,
        firstName: String(payload.firstName || '').trim(),
        lastName: String(payload.lastName || '').trim(),
        email,
        phone: String(payload.phone || '').trim(),
        addresses: [],
        password: String(payload.password || ''),
        createdAt: new Date().toISOString()
    };
    users.push(user);
    saveUsers(users);
    setCurrentUserById(user.id);
    mergeGuestDataIntoUser();
    hydrateUserState();
    saveProfileCache(currentUser, user.id);
    return { ok: true, user };
}

async function loginAccount(email, password) {
    if (isCloudSyncEnabled()) {
        try {
            const auth = await firebaseAuthRequest('accounts:signInWithPassword', {
                email: normalizeEmail(email),
                password: String(password || ''),
                returnSecureToken: true
            });

            setCloudSession({
                localId: auth.localId,
                idToken: auth.idToken,
                refreshToken: auth.refreshToken,
                email: normalizeEmail(email)
            });

            const snapshot = await loadCloudUserSnapshot();
            const profile = snapshot?.profile || {};
            currentUser = {
                id: auth.localId,
                firstName: String(profile.firstName || '').trim(),
                lastName: String(profile.lastName || '').trim(),
                email: normalizeEmail(profile.email || email),
                phone: String(profile.phone || '').trim(),
                addresses: normalizeAddressEntries(profile.addresses),
                createdAt: profile.createdAt || new Date().toISOString()
            };
            saveProfileCache(currentUser, auth.localId);

            localStorage.setItem(AUTH_SESSION_KEY, currentUser.id);
            localStorage.setItem(LEGACY_LOGIN_FLAG_KEY, 'true');

            cart = Array.isArray(snapshot?.cart) ? snapshot.cart : [];
            wishlist = Array.isArray(snapshot?.wishlist) ? snapshot.wishlist : [];
            saveScopedList('cart', cart);
            saveScopedList('wishlist', wishlist);
            localStorage.setItem(LEGACY_CART_KEY, JSON.stringify(cart));
            localStorage.setItem(LEGACY_WISHLIST_KEY, JSON.stringify(wishlist));
            if (Array.isArray(snapshot?.orders)) {
                localStorage.setItem(getScopedKey('orders'), JSON.stringify(snapshot.orders));
            }

            mergeGuestDataIntoUser();
            cart = loadScopedList('cart');
            wishlist = loadScopedList('wishlist');
            await saveCloudUserField('cart', cart);
            await saveCloudUserField('wishlist', wishlist);

            updateCartCount();
            updateWishlistCount();
            return { ok: true, user: currentUser };
        } catch (error) {
            const friendly = mapCloudAuthError(error.message || '');
            return { ok: false, message: friendly };
        }
    }

    const users = getUsers();
    const normalizedEmail = normalizeEmail(email);
    const user = users.find(item =>
        normalizeEmail(item.email) === normalizedEmail && String(item.password) === String(password || '')
    );
    if (!user) return { ok: false, message: 'Invalid email or password.' };
    setCurrentUserById(user.id);
    mergeGuestDataIntoUser();
    hydrateUserState();
    saveProfileCache(currentUser, user.id);
    return { ok: true, user };
}

function logoutAccount() {
    setCloudSession(null);
    setCurrentUserById('');
    hydrateUserState();
}

async function updateCurrentUserProfile(patch = {}) {
    if (!isUserLoggedIn()) return { ok: false, message: 'Please login first.' };

    if (isCloudSyncEnabled() && cloudSession?.localId) {
        try {
            const nextUser = {
                ...currentUser,
                firstName: String(patch.firstName ?? currentUser.firstName).trim(),
                lastName: String(patch.lastName ?? currentUser.lastName).trim(),
                phone: String(patch.phone ?? currentUser.phone).trim(),
                email: normalizeEmail(patch.email || currentUser.email),
                addresses: Array.isArray(patch.addresses) ? normalizeAddressEntries(patch.addresses) : normalizeAddressEntries(currentUser.addresses)
            };
            currentUser = nextUser;
            await saveCloudUserField('profile', nextUser);
            saveProfileCache(currentUser, currentUser.id);
            return { ok: true, user: currentUser };
        } catch (error) {
            return { ok: false, message: error.message || 'Profile update failed.' };
        }
    }

    const users = getUsers();
    const index = users.findIndex(user => String(user.id) === String(currentUser.id));
    if (index === -1) return { ok: false, message: 'User not found.' };

    const nextEmail = normalizeEmail(patch.email || currentUser.email);
    const emailTaken = users.some((user, i) => i !== index && normalizeEmail(user.email) === nextEmail);
    if (emailTaken) return { ok: false, message: 'Email already used by another account.' };

    users[index] = {
        ...users[index],
        firstName: String(patch.firstName ?? users[index].firstName).trim(),
        lastName: String(patch.lastName ?? users[index].lastName).trim(),
        phone: String(patch.phone ?? users[index].phone).trim(),
        email: nextEmail,
        addresses: Array.isArray(patch.addresses) ? normalizeAddressEntries(patch.addresses) : normalizeAddressEntries(users[index].addresses)
    };
    saveUsers(users);
    setCurrentUserById(users[index].id);
    saveProfileCache(currentUser, users[index].id);
    return { ok: true, user: currentUser };
}

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

function removeProductAsAdmin(productId) {
    if (!isAdminModeEnabled()) {
        showToast('Admin access required.', 'error');
        return;
    }

    const targetId = Number(productId);
    const target = products.find(product => Number(product.id) === targetId);
    if (!target) {
        showToast('Product not found.', 'error');
        return;
    }

    if (!confirm('Remove this product?')) return;

    if (target.isCustom) {
        const removed = removeAdminProduct(targetId);
        if (!removed) {
            showToast('Unable to remove product.', 'error');
            return;
        }
    } else {
        hideProductById(targetId);
    }

    cart = cart.filter(item => Number(item.id) !== targetId);
    wishlist = wishlist.filter(item => Number(item.id) !== targetId);
    saveCart();
    saveWishlist();
    updateCartCount();
    updateWishlistCount();
    renderProducts();
    if (typeof renderWishlist === 'function') renderWishlist();
    if (typeof renderCart === 'function') renderCart();
    showToast('Product removed.');
}

function initializeApp() {
    loadCustomProducts();
    migrateLegacyGuestData();
    hydrateUserState();
    initializeTrackingScripts();
    loadTheme();
    loadLanguage();
    updateCartCount();
    updateWishlistCount();
    syncAdminModeClass();
    setupEventListeners();
    showWelcomePopup();
    syncStateFromCloud();
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
    saveScopedList('cart', cart);
    // Legacy fallback for pages still reading this key directly.
    localStorage.setItem(LEGACY_CART_KEY, JSON.stringify(cart));
    if (isCloudSyncEnabled() && isUserLoggedIn()) {
        saveCloudUserField('cart', cart).catch(error => {
            console.warn('Cloud cart sync failed:', error.message || error);
        });
    }
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
        account: currentUser ? {
            id: currentUser.id,
            email: currentUser.email
        } : null,
        customer: {
            firstName: getCheckoutFormValue(formElement, '[name="firstName"]') || currentUser?.firstName || getCheckoutFormValue(formElement, 'input[placeholder="Enter first name"]'),
            lastName: getCheckoutFormValue(formElement, '[name="lastName"]') || currentUser?.lastName || getCheckoutFormValue(formElement, 'input[placeholder="Enter last name"]'),
            email: getCheckoutFormValue(formElement, '[name="email"]') || currentUser?.email || getCheckoutFormValue(formElement, 'input[type="email"]'),
            phone: getCheckoutFormValue(formElement, '[name="phone"]') || currentUser?.phone || getCheckoutFormValue(formElement, 'input[type="tel"]'),
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

    // Try SendGrid first if API key is available
    const hasSendGrid = TRACKING_CONFIG.sendgridApiKey && TRACKING_CONFIG.sendgridApiKey.trim();
    if (hasSendGrid) {
        try {
            await sendOrderViaSendGrid(order, formElement);
            return;
        } catch (error) {
            console.warn('SendGrid failed, falling back to FormSubmit:', error);
            // Fall through to FormSubmit fallback
        }
    }

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

async function sendOrderViaSendGrid(order, formElement) {
    const screenshotInput = (formElement && formElement.querySelector('input[name="paymentScreenshot"]')) || document.getElementById('popupPaymentScreenshotInput');
    const screenshotFile = screenshotInput && screenshotInput.files && screenshotInput.files.length ? screenshotInput.files[0] : null;
    
    let imageUrl = null;
    if (screenshotFile) {
        try {
            const base64Data = await fileToBase64(screenshotFile);
            imageUrl = await uploadToImgBB(base64Data, screenshotFile.name);
        } catch (error) {
            console.error('Screenshot upload failed:', error);
        }
    }
    
    const customerName = `${order.customer.firstName} ${order.customer.lastName}`.trim();
    const addressParts = [
        order.customer.street,
        order.customer.apartment,
        order.customer.city,
        order.customer.state,
        order.customer.postalCode,
        order.customer.country
    ].filter(Boolean);

    const itemsHtml = order.items.map((item, index) => `
        <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">${index + 1}</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${item.name}</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${item.quantity}</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${item.size}</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${item.color}</td>
            <td style="padding: 8px; border: 1px solid #ddd;">INR ${item.priceINR.toFixed(2)}</td>
            <td style="padding: 8px; border: 1px solid #ddd;">INR ${(item.priceINR * item.quantity).toFixed(2)}</td>
        </tr>
    `).join('');

    let screenshotHtml = '';
    if (imageUrl) {
        screenshotHtml = `
            <div style="margin: 30px 0; text-align: center;">
                <h3 style="color: #333; margin-bottom: 15px;">💳 Payment Screenshot</h3>
                <img src="${imageUrl}" alt="Payment Screenshot" style="max-width: 100%; max-height: 500px; border: 2px solid #D4AF37; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                <p style="color: #666; font-size: 12px; margin-top: 10px;">Image captured at: ${new Date().toLocaleString()}</p>
            </div>
        `;
    }

    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 800px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 8px; }
                .header { background: linear-gradient(135deg, #D4AF37 0%, #B8860B 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; margin: -20px -20px 20px -20px; }
                .header h1 { margin: 0; font-size: 24px; }
                .section { margin: 20px 0; padding: 15px; background: white; border-left: 4px solid #D4AF37; border-radius: 4px; }
                .section h2 { margin-top: 0; color: #D4AF37; font-size: 18px; }
                table { width: 100%; border-collapse: collapse; margin: 10px 0; }
                table th { background: #f0f0f0; padding: 10px; border: 1px solid #ddd; text-align: left; }
                .total-row { font-weight: bold; font-size: 18px; background: #f9f9f9; }
                .highlight { background: #fff3cd; padding: 10px; border-radius: 4px; margin: 10px 0; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>✅ New Order Received!</h1>
                    <p>Order ID: <strong>${order.orderId}</strong></p>
                </div>

                <div class="section">
                    <h2>📋 Order Details</h2>
                    <table>
                        <tr><td style="width: 40%;"><strong>Order ID:</strong></td><td>${order.orderId}</td></tr>
                        <tr><td><strong>Date:</strong></td><td>${order.createdAt}</td></tr>
                        <tr><td><strong>Payment Method:</strong></td><td>${order.paymentMethod}</td></tr>
                        <tr><td style="font-size: 16px; color: #D4AF37;"><strong>Total (INR):</strong></td><td style="font-size: 16px; color: #D4AF37;"><strong>₹${order.total.toFixed(2)}</strong></td></tr>
                        <tr><td><strong>Total (USD):</strong></td><td>$${order.totalUSD.toFixed(2)}</td></tr>
                    </table>
                </div>

                <div class="section">
                    <h2>👤 Customer Information</h2>
                    <table>
                        <tr><td style="width: 40%;"><strong>Name:</strong></td><td>${customerName}</td></tr>
                        <tr><td><strong>Email:</strong></td><td>${order.customer.email}</td></tr>
                        <tr><td><strong>Phone:</strong></td><td>${order.customer.phone}</td></tr>
                        <tr><td><strong>Address:</strong></td><td>${addressParts.join(', ')}</td></tr>
                    </table>
                </div>

                <div class="section">
                    <h2>📦 Items Ordered</h2>
                    <table>
                        <thead>
                            <tr style="background: #f0f0f0;">
                                <th style="padding: 8px; border: 1px solid #ddd;">#</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Product</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Qty</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Size</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Color</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Price</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${itemsHtml}
                            <tr class="total-row" style="background: #f9f9f9;">
                                <td colspan="6" style="padding: 10px; border: 1px solid #ddd; text-align: right;">TOTAL:</td>
                                <td style="padding: 10px; border: 1px solid #ddd;"><strong>INR ${order.total.toFixed(2)}</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                ${screenshotHtml}

                <div class="section highlight">
                    <strong>⚠️ Action Required:</strong> Please verify the payment screenshot above and confirm the order status in your admin panel.
                </div>

                <div style="text-align: center; color: #888; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
                    <p>Dua Abaya Palace | Automated Order Notification System</p>
                </div>
            </div>
        </body>
        </html>
    `;

    const sendgridPayload = {
        personalizations: [{
            to: [{ email: TRACKING_CONFIG.adminEmail }]
        }],
        from: { 
            email: TRACKING_CONFIG.sendgridFromEmail || 'orders@duaabayapalace.com',
            name: 'Dua Abaya Palace Orders'
        },
        subject: `New Order: ${order.orderId} - ${customerName}${imageUrl ? ' (Screenshot Attached)' : ''}`,
        content: [{
            type: 'text/html',
            value: htmlContent
        }]
    };

    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TRACKING_CONFIG.sendgridApiKey}`
        },
        body: JSON.stringify(sendgridPayload)
    });

    if (!response.ok) {
        throw new Error(`SendGrid failed with status ${response.status}`);
    }
}

async function sendOrderToFormSubmit(order, formElement) {
    const payload = createFormSubmitPayload(order);
    const emailTarget = encodeURIComponent(TRACKING_CONFIG.adminEmail);
    const screenshotInput = (formElement && formElement.querySelector('input[name="paymentScreenshot"]')) || document.getElementById('popupPaymentScreenshotInput');
    const screenshotFile = screenshotInput && screenshotInput.files && screenshotInput.files.length ? screenshotInput.files[0] : null;

    // Upload screenshot to image hosting and embed in email
    if (screenshotFile) {
        try {
            // Convert file to base64
            const base64Data = await fileToBase64(screenshotFile);
            
            // Upload to ImgBB (free image hosting)
            const imageUrl = await uploadToImgBB(base64Data, screenshotFile.name);
            
            if (imageUrl) {
                payload._subject = `New Checkout Order: ${order.orderId} - Payment Screenshot Attached`;
                // Send image URL as a prominent field that will appear in email
                payload['🖼️ PAYMENT SCREENSHOT IMAGE'] = imageUrl;
                // Also include it in standard field
                payload.payment_screenshot_url = imageUrl;
            }
        } catch (uploadError) {
            console.error('Screenshot upload failed:', uploadError);
            // Continue without screenshot if upload fails
        }
    }

    // Send via AJAX with JSON payload
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

    // Fallback POST - send as form data with custom field handling
    const formData = new FormData();
    for (const [key, value] of Object.entries(payload)) {
        formData.append(key, value);
    }
    
    await fetch(`https://formsubmit.co/${emailTarget}`, {
        method: 'POST',
        body: formData,
        keepalive: true
    });
}

// Helper function to convert file to base64
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

// Upload image to ImgBB and return URL
async function uploadToImgBB(base64Data, fileName) {
    // ImgBB free API (no key required for basic uploads)
    const formData = new FormData();
    
    // Convert base64 data URL to Blob
    try {
        const arr = base64Data.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        const blob = new Blob([u8arr], { type: mime });
        formData.append('image', blob, fileName || 'screenshot.jpg');
    } catch (error) {
        console.error('Error converting base64 to blob:', error);
        return null;
    }
    
    try {
        const response = await fetch('https://api.imgbb.com/1/upload?key=d36eb6591370ae7f9089d85875571358', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        if (data && data.data && data.data.url) {
            return data.data.url;
        }
    } catch (error) {
        console.error('ImgBB upload error:', error);
    }
    
    return null;
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
    localStorage.setItem(getScopedKey('lastOrder'), JSON.stringify(order));
    localStorage.setItem('lastOrder', JSON.stringify(order));
    if (isCloudSyncEnabled() && isUserLoggedIn()) {
        saveCloudUserField('lastOrder', order).catch(error => {
            console.warn('Cloud last-order sync failed:', error.message || error);
        });
    }
}

function saveOrderHistory(order) {
    saveOrderForUser(order);
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
    saveScopedList('wishlist', wishlist);
    // Legacy fallback for pages still reading this key directly.
    localStorage.setItem(LEGACY_WISHLIST_KEY, JSON.stringify(wishlist));
    if (isCloudSyncEnabled() && isUserLoggedIn()) {
        saveCloudUserField('wishlist', wishlist).catch(error => {
            console.warn('Cloud wishlist sync failed:', error.message || error);
        });
    }
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

    // Hidden admin mode access
    setupHiddenAdminAccess();
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

    const visibleProducts = productsToRender.filter(product => !isProductHidden(product.id));
    grid.innerHTML = visibleProducts.map(product => createProductCard(product)).join('');
    const results = document.querySelector('.shop-results');
    if (results) {
        results.textContent = `Showing ${visibleProducts.length} products`;
    }
    updateWishlistButtons();
    updatePrices();
}

function createProductCard(product) {
    const isWishlisted = isInWishlist(product.id);
    const showAdminRemove = isAdminModeEnabled();
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
                    ${showAdminRemove ? `
                    <button class="product-action-btn" onclick="removeProductAsAdmin(${product.id})" title="Remove product" style="font-size: 0.68rem; font-weight: 700; letter-spacing: 0.3px;">
                        DEL
                    </button>
                    ` : ''}
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
window.removeProductAsAdmin = removeProductAsAdmin;
window.registerAccount = registerAccount;
window.loginAccount = loginAccount;
window.logoutAccount = logoutAccount;
window.isUserLoggedIn = isUserLoggedIn;
window.getCurrentUser = () => currentUser;
window.getUserOrders = getUserOrders;
window.updateCurrentUserProfile = updateCurrentUserProfile;
window.saveOrderHistory = saveOrderHistory;
window.runCloudDiagnostics = runCloudDiagnostics;











