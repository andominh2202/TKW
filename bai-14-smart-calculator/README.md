# Bài 14: Máy Tính Cầm Tay Thông Minh (Smart Calculator với JavaScript Logic)

## 🎯 Mục Tiêu Bài Học
Xây dựng một ứng dụng máy tính cầm tay hoàn chỉnh với giao diện đẹp mắt và logic xử lý chuỗi / toán tử chặt chẽ:
- Xử lý các phép toán: Cộng (+), Trừ (-), Nhân (×), Chia (÷), Phần trăm (%), Đổi dấu (±).
- Xử lý các trường hợp biên quan trọng: Không cho nhập 2 dấu chấm thập phân liên tiếp trong cùng một số, không cho nhập phép toán liên tiếp (ví dụ `++` hay `*+`), chia cho số 0.
- Tích hợp **Lắng nghe phím bàn phím vật lý (`keydown`)**: Người dùng có thể gõ trực tiếp các phím `0-9`, `+`, `-`, `*`, `/`, `Enter` để tính, `Backspace` để xóa ký tự cuối, `Escape` để reset C/AC.
- Lưu và hiển thị danh sách **Lịch sử tính toán** gần nhất.

---

## 🛠️ Yêu Cầu Đề Bài
1. **Giao Diện CSS Grid**:
   - Khung hiển thị màn hình chia 2 dòng: Dòng biểu thức phụ (nhỏ) và dòng kết quả chính (lớn).
   - Bàn phím máy tính 4 cột được chia bằng `display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;`.
   - Nút bằng dấu `=` kéo dài 2 hàng hoặc nổi bật màu sắc riêng biệt.
2. **Logic JavaScript**:
   - Hàm `appendNumber(num)`, `chooseOperation(op)`, `calculate()`, `clear()`, `deleteDigit()`.
   - Bắt sự kiện phím `window.addEventListener('keydown', handleKeyboardInput)`.

---

## 📝 Mã Mẫu Xử Lý Sự Kiện Bàn Phím
```javascript
window.addEventListener('keydown', (e) => {
  if (e.key >= '0' && e.key <= '9') appendNumber(e.key);
  if (e.key === '.') appendDot();
  if (e.key === '=' || e.key === 'Enter') calculate();
  if (e.key === 'Backspace') deleteLast();
  if (e.key === 'Escape') clearAll();
  if (['+', '-', '*', '/'].includes(e.key)) chooseOperation(e.key);
});
```
