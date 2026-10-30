// Pharmez Unified Cart & Navigation Manager
const PharmezCart = {
  getCart() {
    try {
      const stored = localStorage.getItem('pharmez_cart');
      if (!stored) {
        // Initial sample items for new visitors
        const initial = [
          { name: 'MetaboTrim', price: 48.00, imageUrl: 'img/cart-image1.png', category: 'Herbal', quantity: 1 },
          { name: 'DermaGlow', price: 67.00, imageUrl: 'img/cart-image2.png', category: 'Cream', quantity: 1 },
          { name: 'AcneShield Gel', price: 42.00, imageUrl: 'img/cart-image3.png', category: 'Cream', quantity: 1 },
          { name: 'FluAway Tabs', price: 39.00, imageUrl: 'img/cart-image4.png', category: 'Tablet', quantity: 1 }
        ];
        localStorage.setItem('pharmez_cart', JSON.stringify(initial));
        return initial;
      }
      return JSON.parse(stored);
    } catch {
      return [];
    }
  },

  saveCart(cart) {
    localStorage.setItem('pharmez_cart', JSON.stringify(cart));
    this.updateBadge();
  },

  addItem(item) {
    const cart = this.getCart();
    const existing = cart.find(x => x.name.toLowerCase() === item.name.toLowerCase());
    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1;
    } else {
      cart.push({
        name: item.name,
        price: parseFloat(item.price) || 0,
        imageUrl: item.imageUrl || 'img/best-product1.png',
        category: item.category || 'Medicine',
        quantity: 1
      });
    }
    this.saveCart(cart);
    this.showToast(`✓ Added "${item.name}" to cart!`);
  },

  removeItem(index) {
    const cart = this.getCart();
    cart.splice(index, 1);
    this.saveCart(cart);
  },

  updateQuantity(index, delta) {
    const cart = this.getCart();
    if (!cart[index]) return;
    cart[index].quantity = (cart[index].quantity || 1) + delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    this.saveCart(cart);
  },

  clearCart() {
    localStorage.setItem('pharmez_cart', JSON.stringify([]));
    this.updateBadge();
  },

  updateBadge() {
    const cart = this.getCart();
    const totalCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    document.querySelectorAll('.cart .badge').forEach(badge => {
      badge.textContent = totalCount;
    });
  },

  showToast(msg) {
    let t = document.getElementById('pharmezToast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'pharmezToast';
      t.style.cssText = 'position:fixed;bottom:24px;right:24px;background:#00c896;color:#ffffff;padding:12px 22px;border-radius:10px;box-shadow:0 6px 20px rgba(0,0,0,0.25);font-family:sans-serif;font-size:14px;font-weight:600;z-index:999999;transition:all 0.3s ease;display:flex;align-items:center;gap:8px;';
      document.body.appendChild(t);
    }
    t.innerHTML = msg;
    t.style.opacity = '1';
    t.style.transform = 'translateY(0)';
    t.style.display = 'flex';
    clearTimeout(t._timer);
    t._timer = setTimeout(() => {
      t.style.opacity = '0';
      t.style.transform = 'translateY(10px)';
      setTimeout(() => { t.style.display = 'none'; }, 300);
    }, 2500);
  }
};

// Global document initialization
document.addEventListener('DOMContentLoaded', () => {
  PharmezCart.updateBadge();

  // Navigate to shoppingcart.html on clicking .cart
  document.querySelectorAll('.cart').forEach(cartEl => {
    cartEl.style.cursor = 'pointer';
    cartEl.title = 'View Shopping Cart';
    cartEl.onclick = () => { window.location.href = 'shoppingcart.html'; };
  });

  // Navigate to admin panel on clicking admin user icon
  document.querySelectorAll('img[src*="header-admin.png"]').forEach(adminImg => {
    adminImg.style.cursor = 'pointer';
    adminImg.title = 'Open Admin Panel';
    adminImg.onclick = () => { window.location.href = 'admin/admin.html'; };
  });
});

