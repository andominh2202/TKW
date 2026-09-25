# 🎓 BÀI HỌC NHẬP MÔN THIẾT KẾ WEB (HTML & CSS)
### Dành cho người mới bắt đầu từ con số 0

> [!TIP]
> 🌐 **Xem phiên bản Web trực quan tương tác tại**: [bai-hoc-nhap-mon.html](bai-hoc-nhap-mon.html)
> (Bao gồm bảng tra cứu thẻ, mô phỏng đường dẫn file và kiểm thử bộ chọn CSS trực tiếp trên màn hình!)

Tài liệu này giải thích chi tiết, dễ hiểu nhất về:
1. **Các thẻ HTML cơ bản & quy tắc đóng mở**.
2. **Cách viết đường dẫn (Path) đúng chuẩn (không bao giờ bị mất ảnh hay mất CSS)**.
3. **Bộ chọn CSS: Thẻ, `.class`, `#id`, dấu `:` (pseudo-class) và thứ tự ưu tiên**.

---

## PHẦN 1: CÁC THẺ HTML CƠ BẢN NHẤT

### 1.1. Cấu trúc khung sườn của 1 trang web
Mọi trang web đều bắt đầu bằng bộ khung này:
```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <!-- Chứa thông tin cấu hình trang (người dùng không nhìn thấy trực tiếp trên giao diện) -->
  <meta charset="UTF-8">
  <title>Tiêu đề hiện trên tab trình duyệt</title>
  <!-- Nhúng file CSS vào đây -->
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Tất cả những gì bạn muốn người dùng THẤY ĐƯỢC đều viết ở trong này -->
  <h1>Xin chào!</h1>
</body>
</html>
```

### 1.2. Thẻ có thẻ đóng vs Thẻ tự đóng
- **Thẻ cặp (Bắt buộc có mở và đóng)**: Bao bọc nội dung chữ hoặc thẻ khác ở giữa.
  - Cú pháp: `<tên_thẻ> Nội dung </tên_thẻ>` (chú ý dấu `/` ở thẻ đóng).
  - Ví dụ: `<h1>Tiêu đề</h1>`, `<p>Đoạn văn</p>`, `<button>Bấm vào đây</button>`.
- **Thẻ tự đóng (Không có thẻ đóng riêng)**: Dùng để chèn đối tượng độc lập.
  - Ví dụ: 
    - `<img>`: Thẻ ảnh (ví dụ: `<img src="anh.jpg" alt="Mô tả ảnh">`)
    - `<input>`: Ô nhập liệu (ví dụ: `<input type="text" placeholder="Nhập tên">`)
    - `<br>`: Xuống dòng.

### 1.3. Bảng các thẻ hay dùng nhất
| Thẻ HTML | Ý nghĩa | Ví dụ |
|---|---|---|
| `<h1>` đến `<h6>` | Tiêu đề các cấp (`h1` to nhất, `h6` nhỏ nhất) | `<h1>Bài Viết Mới</h1>` |
| `<p>` | Đoạn văn bản (Paragraph) | `<p>Nội dung chia sẻ kiến thức...</p>` |
| `<a>` | Đường link liên kết (Anchor) | `<a href="https://google.com">Tìm kiếm</a>` |
| `<img>` | Chèn hình ảnh | `<img src="avatar.jpg" alt="Ảnh đại diện">` |
| `<ul>` & `<li>` | Danh sách không thứ tự (dấu chấm tròn) | `<ul><li>Mục 1</li><li>Mục 2</li></ul>` |
| `<ol>` & `<li>` | Danh sách có thứ tự (1, 2, 3...) | `<ol><li>Bước 1</li><li>Bước 2</li></ol>` |
| `<div>` | Chiếc hộp khối (Block) gom nhóm nhiều phần tử | `<div class="card">...</div>` |
| `<span>` | Khối nội tuyến (Inline) để đổi màu/style 1 vài chữ | `Giá: <span class="price">100k</span>` |
| `<button>` | Nút bấm thao tác | `<button>Mua Ngay</button>` |

---

## PHẦN 2: BÍ QUYẾT VIẾT ĐƯỜNG DẪN (PATH) KHÔNG BAO GIỜ BỊ LỖI

Lỗi phổ biến nhất của người mới học là **ảnh không hiển thị** hoặc **CSS không ăn vào HTML** vì viết sai đường dẫn.

### 2.1. Quy tắc cần nhớ:
1. `ten-file.css`: Tìm file **cùng nằm chung một thư mục** với file HTML hiện tại.
2. `thu-muc-con/ten-file.css`: Đi **vào trong** thư mục con.
3. `../ten-file.css`: Nhảy **lùi ra ngoài (lên 1 cấp cha)**.
4. `../../ten-file.css`: Nhảy **lùi ra ngoài 2 cấp cha**.

### 2.2. Minh họa thực tế bằng cây thư mục của bạn:
Giả sử dự án có cấu trúc thư mục như sau:
```
TKW/
├── index.html
├── assets/
│   └── css/
│       └── hub-style.css
└── bai-01-profile-card/
    └── solution/
        ├── index.html
        └── style.css
```

- **Tình huống 1**: Bạn đang ở `d:/TKW/bai-01-profile-card/solution/index.html` và muốn gọi file `style.css` (nó nằm ngay cạnh file HTML):
  ```html
  <!-- ĐÚNG: Cùng thư mục thì ghi trực tiếp tên file -->
  <link rel="stylesheet" href="style.css">
  ```

- **Tình huống 2**: Bạn đang ở file `d:/TKW/index.html` ở ngoài gốc, muốn gọi `hub-style.css` nằm trong thư mục `assets/css/`:
  ```html
  <!-- ĐÚNG: Đi vào thư mục assets, rồi vào css -->
  <link rel="stylesheet" href="assets/css/hub-style.css">
  ```

- **Tình huống 3**: Bạn đang ở trong `d:/TKW/bai-01-profile-card/solution/index.html` nhưng muốn gọi file CSS ở thư mục gốc `assets/css/hub-style.css`:
  - Từ `solution/` lùi ra 1 cấp (`..`) ➔ ra đến `bai-01-profile-card/`.
  - Lùi thêm 1 cấp nữa (`../..`) ➔ ra đến `TKW/` gốc.
  - Đi vào `assets/css/hub-style.css`.
  ```html
  <!-- ĐÚNG: Lùi 2 cấp rồi đi vào -->
  <link rel="stylesheet" href="../../assets/css/hub-style.css">
  ```

> [!CAUTION]
> **TUYỆT ĐỐI KHÔNG** dùng đường dẫn ổ đĩa máy tính như:
> `href="D:\TKW\style.css"` hoặc `src="C:\Users\An\Desktop\anh.jpg"`.
> ❌ Trình duyệt sẽ chặn vì lý do bảo mật và khi copy code sang máy khác sẽ bị lỗi 100%!

---

## PHẦN 3: BỘ CHỌN CSS (SELECTORS) & CÁC CẤP ĐỘ

CSS dùng để trang trí (màu sắc, kích thước, khoảng cách) cho các thẻ HTML. Để trang trí được, CSS cần biết **chọn phần tử nào**.

### 3.1. Phân biệt: Tên Thẻ, Class (`.`) và ID (`#`)

| Loại | Cú pháp CSS | Ý nghĩa đời thực | Khi nào dùng? |
|---|---|---|---|
| **Tên Thẻ (Tag)** | `p { ... }` <br> `h1 { ... }` | Như danh từ chung: "Con người" | Khi muốn đặt kiểu mặc định cho **tất cả** thẻ loại đó trên trang. |
| **Class (`.`)** | `.btn { ... }` <br> `.text-red { ... }` | Như "Đồng phục học sinh": **Nhiều người** cùng mặc được. | **Dùng nhiều nhất!** Dành cho các thành phần xuất hiện lặp lại nhiều lần. |
| **ID (`#`)** | `#header { ... }` <br> `#submit-btn { ... }` | Như "Số Căn Cước / CMND": **Duy nhất 1 người có**. | Dùng cho phần tử duy nhất độc nhất trong 1 trang HTML. |

#### Ví dụ minh họa:
```html
<!-- HTML -->
<p>Đoạn văn bình thường (chọn bằng p)</p>
<p class="highlight">Đoạn văn nổi bật 1 (chọn bằng .highlight)</p>
<p class="highlight">Đoạn văn nổi bật 2 (chọn bằng .highlight)</p>
<button id="btnXacNhan">Xác Nhận (chọn bằng #btnXacNhan)</button>
```

```css
/* CSS */
/* 1. Chọn theo tên thẻ: Tất cả thẻ p đều có cỡ chữ 16px */
p {
  font-size: 16px;
  color: #333;
}

/* 2. Chọn theo Class (bắt đầu bằng dấu chấm .) */
.highlight {
  color: #e11d48;
  font-weight: bold;
}

/* 3. Chọn theo ID (bắt đầu bằng dấu thăng #) */
#btnXacNhan {
  background-color: #2563eb;
  color: white;
  border-radius: 8px;
}
```

---

### 3.2. Dấu hai chấm `:` (Pseudo-class - Trạng thái của phần tử)

Dấu `:` dùng để chọn phần tử **khi nó đang ở một trạng thái cụ thể nào đó** (ví dụ: khi rê chuột vào, khi đang click, hoặc thứ tự con).

1. **`:hover` (Khi rê chuột vào)**:
   ```css
   .btn {
     background-color: blue;
     transition: 0.3s;
   }
   /* Khi người dùng di chuột lên nút: đổi sang màu tím */
   .btn:hover {
     background-color: purple;
   }
   ```
2. **`:active` (Khi đang bấm và giữ chuột)**:
   ```css
   .btn:active {
     transform: scale(0.95); /* Thu nhỏ lại một chút tạo cảm giác nhấn nút */
   }
   ```
3. **`:focus` (Khi click chuột vào ô nhập liệu input)**:
   ```css
   input:focus {
     border-color: #6366f1; /* Đổi viền sang màu tím khi đang gõ */
     outline: none;
   }
   ```
4. **`:nth-child(n)` (Chọn con thứ n)**:
   ```css
   /* Chọn dòng chẵn để tô màu xen kẽ bảng */
   li:nth-child(even) {
     background-color: #f1f5f9;
   }
   ```

---

### 3.3. Các cấp độ kết hợp trong CSS (Quan hệ cha - con)

1. **Khoảng trắng (Con cháu bất kỳ cấp nào)**:
   ```css
   /* Chọn tất cả thẻ <span> nằm BÊN TRONG class .card */
   .card span {
     color: red;
   }
   ```
2. **Dấu `>` (Con trực tiếp cấp 1)**:
   ```css
   /* Chỉ chọn thẻ <p> là con trực tiếp ngay dưới .card, không chọn p nằm sâu hơn */
   .card > p {
     margin-bottom: 10px;
   }
   ```
3. **Viết liền không khoảng trắng (Một phần tử có đồng thời cả 2 điều kiện)**:
   ```css
   /* Chọn thẻ <button> mà có CẢ class .primary */
   button.primary {
     background: green;
   }
   ```

---

### 3.4. Thứ tự ưu tiên (Ai mạnh hơn ai khi trùng màu?)
Nếu cùng 1 phần tử mà nhiều luật CSS cùng đổi màu chữ thì trình duyệt sẽ nghe theo ai?

```
Độ mạnh: !important  >  style trực tiếp (inline)  >  #ID  >  .Class  >  Tên thẻ (Tag)
```

Ví dụ:
```html
<p id="tieu-de" class="chu-xanh" style="color: yellow;">Đoạn văn này màu gì?</p>
```
```css
p { color: black; }           /* Yếu nhất (Tên thẻ) */
.chu-xanh { color: blue; }     /* Mạnh hơn tên thẻ */
#tieu-de { color: red; }       /* Mạnh hơn Class */
```
👉 Kết quả: Chữ sẽ có màu **vàng** vì style trực tiếp trên thẻ (`style="color: yellow;"`) mạnh hơn `#id`. Nếu trong CSS viết `#tieu-de { color: red !important; }` thì nó sẽ biến thành màu đỏ vì `!important` có mức ưu tiên rất cao trong CSS cascade (tuy nhiên thứ tự ưu tiên chuẩn còn phụ thuộc vào nguồn gốc style, cascade layer, specificity và source order, vì vậy lập trình viên chuyên nghiệp hạn chế lạm dụng `!important`).

---

## 🎯 TỔNG KẾT NHANH ĐỂ BẮT ĐẦU:
1. Viết HTML thì nhớ **mở thẻ là phải có đóng thẻ** (trừ thẻ tự đóng như `<img>`, `<input>`).
2. Đường dẫn CSS/Ảnh: Nằm cạnh nhau thì ghi thẳng tên file, nằm trong thư mục con thì `thu-muc/file`, muốn nhảy ra ngoài thư mục cha thì dùng `../`.
3. CSS:
   - Dùng `.tên-class` để tạo style dùng lại được nhiều nơi.
   - Dùng `#tên-id` khi chỉ có 1 phần tử duy nhất.
   - Thêm `:hover` để tạo hiệu ứng khi di chuột qua.
