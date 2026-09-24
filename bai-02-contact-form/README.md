# Bài Tập 02: Form Liên Hệ Hiện Đại (Modern Contact Form)

- **Cấp độ**: 🟢 Cơ bản
- **Thời lượng ước tính**: 45 - 60 phút
- **Công nghệ**: HTML5 & CSS3

---

## 🎯 Mục Tiêu Bài Học
1. Sử dụng đúng ngữ nghĩa các thẻ form HTML5 (`<form>`, `<fieldset>`, `<legend>`, `<label>`, `<input>`, `<select>`, `<textarea>`).
2. Kết nối chuẩn trợ năng giữa `<label for="...">` và `<input id="...">`.
3. Tùy biến kiểu dáng (Custom styling) cho các ô nhập liệu, loại bỏ đường viền mặc định thô của trình duyệt.
4. Thiết lập trạng thái tương tác sống động: `:focus`, `:focus-visible`, `:hover`, và hiệu ứng bo viền phát sáng (Glow border).
5. Xây dựng bố cục 2 cột (Họ - Tên) tự động xếp dọc thành 1 cột trên điện thoại (Responsive Grid/Flexbox).

---

## 📋 Yêu Cầu Đề Bài

### 1. Về Các Trường Dữ Liệu:
- **Họ & Tên**: Xếp ngang 2 cột trên máy tính, xếp dọc trên mobile.
- **Email**: `type="email"`, bắt buộc nhập (`required`).
- **Chủ đề liên hệ**: Thẻ `<select>` với các lựa chọn: Tư vấn dự án, Hỗ trợ kỹ thuật, Hợp tác kinh doanh, Khác.
- **Nội dung tin nhắn**: Thẻ `<textarea>` có độ cao phù hợp, giới hạn co giãn kích thước (`resize: vertical`).
- **Checkbox đồng ý điều khoản**: Tùy biến đẹp mắt, không dùng hộp kiểm mặc định thô sơ.
- **Nút gửi**: Nút Submit nổi bật, có icon mũi tên hoặc máy bay giấy.

### 2. Về Giao Diện & Trải Nghiệm:
- Card Form được bo góc mềm mại, đổ bóng nổi bật trên nền gradient tối hoặc sáng trang nhã.
- Khi người dùng click vào ô input, viền đổi màu chủ đạo (ví dụ tím/xanh) và có vòng sáng nhẹ bao quanh (`outline: none; box-shadow: 0 0 0 4px rgba(...);`).
- Nút gửi có hiệu ứng nâng chuột và đổi màu mượt mà.

---

## 🛠️ Hướng Dẫn Từng Thuộc Tính CSS Cần Dùng (Bảng Tra Cứu)

### 1. Bố cục 2 cột Họ & Tên (`.form-row`):
- `display: flex;`: Xếp Họ và Tên dàn hàng ngang.
- `gap: 16px;`: Khoảng cách giữa 2 ô là 16px.
- Trên mobile (dưới 600px): `@media (max-width: 600px) { .form-row { flex-direction: column; } }` (tự xếp thành 1 cột dọc).

### 2. Các ô nhập liệu (`.form-input`, `.form-select`, `.form-textarea`):
- `width: 100%;`: Chiếm trọn chiều rộng của ô chứa.
- `padding: 12px 16px;`: Đệm trong để người dùng click vào đâu cũng gõ được, chữ không bị chật chội.
- `border: 1px solid #cbd5e1;`: Đường viền xám mỏng nhẹ nhàng.
- `border-radius: 8px;`: Bo nhẹ 8px cho các góc mềm mại.
- `outline: none;`: Bỏ đường viền đen thô mặc định của trình duyệt.

### 3. Hiệu ứng viền sáng khi Focus (`:focus`):
- `border-color: #2563eb;`: Đổi viền sang màu xanh dương khi người dùng click vào.
- `box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);`: Tạo vòng hào quang sáng nhẹ 3px xung quanh ô input.

### 4. Nút gửi tin (`.btn-submit`):
- `width: 100%;`: Chiều rộng tràn đều form.
- `padding: 14px;`: Đệm dày tạo nút bấm to, rõ ràng.
- `background: #2563eb;`: Màu xanh chủ đạo.
- `color: white;`: Màu chữ trắng.
- `border-radius: 8px; border: none; cursor: pointer;`: Chuẩn nút bấm hiện đại.

---

## ✅ Checklist Tự Đánh Giá
- [ ] Mọi ô nhập liệu đều có `<label>` đi kèm với thuộc tính `for` tương ứng `id`?
- [ ] Trên màn hình nhỏ hơn 600px, hàng 2 cột (Họ & Tên) đã chuyển thành 1 cột chưa?
- [ ] Đường viền `:focus` của trình duyệt có được thay thế bằng hiệu ứng chuyên nghiệp chưa?
- [ ] Ô textarea có bị vỡ giao diện nếu kéo dãn ngang không (`resize: vertical` hoặc `none`)?
