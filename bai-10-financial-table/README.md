# Bài 10: Bảng Dữ Liệu Báo Cáo Doanh Thu (Advanced HTML Tables & Sticky Header)

## 🎯 Mục Tiêu Bài Học
Làm chủ việc xây dựng bảng dữ liệu chuyên nghiệp bằng HTML và CSS:
- Hiểu và dùng đúng cấu trúc thẻ bảng chuẩn: `<table>`, `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, `<td>`.
- Sử dụng các thuộc tính gộp ô `colspan` (gộp nhiều cột) và `rowspan` (gộp nhiều dòng).
- Thiết lập trợ năng bảng bằng thuộc tính `scope="col"` và `scope="row"`.
- Kỹ thuật CSS **Sticky Header (`position: sticky; top: 0`)** giúp tiêu đề bảng luôn dính cố định khi người dùng cuộn xem hàng trăm dòng dữ liệu.
- Kỹ thuật cuộn ngang Responsive (`overflow-x: auto`) không làm vỡ giao diện trên điện thoại.

---

## 🛠️ Yêu Cầu Đề Bài
1. **Thẻ bảng chuẩn**:
   - `<caption>`: Tiêu đề bảng tóm tắt: "Báo Cáo Tăng Trưởng Doanh Thu Quý 1-4 Năm 2026".
   - `<thead>`: Dòng tiêu đề gồm các cột: *Mã Dự Án*, *Tên Khách Hàng*, *Quý 1*, *Quý 2*, *Quý 3*, *Quý 4*, *Tổng Năm*, *Trạng Thái*.
   - `<tbody>`: Dữ liệu ít nhất 6 dự án với các con số tài chính được căn lề phải (`text-align: right`) theo chuẩn kế toán.
   - `<tfoot>`: Hàng tổng kết toàn công ty với thuộc tính `colspan="2"` gộp 2 cột đầu thành ô "TỔNG CỘNG".
2. **Kỹ thuật CSS Hiện Đại**:
   - Tô màu xen kẽ giữa các hàng (Zebra Striping: `tr:nth-child(even)`).
   - Hiệu ứng rọi sáng khi di chuột qua hàng (`tr:hover`).
   - Sticky Header: Cuộn danh sách xuống nhưng hàng tiêu đề vẫn dính ở đầu bảng.
   - Huy hiệu trạng thái đẹp mắt: "Đã Thanh Toán", "Đang Xử Lý", "Quá Hạn".

---

## 📝 Hướng Dẫn Từng Bước (Step-by-Step)
```html
<div class="table-responsive-container">
  <table class="financial-table">
    <caption>Báo Cáo Tài Chính Dự Án Năm 2026</caption>
    <thead>
      <tr>
        <th scope="col">Mã DA</th>
        <th scope="col">Khách Hàng</th>
        <th scope="col" class="num-col">Doanh Thu</th>
        <th scope="col">Trạng Thái</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>#PRJ-01</td>
        <td>Tập Đoàn VinTech</td>
        <td class="num-col">$45,000</td>
        <td><span class="badge success">Hoàn tất</span></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th scope="row" colspan="2">TỔNG CỘNG:</th>
        <td class="num-col font-bold">$185,000</td>
        <td>-</td>
      </tr>
    </tfoot>
  </table>
</div>
```
```css
/* Kỹ thuật Sticky Table Header */
.table-responsive-container {
  max-height: 480px;
  overflow-y: auto;
  overflow-x: auto;
  border-radius: 12px;
}
.financial-table thead th {
  position: sticky;
  top: 0;
  background: #1e293b;
  z-index: 10;
}
```
