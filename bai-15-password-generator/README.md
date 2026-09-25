# Bài 15: Trình Tạo Mật Khẩu An Toàn & Đo Độ Mạnh (Password Generator & Strength Meter)

## 🎯 Mục Tiêu Bài Học
Xây dựng một công cụ bảo mật tạo mật khẩu ngẫu nhiên đạt chuẩn quốc tế:
- Xử lý thuật toán sinh chuỗi ngẫu nhiên dựa trên các bộ ký tự được người dùng tick chọn (chữ hoa `A-Z`, chữ thường `a-z`, chữ số `0-9`, ký hiệu đặc biệt `!@#$%^&*`).
- Đo độ mạnh của mật khẩu theo thời gian thực (Strength Score từ 1 đến 4 sao) dựa trên độ dài và độ đa dạng ký tự (Regex).
- Thanh đo trực quan đổi màu sống động: 🔴 Yếu (Đỏ) ➔ 🟡 Trung bình (Vàng) ➔ 🟢 Mạnh (Xanh lá) ➔ 💎 Tối thượng (Xanh ngọc).
- Tích hợp **Async Clipboard API (`navigator.clipboard.writeText`)** để sao chép 1-click kèm thông báo Toast nổi lên êm ái.

---

## 🛠️ Yêu Cầu Đề Bài
1. **Giao Diện Điều Khiển**:
   - Thanh trượt độ dài mật khẩu (Length Slider: từ 6 đến 32 ký tự).
   - 4 Checkbox tùy chọn: Chữ hoa, Chữ thường, Chữ số, Ký tự đặc biệt. Bắt buộc ít nhất 1 tùy chọn phải được bật.
   - Ô kết quả hiển thị mật khẩu với nút Tạo mới 🔄 và nút Sao chép 📋.
2. **Logic JavaScript**:
   - Hàm `generatePassword(length, options)`.
   - Hàm `evaluateStrength(password)` trả về điểm và nhãn (Weak, Medium, Strong, Unbreakable).
   - Sao chép vào bộ nhớ tạm bằng `navigator.clipboard.writeText()`.

---

## 📝 Mã Mẫu Sao Chép Clipboard & Toast
```javascript
async function copyPassword() {
  const text = passwordOutput.value;
  if (!text) return;
  await navigator.clipboard.writeText(text);
  
  // Hiển thị Toast thông báo
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}
```
