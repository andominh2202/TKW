# Bài 09: Trang Báo Điện Tử Đa Phương Tiện (HTML5 Semantic Blog)

## 🎯 Mục Tiêu Bài Học
Nắm vững cách sử dụng các thẻ ngữ nghĩa (**HTML5 Semantic Elements**) để xây dựng một trang bài viết báo chí chuẩn cấu trúc SEO, thân thiện với công cụ đọc màn hình (Screen Readers) và tích hợp các thẻ đa phương tiện hiện đại: `<video>`, `<audio>`, `<figure>`, `<figcaption>`, `<time>`, `<details>/<summary>`.

---

## 💡 Tại Sao Phải Dùng Thẻ Semantic Thay Vì Toàn Bộ `<div>`?
Khi bạn dùng toàn bộ `<div>`, trình duyệt và công cụ tìm kiếm (Google SEO) chỉ thấy một mớ khối vô nghĩa:
- ❌ `<div class="tieude">`: Máy không hiểu đây là tiêu đề chính hay phụ.
- ✅ `<header> <h1>Tiêu đề</h1> <time datetime="..."> </header>`: Máy hiểu ngay đây là phần đầu bài viết và ngày xuất bản.
- ✅ `<article>`: Đánh dấu đây là một bài viết độc lập, có thể chia sẻ hoặc trích dẫn.
- ✅ `<aside>`: Nội dung phụ, bổ trợ hoặc thanh bên liên quan.
- ✅ `<figure>` & `<figcaption>`: Chứa hình ảnh/video kèm lời chú thích ảnh chuẩn mực.

---

## 🛠️ Yêu Cầu Đề Bài

### 1. Cấu Trúc HTML Semantic
- `<article class="blog-post">`: Khung bài viết chính.
- `<header class="post-header">`:
  - Tag danh mục (`<span class="badge">Công Nghệ</span>`).
  - Tiêu đề cấp 1 `<h1>`.
  - Thông tin tác giả & ngày đăng bằng thẻ `<time datetime="2026-09-25">25 Tháng 09, 2026</time>`.
- `<figure>` bọc hình ảnh đại diện kèm `<figcaption>` chú thích nguồn ảnh.
- Nội dung bài viết chia thành các `<section>` với `<h2>`, `<p>`.
- Chèn trình phát âm thanh podcast bằng `<audio controls src="...">`.
- Khối trích dẫn nổi bật bằng `<blockquote>`.
- Khối câu hỏi thường gặp FAQ thu gọn/mở rộng bằng thẻ native `<details>` và `<summary>` (không cần viết JS!).
- Thanh bên `<aside class="post-sidebar">`: Chứa danh sách bài viết liên quan và hộp thông tin tác giả.

### 2. Thiết Kế CSS
- Bố cục 2 cột (Bài viết 70% + Sidebar 30%) trên Desktop, tự chuyển thành 1 cột trên Mobile.
- Khoảng cách dòng chữ (`line-height: 1.8`) chuẩn báo chí, dễ đọc không mỏi mắt.
- Định dạng thẻ `<details>` và `<summary>` có hiệu ứng mở êm ái, mũi tên chuyển hướng.

---

## 📝 Hướng Dẫn Từng Bước (Step-by-Step)

### Bước 1: Dựng khung Semantic chuẩn
```html
<main class="container layout-grid">
  <article class="post-main">
    <header class="post-header">...</header>
    <figure class="post-cover">
      <img src="..." alt="...">
      <figcaption>Ảnh chụp vệ tinh trung tâm dữ liệu AI - Nguồn: TechLab</figcaption>
    </figure>
    <section class="post-content">...</section>
    <section class="post-faq">
      <details>
        <summary>Trí tuệ nhân tạo có thay thế lập trình viên không?</summary>
        <p>AI là công cụ hỗ trợ mạnh mẽ giúp tăng tốc độ làm việc...</p>
      </details>
    </section>
  </article>

  <aside class="post-sidebar">
    <div class="author-card">...</div>
    <div class="related-posts">...</div>
  </aside>
</main>
```

### Bước 2: Viết CSS Bố Cục Báo Chí
- Dùng CSS Grid hoặc Flexbox cho `.layout-grid`:
  ```css
  .layout-grid {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 40px;
  }
  @media (max-width: 900px) {
    .layout-grid {
      grid-template-columns: 1fr;
    }
  }
  ```

---

## ⚠️ Những Lỗi Thường Gặp
1. **Quên thuộc tính `datetime` trong thẻ `<time>`**: Máy tính chỉ đọc được ngày tháng chuẩn ISO trong `datetime="2026-09-25"`, còn chữ bên trong thẻ dành cho người đọc.
2. **Không bọc thẻ `<summary>` là con trực tiếp đầu tiên của `<details>`**: Thẻ `<summary>` bắt buộc phải nằm ngay sau mở thẻ `<details>` để làm thanh tiêu đề bấm mở.
