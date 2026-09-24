# Bài Tập 06: Ứng Dụng Trắc Nghiệm Tính Điểm (Quiz Web App)

- **Cấp độ**: 🔴 Nâng cao (HTML + CSS + JavaScript)
- **Thời lượng ước tính**: 60 - 90 phút
- **Công nghệ**: HTML5, CSS3 & JavaScript (Mảng dữ liệu, Timer `setInterval`, DOM Logic)

---

## 🎯 Mục Tiêu Bài Học
1. Tổ chức dữ liệu bài trắc nghiệm dưới dạng mảng các Object (`questions = [{ question, options, answer, explanation }]`).
2. Quản lý trạng thái luồng làm bài: Màn hình bắt đầu ➔ Câu hỏi & Đếm ngược ➔ Màn hình tổng kết điểm.
3. Kỹ thuật đếm ngược thời gian bằng **`setInterval`** và dọn dẹp bằng **`clearInterval`**.
4. Phản hồi thị giác tức thì (Instant Visual Feedback): Nút chọn đúng đổi sang màu xanh lục, nút chọn sai đổi màu đỏ và tự động highlight đáp án đúng.
5. Tính tổng điểm và đưa ra lời nhận xét đánh giá trình độ theo số điểm đạt được.

---

## 📋 Yêu Cầu Đề Bài

### 1. Về Giao Diện:
- **Thanh Header Quiz**: Hiển thị số câu hiện tại (ví dụ: `Câu 3 / 5`), thanh tiến độ (Progress bar) và đồng hồ đếm ngược (ví dụ: `15s`).
- **Nội dung câu hỏi**: Dòng tiêu đề câu hỏi to, rõ ràng.
- **4 Phương án lựa chọn (A, B, C, D)**: Các nút bấm lớn, dễ chạm trên điện thoại.
- **Màn hình kết quả**: Huy hiệu cúp chiến thắng, tổng điểm (ví dụ: `4/5 (80%)`), lời nhận xét ("Xuất sắc!", "Cần cố gắng thêm"), và nút "Làm lại từ đầu".

### 2. Về Logic JavaScript:
- Khi người dùng click vào một phương án:
  - Khóa tất cả các nút để tránh click nhiều lần.
  - Kiểm tra đúng/sai, cộng điểm nếu đúng.
  - Hiện nút "Câu tiếp theo" (Next).
- Nếu hết thời gian 15s mà chưa chọn: Tự động đánh dấu hết giờ, hiển thị đáp án đúng và cho phép sang câu tiếp theo.
- Sau khi hết câu hỏi cuối cùng: Hiển thị màn hình tổng kết kết quả.

---

## ✅ Checklist Tự Đánh Giá
- [ ] Dữ liệu câu hỏi có dễ dàng thêm/bớt mà không làm hỏng giao diện không?
- [ ] Đồng hồ đếm ngược có reset lại 15 giây cho mỗi câu hỏi mới không?
- [ ] Có tránh được lỗi chạy chồng chéo timer khi click liên tục không?
- [ ] Nút "Làm lại" có reset toàn bộ điểm số, thời gian và chỉ số câu hỏi về ban đầu không?
