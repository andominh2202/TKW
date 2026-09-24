# Bài Tập 05: Ứng Dụng Quản Lý Công Việc (To-Do List App)

- **Cấp độ**: 🔴 Nâng cao (HTML + CSS + JavaScript)
- **Thời lượng ước tính**: 60 - 90 phút
- **Công nghệ**: HTML5, CSS3 & JavaScript ES6+ (DOM & LocalStorage)

---

## 🎯 Mục Tiêu Bài Học
1. Làm chủ kỹ thuật **DOM Manipulation**: Tạo thẻ mới (`createElement`), gắn vào cây DOM (`appendChild`), xóa phần tử (`remove`).
2. Sử dụng **Event Delegation** để lắng nghe sự kiện trên danh sách động (click checkbox, click nút xóa).
3. Quản lý trạng thái ứng dụng bằng một mảng các đối tượng JavaScript (`todos = [{ id, text, completed }]`).
4. Lưu và khôi phục dữ liệu liên tục bằng **`localStorage`** để khi tải lại trang (F5) dữ liệu không bị mất.
5. Xây dựng bộ lọc trạng thái công việc: **Tất cả (All)**, **Chưa xong (Active)**, **Đã xong (Completed)**.

---

## 📋 Yêu Cầu Đề Bài

### 1. Về Giao Diện:
- Khung nhập việc mới: Ô input văn bản có nút "Thêm (+)".
- Hàng bộ lọc: 3 tab (Tất cả, Đang làm, Đã xong) kèm đếm số lượng công việc còn lại.
- Danh sách công việc: Mỗi mục gồm:
  - Checkbox tròn tùy biến để tích hoàn thành.
  - Tên công việc (khi hoàn thành sẽ có hiệu ứng gạch ngang chữ và mờ đi).
  - Nút xóa (Icon thùng rác) xuất hiện khi hover hoặc bấm trực tiếp.
- Chân trang (Footer): Nút "Xóa tất cả việc đã hoàn thành" (Clear Completed) và thông báo số việc còn tồn đọng.

### 2. Về Chức Năng (JavaScript):
- **Thêm việc mới**: Nhập chữ và bấm Enter hoặc click nút "Thêm". Không cho phép thêm chuỗi rỗng.
- **Tích hoàn thành**: Click checkbox hoặc click vào dòng để đảo ngược trạng thái `completed`.
- **Xóa việc**: Click nút thùng rác sẽ xóa công việc khỏi danh sách và cập nhật LocalStorage.
- **Lọc danh sách**: Click vào tab nào thì chỉ hiển thị công việc tương ứng tab đó.
- **LocalStorage**: Mọi thay đổi đều được đồng bộ tức thì vào trình duyệt.

---

## ✅ Checklist Tự Đánh Giá
- [ ] Thêm công việc mới có hoạt động không? Có chặn được chuỗi rỗng (khoảng trắng) không?
- [ ] Khi F5 trình duyệt, danh sách công việc có còn nguyên vẹn không?
- [ ] Các tab lọc (Tất cả, Đang làm, Đã xong) có lọc đúng dữ liệu không?
- [ ] Số lượng việc còn lại ("Còn X việc cần làm") có tự động cập nhật chính xác không?
