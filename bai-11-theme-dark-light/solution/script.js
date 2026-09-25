// ==========================================================
// BÀI 11: JAVASCRIPT ĐIỀU KHIỂN THEME & LOCALSTORAGE
// ==========================================================

const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeLabelText = document.getElementById('themeLabelText');
const htmlElement = document.documentElement;

// Các phần tử hiển thị giá trị biến màu
const tokenBg = document.getElementById('tokenBg');
const tokenCard = document.getElementById('tokenCard');
const tokenText = document.getElementById('tokenText');

// 1. Hàm cập nhật giao diện theo theme
function applyTheme(theme) {
  htmlElement.setAttribute('data-theme', theme);
  localStorage.setItem('lumina_theme', theme);

  if (theme === 'dark') {
    if (themeLabelText) themeLabelText.textContent = 'Giao diện: Tối';
    if (tokenBg) tokenBg.textContent = '#0b0f19';
    if (tokenCard) tokenCard.textContent = '#131b2e';
    if (tokenText) tokenText.textContent = '#f8fafc';
  } else {
    if (themeLabelText) themeLabelText.textContent = 'Giao diện: Sáng';
    if (tokenBg) tokenBg.textContent = '#f8fafc';
    if (tokenCard) tokenCard.textContent = '#ffffff';
    if (tokenText) tokenText.textContent = '#0f172a';
  }
}

// 2. Kiểm tra xem người dùng đã từng chọn theme trước đó chưa
function initTheme() {
  const savedTheme = localStorage.getItem('lumina_theme');
  
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    // Nếu chưa từng chọn, kiểm tra thiết lập máy tính của người dùng
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }
}

// 3. Sự kiện bấm nút chuyển theme
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  });
}

// Khởi chạy khi tải trang
initTheme();
