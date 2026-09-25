// TODO: Viết logic toggle theme và lưu LocalStorage an toàn
const themeToggleBtn = document.getElementById('themeToggleBtn');
const htmlElement = document.documentElement;

// 1. Khởi tạo theme đã lưu
try {
  const saved = localStorage.getItem('my_theme');
  if (saved === 'dark' || saved === 'light') {
    htmlElement.setAttribute('data-theme', saved);
  }
} catch (e) {
  console.warn('Không thể đọc theme:', e);
}

// 2. Lắng nghe sự kiện chuyển đổi theme
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Đặt data-theme lên html
    htmlElement.setAttribute('data-theme', newTheme);
    
    // Lưu vào localStorage an toàn
    try {
      localStorage.setItem('my_theme', newTheme);
    } catch (e) {
      console.warn('Không thể lưu theme:', e);
    }
  });
}
