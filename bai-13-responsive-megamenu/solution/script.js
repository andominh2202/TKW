// ==========================================================
// BÀI 13: JAVASCRIPT ĐIỀU KHIỂN OFFCANVAS DRAWER & ACCORDION
// ==========================================================

const btnOpenDrawer = document.getElementById('btnOpenDrawer');
const btnCloseDrawer = document.getElementById('btnCloseDrawer');
const mobileDrawer = document.getElementById('mobileDrawer');
const drawerBackdrop = document.getElementById('drawerBackdrop');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
let lastFocusedElement = null;

// 1. Mở ngăn kéo mobile
function openDrawer() {
  lastFocusedElement = document.activeElement;
  mobileDrawer.classList.add('active');
  drawerBackdrop.classList.add('active');
  if (btnOpenDrawer) btnOpenDrawer.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden'; // Khóa cuộn trang chính
  if (btnCloseDrawer) btnCloseDrawer.focus();
}

// 2. Đóng ngăn kéo mobile
function closeDrawer() {
  mobileDrawer.classList.remove('active');
  drawerBackdrop.classList.remove('active');
  if (btnOpenDrawer) btnOpenDrawer.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
}

if (btnOpenDrawer) btnOpenDrawer.addEventListener('click', openDrawer);
if (btnCloseDrawer) btnCloseDrawer.addEventListener('click', closeDrawer);
if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

// 3. Hỗ trợ bàn phím & chuột cho Mega Menu Desktop (Enter, Space, Escape, Focus)
function closeAllDropdowns() {
  dropdownToggles.forEach(toggle => {
    toggle.setAttribute('aria-expanded', 'false');
    const parent = toggle.closest('.nav-item');
    if (parent) parent.classList.remove('is-open');
  });
}

dropdownToggles.forEach(toggle => {
  const parent = toggle.closest('.nav-item');

  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    closeAllDropdowns();
    if (!isExpanded && parent) {
      toggle.setAttribute('aria-expanded', 'true');
      parent.classList.add('is-open');
    }
  });

  toggle.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      closeAllDropdowns();
      toggle.setAttribute('aria-expanded', 'true');
      if (parent) {
        parent.classList.add('is-open');
        const firstLink = parent.querySelector('.dropdown-menu a');
        if (firstLink) firstLink.focus();
      }
    }
  });
});

// Đóng dropdown khi click ra ngoài
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-item')) {
    closeAllDropdowns();
  }
});

// Đóng khi bấm phím Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (mobileDrawer && mobileDrawer.classList.contains('active')) {
      closeDrawer();
    } else {
      const openToggle = document.querySelector('.nav-item.is-open .dropdown-toggle');
      if (openToggle) {
        closeAllDropdowns();
        openToggle.focus();
      }
    }
  }
});

// 4. Xử lý mở đóng Accordion menu con trên mobile
const accordionTriggers = document.querySelectorAll('.accordion-trigger');

accordionTriggers.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector('.acc-icon');
    
    const isOpen = btn.classList.toggle('active');
    if (content) content.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));

    if (icon) {
      icon.textContent = isOpen ? '-' : '+';
    }
  });
});
