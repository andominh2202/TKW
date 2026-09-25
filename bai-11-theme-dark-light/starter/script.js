// TODO: Viết logic toggle theme và lưu LocalStorage
const themeToggleBtn = document.getElementById('themeToggleBtn');
const htmlElement = document.documentElement;

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  // 1. Đặt data-theme lên html
  htmlElement.setAttribute('data-theme', newTheme);
  
  // 2. Lưu vào localStorage
  localStorage.setItem('my_theme', newTheme);
});
