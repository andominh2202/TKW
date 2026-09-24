# Bài Tập 01: Thẻ Thông Tin Cá Nhân (Profile Card)

- **Cấp độ**: 🟢 Cơ bản
- **Thời lượng ước tính**: 30 - 45 phút
- **Công nghệ**: HTML5 & CSS3

---

## 🎯 Mục Tiêu Bài Học
1. Nắm vững cấu trúc HTML5 cơ bản (`<article>`, `<header>`, `<img>`, `<h1>`, `<ul>`, v.v.).
2. Thực hành mô hình hộp (**CSS Box Model**): `margin`, `padding`, `border`, `content`.
3. Sử dụng **Flexbox** để căn giữa thẻ card ra giữa màn hình và xếp các nút, thẻ kỹ năng theo hàng.
4. Rèn luyện kỹ thuật tạo góc bo tròn (`border-radius`), đổ bóng đa tầng (`box-shadow`), và chuyển động mượt (`transition`).

---

## 📋 Yêu Cầu Đề Bài

### 1. Về Giao Diện:
- Thẻ card được căn chính giữa trang cả chiều dọc lẫn chiều ngang.
- Card gồm các phần:
  - **Ảnh đại diện (Avatar)**: Hình tròn, có viền nổi bật.
  - **Họ tên & Nghề nghiệp**: Tên in đậm nổi bật (ví dụ: "Nguyễn Văn An", "Frontend Developer").
  - **Mô tả ngắn (Bio)**: 1-2 câu giới thiệu bản thân.
  - **Chỉ số thống kê (Stats)**: 3 cột gồm "Dự án", "Lượt theo dõi", "Đánh giá".
  - **Hàng thẻ kỹ năng (Skills)**: Các badge kỹ năng như `HTML5`, `CSS3`, `JavaScript`, `Figma`.
  - **Nút hành động (Buttons)**: Nút "Theo dõi" (Follow) và "Gửi tin nhắn" (Message).

### 2. Về Trải Nghiệm & Hiệu Ứng (CSS):
- Nút bấm và các badge kỹ năng có hiệu ứng đổi màu hoặc nhấc nhẹ lên (`transform: translateY(-2px)`) khi hover chuột.
- Ảnh avatar khi hover có hiệu ứng phóng to nhẹ (`transform: scale(1.05)`).
- Giao diện hiển thị tốt trên cả màn hình điện thoại (dưới 480px).

---

## 🛠️ Hướng Dẫn Từng Thuộc Tính CSS Cần Dùng (Bảng Tra Cứu)

Nếu bạn chưa biết nên đặt chỉ số bao nhiêu, hãy tham khảo bảng gợi ý chi tiết này:

### 1. Bố cục căn giữa trang (`.page-wrapper`):
- `display: flex;`: Bật Flexbox.
- `justify-content: center;`: Căn giữa theo chiều ngang.
- `align-items: center;`: Căn giữa theo chiều dọc.
- `min-height: 100vh;`: Chiều cao bằng 100% màn hình thiết bị.

### 2. Thẻ Card (`.profile-card`):
- `max-width: 380px;`: Độ rộng tối đa để card vừa vặn, không bị bè ngang.
- `padding: 32px 24px;`: Đệm trong để nội dung cách viền ngoài 32px (trên/dưới) và 24px (trái/phải).
- `border-radius: 20px;`: Bo tròn 4 góc card.
- `box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);`: Đổ bóng êm mắt tạo chiều sâu.

### 3. Ảnh đại diện (`.avatar`):
- `width: 110px; height: 110px;`: Kích thước vuông.
- `border-radius: 50%;`: Bo tròn 50% biến ảnh vuông thành hình tròn hoàn hảo.
- `object-fit: cover;`: Đảm bảo ảnh không bị méo tỉ lệ khi co giãn.
- `border: 4px solid #e0e7ff;`: Đường viền bao quanh ảnh.

### 4. Khối thống kê 3 cột (`.stats-container`):
- `display: flex;`: Xếp 3 cột con dàn hàng ngang.
- `justify-content: space-around;`: Chia đều khoảng cách giữa 3 cột.
- `padding: 14px 0;`: Đệm trên dưới 14px.
- `margin-bottom: 24px;`: Đẩy phần kỹ năng bên dưới cách ra 24px.

### 5. Nút bấm (`.btn`):
- `padding: 10px 16px;`: Đệm trong để nút phồng đẹp.
- `border-radius: 10px;`: Bo nhẹ các góc nút.
- `border: none;`: Bỏ viền đen mặc định của trình duyệt.
- `cursor: pointer;`: Đổi con trỏ chuột thành hình bàn tay khi rê vào.

---

## ✅ Checklist Tự Đánh Giá
- [ ] Thẻ card đã nằm chính giữa màn hình chưa?
- [ ] Ảnh đại diện có bo tròn hoàn hảo (`border-radius: 50%`) không bị méo tỉ lệ không?
- [ ] Có sử dụng biến màu CSS (`:root`) để quản lý màu sắc không?
- [ ] Khi rê chuột vào các nút và thẻ kỹ năng có hiệu ứng hover mượt mà không?
- [ ] Code có thụt đầu dòng (indentation) ngăn nắp và dùng thẻ HTML có ngữ nghĩa không?
