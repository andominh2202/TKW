# Bài 00: Khởi Động - Làm Quen Thẻ, Bố Cục & Phân Biệt Margin vs Padding

- **Cấp độ**: 🟢 Dành cho người mới bắt đầu từ số 0
- **Thời lượng ước tính**: 20 - 30 phút
- **Mục tiêu**: Hiểu bản chất mô hình hộp (**CSS Box Model**), phân biệt rõ ràng **Margin** và **Padding**, biết cách căn chỉnh bố cục cơ bản.

---

## 📦 1. MÔ HÌNH HỘP (CSS BOX MODEL) LÀ GÌ?

Mọi thẻ HTML trên trang web (dù là đoạn văn `<p>`, thẻ `<div>`, hay nút bấm `<button>`) đều được trình duyệt xem như một **chiếc hộp hình chữ nhật** gồm 4 lớp từ trong ra ngoài:

```
┌────────────────────────────────────────────────────────┐
│                        MARGIN                          │  <-- Lề ngoài: Đẩy chiếc hộp cách xa các hộp khác
│   ┌────────────────────────────────────────────────┐   │
│   │                    BORDER                      │   │  <-- Đường viền: Ranh giới của chiếc hộp
│   │   ┌────────────────────────────────────────┐   │   │
│   │   │                PADDING                 │   │   │  <-- Đệm trong: Khoảng cách từ nội dung tới viền
│   │   │   ┌────────────────────────────────┐   │   │   │
│   │   │   │                                │   │   │   │
│   │   │   │         CONTENT (Nội dung)     │   │   │   │  <-- Chữ, ảnh, icon bên trong hộp
│   │   │   │                                │   │   │   │
│   │   │   └────────────────────────────────┘   │   │   │
│   │   └────────────────────────────────────────┘   │   │
│   └────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────┘
```

---

## 🔍 2. PHÂN BIỆT RÕ RÀNG: MARGIN vs PADDING

| Đặc điểm | PADDING (Đệm Trong) | MARGIN (Lề Ngoài) |
|---|---|---|
| **Vị trí** | Nằm **BÊN TRONG** đường viền (border) | Nằm **BÊN NGOÀI** đường viền (border) |
| **Màu nền** | **Có dính màu nền** (background) của hộp | **Trong suốt** (nhìn xuyên qua nền trang web) |
| **Tác dụng chính** | Làm cho chiếc hộp **phồng to ra**, nội dung bên trong không bị dính sát vào mép viền | Dùng để **đẩy các hộp cách xa nhau ra**, tạo khoảng cách giữa các phần tử |
| **Ví dụ đời thực** | Lớp đệm mút lót bên trong đôi giày (làm êm chân) | Khoảng cách đứng cách nhau giữa 2 người xếp hàng |

### Cú pháp viết tắt cực hay dùng:
```css
/* Viết 1 số: Áp dụng cả 4 phía (Trên - Dưới - Trái - Phải) */
padding: 16px;

/* Viết 2 số: [Trên-Dưới] [Trái-Phải] */
padding: 12px 24px;   /* Trên/Dưới 12px, Trái/Phải 24px */

/* Viết 4 số: Theo chiều kim đồng hồ [Trên] [Phải] [Dưới] [Trái] */
margin: 10px 20px 15px 5px;
```

---

## 📐 3. BỐ CỤC: LÀM SAO ĐỂ CĂN GIỮA MỘT PHẦN TỬ?

### Cách 1: Dùng Flexbox (Cách hiện đại nhất, khuyên dùng)
Áp dụng lên **thẻ cha** (thẻ bao bọc bên ngoài):
```css
.the-cha {
  display: flex;             /* 1. Bật chế độ Flexbox */
  justify-content: center;   /* 2. Căn giữa theo chiều ngang (trục chính) */
  align-items: center;       /* 3. Căn giữa theo chiều dọc (trục phụ) */
  min-height: 100vh;         /* Chiều cao phủ kín toàn màn hình */
}
```

### Cách 2: Dùng `margin: 0 auto` (Chỉ căn giữa ngang cho khối có chiều rộng)
```css
.the-con {
  width: 400px;              /* Bắt buộc phải có độ rộng cụ thể */
  margin: 0 auto;            /* Trên/Dưới 0, Trái/Phải tự chia đều ra 2 bên */
}
```

---

## 🎯 4. HƯỚNG DẪN BÀI TẬP THỰC HÀNH CỦA BÀI 00

Mở thư mục `starter/` của Bài 00:
1. **Nhiệm vụ 1**: Thử tăng `padding` của `.box-demo` từ `10px` lên `30px` ➔ Quan sát thấy khoảng cách từ chữ ra viền phồng to ra.
2. **Nhiệm vụ 2**: Thử tăng `margin-bottom` của khối 1 lên `40px` ➔ Quan sát thấy khối 1 đẩy khối 2 lùi xa xuống dưới.
3. **Nhiệm vụ 3**: Tạo 1 nút bấm `.my-btn` hoàn hảo:
   - Thêm `background-color: #4f46e5;`
   - Thêm `color: white;`
   - Thêm `padding: 10px 20px;` (đừng dùng `width/height` cứng để nút tự co giãn theo độ dài chữ).
   - Thêm `border-radius: 8px;` để bo góc tròn.
