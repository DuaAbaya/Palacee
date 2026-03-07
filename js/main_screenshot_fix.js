// ============================================
// SCREENSHOT FIX - Replace in main.js
// ============================================

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
    let base64Image = null;
    
    if (screenshotFile) {
        try {
            // Get base64 directly for inline embedding
            base64Image = await fileToBase64(screenshotFile);
            // Also upload to ImgBB for backup link
            imageUrl = await uploadToImgBB(base64Image, screenshotFile.name);
        } catch (uploadError) {
            console.error('Screenshot upload failed:', uploadError);
        }
    }

    // Now create payload with screenshot URL - ALWAYS USE HTML TEMPLATE
    const payload = createFormSubmitPayload(order, imageUrl, base64Image);
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

function createFormSubmitPayload(order, screenshotUrl = null, base64Image = null) {
    const customerName = `${order.customer.firstName} ${order.customer.lastName}`.trim();
    const addressParts = [
        order.customer.street, order.customer.apartment, order.customer.city,
        order.customer.state, order.customer.postalCode, order.customer.country
    ].filter(Boolean);
    const fullAddress = addressParts.join(', ');

    const itemLines = order.items.map((item, index) =>
        `${index + 1}. ${item.name} | Qty: ${item.quantity} | Size: ${item.size} | Color: ${item.color} | INR ${(item.priceINR * item.quantity).toFixed(2)}`
    ).join('<br>');

    // Build HTML message with embedded screenshot image - DIRECT BASE64 INLINE
    let message = `<html><body style="font-family: Arial, sans-serif; padding: 20px;">
<p style="background: #4CAF50; color: white; padding: 10px; border-radius: 5px;"><strong>New Order Received!</strong></p>

<p><strong>Order ID:</strong> ${order.orderId}</p>
<p><strong>Total Amount:</strong> <span style="color: #d32f2f; font-size: 18px;">INR ${order.total}</span></p>

<h3 style="border-bottom: 2px solid #4CAF50; padding-bottom: 5px;">Order Items:</h3>
<p>${itemLines}</p>

<h3 style="border-bottom: 2px solid #4CAF50; padding-bottom: 5px;">Customer Details:</h3>
<p><strong>Name:</strong> ${customerName || 'N/A'}</p>
<p><strong>Email:</strong> ${order.customer.email || 'N/A'}</p>
<p><strong>Phone:</strong> ${order.customer.phone || 'N/A'}</p>
<p><strong>Address:</strong> ${fullAddress || 'N/A'}</p>`;
    
    // Add screenshot - DIRECTLY EMBEDDED AS BASE64
    if (base64Image) {
        message += `
<h3 style="border-bottom: 2px solid #4CAF50; padding-bottom: 5px;">Payment Screenshot:</h3>
<p><img src="${base64Image}" alt="Payment Screenshot" style="max-width: 400px; border: 2px solid #ddd; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"></p>
<p><a href="${screenshotUrl}" style="color: #1976D2;">View Full Size Image</a></p>`;
    } else if (screenshotUrl) {
        message += `
<h3 style="border-bottom: 2px solid #4CAF50; padding-bottom: 5px;">Payment Screenshot:</h3>
<p><img src="${screenshotUrl}" alt="Payment Screenshot" style="max-width: 400px; border: 2px solid #ddd; border-radius: 8px;"></p>`;
    }

    message += `
<p style="margin-top: 20px; padding: 10px; background: #f5f5f5; border-radius: 5px;">
<strong>Source:</strong> ${window.location.href}<br>
<strong>Date:</strong> ${new Date().toLocaleString()}
</p>
</body></html>`;

    return {
        _subject: screenshotUrl ? `New Order: ${order.orderId} - PAID` : `New Order: ${order.orderId}`,
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
        message: message,
        _captcha: 'false',
        _template: 'html'
    };
}
