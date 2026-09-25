// ======================================================
// BÀI 08: MINI SHOPPING CART (STARTER JS)
// Hãy theo dõi các chỉ dẫn TODO để hoàn thiện giỏ hàng!
// ======================================================

// 1. Dữ liệu sản phẩm mẫu
const productsData = [
  {
    id: 101,
    title: "Bàn Phím Cơ Không Dây RGB",
    price: 1450000,
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 102,
    title: "Chuột Công Thái Học Không Dây",
    price: 890000,
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 103,
    title: "Tai Nghe Chống Ồn Chủ Động Pro",
    price: 2690000,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 104,
    title: "Màn Hình 27 Inch 4K IPS 144Hz",
    price: 7890000,
    img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 105,
    title: "Đèn Màn Hình LED Bảo Vệ Mắt",
    price: 650000,
    img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 106,
    title: "Giá Đỡ Nhôm Laptop Công Thái Học",
    price: 490000,
    img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=400&q=80"
  }
];

// 2. Trạng thái giỏ hàng & nạp an toàn từ LocalStorage
function loadCart() {
  try {
    const raw = localStorage.getItem('my_shop_cart');
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.warn('Lỗi đọc LocalStorage:', e);
    return [];
  }
}

let cart = loadCart();
let discountRate = 0; // 0.1 nếu giảm 10%

// 3. DOM Elements
const productGrid = document.getElementById('productGrid');
const cartOverlay = document.getElementById('cartOverlay');
const openCartBtn = document.getElementById('openCartBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsList = document.getElementById('cartItemsList');
const cartCountBadge = document.getElementById('cartCountBadge');
const subtotalVal = document.getElementById('subtotalVal');
const discountVal = document.getElementById('discountVal');
const totalVal = document.getElementById('totalVal');
const couponInput = document.getElementById('couponInput');
const applyCouponBtn = document.getElementById('applyCouponBtn');
const checkoutBtn = document.getElementById('checkoutBtn');

// Hàm format tiền tệ VNĐ (ví dụ: 1.450.000 ₫)
function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

// TODO 1: Hàm render danh sách sản phẩm ra lưới
function renderProducts() {
  productGrid.innerHTML = '';
  productsData.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}" class="product-img">
      <h3 class="product-title">${p.title}</h3>
      <p class="product-price">${formatCurrency(p.price)}</p>
      <button class="btn-add-cart" onclick="addToCart(${p.id})">Thêm Vào Giỏ</button>
    `;
    productGrid.appendChild(card);
  });
}

// TODO 2: Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img,
      quantity: 1
    });
  }

  saveCart();
  renderCart();
}

// TODO 3: Hàm lưu giỏ hàng vào LocalStorage
function saveCart() {
  try {
    localStorage.setItem('my_shop_cart', JSON.stringify(cart));
  } catch (e) {
    console.warn('Lỗi ghi LocalStorage:', e);
  }
}

// TODO 4: Hàm tăng/giảm số lượng món đồ
function changeQuantity(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== id);
  }

  saveCart();
  renderCart();
}

// TODO 5: Hàm render nội dung giỏ hàng và cập nhật tổng tiền
function renderCart() {
  cartItemsList.innerHTML = '';

  if (cart.length === 0) {
    cartItemsList.innerHTML = '<p style="text-align: center; color: #64748b; margin-top: 40px;">Giỏ hàng của bạn đang trống</p>';
  } else {
    cart.forEach(item => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <img class="cart-item-img">
        <div class="cart-item-info">
          <h4 class="cart-item-title"></h4>
          <p class="cart-item-price">${formatCurrency(item.price)}</p>
          <div class="qty-control">
            <button class="qty-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
            <span>${item.quantity}</span>
            <button class="qty-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
          </div>
        </div>
      `;
      const img = div.querySelector('.cart-item-img');
      if (img) {
        img.src = item.img || '';
        img.alt = item.title || 'Sản phẩm';
      }
      const titleEl = div.querySelector('.cart-item-title');
      if (titleEl) titleEl.textContent = item.title;

      cartItemsList.appendChild(div);
    });
  }

  // Cập nhật số đếm trên badge
  const totalCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  cartCountBadge.textContent = totalCount;

  // Tính tiền
  const subtotal = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  const discount = subtotal * discountRate;
  const total = subtotal - discount;

  subtotalVal.textContent = formatCurrency(subtotal);
  discountVal.textContent = `- ${formatCurrency(discount)}`;
  totalVal.textContent = formatCurrency(total);
}

// TODO 6: Áp dụng mã giảm giá
applyCouponBtn.addEventListener('click', () => {
  const code = couponInput.value.trim().toUpperCase();
  if (code === 'GIAM10') {
    discountRate = 0.1;
    alert('Áp dụng mã GIAM10 thành công! Giảm 10%');
  } else {
    discountRate = 0;
    alert('Mã giảm giá không hợp lệ!');
  }
  renderCart();
});

// TODO 7: Xử lý đóng mở Drawer giỏ hàng
openCartBtn.addEventListener('click', () => cartOverlay.classList.remove('hidden'));
closeCartBtn.addEventListener('click', () => cartOverlay.classList.add('hidden'));
cartOverlay.addEventListener('click', (e) => {
  if (e.target === cartOverlay) cartOverlay.classList.add('hidden');
});

// TODO 8: Nút thanh toán (Mô phỏng quy trình Checkout)
checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Giỏ hàng trống! Hãy chọn ít nhất 1 sản phẩm.');
    return;
  }
  alert('Đặt hàng mô phỏng thành công! (Đây là demo giao diện, không thanh toán thực tế). Cảm ơn bạn!');
  cart = [];
  discountRate = 0;
  couponInput.value = '';
  saveCart();
  renderCart();
  cartOverlay.classList.add('hidden');
});

// Khởi chạy ban đầu
renderProducts();
renderCart();
