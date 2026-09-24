// ======================================================
// BÀI 08: DEVCRAFT STORE & SMART CART (LỜI GIẢI CHUẨN)
// ======================================================

// 1. Dữ liệu catalog sản phẩm
const catalog = [
  {
    id: 201,
    title: "Bàn Phím Cơ Custom Không Dây Lumina Pro",
    price: 1850000,
    originalPrice: 2200000,
    discount: "-16%",
    rating: "★★★★★ (128)",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 202,
    title: "Chuột Ergonomic Master Silent Wireless",
    price: 950000,
    originalPrice: 1200000,
    discount: "-20%",
    rating: "★★★★★ (94)",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 203,
    title: "Tai Nghe Studio Hi-Res Active Noise Canceling",
    price: 2990000,
    originalPrice: 3500000,
    discount: "-15%",
    rating: "★★★★★ (215)",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 204,
    title: "Màn Hình 27 Inch Ultra-Sharp 4K UHD 144Hz",
    price: 8490000,
    originalPrice: 9900000,
    discount: "-14%",
    rating: "★★★★★ (88)",
    img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 205,
    title: "Đèn Treo Màn Hình LED Cảm Ứng Chống Lóa",
    price: 720000,
    originalPrice: 850000,
    discount: "-15%",
    rating: "★★★★☆ (62)",
    img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 206,
    title: "Giá Đỡ Nhôm Nguyên Khối Cho Macbook & Laptop",
    price: 550000,
    originalPrice: 650000,
    discount: "-15%",
    rating: "★★★★★ (142)",
    img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80"
  }
];

// 2. Trạng thái Giỏ Hàng
let cart = JSON.parse(localStorage.getItem('devcraft_store_cart_v2')) || [
  { id: 201, title: "Bàn Phím Cơ Custom Không Dây Lumina Pro", price: 1850000, img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80", quantity: 1 }
];

let appliedVoucher = null; // { code: 'GIAM10', percent: 10 } hoặc null

// 3. DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartDrawerBackdrop = document.getElementById('cartDrawerBackdrop');
const cartTrigger = document.getElementById('cartTrigger');
const btnCloseDrawer = document.getElementById('btnCloseDrawer');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const headerCartBadge = document.getElementById('headerCartBadge');
const headerCartTotal = document.getElementById('headerCartTotal');
const drawerCountBadge = document.getElementById('drawerCountBadge');
const billSubtotal = document.getElementById('billSubtotal');
const billDiscount = document.getElementById('billDiscount');
const billTotal = document.getElementById('billTotal');
const voucherInput = document.getElementById('voucherInput');
const btnApplyVoucher = document.getElementById('btnApplyVoucher');
const voucherNotice = document.getElementById('voucherNotice');
const btnCheckout = document.getElementById('btnCheckout');
const toastContainer = document.getElementById('toastContainer');
const orderSuccessModal = document.getElementById('orderSuccessModal');
const btnCloseSuccessModal = document.getElementById('btnCloseSuccessModal');
const orderIdText = document.getElementById('orderIdText');

// Format VNĐ
function formatCurrency(number) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
}

// Toast notification
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// Lưu LocalStorage
function persistCart() {
  localStorage.setItem('devcraft_store_cart_v2', JSON.stringify(cart));
}

// 4. Render Danh Mục Sản Phẩm
function renderProducts() {
  productsGrid.innerHTML = '';
  catalog.forEach(item => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <span class="discount-badge">${item.discount}</span>
      <div class="img-container">
        <img src="${item.img}" alt="${item.title}" class="product-img" loading="lazy">
      </div>
      <div class="card-details">
        <div class="rating-stars">${item.rating}</div>
        <h3 class="product-name">${item.title}</h3>
        <div class="price-row">
          <span class="current-price">${formatCurrency(item.price)}</span>
          <span class="original-price">${formatCurrency(item.originalPrice)}</span>
        </div>
        <button class="btn-add" data-id="${item.id}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <span>Thêm Vào Giỏ</span>
        </button>
      </div>
    `;

    const addBtn = card.querySelector('.btn-add');
    addBtn.addEventListener('click', () => handleAddToCart(item, addBtn));

    productsGrid.appendChild(card);
  });
}

// 5. Xử lý Thêm Vào Giỏ
function handleAddToCart(product, btn) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img,
      quantity: 1
    });
  }

  // Micro-feedback nút bấm
  btn.classList.add('added');
  btn.innerHTML = `<span>Đã thêm ✓</span>`;
  setTimeout(() => {
    btn.classList.remove('added');
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
      </svg>
      <span>Thêm Vào Giỏ</span>
    `;
  }, 1200);

  persistCart();
  syncCartUI();
  showToast(`Đã thêm "${product.title}" vào giỏ hàng!`);
}

// 6. Tăng / Giảm số lượng & Xóa
function updateQuantity(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== id);
  }

  persistCart();
  syncCartUI();
}

function removeItem(id) {
  cart = cart.filter(i => i.id !== id);
  persistCart();
  syncCartUI();
}

// 7. Đồng Bộ Giao Diện Giỏ Hàng
function syncCartUI() {
  cartItemsContainer.innerHTML = '';

  const totalQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const subtotal = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  headerCartBadge.textContent = totalQuantity;
  drawerCountBadge.textContent = `${totalQuantity} món`;
  headerCartTotal.textContent = formatCurrency(subtotal);

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart-msg">
        <div class="empty-icon">🛍️</div>
        <h4>Giỏ hàng đang trống</h4>
        <p>Hãy dạo một vòng và chọn những sản phẩm ưng ý nhé!</p>
      </div>
    `;
  } else {
    cart.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item';
      itemEl.innerHTML = `
        <img src="${item.img}" alt="${item.title}" class="cart-item-img">
        <div class="cart-item-info">
          <div class="cart-item-header">
            <h4 class="cart-item-title">${item.title}</h4>
            <button class="btn-remove-item" title="Xóa món này" onclick="removeItem(${item.id})">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
          <div class="cart-item-bottom">
            <span class="cart-item-price">${formatCurrency(item.price)}</span>
            <div class="qty-stepper">
              <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
          </div>
        </div>
      `;
      cartItemsContainer.appendChild(itemEl);
    });
  }

  // Tính giảm giá & Tổng tiền
  let discountAmount = 0;
  if (appliedVoucher) {
    discountAmount = Math.round(subtotal * (appliedVoucher.percent / 100));
  }

  const finalAmount = Math.max(0, subtotal - discountAmount);

  billSubtotal.textContent = formatCurrency(subtotal);
  billDiscount.textContent = discountAmount > 0 ? `- ${formatCurrency(discountAmount)}` : `0 ₫`;
  billTotal.textContent = formatCurrency(finalAmount);
}

// 8. Áp dụng Voucher
btnApplyVoucher.addEventListener('click', () => {
  const code = voucherInput.value.trim().toUpperCase();
  voucherNotice.className = 'voucher-notice';

  if (!code) {
    voucherNotice.classList.add('error');
    voucherNotice.textContent = 'Vui lòng nhập mã giảm giá!';
    voucherNotice.classList.remove('hidden');
    return;
  }

  if (code === 'GIAM10') {
    appliedVoucher = { code: 'GIAM10', percent: 10 };
    voucherNotice.classList.add('success');
    voucherNotice.textContent = 'Áp dụng mã GIAM10 thành công! Giảm 10% tổng đơn.';
  } else if (code === 'GIAM20') {
    const subtotal = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    if (subtotal >= 5000000) {
      appliedVoucher = { code: 'GIAM20', percent: 20 };
      voucherNotice.classList.add('success');
      voucherNotice.textContent = 'Áp dụng mã VIP GIAM20 thành công! Giảm 20% tổng đơn.';
    } else {
      appliedVoucher = null;
      voucherNotice.classList.add('error');
      voucherNotice.textContent = 'Mã GIAM20 chỉ áp dụng cho đơn từ 5.000.000₫ trở lên.';
    }
  } else {
    appliedVoucher = null;
    voucherNotice.classList.add('error');
    voucherNotice.textContent = 'Mã giảm giá không tồn tại hoặc đã hết hạn!';
  }

  voucherNotice.classList.remove('hidden');
  syncCartUI();
});

// 9. Đóng / Mở Drawer Giỏ Hàng
function openDrawer() {
  cartDrawerBackdrop.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  cartDrawerBackdrop.classList.add('hidden');
  document.body.style.overflow = '';
}

cartTrigger.addEventListener('click', openDrawer);
btnCloseDrawer.addEventListener('click', closeDrawer);
cartDrawerBackdrop.addEventListener('click', (e) => {
  if (e.target === cartDrawerBackdrop) closeDrawer();
});

// 10. Thanh toán (Checkout)
btnCheckout.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Giỏ hàng của bạn đang trống! Hãy chọn ít nhất 1 sản phẩm trước khi thanh toán.');
    return;
  }

  const randomId = '#DCG-' + Math.floor(1000 + Math.random() * 9000);
  orderIdText.textContent = randomId;
  closeDrawer();

  // Reset giỏ
  cart = [];
  appliedVoucher = null;
  voucherInput.value = '';
  voucherNotice.classList.add('hidden');
  persistCart();
  syncCartUI();

  orderSuccessModal.classList.remove('hidden');
});

btnCloseSuccessModal.addEventListener('click', () => {
  orderSuccessModal.classList.add('hidden');
});

// Khởi chạy
renderProducts();
syncCartUI();
