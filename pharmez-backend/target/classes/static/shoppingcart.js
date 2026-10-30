// Shopping Cart Page Logic
function renderCart() {
  const container = document.querySelector('.shoppingcart');
  if (!container) return;

  const cart = PharmezCart.getCart();
  const countDisplay = container.querySelector('.fle1 h6:last-child');
  if (countDisplay) {
    const totalQty = cart.reduce((s, i) => s + (i.quantity || 1), 0);
    countDisplay.textContent = `(${String(totalQty).padStart(2, '0')} Items)`;
  }

  // Remove existing product rows
  container.querySelectorAll('.fle3, .cart-hr').forEach(el => el.remove());

  // Find reference insertion point right after .fle2 + hr
  const headerRow = container.querySelector('.fle2');
  const divider = headerRow ? headerRow.nextElementSibling : null;

  if (cart.length === 0) {
    const emptyNotice = document.createElement('div');
    emptyNotice.className = 'fle3';
    emptyNotice.style.padding = '32px 0';
    emptyNotice.style.textAlign = 'center';
    emptyNotice.innerHTML = `
      <div style="width:100%;text-align:center;">
        <p style="font-size:16px;color:#888;margin-bottom:14px;">Your shopping cart is currently empty.</p>
        <a href="shop.html" style="background:#00c896;color:#fff;padding:10px 24px;border-radius:24px;text-decoration:none;font-weight:600;display:inline-block;">Explore Shop</a>
      </div>`;
    divider.after(emptyNotice);
    updateSummary();
    return;
  }

  let lastInserted = divider;
  cart.forEach((item, index) => {
    const row = document.createElement('div');
    row.className = 'fle3';
    const itemTotal = ((item.price || 0) * (item.quantity || 1)).toFixed(2);
    
    row.innerHTML = `
      <div class="fle4">
        <img src="${item.imageUrl || 'img/cart-image1.png'}" alt="${item.name}" onerror="this.src='img/cart-image1.png'">
        <div>
          <p><b>${item.name}</b></p>
          <p>Category: <b>${item.category || 'Medicine'}</b></p>
        </div>
      </div>
      <div class="price">$${(item.price || 0).toFixed(2)}</div>
      <div class="quantity-wrapper">
        <button class="qty-btn minus">−</button>
        <div class="qty-number">${item.quantity || 1}</div>
        <button class="qty-btn plus">+</button>
      </div>
      <div class="total-price">$${itemTotal}</div>
      <button class="remove-btn" title="Remove Item">✕</button>
    `;

    // Quantity events
    row.querySelector('.minus').addEventListener('click', () => {
      PharmezCart.updateQuantity(index, -1);
      renderCart();
    });

    row.querySelector('.plus').addEventListener('click', () => {
      PharmezCart.updateQuantity(index, 1);
      renderCart();
    });

    row.querySelector('.remove-btn').addEventListener('click', () => {
      PharmezCart.removeItem(index);
      renderCart();
    });

    const hr = document.createElement('hr');
    hr.className = 'cart-hr';

    lastInserted.after(row);
    row.after(hr);
    lastInserted = hr;
  });

  updateSummary();
}

function updateSummary() {
  const cart = PharmezCart.getCart();
  const subtotal = cart.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 1)), 0);
  const shipping = subtotal > 0 ? 8.00 : 0.00;
  const grandTotal = subtotal + shipping;

  const subEl = document.getElementById('subtotal');
  const grandEl = document.getElementById('grandtotal');

  if (subEl) subEl.textContent = `$${subtotal.toFixed(2)}`;
  if (grandEl) grandEl.textContent = `$${grandTotal.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderCart();

  // Wire Proceed to checkout button
  const checkoutBtn = document.querySelector('.checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.style.cursor = 'pointer';
    checkoutBtn.onclick = () => {
      const cart = PharmezCart.getCart();
      if (cart.length === 0) {
        alert('Your cart is empty. Please add items before checking out.');
        window.location.href = 'shop.html';
      } else {
        window.location.href = 'checkout.html';
      }
    };
  }

  // Coupon apply button
  const couponBtn = document.querySelector('.coupon .button6');
  if (couponBtn) {
    couponBtn.style.cursor = 'pointer';
    couponBtn.onclick = () => {
      alert('Coupon code applied successfully! (Demo discount simulated)');
    };
  }
});
