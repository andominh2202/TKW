// ==========================================================
// BÀI 13: JAVASCRIPT ĐIỀU KHIỂN OFFCANVAS DRAWER & ACCORDION
// ==========================================================

const btnOpenDrawer = document.getElementById('btnOpenDrawer');
const btnCloseDrawer = document.getElementById('btnCloseDrawer');
const mobileDrawer = document.getElementById('mobileDrawer');
const drawerBackdrop = document.getElementById('drawerBackdrop');

// 1. Mở ngăn kéo
function openDrawer() {
  mobileDrawer.classList.add('active');
  drawerBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden'; // Khóa cuộn trang chính
}

// 2. Đóng ngăn kéo
function closeDrawer() {
  mobileDrawer.classList.remove('active');
  drawerBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

if (btnOpenDrawer) btnOpenDrawer.addEventListener('click', openDrawer);
if (btnCloseDrawer) btnCloseDrawer.addEventListener('click', closeDrawer);
if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

// Đóng khi bấm phím Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileDrawer.classList.contains('active')) {
    closeDrawer();
  }
});

// 3. Xử lý mở đóng Accordion menu con trên mobile
const accordionTriggers = document.querySelectorAll('.accordion-trigger');

accordionTriggers.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector('.acc-icon');
    
    btn.classList.toggle('active');
    content.classList.toggle('open');

    if (content.classList.contains('open')) {
      if (icon) icon.textContent = '-';
    } else {
      if (icon) icon.textContent = '+';
    }
  });
});
