# Bài 16: Ứng Dụng Thời Tiết Live API (JavaScript Async/Await & Fetch API)

## 🎯 Mục Tiêu Bài Học
Chinh phục kỹ năng sống còn của mọi lập trình viên Frontend: **Gọi API Bất Đồng Bộ (Asynchronous Programming)**:
- Hiểu sâu bản chất `Promise`, cú pháp hiện đại `async / await` và hàm `fetch(url)`.
- Xử lý các giai đoạn trong vòng đời gọi mạng (Network Lifecycle):
  1. **Đang tải (Loading state)**: Hiển thị vòng xoay Spinner hoặc khung chờ Skeleton.
  2. **Thành công (Success state)**: Trích xuất dữ liệu JSON `await response.json()` và render động ra HTML.
  3. **Lỗi kết nối / Sai tên thành phố (Error state)**: Bắt lỗi bằng khối `try...catch` và hiển thị thông báo lỗi thân thiện.
- Tích hợp API thời tiết thực tế (Open-Meteo miễn phí không cần API Key hoặc Mock API linh hoạt).

---

## 🛠️ Yêu Cầu Đề Bài
1. **Giao Diện Thời Tiết Glassmorphism**:
   - Ô tìm kiếm tên thành phố (Hà Nội, TP.HCM, Đà Nẵng, Tokyo, London, Paris, New York).
   - Nút bấm nhanh các thành phố lớn.
   - Thẻ hiển thị: Tên thành phố, Nhiệt độ (°C), Tình trạng (Nắng, Mưa, Có mây), Độ ẩm (%), Tốc độ gió (km/h) và Chỉ số UV.
2. **Logic Async/Await**:
   - Hàm `async function fetchWeather(city)`.
   - Bật cờ trạng thái `loading = true` trước khi gọi và tắt sau khi hoàn thành.
   - Bắt lỗi khi nhập sai thành phố `if (!res.ok) throw new Error(...)`.

---

## 📝 Mã Mẫu Async/Await Chuẩn
```javascript
async function getWeatherData(cityName) {
  showLoading(true);
  hideError();

  try {
    // 1. Gọi API lấy tọa độ (Geocoding)
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=vi`;
    const geoRes = await fetch(geoUrl);
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      throw new Error(`Không tìm thấy thành phố "${cityName}"`);
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    // 2. Gọi API lấy thông số thời tiết
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relativehumidity_2m`;
    const weatherRes = await fetch(weatherUrl);
    const weatherData = await weatherRes.json();

    // 3. Render ra giao diện
    renderWeather(name, country, weatherData.current_weather);
  } catch (error) {
    showError(error.message);
  } finally {
    showLoading(false);
  }
}
```
