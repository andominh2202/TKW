# Bài Tập 07: Bộ Sưu Tập Ảnh Có Bộ Lọc & Phóng To (Filterable Gallery & Lightbox)

- **Cấp độ**: 🔴 Nâng cao (HTML + CSS + JavaScript)
- **Thời lượng ước tính**: 60 - 90 phút
- **Công nghệ**: HTML5, CSS Grid, JavaScript (DOM Filter, Modal Lightbox, Keyboard Events)

---

## 🎯 Mục Tiêu Bài Học
1. Xây dựng bố cục hiển thị ảnh dạng lưới thích ứng (**Responsive CSS Grid**) với hiệu ứng zoom khi hover chuột.
2. Xử lý logic lọc ảnh theo danh mục (Category Filter) bằng JavaScript: `Tất cả`, `Thiên nhiên`, `Kiến trúc`, `Công nghệ`.
3. Lập trình cửa sổ phóng to ảnh (**Modal Lightbox**) toàn màn hình có nền mờ (Glassmorphism / Backdrop-filter).
4. Điều hướng ảnh trong Lightbox: nút **Ảnh tiếp theo (Next)**, **Ảnh trước (Prev)**, nút đóng (✕), click ra ngoài để đóng, và lắng nghe phím bấm bàn phím (`Escape`, `ArrowLeft`, `ArrowRight`).

---

## 📋 Yêu Cầu Đề Bài

### 1. Về Giao Diện:
- **Thanh nút lọc**: Các nút danh mục (Tất cả, Thiên nhiên, Kiến trúc, Công nghệ) với nút đang chọn được highlight.
- **Lưới hiển thị ảnh (Grid)**: Các thẻ ảnh tỉ lệ đồng đều, bo góc, có lớp phủ thông tin (overlay) hiện lên khi hover chuột.
- **Cửa sổ Lightbox phóng to**:
  - Nền tối mờ bao phủ toàn màn hình (`backdrop-filter: blur(10px)`).
  - Khung ảnh lớn sắc nét ở giữa.
  - Tiêu đề ảnh, danh mục và bộ đếm (ví dụ: `Ảnh 3 / 8`).
  - Nút mũi tên chuyển ảnh 2 bên và nút đóng ở góc trên bên phải.

### 2. Về Chức Năng (JavaScript):
- **Lọc danh mục**: Khi ấn nút danh mục, chỉ hiển thị các ảnh tương ứng hoặc tất cả ảnh nếu chọn "Tất cả".
- **Mở Lightbox**: Nhấp vào bất kỳ ảnh nào sẽ mở modal hiển thị đúng ảnh đó.
- **Chuyển ảnh**: Bấm nút Prev/Next sẽ chuyển qua lại giữa các ảnh trong danh sách đang lọc (tự động quay vòng khi chạm cuối).
- **Phím tắt tiện dụng**:
  - Phím `Escape` (`Esc`): Đóng Lightbox.
  - Phím mũi tên trái (`ArrowLeft`): Xem ảnh trước.
  - Phím mũi tên phải (`ArrowRight`): Xem ảnh kế tiếp.

---

## ✅ Checklist Tự Đánh Giá
- [ ] Lưới ảnh có tự động co giãn đẹp mắt trên các độ phân giải màn hình không?
- [ ] Bộ lọc có hoạt động mượt mà và không làm biến mất ảnh ngoài ý muốn không?
- [ ] Khi mở Lightbox, cuộn trang phía sau có được khóa lại không (`overflow: hidden`)?
- [ ] Điều hướng bằng phím mũi tên và phím ESC có hoạt động chuẩn xác không?
