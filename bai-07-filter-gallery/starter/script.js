// ======================================================
// BÀI 07: FILTER GALLERY & LIGHTBOX (STARTER JS)
// Hãy theo dõi các ghi chú TODO để hoàn thiện tính năng!
// ======================================================

// 1. Dữ liệu danh sách ảnh mẫu
const galleryData = [
  {
    id: 1,
    title: "Bình Minh Trên Rừng Thông",
    category: "nature",
    categoryName: "Thiên nhiên",
    imgUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Tòa Nhà Kính Hiện Đại",
    category: "architecture",
    categoryName: "Kiến trúc",
    imgUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Không Gian Làm Việc Công Nghệ",
    category: "tech",
    categoryName: "Công nghệ",
    imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Thác Nước Hùng Vĩ",
    category: "nature",
    categoryName: "Thiên nhiên",
    imgUrl: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Cây Cầu Vàng Ánh Hoàng Hôn",
    category: "architecture",
    categoryName: "Kiến trúc",
    imgUrl: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Mạch Vi Xử Lý Tối Tân",
    category: "tech",
    categoryName: "Công nghệ",
    imgUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  }
];

// 2. Biến trạng thái
let activeCategory = 'all';
let currentActiveList = [...galleryData];
let currentLightboxIndex = 0;

// 3. DOM Elements
const galleryGrid = document.getElementById('galleryGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImg = document.getElementById('lightboxImg');
const captionTitle = document.getElementById('captionTitle');
const captionCategory = document.getElementById('captionCategory');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// TODO 1: Hàm render danh sách ảnh ra lưới Grid
function renderGallery() {
  galleryGrid.innerHTML = '';

  currentActiveList = galleryData.filter(item => {
    return activeCategory === 'all' || item.category === activeCategory;
  });

  currentActiveList.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'gallery-item';
    card.innerHTML = `
      <img src="${item.imgUrl}" alt="${item.title}" class="gallery-thumb" loading="lazy">
      <div class="gallery-overlay">
        <h3 class="item-title">${item.title}</h3>
        <span class="item-cat">${item.categoryName}</span>
      </div>
    `;

    // Nhấp vào ảnh để mở Lightbox
    card.addEventListener('click', () => openLightbox(index));
    galleryGrid.appendChild(card);
  });
}

// TODO 2: Hàm mở Lightbox xem ảnh lớn
function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxContent();
  lightboxModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Ngăn cuộn trang
}

// TODO 3: Cập nhật nội dung hiển thị trong Lightbox
function updateLightboxContent() {
  const item = currentActiveList[currentLightboxIndex];
  lightboxImg.src = item.imgUrl;
  captionTitle.textContent = item.title;
  captionCategory.textContent = `${item.categoryName} (${currentLightboxIndex + 1}/${currentActiveList.length})`;
}

// TODO 4: Hàm đóng Lightbox
function closeLightbox() {
  lightboxModal.classList.add('hidden');
  document.body.style.overflow = '';
}

// TODO 5: Chuyển sang ảnh kế tiếp hoặc quay lại ảnh trước
function showNext() {
  currentLightboxIndex = (currentLightboxIndex + 1) % currentActiveList.length;
  updateLightboxContent();
}

function showPrev() {
  currentLightboxIndex = (currentLightboxIndex - 1 + currentActiveList.length) % currentActiveList.length;
  updateLightboxContent();
}

// Gắn sự kiện cho các nút điều hướng
closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

// Đóng modal khi bấm ra vùng nền đen bên ngoài
lightboxModal.addEventListener('click', (e) => {
  if (e.target === lightboxModal) {
    closeLightbox();
  }
});

// TODO 6: Lắng nghe sự kiện bàn phím (Esc, Mũi tên trái/phải)
window.addEventListener('keydown', (e) => {
  if (lightboxModal.classList.contains('hidden')) return;

  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'ArrowLeft') showPrev();
});

// TODO 7: Xử lý nút Lọc danh mục
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.getAttribute('data-category');
    renderGallery();
  });
});

// Khởi chạy khi tải trang
renderGallery();
