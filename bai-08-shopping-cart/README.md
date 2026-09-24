# Bài Tập 08: Giỏ Hàng Mua Sắm Mini (Mini E-commerce Cart)

- **Cấp độ**: 🔴 Nâng cao (HTML + CSS + JavaScript)
- **Thời lượng ước tính**: 90 - 120 phút
- **Công nghệ**: HTML5, CSS Flexbox/Grid, JavaScript (Mảng giỏ hàng, Tính toán số học, Drawer animation, LocalStorage)

---

## 🎯 Mục Tiêu Bài Học
1. Xây dựng trang danh mục sản phẩm (Product Grid) với thiết kế hiện đại, nút "Thêm vào giỏ" tương tác sinh động.
2. Thiết kế thanh ngăn kéo giỏ hàng (**Slide-in Cart Drawer**) trượt từ cạnh phải màn hình với hiệu ứng mượt mà.
3. Quản lý trạng thái giỏ hàng bằng mảng JavaScript (`cart = [{ id, name, price, img, quantity }]`):
   - Thêm sản phẩm mới (nếu đã có trong giỏ thì tăng `quantity + 1`).
   - Tăng/giảm số lượng bằng 2 nút `+` và `-`. Tự động xóa nếu số lượng giảm về 0.
   - Xóa trực tiếp sản phẩm bằng nút thùng rác.
4. Lập trình logic tính tiền tự động:
   - Tổng tiền tạm tính (`Subtotal`).
   - Áp dụng mã giảm giá khuyến mãi (Coupon/Voucher - ví dụ mã `GIAM10` giảm 10%).
   - Tổng thanh toán cuối cùng.
5. Lưu trữ giỏ hàng vào **`localStorage`** để giữ nguyên sản phẩm khi người dùng reload trang.

---

## 📋 Yêu Cầu Đề Bài

### 1. Về Giao Diện:
- **Thanh Header**: Logo cửa hàng, nút Giỏ Hàng có huy hiệu đỏ đếm tổng số lượng món đồ đang có.
- **Danh mục 6 sản phẩm mẫu**: Bàn phím cơ, Chuột công thái học, Tai nghe Bluetooth, Màn hình 4K, Đèn bàn làm việc, Giá đỡ Laptop.
- **Ngăn kéo Giỏ Hàng (Cart Drawer)**:
  - Header: Tiêu đề "Giỏ Hàng Của Bạn" và nút đóng (✕).
  - Body: Danh sách món đồ (ảnh nhỏ, tên, đơn giá, cụm nút `[-] số lượng [+]`, nút xóa).
  - Footer: Ô nhập mã voucher kèm nút "Áp dụng", bảng kê tổng tiền, và nút "Tiến Hành Thanh Toán".

### 2. Về Xử Lý JavaScript:
- Khi thêm sản phẩm: Nút đổi thành "Đã thêm ✓" trong 1.2s, badge số lượng ở giỏ hàng rung nhẹ và cập nhật số.
- Mở/đóng Drawer mượt mà khi bấm nút Giỏ hàng hoặc bấm ra ngoài màn hình.
- Tính toán chính xác từng đồng theo chuẩn định dạng tiền tệ Việt Nam (`1.500.000 ₫`).
- Kiểm tra mã giảm giá: Thông báo nếu mã không tồn tại hoặc áp dụng thành công.
- Bấm nút "Thanh Toán": Reset giỏ hàng và hiển thị popup chúc mừng đặt hàng thành công!

---

## ✅ Checklist Tự Đánh Giá
- [ ] Thêm cùng một sản phẩm 2 lần có tăng số lượng (quantity) thay vì tạo 2 dòng trùng lặp không?
- [ ] Tổng tiền có tự động tính lại ngay khi ấn nút `+` hoặc `-` không?
- [ ] Dữ liệu giỏ hàng có giữ nguyên sau khi nhấn F5 không?
- [ ] Drawer giỏ hàng có responsive và vừa vặn trên màn hình điện thoại không?
