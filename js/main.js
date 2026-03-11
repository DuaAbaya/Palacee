// ============================================
// DUA ABAYA PALACE - Main JavaScript
// ============================================

// ============================================
// PRODUCT DATA
// ============================================
const products = [];

// ============================================
// TRANSLATIONS
// ============================================
const translations = {
    en: {
        home: "Home", shop: "Shop", about: "About", contact: "Contact",
        cart: "Cart", account: "Account", search: "Search", login: "Login",
        signup: "Sign Up", logout: "Logout", addToCart: "Add to Cart",
        addToWishlist: "Add to Wishlist", quickView: "Quick View",
        newArrivals: "New Arrivals", bestSellers: "Best Sellers",
        categories: "Categories", price: "Price", color: "Color", size: "Size",
        filter: "Filter", sort: "Sort", all: "All", subTotal: "Subtotal",
        shipping: "Shipping", total: "Total", checkout: "Checkout",
        continueShopping: "Continue Shopping", emptyCart: "Your cart is empty"
    },
    ur: {
        home: "گھر", shop: "دکان", about: "ہمارے بارے میں", contact: "رابطہ",
        cart: "کارٹ", account: "اکاؤنٹ", search: "تلاش", login: "لاگ ان",
        signup: "سائن اپ", logout: "لاگ آوٹ", addToCart: "کارٹ میں شامل کریں",
        addToWishlist: "ویش لسٹ میں شامل کریں", quickView: "جلدی دیکھیں",
        newArrivals: "نیا آنے والا", bestSellers: "بہترین فروخت",
        categories: "زمرے", price: "قیمت", color: "رنگ", size: "سائز",
        filter: "فلٹر", sort: "ترتیب دیں", all: "سب", subTotal: "ذیلی رقم",
        shipping: "شپنگ", total: "کل", checkout: "چیک آؤٹ",
        continueShopping: "خریداری جاری رکھیں", emptyCart: "آپ کا کارٹ خالی ہے"
    },
    hi: {
        home: "होम", shop: "दुकान", about: "हमारे बारे में", contact: "संपर्क",
        cart: "कार्ट", account: "खाता", search: "खोजें", login: "लॉगिन",
        signup: "साइन अप", logout: "लॉगआउट", addToCart: "कार्ट में जोड़ें",
        addToWishlist: "विशलिस्ट में जोड़ें", quickView: "त्वरित देखें",
        newArrivals: "नए आगमन", bestSellers: "बेस्ट सेलर",
        categories: "श्रेणियाँ", price: "कीमत", color: "रंग", size: "आकार",
        filter: "फ़िल्टर", sort: "क्रमबद्ध करें", all: "सभी", subTotal: "उप-कुल",
        shipping: "शिपिंग", total: "कुल", checkout: "चेकआउट",
        continueShopping: "खरीदारी जारी रखें", emptyCart: "आपका कार्ट खाली है"
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
let lastCustomProductsSyncError = '';
const BLOCKED_PRODUCT_NAMES = new Set(['ambroidery nakab']);

const currencySymbols = { INR: '₹', PKR: '₨', USD: '$', SAR: '﷼', AED: 'د.إ' };
const exchangeRates = { INR: 83, PKR: 280, USD: 1, SAR: 3.75, AED: 3.67 };

const TRACKING_CONFIG = {
    ga4MeasurementId: "",
    metaPixelId: "",
    orderWebhookUrl: "https://formsubmit.co/ajax/tanveerkhan.ltp786786@gmail.com",
    adminEmail: "tanveerkhan.ltp786786@gmail.com",
    sendgridApiKey: localStorage.getItem('sendgridApiKey') || "", 
    sendgridFromEmail: "tanveerkhan.ltp786786@gmail.com",
    brevoApiKey: localStorage.getItem('brevoApiKey') || "", 
    brevoFromEmail: "tanveerkhan.ltp786786@gmail.com",
    brevoFromName: "Dua Abaya Palace Orders"
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

// ============================================
// UTILITY FUNCTIONS
// ============================================
function safeJSONParse(raw, fallback) {
    if (!raw) return fallback;
    try { return JSON.parse(raw); } catch (error) { return fallback; }
}

function normalizeEmail(email) {
    return String(email || '').trim().toLowerCase();
}

function notifyUserStateUpdated() {
    try { window.dispatchEvent(new Event('userStateUpdated')); } catch (e) {}
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
            return {
                label: String(entry.label || '').trim() || 'Address',
                line1: String(entry.line1 || '').trim(),
                line2: String(entry.line2 || '').trim(),
                city: String(entry.city || '').trim(),
                state: String(entry.state || '').trim(),
                postalCode: String(entry.postalCode || '').trim(),
                country: String(entry.country || '').trim(),
                phone: String(entry.phone || '').trim()
            };
        }
        return null;
    }).filter(Boolean);
}

// ============================================
// CLOUD SYNC
// ============================================
function isCloudSyncEnabled() {
    return Boolean(!cloudSyncTemporarilyDisabled && CLOUD_SYNC_CONFIG.enabled && CLOUD_SYNC_CONFIG.firebaseApiKey);
}

function isCustomProductsCloudSyncEnabled() {
    const hasDbBase = Boolean(String(CLOUD_SYNC_CONFIG.firebaseDatabaseUrl || '').trim() || String(CLOUD_SYNC_CONFIG.firebaseProjectId || '').trim());
    return Boolean(CLOUD_SYNC_CONFIG.enabled && hasDbBase);
}

function isPermissionDeniedError(message) {
    const text = String(message || '').toLowerCase();
    return text.includes('permission denied') || text.includes('unauthorized') || text.includes('401') || text.includes('403');
}

async function ensureCloudSessionForCustomProducts() {
    if (isCloudSyncEnabled() && cloudSession?.idToken) return true;
    if (!CLOUD_SYNC_CONFIG.enabled || !CLOUD_SYNC_CONFIG.firebaseApiKey) return false;
    try {
        const authData = await firebaseAuthRequest('accounts:signUp', { returnSecureToken: true });
        setCloudSession({
            idToken: authData.idToken,
            refreshToken: authData.refreshToken,
            localId: authData.localId,
            email: '',
            isAnonymous: true
        });
        cloudSyncTemporarilyDisabled = false;
        return true;
    } catch (error) {
        lastCustomProductsSyncError = String(error?.message || 'Anonymous auth failed.');
        return false;
    }
}

function mapCloudAuthError(message) {
    const code = String(message || '').trim();
    if (code === 'NETWORK_REQUEST_FAILED' || code === 'Failed to fetch') {
        return 'Network request failed. Check internet connection.';
    }
    if (code === 'CONFIGURATION_NOT_FOUND') {
        return 'Firebase setup incomplete. Enable Email/Password in Firebase Auth.';
    }
    if (code === 'OPERATION_NOT_ALLOWED') {
        return 'Email/Password login is disabled in Firebase Auth.';
    }
    if (code === 'API_KEY_HTTP_REFERRER_BLOCKED') {
        return 'Firebase API key is restricted for this domain.';
    }
    if (code === 'INVALID_LOGIN_CREDENTIALS' || code === 'INVALID_PASSWORD') {
        return 'Invalid email or password.';
    }
    if (code === 'EMAIL_EXISTS') {
        return 'Email already registered. Please login.';
    }
    if (code === 'EMAIL_NOT_FOUND') {
        return 'Account not found. Please register first.';
    }
    return code || 'Authentication failed.';
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
    const explicit = String(CLOUD_SYNC_CONFIG.firebaseDatabaseUrl || '').replace(/\/+$/, '');
    if (explicit) return [explicit];
    const projectId = String(CLOUD_SYNC_CONFIG.firebaseProjectId || '').trim();
    if (projectId) {
        return [`https://${projectId}-default-rtdb.firebaseio.com`];
    }
    return [];
}

async function firebaseDbRequest(path, method = 'GET', body = null) {
    if (!isCloudSyncEnabled()) throw new Error('Cloud sync not configured.');
    if (!cloudSession?.idToken) throw new Error('Cloud session missing.');

    const baseUrls = getDatabaseBaseUrls();
    if (!baseUrls.length) throw new Error('Realtime Database URL missing.');

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
                if (response.ok) return data;

                const errorMessage = String(data?.error || `Cloud data request failed (${response.status}).`);
                const isPermissionDenied = /permission denied/i.test(errorMessage);
                const isAuthLikeError = /auth|token|credential|expired|session/i.test(errorMessage);
                const shouldTryRefresh = !refreshedOnce && (
                    response.status === 401 ||
                    (response.status === 403 && isAuthLikeError && !isPermissionDenied) ||
                    (isAuthLikeError && !isPermissionDenied)
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
                
                lastError = isPermissionDenied
                    ? new Error('Cloud access denied by database rules.')
                    : new Error(errorMessage);
                break;
            }
        } catch (error) {
            lastError = error;
        }
    }
    throw lastError || new Error('Cloud data request failed.');
}

async function runCloudDiagnostics() {
    const result = { cloudEnabled: isCloudSyncEnabled(), auth: { ok: false, detail: '' }, database: { ok: false, detail: '' } };

    console.log('=== Firebase Diagnostics ===');
    console.log('API Key:', CLOUD_SYNC_CONFIG.firebaseApiKey ? 'Set' : 'Missing');
    console.log('Project ID:', CLOUD_SYNC_CONFIG.firebaseProjectId || 'Missing');
    console.log('Database URL:', CLOUD_SYNC_CONFIG.firebaseDatabaseUrl || 'Missing');
    console.log('Cloud Sync Enabled:', isCloudSyncEnabled());

    if (!CLOUD_SYNC_CONFIG.firebaseApiKey) {
        result.auth.detail = 'Missing firebaseApiKey';
        return result;
    }

    const authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:createAuthUri?key=${CLOUD_SYNC_CONFIG.firebaseApiKey}`;
    try {
        const authResponse = await fetch(authUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ identifier: 'diagnostic@test.com', continueUri: window.location.href })
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
        result.auth.detail = 'Auth request failed (network error).';
    }

    const dbUrls = getDatabaseBaseUrls();
    for (const baseUrl of dbUrls) {
        try {
            const dbResponse = await fetch(`${baseUrl}/.json`, { method: 'GET' });
            if (dbResponse.ok) {
                result.database.ok = true;
                result.database.detail = `Realtime DB reachable at ${baseUrl}`;
                break;
            }
            result.database.detail = `RTDB failed (${dbResponse.status})`;
        } catch (error) {
            result.database.detail = 'RTDB request failed';
        }
    }

    console.log('Diagnostics Result:', result);
    alert('Diagnostics complete! Check console for details.');
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
                ...currentUser, ...snapshot.profile, id: cloudSession.localId,
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
        
        // Sync hidden products from cloud for cross-device consistency
        if (Array.isArray(snapshot.hiddenProductIds)) {
            const cloudHidden = snapshot.hiddenProductIds.map(id => Number(id));
            const localHidden = getHiddenProductIds();
            // Merge: use unique IDs from both cloud and local
            const merged = [...new Set([...cloudHidden, ...localHidden])];
            saveHiddenProductIds(merged);
            console.log('Synced hidden products from cloud:', cloudHidden.length, 'merged total:', merged.length);
        }

        updateCartCount();
        updateWishlistCount();
        notifyUserStateUpdated();
    } catch (error) {
        console.warn('Cloud sync load failed:', error.message);
        // Disable cloud sync on auth errors so they don't interfere with local operations
        if (error.message && (error.message.includes('Session expired') || error.message.includes('Cloud access denied') || error.message.includes('unauthorized') || error.message.includes('401') || error.message.includes('403'))) {
            cloudSyncTemporarilyDisabled = true;
            console.log('Cloud auth failed, using local data only');
        }
    }
}

// ============================================
// AUTH FUNCTIONS
// ============================================
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
        currentUser = {
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
        const mergedCart = [...currentCart, ...guestCart].map((item, index) => ({ ...item, cartId: item.cartId || Date.now() + index }));
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
        saveCloudUserField('orders', existing).catch(error => console.warn('Cloud orders sync failed:', error.message));
    }
}

async function registerAccount(payload) {
    const hasCloudAuth = Boolean(CLOUD_SYNC_CONFIG.enabled && CLOUD_SYNC_CONFIG.firebaseApiKey);
    if (hasCloudAuth) {
        try {
            cloudSyncTemporarilyDisabled = false;
            const email = normalizeEmail(payload.email);
            if (!email) return { ok: false, message: 'Email is required.' };

            const auth = await firebaseAuthRequest('accounts:signUp', {
                email, password: String(payload.password || ''), returnSecureToken: true
            });

            const user = {
                id: auth.localId,
                firstName: String(payload.firstName || '').trim(),
                lastName: String(payload.lastName || '').trim(),
                email, phone: String(payload.phone || '').trim(),
                addresses: [], createdAt: new Date().toISOString()
            };

            setCloudSession({ localId: auth.localId, idToken: auth.idToken, refreshToken: auth.refreshToken, email });
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
            return { ok: false, message: mapCloudAuthError(error.message) };
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
        email, phone: String(payload.phone || '').trim(),
        addresses: [], password: String(payload.password || ''),
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
    const hasCloudAuth = Boolean(CLOUD_SYNC_CONFIG.enabled && CLOUD_SYNC_CONFIG.firebaseApiKey);
    if (hasCloudAuth) {
        try {
            cloudSyncTemporarilyDisabled = false;
            const auth = await firebaseAuthRequest('accounts:signInWithPassword', {
                email: normalizeEmail(email), password: String(password || ''), returnSecureToken: true
            });

            setCloudSession({
                localId: auth.localId, idToken: auth.idToken,
                refreshToken: auth.refreshToken, email: normalizeEmail(email)
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

            mergeGuestDataIntoUser();
            cart = loadScopedList('cart');
            wishlist = loadScopedList('wishlist');
            await saveCloudUserField('cart', cart);
            await saveCloudUserField('wishlist', wishlist);
            
            // Also sync hidden products to cloud for cross-device consistency
            const hiddenIds = getHiddenProductIds();
            if (hiddenIds.length > 0) {
                await saveCloudUserField('hiddenProductIds', hiddenIds)
                    .catch(error => console.warn('Failed to sync hidden products to cloud:', error.message));
            }

            updateCartCount();
            updateWishlistCount();
            
            // Re-enable cloud sync after successful login
            cloudSyncTemporarilyDisabled = false;
            console.log('Cloud sync re-enabled after successful login');
            
            return { ok: true, user: currentUser };
        } catch (error) {
            const code = String(error?.message || '').trim();
            const normalizedEmail = normalizeEmail(email);
            const localUsers = getUsers();
            const matchingLocalUser = localUsers.find(item =>
                normalizeEmail(item.email) === normalizedEmail &&
                String(item.password) === String(password || '')
            );

            // Auto-migrate old local-only accounts to cloud so same credentials work across devices.
            if (matchingLocalUser && (code === 'INVALID_LOGIN_CREDENTIALS' || code === 'INVALID_PASSWORD' || code === 'EMAIL_NOT_FOUND')) {
                try {
                    const signup = await firebaseAuthRequest('accounts:signUp', {
                        email: normalizedEmail,
                        password: String(password || ''),
                        returnSecureToken: true
                    });

                    setCloudSession({
                        localId: signup.localId,
                        idToken: signup.idToken,
                        refreshToken: signup.refreshToken,
                        email: normalizedEmail
                    });

                    const migratedProfile = {
                        id: signup.localId,
                        firstName: String(matchingLocalUser.firstName || '').trim(),
                        lastName: String(matchingLocalUser.lastName || '').trim(),
                        email: normalizedEmail,
                        phone: String(matchingLocalUser.phone || '').trim(),
                        addresses: normalizeAddressEntries(matchingLocalUser.addresses),
                        createdAt: matchingLocalUser.createdAt || new Date().toISOString()
                    };

                    const localCart = safeJSONParse(localStorage.getItem(getScopedKey('cart', matchingLocalUser.id)), []);
                    const localWishlist = safeJSONParse(localStorage.getItem(getScopedKey('wishlist', matchingLocalUser.id)), []);
                    const localOrders = safeJSONParse(localStorage.getItem(getScopedKey('orders', matchingLocalUser.id)), []);

                    await saveCloudUserField('profile', migratedProfile);
                    await saveCloudUserField('cart', Array.isArray(localCart) ? localCart : []);
                    await saveCloudUserField('wishlist', Array.isArray(localWishlist) ? localWishlist : []);
                    await saveCloudUserField('orders', Array.isArray(localOrders) ? localOrders : []);

                    currentUser = migratedProfile;
                    saveProfileCache(currentUser, signup.localId);
                    localStorage.setItem(AUTH_SESSION_KEY, currentUser.id);
                    localStorage.setItem(LEGACY_LOGIN_FLAG_KEY, 'true');

                    cart = Array.isArray(localCart) ? localCart : [];
                    wishlist = Array.isArray(localWishlist) ? localWishlist : [];
                    saveScopedList('cart', cart);
                    saveScopedList('wishlist', wishlist);
                    updateCartCount();
                    updateWishlistCount();

                    return { ok: true, user: currentUser };
                } catch (migrationError) {
                    return { ok: false, message: mapCloudAuthError(migrationError.message) };
                }
            }

            return { ok: false, message: mapCloudAuthError(error.message) };
        }
    }

    const users = getUsers();
    const normalizedEmail = normalizeEmail(email);
    const user = users.find(item => normalizeEmail(item.email) === normalizedEmail && String(item.password) === String(password || ''));
    if (!user) return { ok: false, message: 'Invalid email or password.' };
    setCurrentUserById(user.id);
    mergeGuestDataIntoUser();
    hydrateUserState();
    saveProfileCache(currentUser, user.id);
    return { ok: true, user };
}

async function requestPasswordReset(email) {
    const normalizedEmail = normalizeEmail(email);
    if (!normalizedEmail) {
        return { ok: false, message: 'Please enter a valid email.' };
    }

    const hasCloudAuth = Boolean(CLOUD_SYNC_CONFIG.enabled && CLOUD_SYNC_CONFIG.firebaseApiKey);
    if (hasCloudAuth) {
        try {
            const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${CLOUD_SYNC_CONFIG.firebaseApiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    requestType: 'PASSWORD_RESET',
                    email: normalizedEmail
                })
            });
            const data = await response.json();
            if (!response.ok) {
                const code = String(data?.error?.message || '');
                if (code === 'EMAIL_NOT_FOUND') {
                    // Prevent account enumeration while keeping UX simple.
                    return { ok: true, message: 'If this email is registered, a reset link has been sent.', debugCode: code };
                }
                if (code === 'OPERATION_NOT_ALLOWED') {
                    return { ok: false, message: 'Password reset is disabled in Firebase Auth. Enable Email/Password sign-in.', debugCode: code };
                }
                return { ok: false, message: mapCloudAuthError(code), debugCode: code };
            }
            return { ok: true, message: 'Password reset email sent. Check your inbox.', debugCode: 'OK' };
        } catch (error) {
            return { ok: false, message: 'Network error while sending reset email.', debugCode: 'NETWORK_REQUEST_FAILED' };
        }
    }

    const users = getUsers();
    const exists = users.some(user => normalizeEmail(user.email) === normalizedEmail);
    if (!exists) {
        return { ok: false, message: 'Account not found for this email.', debugCode: 'LOCAL_EMAIL_NOT_FOUND' };
    }
    return {
        ok: false,
        requiresLocalReset: true,
        message: 'Cloud reset is unavailable. Set a new password here.',
        debugCode: 'LOCAL_RESET_REQUIRED'
    };
}

async function ensureCloudAccountFromCredentials(email, password) {
    const normalizedEmail = normalizeEmail(email);
    const normalizedPassword = String(password || '');
    if (!normalizedEmail) return { ok: false, message: 'Please enter a valid email.' };
    if (normalizedPassword.length < 6) return { ok: false, message: 'Password must be at least 6 characters.' };

    const hasCloudAuth = Boolean(CLOUD_SYNC_CONFIG.enabled && CLOUD_SYNC_CONFIG.firebaseApiKey);
    if (!hasCloudAuth) return { ok: false, message: 'Cloud auth is not configured.' };

    try {
        cloudSyncTemporarilyDisabled = false;
        const signup = await firebaseAuthRequest('accounts:signUp', {
            email: normalizedEmail,
            password: normalizedPassword,
            returnSecureToken: true
        });

        setCloudSession({
            localId: signup.localId,
            idToken: signup.idToken,
            refreshToken: signup.refreshToken,
            email: normalizedEmail
        });

        const localUsers = getUsers();
        const localUser = localUsers.find(item => normalizeEmail(item.email) === normalizedEmail);
        const profile = {
            id: signup.localId,
            firstName: String(localUser?.firstName || '').trim(),
            lastName: String(localUser?.lastName || '').trim(),
            email: normalizedEmail,
            phone: String(localUser?.phone || '').trim(),
            addresses: normalizeAddressEntries(localUser?.addresses),
            createdAt: localUser?.createdAt || new Date().toISOString()
        };

        await saveCloudUserField('profile', profile);
        return { ok: true, message: 'Cloud account created. You can now login across devices.' };
    } catch (error) {
        if (String(error?.message || '').trim() === 'EMAIL_EXISTS') {
            return { ok: false, message: 'Cloud account already exists for this email. Please check password or reset it.' };
        }
        return { ok: false, message: mapCloudAuthError(error.message) };
    }
}

function resetLocalPassword(email, newPassword) {
    const normalizedEmail = normalizeEmail(email);
    const nextPassword = String(newPassword || '');
    if (!normalizedEmail) return { ok: false, message: 'Invalid email.' };
    if (nextPassword.length < 6) return { ok: false, message: 'Password must be at least 6 characters.' };

    const users = getUsers();
    const index = users.findIndex(user => normalizeEmail(user.email) === normalizedEmail);
    if (index === -1) return { ok: false, message: 'Account not found for this email.' };

    users[index] = { ...users[index], password: nextPassword };
    saveUsers(users);
    return { ok: true, message: 'Password updated successfully. Please login.' };
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
// ADMIN MODE
// ============================================
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
    const targetId = Number(productId);
    const ids = getHiddenProductIds();
    
    // Don't add duplicates
    if (!ids.includes(targetId)) {
        ids.push(targetId);
        saveHiddenProductIds(ids);
        console.log('Product hidden:', targetId, '- Total hidden:', ids.length);
        
        // Sync to cloud for cross-device consistency
        if (isCloudSyncEnabled() && isUserLoggedIn()) {
            saveCloudUserField('hiddenProductIds', ids)
                .catch(error => console.warn('Cloud hidden products sync failed:', error.message));
        }
    } else {
        console.log('Product already hidden:', targetId);
    }
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
}

// ============================================
// CUSTOM PRODUCTS
// ============================================

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
        description: (rawProduct.description || 'Handcrafted elegant abaya.').trim(),
        image: mainImage,
        images: imageList.length ? imageList : [mainImage],
        sizes: Array.isArray(rawProduct.sizes) && rawProduct.sizes.length ? rawProduct.sizes : ['S', 'M', 'L', 'XL'],
        colors: Array.isArray(rawProduct.colors) && rawProduct.colors.length ? rawProduct.colors : ['Black'],
        rating: Number(rawProduct.rating || 4.8),
        reviews: Number(rawProduct.reviews || 0),
        fabric: (rawProduct.fabric || 'Premium Nidha').trim(),
        badge: (rawProduct.badge || 'new').trim(),
        isFeatured: Boolean(rawProduct.isFeatured),
        isCustom: true
    };
}


function isBlockedProductName(name) {
    const normalized = String(name || '').trim().toLowerCase();
    return BLOCKED_PRODUCT_NAMES.has(normalized);
}

async function loadAdminProductsFromCloud() {
    if (!isCustomProductsCloudSyncEnabled()) return null;
    try {
        const baseUrl = CLOUD_SYNC_CONFIG.firebaseDatabaseUrl;
        if (baseUrl) {
            const response = await fetch(`${baseUrl}/adminProducts.json`);
            if (response.ok) return await response.json();
        }
    } catch (e) {
        console.warn('Cloud load failed:', e);
    }
    return null;
}


// Cloud sync for custom products (admin products)
async function saveCustomProductsToCloud(customProducts) {
    if (!isCustomProductsCloudSyncEnabled()) {
        lastCustomProductsSyncError = 'Cloud sync not configured.';
        return false;
    }
    lastCustomProductsSyncError = '';
    const safeProducts = (Array.isArray(customProducts) ? customProducts : []).filter(product => !isBlockedProductName(product?.name));
    try {
        // Custom product sync should not remain blocked by temporary user-sync auth failures.
        cloudSyncTemporarilyDisabled = false;

        if (!cloudSession?.idToken) {
            const ensured = await ensureCloudSessionForCustomProducts();
            if (!ensured) {
                if (!lastCustomProductsSyncError) {
                    lastCustomProductsSyncError = 'Anonymous auth failed. Enable Firebase Anonymous sign-in.';
                }
                return false;
            }
        }
        if (isCloudSyncEnabled() && cloudSession?.idToken) {
            await firebaseDbRequest('/adminProducts', 'PUT', safeProducts);
            return true;
        }

        // Final fallback for open DB rules (e.g. adminProducts .write=true).
        await saveAdminProductsToCloud(safeProducts);
        return true;
    } catch (error) {
        console.warn('Cloud custom products sync failed:', error.message);
        lastCustomProductsSyncError = String(error?.message || 'Cloud sync failed.');
        if (isPermissionDeniedError(lastCustomProductsSyncError)) return false;
        try {
            await saveAdminProductsToCloud(safeProducts);
            lastCustomProductsSyncError = '';
            return true;
        } catch (fallbackError) {
            console.warn('Cloud custom products fallback sync failed:', fallbackError.message);
            lastCustomProductsSyncError = String(fallbackError?.message || lastCustomProductsSyncError || 'Cloud sync failed.');
            return false;
        }
    }
}

async function loadCustomProductsFromCloud() {
    if (!isCustomProductsCloudSyncEnabled()) return null;
    cloudSyncTemporarilyDisabled = false;
    const normalizeCloudProductsPayload = (payload) => {
        if (Array.isArray(payload)) return payload;
        if (payload && typeof payload === 'object') return Object.values(payload);
        return null;
    };
    try {
        if (isCloudSyncEnabled() && cloudSession?.idToken) {
            const data = await firebaseDbRequest('/adminProducts', 'GET');
            const normalized = normalizeCloudProductsPayload(data);
            if (normalized) return normalized;
        }
        const fallbackData = await loadAdminProductsFromCloud();
        const fallbackNormalized = normalizeCloudProductsPayload(fallbackData);
        if (fallbackNormalized) return fallbackNormalized;

        const ensured = await ensureCloudSessionForCustomProducts();
        if (ensured && isCloudSyncEnabled() && cloudSession?.idToken) {
            const authedData = await firebaseDbRequest('/adminProducts', 'GET');
            return normalizeCloudProductsPayload(authedData);
        }
        return null;
    } catch (error) {
        console.warn('Cloud custom products load failed:', error.message);
        try {
            const ensured = await ensureCloudSessionForCustomProducts();
            if (ensured && isCloudSyncEnabled() && cloudSession?.idToken) {
                const authedData = await firebaseDbRequest('/adminProducts', 'GET');
                const authedNormalized = normalizeCloudProductsPayload(authedData);
                if (authedNormalized) return authedNormalized;
            }
        } catch (authLoadError) {
            console.warn('Cloud custom products authenticated load failed:', authLoadError.message);
        }
        const fallbackData = await loadAdminProductsFromCloud();
        return normalizeCloudProductsPayload(fallbackData);
    }
}

async function syncCustomProductsFromCloud() {
    if (!isCustomProductsCloudSyncEnabled()) return;
    try {
        const cloudProducts = await loadCustomProductsFromCloud();
        if (Array.isArray(cloudProducts)) {
            const normalizedCloudProducts = cloudProducts
                .map(normalizeCustomProduct)
                .filter(product => !isBlockedProductName(product?.name));
            const localProducts = getStoredCustomProducts();
            console.log('Cloud sync - cloud products:', normalizedCloudProducts.length, 'local products:', localProducts.length);

            // Cloud is the source of truth for admin custom products.
            // Keep hidden filtering for storefront rendering only.
            const hiddenIds = getHiddenProductIds ? getHiddenProductIds() : [];
            const visibleCloudProducts = normalizedCloudProducts.filter(cp => !hiddenIds.includes(Number(cp.id)));

            // Replace local custom product cache so deletes propagate across devices.
            saveStoredCustomProducts(normalizedCloudProducts);
            if (cloudProducts.length !== normalizedCloudProducts.length) {
                saveCustomProductsToCloud(normalizedCloudProducts);
            }

            // Replace custom products in runtime list.
            for (let i = products.length - 1; i >= 0; i -= 1) {
                if (products[i] && products[i].isCustom) {
                    products.splice(i, 1);
                }
            }
            visibleCloudProducts.forEach(product => {
                if (!products.find(p => Number(p.id) === Number(product.id))) {
                    products.push(product);
                }
            });

            customProductsLoaded = true;
            console.log('Cloud sync complete - final local products:', normalizedCloudProducts.length);

            // Re-render pages if cloud sync arrived after initial paint.
            if (typeof renderProducts === 'function') {
                try { renderProducts(); } catch (e) { console.error('Error rendering products after cloud sync:', e); }
            }
            if (typeof window.refreshHomeProductSlider === 'function') {
                try { window.refreshHomeProductSlider(); } catch (e) { console.error('Error refreshing slider after cloud sync:', e); }
            }
        }
    } catch (error) {
        console.warn('Custom products cloud sync error:', error.message);
        // During initialization, just warn - don't disable cloud sync
        // Disabling should only happen for user-triggered operations
    }
}

function getStoredCustomProducts() {
    try {
        const data = localStorage.getItem(CUSTOM_PRODUCTS_KEY);
        const parsed = data ? JSON.parse(data) : [];
        if (!Array.isArray(parsed)) return [];

        // Repair legacy/broken entries so delete operations always have a valid numeric ID.
        const baseId = Date.now();
        let changed = false;
        const normalized = parsed.map((item, index) => {
            const currentId = Number(item && item.id);
            const stableId = Number.isFinite(currentId) && currentId > 0 ? currentId : (baseId + index);
            if (!Number.isFinite(currentId) || currentId <= 0) changed = true;

            const next = normalizeCustomProduct({ ...(item || {}), id: stableId });
            if (!item || item.isCustom !== true || String(item.id) !== String(next.id)) changed = true;
            return next;
        }).filter(product => !isBlockedProductName(product?.name));

        if (changed) {
            saveStoredCustomProducts(normalized);
        }
        return normalized;
    } catch (e) {
        console.warn('Failed to get stored custom products:', e);
        return [];
    }
}

function saveStoredCustomProducts(customProducts) {
    localStorage.setItem(CUSTOM_PRODUCTS_KEY, JSON.stringify(customProducts));
}

function loadCustomProducts() {
    if (customProductsLoaded) return;
    const customProducts = getStoredCustomProducts();
    const hiddenIds = getHiddenProductIds ? getHiddenProductIds() : [];
    
    customProducts.forEach(product => {
        const productId = Number(product.id);
        // Don't load products that are marked as hidden
        if (hiddenIds.includes(productId)) {
            console.log('Skipping hidden custom product on load:', productId);
            return;
        }
        
        if (!products.find(p => Number(p.id) === productId)) {
            products.push(product);
        }
    });
    customProductsLoaded = true;
}

async function addAdminProduct(rawProduct) {
    const newProduct = normalizeCustomProduct({ ...rawProduct, id: Date.now() });
    if (isBlockedProductName(newProduct.name)) {
        return { product: null, synced: false, error: 'This product is blocked.' };
    }
    const customProducts = getStoredCustomProducts();
    customProducts.unshift(newProduct);
    saveStoredCustomProducts(customProducts);
    products.push(newProduct);
    const synced = await saveCustomProductsToCloud(customProducts);
    if (typeof renderProducts === 'function') renderProducts();
    return {
        product: newProduct,
        synced: Boolean(synced),
        error: lastCustomProductsSyncError || ''
    };
}

async function saveAdminProductsToCloud(products) {
    if (!isCustomProductsCloudSyncEnabled()) throw new Error('Cloud sync not configured.');
    const baseUrl = CLOUD_SYNC_CONFIG.firebaseDatabaseUrl;
    if (!baseUrl) throw new Error('Realtime Database URL missing.');

    const response = await fetch(`${baseUrl}/adminProducts.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(products)
    });
    if (!response.ok) {
        let reason = `Cloud save failed (${response.status})`;
        try {
            const text = await response.text();
            const parsed = text ? safeJSONParse(text, null) : null;
            if (parsed?.error) {
                reason = typeof parsed.error === 'string' ? parsed.error : (parsed.error.message || reason);
            } else if (text) {
                reason = text;
            }
        } catch (e) {}
        throw new Error(reason);
    }
    return true;
}



function removeAdminProduct(id, fallbackIndex = null) {
    const rawId = String(id ?? '').trim();
    const targetId = Number(rawId);
    const hasNumericId = Number.isFinite(targetId) && targetId > 0;
    const customProducts = getStoredCustomProducts();
    const originalLength = customProducts.length;
    let removeIndex = -1;

    if (hasNumericId) {
        removeIndex = customProducts.findIndex(p => Number(p.id) === targetId);
    } else if (rawId) {
        removeIndex = customProducts.findIndex(p => String(p.id ?? '').trim() === rawId);
    }
    if (removeIndex < 0 && Number.isInteger(fallbackIndex) && fallbackIndex >= 0 && fallbackIndex < originalLength) {
        removeIndex = fallbackIndex;
    }
    
    // Check if product was actually removed
    if (removeIndex < 0) {
        // Product not found
        console.warn('Product not found:', { id: rawId, numericId: targetId, fallbackIndex, originalLength });
        return false;
    }
    const removed = customProducts[removeIndex] || null;
    const filtered = customProducts.filter((_, index) => index !== removeIndex);
    
    console.log('Removing admin product ID:', hasNumericId ? targetId : rawId);
    console.log('Before removal - count:', originalLength);
    console.log('After removal - count:', filtered.length);
    
    // Save the filtered products - MAKE SURE THIS IS SAVED
    saveStoredCustomProducts(filtered);
    
    // Verify it was saved
    const savedProducts = getStoredCustomProducts();
    console.log('Verification - products in localStorage:', savedProducts.length);
    console.log('Verification - product still exists?', savedProducts.find(p => Number(p.id) === targetId));
    
    // Remove from products array
    const beforeFilter = products.length;
    const removedId = Number(removed?.id);
    for (let i = products.length - 1; i >= 0; i -= 1) {
        const runtimeId = Number(products[i]?.id);
        if ((Number.isFinite(removedId) && runtimeId === removedId) || (products[i]?.isCustom && String(products[i]?.name || '') === String(removed?.name || ''))) {
            products.splice(i, 1);
        }
    }
    console.log('Memory - before:', beforeFilter, 'after:', products.length);
    
    // Sync with cloud
    saveCustomProductsToCloud(filtered);
    
    // Try to refresh both shop and home sliders
    if (typeof renderProducts === 'function') {
        try { renderProducts(); } catch (e) { console.error('Error rendering products:', e); }
    }
    if (typeof window.refreshHomeProductSlider === 'function') {
        try { window.refreshHomeProductSlider(); } catch (e) { console.error('Error refreshing home slider:', e); }
    }
    
    return true;
}



function removeAllAdminProducts() {
    const customProducts = getStoredCustomProducts();
    if (customProducts.length === 0) {
        showToast('No custom products to remove.');
        return false;
    }
    
    // Remove all custom products from localStorage
    saveStoredCustomProducts([]);
    
    // Remove all custom products from products array
    for (let i = products.length - 1; i >= 0; i -= 1) {
        if (products[i] && products[i].isCustom) {
            products.splice(i, 1);
        }
    }
    
    // Sync to cloud
    saveCustomProductsToCloud([]);
    
    // Refresh the display
    renderProducts();
    if (typeof renderWishlist === 'function') renderWishlist();
    if (typeof renderCart === 'function') renderCart();
    
    // Refresh featured products slider if available
    if (typeof window.refreshHomeProductSlider === 'function') {
        try { window.refreshHomeProductSlider(); } catch (e) { console.error('Error refreshing home slider:', e); }
    }
    
    showToast('All custom products removed.');
    return true;
}

function removeProductAsAdmin(productId) {
    console.log('=== removeProductAsAdmin called ===');
    console.log('removeProductAsAdmin called with ID:', productId);
    
    if (!isAdminModeEnabled()) {
        console.log('Admin mode not enabled');
        showToast('Admin access required.', 'error');
        return false;
    }
    
    const targetId = Number(productId);
    console.log('Looking for product with ID:', targetId);
    
    const target = products.find(product => Number(product.id) === targetId);
    if (!target) {
        console.error('Product not found:', targetId);
        showToast('Product not found.', 'error');
        return false;
    }
    
    console.log('Found product:', target.name, '- Is Custom:', target.isCustom);
    
    if (!confirm('Remove this product?')) {
        console.log('Removal cancelled by user');
        return false;
    }

    if (target.isCustom) {
        console.log('Product is custom, removing from admin products');
        const removed = removeAdminProduct(targetId);
        if (!removed) {
            console.error('Failed to remove admin product');
            showToast('Unable to remove product.', 'error');
            return false;
        }
    } else {
        console.log('Product is built-in, hiding it');
        hideProductById(targetId);
    }

    cart = cart.filter(item => Number(item.id) !== targetId);
    wishlist = wishlist.filter(item => Number(item.id) !== targetId);
    saveCart();
    saveWishlist();
    updateCartCount();
    updateWishlistCount();
    console.log('Cart and wishlist updated');
    
    console.log('Calling renderProducts...');
    renderProducts();
    
    // Refresh featured products slider if available
    console.log('Calling refreshHomeProductSlider...');
    if (typeof window.refreshHomeProductSlider === 'function') {
        try { 
            window.refreshHomeProductSlider(); 
            console.log('Home product slider refreshed');
        } catch (e) { 
            console.error('Error refreshing home slider:', e); 
        }
    } else {
        console.warn('window.refreshHomeProductSlider is not available');
    }
    
    if (typeof renderWishlist === 'function') renderWishlist();
    if (typeof renderCart === 'function') renderCart();
    showToast('Product removed.');
    
    console.log('=== Product removal completed ===');
    console.log('Product removal completed successfully');
    return true;
}

function removeFeaturedProductAsAdmin(productId) {
    return removeProductAsAdmin(productId);
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    try {
        initializeApp();
    } catch (error) {
        console.error('Initialization error:', error);
    } finally {
        // Always hide the page loader, even if there's an error
        const loader = document.querySelector('.page-loader');
        if (loader) {
            loader.style.display = 'none';
        }
    }
});

function initializeApp() {
    try { loadCustomProducts(); } catch (e) { console.error('Error loading custom products:', e); }
    try { migrateLegacyGuestData(); } catch (e) { console.error('Error migrating legacy data:', e); }
    try { hydrateUserState(); } catch (e) { console.error('Error hydrating user state:', e); }
    try { initializeTrackingScripts(); } catch (e) { console.error('Error initializing tracking:', e); }
    try { loadTheme(); } catch (e) { console.error('Error loading theme:', e); }
    try { loadLanguage(); } catch (e) { console.error('Error loading language:', e); }
    try { updateCartCount(); } catch (e) { console.error('Error updating cart count:', e); }
    try { updateWishlistCount(); } catch (e) { console.error('Error updating wishlist count:', e); }
    try { syncAdminModeClass(); } catch (e) { console.error('Error syncing admin mode:', e); }
    try { setupEventListeners(); } catch (e) { console.error('Error setting up event listeners:', e); }
    try { showWelcomePopup(); } catch (e) { console.error('Error showing welcome popup:', e); }
    try { syncStateFromCloud(); } catch (e) { console.error('Error syncing state from cloud:', e); }
    try { syncCustomProductsFromCloud(); } catch (e) { console.error('Error syncing custom products from cloud:', e); }
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
    if (langSelect) langSelect.value = currentLanguage;
}

function updateTranslations() {
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
    localStorage.setItem(LEGACY_CART_KEY, JSON.stringify(cart));
    // Fire-and-forget cloud sync - don't wait or let errors block local operation
    if (isCloudSyncEnabled() && isUserLoggedIn()) {
        saveCloudUserField('cart', cart)
            .catch(error => {
                console.warn('Cloud cart sync failed:', error.message);
                // Only disable cloud sync on auth errors from user-triggered operations
                // This prevents the app from getting stuck on stale tokens
                if (error.message && (error.message.includes('Session expired') || error.message.includes('Cloud access denied') || error.message.includes('401') || error.message.includes('403'))) {
                    cloudSyncTemporarilyDisabled = true;
                    console.log('Cloud auth expired, disabling cloud sync. Please login again.');
                }
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
        window.gtag = function gtag() { window.dataLayer.push(arguments); };
        window.gtag('js', new Date());
        window.gtag('config', TRACKING_CONFIG.ga4MeasurementId);
    }

    if (TRACKING_CONFIG.metaPixelId && !window.fbq) {
        window.fbq = function fbq() {
            window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments);
        };
        if (!window._fbq) window._fbq = window.fbq;
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

    // Get all form values
    const firstName = formElement.querySelector('[name="firstName"]')?.value?.trim() || '';
    const lastName = formElement.querySelector('[name="lastName"]')?.value?.trim() || '';
    const email = formElement.querySelector('[name="email"]')?.value?.trim() || '';
    const phone = formElement.querySelector('[name="phone"]')?.value?.trim() || '';
    const street = formElement.querySelector('[name="street"]')?.value?.trim() || '';
    const apartment = formElement.querySelector('[name="apartment"]')?.value?.trim() || '';
    const city = formElement.querySelector('[name="city"]')?.value?.trim() || '';
    const state = formElement.querySelector('[name="state"]')?.value?.trim() || '';
    const postalCode = formElement.querySelector('[name="postalCode"]')?.value?.trim() || '';
    const countrySelect = formElement.querySelector('[name="country"]');
    const country = countrySelect ? countrySelect.options[countrySelect.selectedIndex]?.text?.trim() || '' : '';

    const items = cart.map(item => ({
        id: item.id, name: item.name, priceUSD: item.price,
        priceINR: convertPriceToCurrency(item.price, 'INR'),
        quantity: item.quantity, size: item.size, color: item.color
    }));

    return {
        orderId: generateOrderId(),
        createdAt: new Date().toISOString(),
        currency: 'INR',
        displayCurrency: currentCurrency,
        displayTotal: `${currencySymbols.INR}${subtotalINR.toFixed(2)}`,
        subtotal: subtotalINR, total: subtotalINR,
        subtotalUSD: Number(subtotalUSD.toFixed(2)),
        totalUSD: Number(subtotalUSD.toFixed(2)),
        itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
        paymentMethod: selectedPayment ? selectedPayment.value : 'card',
        account: currentUser ? { id: currentUser.id, email: currentUser.email } : null,
        customer: {
            firstName: firstName || currentUser?.firstName || '',
            lastName: lastName || currentUser?.lastName || '',
            email: email || currentUser?.email || '',
            phone: phone || currentUser?.phone || '',
            street: street,
            apartment: apartment,
            city: city,
            state: state,
            postalCode: postalCode,
            country: country
        },
        items: items,
        source: { page: window.location.href, userAgent: navigator.userAgent }
    };
}

function trackPurchase(order) {
    if (typeof window.gtag === 'function') {
        window.gtag('event', 'purchase', {
            transaction_id: order.orderId, value: order.total, currency: order.currency,
            items: order.items.map(item => ({ item_id: item.id, item_name: item.name, price: item.priceINR, quantity: item.quantity }))
        });
    }
    if (typeof window.fbq === 'function') {
        window.fbq('track', 'Purchase', {
            value: order.total, currency: order.currency,
            contents: order.items.map(item => ({ id: item.id, quantity: item.quantity, item_price: item.priceINR })),
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

    const payload = { ...order, adminEmail: TRACKING_CONFIG.adminEmail || null };
    const response = await fetch(TRACKING_CONFIG.orderWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        throw new Error(`Webhook failed with status ${response.status}`);
    }
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
    const formData = new FormData();
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

async function sendOrderToFormSubmit(order, formElement) {
    // Handle payment screenshot upload first
    const screenshotInput = (formElement && formElement.querySelector('input[name="paymentScreenshot"]')) || document.getElementById('popupPaymentScreenshotInput');
    const screenshotFile = screenshotInput && screenshotInput.files && screenshotInput.files.length ? screenshotInput.files[0] : null;
    
    let imageUrl = null;
    if (screenshotFile) {
        try {
            const base64Data = await fileToBase64(screenshotFile);
            imageUrl = await uploadToImgBB(base64Data, screenshotFile.name);
        } catch (uploadError) {
            console.error('Screenshot upload failed:', uploadError);
        }
    }

    // Now create payload with screenshot URL
    const payload = createFormSubmitPayload(order, imageUrl);
    const emailTarget = encodeURIComponent(TRACKING_CONFIG.adminEmail);

    try {
        const ajaxResponse = await fetch(`https://formsubmit.co/ajax/${emailTarget}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify(payload)
        });
        if (ajaxResponse.ok) return;
    } catch (error) {
        console.warn('FormSubmit AJAX failed, using fallback POST.', error);
    }

    const formData = new FormData();
    for (const [key, value] of Object.entries(payload)) {
        formData.append(key, value);
    }
    await fetch(`https://formsubmit.co/${emailTarget}`, {
        method: 'POST', body: formData, keepalive: true
    });
}

function createFormSubmitPayload(order, screenshotUrl = null) {
    const customerName = `${order.customer.firstName} ${order.customer.lastName}`.trim();
    const addressParts = [
        order.customer.street, order.customer.apartment, order.customer.city,
        order.customer.state, order.customer.postalCode, order.customer.country
    ].filter(Boolean);
    const fullAddress = addressParts.join(', ');

    const itemLines = order.items.map((item, index) =>
        `${index + 1}. ${item.name} | Qty: ${item.quantity} | Size: ${item.size} | Color: ${item.color} | INR ${(item.priceINR * item.quantity).toFixed(2)}`
    ).join('<br>');

    // Build HTML message with embedded screenshot image
    let message = `<b>Order:</b> ${order.orderId}<br><b>Total:</b> INR ${order.total}<br><b>Items:</b><br>${itemLines}<br><b>Customer Address:</b><br>${fullAddress}`;
    
    if (screenshotUrl) {
        message += `<br><b>Payment Screenshot:</b><br><img src="${screenshotUrl}" alt="Payment Screenshot" style="max-width:300px; border:1px solid #ccc;">`;
    }

    return {
        _subject: screenshotUrl ? `New Order: ${order.orderId} - Screenshot Attached` : `New Checkout Order: ${order.orderId}`,
        name: customerName || 'Website Customer',
        email: TRACKING_CONFIG.adminEmail,
        _replyto: order.customer.email || TRACKING_CONFIG.adminEmail,
        phone: order.customer.phone || '',
        order_id: order.orderId,
        payment_method: order.paymentMethod,
        order_total_inr: String(order.total),
        address: fullAddress,
        street: order.customer.street || '',
        apartment: order.customer.apartment || '',
        city: order.customer.city || '',
        state: order.customer.state || '',
        postal_code: order.customer.postalCode || '',
        country: order.customer.country || '',
        order_details: itemLines.replace(/<br>/g, '\n'),
        message: message,
        _captcha: 'false',
        _template: 'html'
    };
}

function saveRecentOrder(order) {
    localStorage.setItem(getScopedKey('lastOrder'), JSON.stringify(order));
    localStorage.setItem('lastOrder', JSON.stringify(order));
    if (isCloudSyncEnabled() && isUserLoggedIn()) {
        saveCloudUserField('lastOrder', order).catch(error => console.warn('Cloud last-order sync failed:', error.message));
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
    localStorage.setItem(LEGACY_WISHLIST_KEY, JSON.stringify(wishlist));
    // Fire-and-forget cloud sync - don't wait or let errors block local operation
    if (isCloudSyncEnabled() && isUserLoggedIn()) {
        saveCloudUserField('wishlist', wishlist)
            .catch(error => {
                console.warn('Cloud wishlist sync failed:', error.message);
                // Only disable cloud sync on auth errors from user-triggered operations
                if (error.message && (error.message.includes('Session expired') || error.message.includes('Cloud access denied') || error.message.includes('401') || error.message.includes('403'))) {
                    cloudSyncTemporarilyDisabled = true;
                    console.log('Cloud auth expired, disabling cloud sync. Please login again.');
                }
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
    window.addEventListener('scroll', handleScroll);
    setupMobileMenu();
    setupSearch();
    setupQuickView();
    setupNewsletter();
    setupPopup();
    setupProductTabs();
    setupFilters();
    setupThemeToggle();
    setupHiddenAdminAccess();
}

function handleScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
        scrollTop.classList.toggle('visible', window.scrollY > 300);
    }
}

function setupMobileMenu() {
    const toggle = document.querySelector('.navbar-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.mobile-menu-close');
    const overlay = document.querySelector('.mobile-overlay');

    if (toggle && mobileMenu) {
        toggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            overlay?.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        closeBtn?.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            overlay?.classList.remove('active');
            document.body.style.overflow = '';
        });
        overlay?.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
}

function setupSearch() {
    const searchIcon = document.querySelector('.search-toggle');
    const searchBar = document.querySelector('.search-bar');

    if (searchIcon && searchBar) {
        searchIcon.addEventListener('click', () => {
            searchBar.classList.toggle('active');
            if (searchBar.classList.contains('active')) {
                searchBar.querySelector('input')?.focus();
            }
        });
    }
}

function setupQuickView() {
    const modal = document.getElementById('quickViewModal');
    const closeBtn = document.querySelector('.modal-close');

    closeBtn?.addEventListener('click', closeQuickView);
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) closeQuickView();
    });
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
                <div class="product-option">
                    <label>Color:</label>
                    <div class="color-options">
                        ${product.colors.map(c => `<div class="color-option" style="background: ${c.toLowerCase()}"></div>`).join('')}
                    </div>
            </div>
            <button class="btn btn-primary" onclick="addToCart(${product.id})">
                ${translations[currentLanguage].addToCart || 'Add to Cart'}
            </button>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
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

function showWelcomePopup() {
    const popup = document.getElementById('welcomePopup');
    const shown = localStorage.getItem('popupShown');

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

    popup?.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

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

function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-option input');
    const filterPanel = document.querySelector('.shop-filters');
    const filterToggleBtn = document.querySelector('.shop-filter-toggle');
    const filterCloseBtn = document.querySelector('.shop-filter-close');
    const filterOverlay = document.querySelector('.shop-filter-overlay');
    const applyBtn = filterPanel?.querySelector('.btn.btn-primary');

    filterBtns.forEach(btn => btn.addEventListener('change', applyFilters));

    if (!filterPanel || !filterToggleBtn || !filterOverlay) return;

    const closeFiltersPanel = () => {
        filterPanel.classList.remove('is-open');
        filterOverlay.classList.remove('active');
        document.body.classList.remove('filters-open');
    };

    filterToggleBtn.addEventListener('click', () => {
        filterPanel.classList.add('is-open');
        filterOverlay.classList.add('active');
        document.body.classList.add('filters-open');
    });
    filterCloseBtn?.addEventListener('click', closeFiltersPanel);
    filterOverlay.addEventListener('click', closeFiltersPanel);
    applyBtn?.addEventListener('click', () => {
        if (window.innerWidth <= 992) closeFiltersPanel();
    });
}

function applyFilters() {
    const categories = Array.from(document.querySelectorAll('.filter-option input:checked')).map(input => input.value);
    const minPrice = parseFloat(document.getElementById('minPrice')?.value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice')?.value) || Infinity;

    let filtered = products.filter(product => {
        const categoryMatch = categories.length === 0 || categories.includes(product.category);
        const priceMatch = product.price >= minPrice && product.price <= maxPrice;
        return categoryMatch && priceMatch;
    });

    const sortValue = document.getElementById('sortSelect')?.value;
    if (sortValue === 'price-low') filtered.sort((a, b) => a.price - b.price);
    else if (sortValue === 'price-high') filtered.sort((a, b) => b.price - a.price);
    else if (sortValue === 'newest') filtered.sort((a, b) => (b.badge === 'new' ? 1 : 0) - (a.badge === 'new' ? 1 : 0));

    renderProducts(filtered);
}

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
                            data-product-id="${product.id}">♥</button>
                    <button class="product-action-btn" onclick="openQuickView(${product.id})">👁</button>
                    ${showAdminRemove ? `<button class="product-action-btn" onclick="removeProductAsAdmin(${product.id})" title="Remove product" style="font-size: 0.68rem; font-weight: 700;">DEL</button>` : ''}
                </div>
                <div class="product-quick-view" onclick="openQuickView(${product.id})">Quick View</div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title"><a href="product.html?id=${product.id}">${product.name}</a></h3>
                <div class="product-price">
                    <span class="current price-convert" data-price="${product.price}">${formatPrice(product.price)}</span>
                    ${product.originalPrice ? `<span class="original price-convert" data-price="${product.originalPrice}">${formatPrice(product.originalPrice)}</span>` : ''}
                </div>
                <div class="product-rating">
                    ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                    <span>(${product.reviews})</span>
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
                <h3>${translations[currentLanguage]?.emptyCart || 'Your cart is empty'}</h3>
                <p>Add some products to your cart to see them here.</p>
                <a href="shop.html" class="btn btn-primary">${translations[currentLanguage]?.continueShopping || 'Continue Shopping'}</a>
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
            <div class="cart-item-price price-convert" data-price="${item.price}">${formatPrice(item.price)}</div>
            <div class="cart-item-quantity">
                <button onclick="updateCartQuantity(${item.cartId}, -1)">−</button>
                <span>${item.quantity}</span>
                <button onclick="updateCartQuantity(${item.cartId}, 1)">+</button>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.cartId})">✕</button>
        </div>
    `).join('');

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
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getProductById(id) {
    return products.find(p => p.id === parseInt(id));
}

// ============================================
// EXPORTS
// ============================================
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
window.removeFeaturedProductAsAdmin = removeFeaturedProductAsAdmin;
window.removeAllAdminProducts = removeAllAdminProducts;
window.registerAccount = registerAccount;
window.loginAccount = loginAccount;
window.requestPasswordReset = requestPasswordReset;
window.ensureCloudAccountFromCredentials = ensureCloudAccountFromCredentials;
window.resetLocalPassword = resetLocalPassword;
window.logoutAccount = logoutAccount;
window.isUserLoggedIn = isUserLoggedIn;
window.getCurrentUser = () => currentUser;
window.getUserOrders = getUserOrders;
window.updateCurrentUserProfile = updateCurrentUserProfile;
window.saveOrderHistory = saveOrderHistory;
window.runCloudDiagnostics = runCloudDiagnostics;
window.isInWishlist = isInWishlist;
window.isProductHidden = isProductHidden;
window.getHiddenProductIds = getHiddenProductIds;
window.isAdminModeEnabled = isAdminModeEnabled;
window.setAdminModeEnabled = setAdminModeEnabled;


