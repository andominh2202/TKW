// ======================================================
// BÀI 07: FILTER GALLERY & LIGHTBOX (LỜI GIẢI CHUẨN)
// ======================================================

const fullGallery = [
  {
    id: 1,
    title: "Bình Minh Trên Rừng Thông Mờ Sương",
    desc: "Cảnh sắc mờ ảo huyền bí lúc rạng đông tại cao nguyên Lâm Đồng.",
    category: "nature",
    categoryName: "Thiên nhiên",
    imgUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "Tòa Nhà Kính & Bầu Trời Đô Thị",
    desc: "Đường nét hình học sắc sảo phản chiếu kiến trúc thế kỷ 21.",
    category: "architecture",
    categoryName: "Kiến trúc",
    imgUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    title: "Bàn Làm Việc Lập Trình Viên Đương Đại",
    desc: "Không gian làm việc tối giản với màn hình lập trình và phím cơ.",
    category: "tech",
    categoryName: "Công nghệ",
    imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    title: "Thác Nước Xanh Ngắt Rừng Nhiệt Đới",
    desc: "Vẻ đẹp thuần khiết và dữ dội của dòng nước giữa lòng thiên nhiên.",
    category: "nature",
    categoryName: "Thiên nhiên",
    imgUrl: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 5,
    title: "Cây Cầu Vàng Rực Dưới Hoàng Hôn",
    desc: "Tuyệt tác cầu treo vươn qua eo biển trong ánh tà dương tráng lệ.",
    category: "architecture",
    categoryName: "Kiến trúc",
    imgUrl: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 6,
    title: "Bo Mạch Chủ & Chip Xử Lý Bán Dẫn",
    desc: "Hệ thống vi mạch tinh xảo - trái tim của trí tuệ nhân tạo hiện đại.",
    category: "tech",
    categoryName: "Công nghệ",
    imgUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 7,
    title: "Bờ Biển Sóng Vỗ Vách Đá Trắng",
    desc: "Khoảnh khắc giao thoa hùng vĩ giữa đại dương xanh thẳm và đất liền.",
    category: "nature",
    categoryName: "Thiên nhiên",
    imgUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 8,
    title: "Khối Kiến Trúc Xoắn Ốc Độc Đáo",
    desc: "Góc nhìn phối cảnh nghệ thuật của bảo tàng nghệ thuật đương đại.",
    category: "architecture",
    categoryName: "Kiến trúc",
    imgUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
  }
];

// State
let currentCategory = 'all';
let displayedList = [...fullGallery];
let lightboxIdx = 0;

// DOM Elements
const galleryGrid = document.getElementById('galleryGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxMainImg = document.getElementById('lightboxMainImg');
const lightboxCounter = document.getElementById('lightboxCounter');
const lightboxCategory = document.getElementById('lightboxCategory');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDesc = document.getElementById('lightboxDesc');
const btnCloseLightbox = document.getElementById('btnCloseLightbox');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const btnFullscreen = document.getElementById('btnFullscreen');

// Cập nhật số đếm trên các nút lọc
function updateCounts() {
  document.getElementById('countAll').textContent = fullGallery.length;
  document.getElementById('countNature').textContent = fullGallery.filter(x => x.category === 'nature').length;
  document.getElementById('countArch').textContent = fullGallery.filter(x => x.category === 'architecture').length;
  document.getElementById('countTech').textContent = fullGallery.filter(x => x.category === 'tech').length;
}

// Render lưới ảnh
function render() {
  galleryGrid.innerHTML = '';

  displayedList = fullGallery.filter(item => {
    return currentCategory === 'all' || item.category === currentCategory;
  });

  displayedList.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = 'gallery-card';
    card.setAttribute('data-id', item.id);
    card.innerHTML = `
      <img src="${item.imgUrl}" alt="${item.title}" class="card-img" loading="lazy">
      <div class="card-overlay">
        <span class="card-tag">${item.categoryName}</span>
        <h3 class="card-title">${item.title}</h3>
      </div>
    `;

    card.addEventListener('click', () => openModal(index));
    galleryGrid.appendChild(card);
  });
}

// Mở Lightbox
function openModal(index) {
  lightboxIdx = index;
  syncLightbox();
  lightboxOverlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

// Đồng bộ nội dung trong Lightbox
function syncLightbox() {
  const current = displayedList[lightboxIdx];
  lightboxMainImg.src = current.imgUrl;
  lightboxCounter.textContent = `Ảnh ${lightboxIdx + 1} / ${displayedList.length}`;
  lightboxCategory.textContent = current.categoryName;
  lightboxTitle.textContent = current.title;
  lightboxDesc.textContent = current.desc;
}

// Đóng Lightbox
function closeModal() {
  lightboxOverlay.classList.add('hidden');
  document.body.style.overflow = '';
}

// Next / Prev
function nextPhoto() {
  lightboxIdx = (lightboxIdx + 1) % displayedList.length;
  syncLightbox();
}

function prevPhoto() {
  lightboxIdx = (lightboxIdx - 1 + displayedList.length) % displayedList.length;
  syncLightbox();
}

// Sự kiện nút
btnCloseLightbox.addEventListener('click', closeModal);
btnNext.addEventListener('click', nextPhoto);
btnPrev.addEventListener('click', prevPhoto);

lightboxOverlay.addEventListener('click', (e) => {
  if (e.target === lightboxOverlay || e.target.classList.contains('lightbox-main')) {
    closeModal();
  }
});

// Toàn màn hình
btnFullscreen.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    lightboxOverlay.requestFullscreen().catch(err => alert(err.message));
  } else {
    document.exitFullscreen();
  }
});

// Bàn phím
window.addEventListener('keydown', (e) => {
  if (lightboxOverlay.classList.contains('hidden')) return;

  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowRight') nextPhoto();
  if (e.key === 'ArrowLeft') prevPhoto();
});

// Lọc danh mục
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.getAttribute('data-category');
    render();
  });
});

// Khởi tạo
updateCounts();
render();
