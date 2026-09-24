# Bài Tập 04: Landing Page Header & Hero Section

- **Cấp độ**: 🟡 Trung cấp
- **Thời lượng ước tính**: 60 - 90 phút
- **Công nghệ**: HTML5 & CSS3 (Flexbox / Sticky Header / Mobile Menu)

---

## 🎯 Mục Tiêu Bài Học
1. Xây dựng thanh điều hướng (**Navigation Bar**) cố định ở đầu trang (`position: sticky`), có hiệu ứng kính mờ (**Glassmorphism**).
2. Xử lý thanh menu cho thiết bị di động (nút Hamburger bật tắt menu khi màn hình thu nhỏ).
3. Thiết kế khu vực **Hero Section** ấn tượng với tiêu đề lớn (Typography phân cấp rõ ràng), nút kêu gọi hành động (Call To Action - CTA), và minh họa đồ họa phía bên phải.
4. Rèn luyện bố cục 2 cột cân bằng bằng Flexbox và xử lý mượt mà khi thu nhỏ màn hình.

---

## 📋 Yêu Cầu Đề Bài

### 1. Thanh Header / Navbar:
- **Logo thương hiệu**: Bên trái, có biểu tượng + chữ (ví dụ: `⚡ DevCraft`).
- **Menu liên kết**: Trang chủ, Tính năng, Bảng giá, Tài liệu, Liên hệ.
- **Nút hành động**: Nút "Bắt đầu ngay" hoặc "Đăng nhập".
- **Responsive**: Ẩn menu chữ trên màn hình nhỏ và hiện icon menu 3 sọc (Hamburger icon).

### 2. Phần Hero Banner:
- **Badge thông báo**: Một viên thuốc nhỏ (ví dụ: `🚀 Phiên bản 2.0 đã ra mắt`).
- **Tiêu đề chính (`<h1>`)**: Điểm nhấn từ 1-2 dòng chữ to đậm, có từ khóa màu gradient.
- **Đoạn mô tả phụ**: 2 dòng ngắn gọn giới thiệu giá trị của sản phẩm.
- **Nhóm nút CTA**: Nút chính (Bắt đầu miễn phí) và Nút phụ (Xem Video Demo có icon Play).
- **Social Proof**: Dòng chữ "Được tin dùng bởi 15.000+ lập trình viên" cùng nhóm avatar người dùng xếp chồng lên nhau.
- **Khối hình ảnh / Mockup bên phải**: Minh họa cửa sổ code hoặc giao diện hiện đại với hiệu ứng nổi lơ lửng (`float animation`).

---

## ✅ Checklist Tự Đánh Giá
- [ ] Khi cuộn trang, thanh Navbar có giữ nguyên vị trí ở mép trên cùng không?
- [ ] Trên điện thoại, menu có chuyển đổi mượt mà khi ấn nút Hamburger không?
- [ ] Bố cục Hero có chuyển từ 2 cột thành 1 cột mượt mà trên di động không?
- [ ] Hiệu ứng chuyển động (Hover nút, float ảnh) có mượt mà, không bị giật lag không?
