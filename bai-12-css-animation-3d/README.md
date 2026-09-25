# Bài 12: Animation Chuyên Sâu & Hiệu Ứng Thẻ 3D Tilt (CSS Keyframes & 3D Transforms)

## 🎯 Mục Tiêu Bài Học
Đưa kỹ năng CSS của bạn lên một tầm cao mới bằng cách làm chủ:
- Nguyên lý hoạt ảnh CSS với cú pháp `@keyframes`: thiết lập các điểm dừng `0%`, `50%`, `100%`.
- Thuộc tính điều khiển chuyển động: `animation-duration`, `animation-timing-function` (`ease-in-out`, `cubic-bezier`), `animation-iteration-count: infinite`.
- Hiệu ứng đổ bóng phát sáng neon (Neon Glow Pulse).
- Hiệu ứng bộ khung tải trang Skeleton Loading với dải sáng quét qua (Shimmer Effect).
- Không gian 3D với thuộc tính `perspective: 1000px`, `transform: rotateY()` và hiệu ứng lật thẻ 2 mặt (3D Card Flip).

---

## 🛠️ Yêu Cầu Đề Bài
1. **Thẻ 1: Card 3D Lật 2 Mặt (Flip Card)**:
   - Mặt trước chứa ảnh và tên nhân vật.
   - Khi di chuột (`:hover`), thẻ lật 180 độ theo trục Y hiển thị mặt sau chứa thông số kỹ thuật (Stats).
   - Dùng `transform-style: preserve-3d;` và `backface-visibility: hidden;`.
2. **Thẻ 2: Quả Cầu Phát Sáng Neon Pulse**:
   - Vòng tròn năng lượng tỏa ánh hào quang nhấp nháy liên tục bằng `@keyframes pulseGlow`.
3. **Thẻ 3: Khung Chờ Skeleton Shimmer Loader**:
   - Khung hình xám giả lập bài viết đang tải dữ liệu với gradient sáng lướt ngang liên tục.

---

## 📝 Mã Mẫu Keyframes & 3D Flip
```css
/* 1. Hoạt họa Shimmer lướt sáng */
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* 2. Thẻ lật 3D */
.flip-card {
  perspective: 1000px;
}
.flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}
.flip-card:hover .flip-inner {
  transform: rotateY(180deg);
}
.flip-front, .flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 16px;
}
.flip-back {
  transform: rotateY(180deg);
}
```
