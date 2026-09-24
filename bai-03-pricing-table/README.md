# Bài Tập 03: Bảng Báo Giá Dịch Vụ (Pricing Table)

- **Cấp độ**: 🟡 Trung cấp
- **Thời lượng ước tính**: 60 - 75 phút
- **Công nghệ**: HTML5 & CSS3 (Grid / Flexbox / Toggle Switch)

---

## 🎯 Mục Tiêu Bài Học
1. Sử dụng **CSS Grid** (`grid-template-columns: repeat(...)`) hoặc Flexbox để chia 3 cột bảng giá cân đối.
2. Làm chủ kỹ thuật làm nổi bật 1 card đặc biệt (gói "Khuyên Dùng / Pro Plan"): kích thước lớn hơn một chút, viền màu gradient, và có dải ruy-băng (Badge "Phổ biến nhất").
3. Thiết kế công tắc chuyển đổi (Billing Toggle Switch) giữa thanh toán **Theo tháng** và **Theo năm (tiết kiệm 20%)**.
4. Xây dựng danh sách tính năng với icon dấu tick xanh đẹp mắt và gạch mờ các tính năng không hỗ trợ ở gói thấp.

---

## 📋 Yêu Cầu Đề Bài

### 1. Bố Cục 3 Gói Dịch Vụ:
- **Gói Cơ bản (Starter)**: Phù hợp cá nhân, giá thấp, tính năng cơ bản.
- **Gói Chuyên nghiệp (Pro - Khuyên Dùng)**: Nằm ở giữa, card nổi bật hơn 2 gói còn lại, nút bấm có màu nhấn rực rỡ.
- **Gói Doanh nghiệp (Enterprise)**: Đầy đủ mọi tính năng cao cấp nhất, hỗ trợ 24/7.

### 2. Các Thành Phần Trong Mỗi Card:
- Tên gói dịch vụ & mô tả ngắn.
- Giá tiền (ví dụ: `199.000đ / tháng` hoặc `1.990.000đ / năm`).
- Danh sách 5-6 tính năng có icon checkmark (`✓`) hoặc gạch chéo (`✕`).
- Nút Call-To-Action (Đăng ký ngay / Dùng thử 14 ngày).

### 3. Responsive:
- Trên màn hình máy tính (> 992px): 3 cột dàn hàng ngang.
- Trên tablet (600px - 991px): 2 cột hoặc xếp cuộn.
- Trên điện thoại (< 600px): Xếp thành 1 cột dọc thẳng đứng, card Pro vẫn giữ độ thu hút thị giác.

---

## ✅ Checklist Tự Đánh Giá
- [ ] Bảng giá có hiển thị cân đối và thẳng hàng giữa các nút CTA không?
- [ ] Gói Pro có đủ nổi bật để thu hút mắt người dùng ngay từ cái nhìn đầu tiên không?
- [ ] Danh sách tính năng có dùng thẻ `<ul>` và `<li>` chuẩn semantic không?
- [ ] Bố cục có tự động co giãn đẹp mắt trên các kích thước màn hình không?
