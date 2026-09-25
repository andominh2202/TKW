# Bài 17: Bảng Quản Lý Công Việc Kanban Kéo Thả (HTML5 Drag & Drop API)

## 🎯 Mục Tiêu Bài Học
Xây dựng một bảng Kanban chuyên nghiệp như Trello / Jira bằng chính bộ thư viện native **HTML5 Drag and Drop API**:
- Làm chủ thuộc tính `draggable="true"` trên các phần tử HTML.
- Nắm vững chuỗi sự kiện tương tác chuột khi kéo thả:
  1. `dragstart`: Đánh dấu phần tử đang được nhấc lên, thêm class mờ `.dragging`.
  2. `dragend`: Thả chuột, gỡ bỏ class mờ.
  3. `dragover`: Cho phép thả phần tử vào cột đích bằng cách gọi `e.preventDefault()`.
  4. `dragenter` & `dragleave`: Tạo hiệu ứng viền phát sáng khi rê thẻ qua khu vực cột.
  5. `drop`: Nhận phần tử và gắn vào danh sách con của cột (`column.appendChild(card)`).
- Tích hợp thêm thẻ công việc mới qua Modal và lưu toàn bộ vị trí các thẻ vào `localStorage`.

---

## 🛠️ Yêu Cầu Đề Bài
1. **Bố Cục 3 Cột Kanban**:
   - Cột 1: 📋 Cần Làm (To Do)
   - Cột 2: ⚡ Đang Thực Hiện (In Progress)
   - Cột 3: ✅ Hoàn Thành (Done)
2. **Thẻ Công Việc (Kanban Card)**:
   - Có tiêu đề công việc, tag phân loại màu sắc (Frontend, Backend, Bug, Design), avatar người phụ trách và ngày hết hạn.
   - Khi kéo di chuyển, có hiệu ứng bóng ma mờ (Ghost effect) và vệt đường kẻ đệm vị trí thả.
3. **Thêm Thẻ Mới**:
   - Nút "+ Thêm thẻ" ở chân mỗi cột, cho phép nhập nhanh tiêu đề và tự động thêm vào cột đó.

---

## 📝 Mã Mẫu Sự Kiện Drag & Drop
```javascript
// Gán sự kiện cho thẻ
card.addEventListener('dragstart', () => {
  card.classList.add('is-dragging');
});

card.addEventListener('dragend', () => {
  card.classList.remove('is-dragging');
  saveKanbanState();
});

// Gán sự kiện cho các cột
columns.forEach(col => {
  col.addEventListener('dragover', (e) => {
    e.preventDefault(); // Bắt buộc để cho phép drop
    const draggingCard = document.querySelector('.is-dragging');
    col.querySelector('.cards-container').appendChild(draggingCard);
  });
});
```
