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
  const validTheme = (theme === 'dark') ? 'dark' : 'light';
  htmlElement.setAttribute('data-theme', validTheme);
  
  try {
    localStorage.setItem('lumina_theme', validTheme);
  } catch (e) {
    console.warn('Không thể ghi theme vào LocalStorage:', e);
  }

  if (validTheme === 'dark') {
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
  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem('lumina_theme');
  } catch (e) {
    console.warn('Không thể đọc theme từ LocalStorage:', e);
  }
  
  if (savedTheme === 'dark' || savedTheme === 'light') {
    applyTheme(savedTheme);
  } else {
    // Nếu chưa từng chọn hoặc dữ liệu không hợp lệ, kiểm tra thiết lập máy tính
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
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
