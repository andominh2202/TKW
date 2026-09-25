# Bài 11: Hệ Thống Giao Diện Sáng / Tối (Dark & Light Theme với CSS Variables)

## 🎯 Mục Tiêu Bài Học
Xây dựng một hệ thống chủ đề (Theme System) chuyên nghiệp và chuẩn mực nhất của các website hiện đại (như GitHub, YouTube, Twitter):
- Quản trị toàn bộ màu sắc, độ bóng và phông chữ qua biến CSS (**CSS Custom Properties** `:root`).
- Tạo công tắc chuyển đổi Dark / Light mode tương tác mượt mà với hoạt họa chuyển màu (`transition`).
- Lưu trạng thái lựa chọn của người dùng vào `localStorage` để khi F5 tải lại trang không bị giật nháy màu.
- Tự động nhận diện chế độ ban đêm của hệ điều hành người dùng thông qua CSS Media Query `@media (prefers-color-scheme: dark)`.

---

## 🛠️ Yêu Cầu Đề Bài
1. **Thiết kế biến CSS `:root` và `[data-theme="dark"]`**:
   - Biến màu nền: `--bg-primary`, `--bg-surface`, `--bg-card`.
   - Biến màu chữ: `--text-primary`, `--text-secondary`, `--text-muted`.
   - Biến viền và đổ bóng: `--border-color`, `--card-shadow`.
2. **Nút Toggle Chuyển Đổi**:
   - Biểu tượng Mặt Trời ☀️ (khi đang ở Dark mode) và Mặt Trăng 🌙 (khi đang ở Light mode).
   - Có hoạt họa xoay 360 độ hoặc trượt nhẹ khi đổi chế độ.
3. **Logic JavaScript**:
   - Kiểm tra `localStorage.getItem('theme')`.
   - Nếu chưa có thì kiểm tra `window.matchMedia('(prefers-color-scheme: dark)').matches`.
   - Gán thuộc tính `document.documentElement.setAttribute('data-theme', theme)`.

---

## 📝 Mã Mẫu Tham Khảo
```css
/* Thiết lập Theme Mặc Định (Light) */
:root {
  --bg-primary: #f8fafc;
  --bg-card: #ffffff;
  --text-primary: #0f172a;
  --text-muted: #64748b;
  --border-color: #e2e8f0;
  --card-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
}

/* Ghi Đè Khi Có data-theme="dark" */
[data-theme="dark"] {
  --bg-primary: #0b0f19;
  --bg-card: #131b2e;
  --text-primary: #f8fafc;
  --text-muted: #94a3b8;
  --border-color: rgba(255, 255, 255, 0.1);
  --card-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}
```
