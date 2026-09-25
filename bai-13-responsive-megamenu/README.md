# Bài 13: Menu Đa Cấp & Ngăn Kéo Offcanvas (Responsive Mega Menu & Mobile Drawer)

## 🎯 Mục Tiêu Bài Học
Xây dựng một hệ thống điều hướng (Navigation Bar) phức tạp và chuyên nghiệp như các trang thương mại điện tử lớn (Amazon, Apple, Shopee):
- Kỹ thuật CSS Dropdown Menu lơ lửng khi di chuột (`:hover` và `:focus-within`).
- Bố cục **Mega Menu** nhiều cột chứa danh mục sản phẩm, banner khuyến mãi và biểu tượng danh mục.
- Chuyển đổi thông minh trên điện thoại di động: Thu gọn toàn bộ vào nút Hamburger ☰ và trượt ra ngăn kéo **Offcanvas Drawer** từ bên trái hoặc bên phải màn hình.
- Lớp màn mờ Backdrop phía sau ngăn kéo: Chạm vào vùng mờ hoặc bấm phím Escape để tự động đóng menu.

---

## 🛠️ Yêu Cầu Đề Bài
1. **Desktop Navbar**:
   - Menu cấp 1: *Sản Phẩm*, *Khóa Học*, *Tài Nguyên*, *Về Chúng Tôi*.
   - Mục *Khóa Học* hiển thị Mega Menu 3 cột (Frontend, Backend, Thiết Kế UI/UX) có icon, tiêu đề và dòng mô tả ngắn.
2. **Mobile Drawer**:
   - Màn hình `< 840px`: Ẩn menu ngang, hiện nút Hamburger.
   - Bấm vào nút Hamburger: Ngăn kéo trượt ra từ mép trái (`transform: translateX(0)`) kèm lớp nền tối mờ (`backdrop`).
   - Có nút đóng (X) và hỗ trợ bấm mở các cấp menu con dạng Accordion trên mobile.

---

## 📝 Mã Mẫu Tham Khảo
```css
/* Ngăn kéo Offcanvas trên mobile */
.mobile-drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background: #111827;
  transform: translateX(-100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 100;
}
.mobile-drawer.active {
  transform: translateX(0);
}
```
