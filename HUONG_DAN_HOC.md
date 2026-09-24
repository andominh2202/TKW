# 📘 CẨM NANG HỌC & LUYỆN TẬP THIẾT KẾ WEB (TKW)
### HTML5 • CSS3 • JAVASCRIPT CĂN BẢN ĐẾN THỰC CHIẾN

Chào mừng bạn đến với bộ tài liệu và bài tập thực hành Thiết Kế Web! Tài liệu này giúp bạn định hình lộ trình, phương pháp học tập hiệu quả cùng các bảng tra cứu cú pháp quan trọng nhất.

---

## 🎯 1. LỘ TRÌNH VÀ PHƯƠNG PHÁP HỌC HIỆU QUẢ

### Quy trình 4 bước làm một bài tập:
1. **Đọc kỹ đề bài**: Mở file `README.md` trong từng thư mục bài tập để nắm rõ yêu cầu giao diện, chức năng và tiêu chí hoàn thành.
2. **Tự code trong thư mục `starter/`**:
   - Mở file `index.html`, `style.css` (và `script.js` nếu có).
   - Làm theo các chỉ dẫn có ghi chú `TODO:` trong code.
   - **Tự tay gõ từng dòng**, tránh copy-paste để hình thành phản xạ nhớ cú pháp.
3. **Kiểm tra và so sánh**:
   - Khi hoàn thành, mở thư mục `solution/` để đối chiếu với cách làm chuẩn.
   - Học hỏi cách đặt tên class theo chuẩn (như BEM hoặc semantic), cách tổ chức biến CSS (`--primary-color`), và cách viết code JavaScript ngắn gọn, tối ưu.
4. **Mở rộng & Nâng cấp (Tùy chọn)**: Thêm các hiệu ứng hoặc chức năng mới theo ý thích sáng tạo của riêng bạn.

---

## 🧭 2. LỘ TRÌNH 8 BÀI TẬP ĐỀ XUẤT

| Bài | Tên bài tập | Cấp độ | Trọng tâm kiến thức |
|---|---|---|---|
| **01** | [Profile Card](file:///d:/TKW/bai-01-profile-card/) | 🟢 Cơ bản | Cấu trúc thẻ HTML semantic, CSS Box Model, Flexbox căn giữa, border-radius, box-shadow |
| **02** | [Modern Contact Form](file:///d:/TKW/bai-02-contact-form/) | 🟢 Cơ bản | Thẻ form, input, select, textarea, pseudo-classes (`:focus`, `:hover`), responsive 2 cột |
| **03** | [Pricing Table](file:///d:/TKW/bai-03-pricing-table/) | 🟡 Trung cấp | CSS Grid, hiệu ứng hover card 3D lift, badge nổi bật, nút bấm gradient |
| **04** | [Landing Page Hero](file:///d:/TKW/bai-04-landing-hero/) | 🟡 Trung cấp | Responsive Navbar (mobile menu), căn chỉnh layout banner, typography, call-to-action |
| **05** | [To-Do List App](file:///d:/TKW/bai-05-todo-app/) | 🔴 Nâng cao | DOM manipulation, `addEventListener`, lưu `localStorage`, bộ lọc trạng thái việc làm |
| **06** | [Quiz Web App](file:///d:/TKW/bai-06-quiz-app/) | 🔴 Nâng cao | Quản lý state qua mảng Objects, đồng hồ đếm ngược `setInterval`, tính điểm, hiển thị kết quả |
| **07** | [Filterable Gallery & Lightbox](file:///d:/TKW/bai-07-filter-gallery/) | 🔴 Nâng cao | Lọc ảnh theo danh mục, Modal popup phóng to ảnh, sự kiện bàn phím (phím ESC) |
| **08** | [Mini E-commerce Cart](file:///d:/TKW/bai-08-shopping-cart/) | 🔴 Nâng cao | Quản lý mảng giỏ hàng, tăng/giảm số lượng, tính tổng tiền, mã voucher giảm giá |

---

## 💡 3. BẢNG TRA CỨU NHANH (CHEAT-SHEET)

### A. HTML5 Semantic Cần Nhớ
- `<header>`: Phần đầu trang hoặc đầu một section/card.
- `<nav>`: Vùng chứa các liên kết điều hướng (menu).
- `<main>`: Nội dung chính độc nhất của trang.
- `<section>`: Một phần nội dung độc lập theo chủ đề.
- `<article>`: Khối nội dung độc lập có thể tái sử dụng (bài viết, sản phẩm, thẻ tin tức).
- `<aside>`: Nội dung phụ, thanh bên (sidebar).
- `<footer>`: Chân trang hoặc chân của một card/section.

### B. CSS Flexbox (Cực kỳ hay dùng)
```css
.container {
  display: flex;                  /* Kích hoạt Flexbox */
  flex-direction: row;            /* row (mặc định) | column */
  justify-content: center;        /* Trục chính: flex-start | center | flex-end | space-between | space-around */
  align-items: center;            /* Trục phụ: stretch | flex-start | center | flex-end */
  gap: 16px;                      /* Khoảng cách giữa các phần tử con */
  flex-wrap: wrap;                /* Cho phép xuống dòng khi tràn màn hình */
}
```

### C. CSS Grid (Bố cục dạng lưới chia cột)
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Tự co giãn cột theo màn hình */
  gap: 24px;
}
```

### D. CSS Responsive với Media Queries
```css
/* Áp dụng cho màn hình máy tính bảng & điện thoại (dưới 768px) */
@media (max-width: 768px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
  }
}
```

### E. JavaScript DOM Manipulation Thường Dùng
```javascript
// 1. Chọn phần tử
const btn = document.querySelector('.my-btn');
const allCards = document.querySelectorAll('.card');

// 2. Lắng nghe sự kiện
btn.addEventListener('click', (event) => {
  console.log('Nút đã được bấm!');
});

// 3. Thao tác class CSS
btn.classList.add('active');
btn.classList.remove('active');
btn.classList.toggle('active');

// 4. Thao tác nội dung
element.textContent = "Nội dung mới";
element.innerHTML = "<span>Chữ in đậm</span>";

// 5. Lưu trữ dữ liệu vào LocalStorage
localStorage.setItem('todos', JSON.stringify([{ id: 1, text: 'Học HTML' }]));
const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
```

---

## 🚀 4. BẮT ĐẦU NGAY!
Bạn có thể mở trực tiếp file `index.html` tại thư mục gốc `d:/TKW/index.html` trên trình duyệt để sử dụng **Cổng bài tập tương tác (Exercise Hub)**!
