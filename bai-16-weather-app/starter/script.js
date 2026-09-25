// TODO: Viết hàm async/await gọi API Open-Meteo
const btnSearch = document.getElementById('btnSearch');
const cityInput = document.getElementById('cityInput');
const cityName = document.getElementById('cityName');
const tempVal = document.getElementById('tempVal');
const loading = document.getElementById('loading');

// Biến lưu trữ AbortController để hủy request cũ khi có request mới (Latest request wins)
let currentAbortController = null;

async function getWeather(city) {
  const query = (city || '').trim();
  if (!query) return;

  // Hủy request đang dang dở trước đó
  if (currentAbortController) {
    currentAbortController.abort();
  }
  currentAbortController = new AbortController();
  const { signal } = currentAbortController;

  loading.classList.remove('hidden');
  try {
    // 1. Tìm tọa độ theo tên thành phố
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1`, { signal });
    if (!geoRes.ok) throw new Error('Không thể kết nối máy chủ định vị!');
    
    const geoData = await geoRes.json();
    if (!geoData.results || geoData.results.length === 0) throw new Error('Không tìm thấy thành phố!');

    const { latitude, longitude, name } = geoData.results[0];

    // 2. Lấy dữ liệu thời tiết
    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`, { signal });
    if (!weatherRes.ok) throw new Error('Không thể tải dữ liệu thời tiết!');
    
    const weatherData = await weatherRes.json();
    if (!weatherData.current_weather) throw new Error('Dữ liệu thời tiết không có sẵn!');

    // 3. Hiển thị
    cityName.textContent = name;
    tempVal.textContent = Math.round(weatherData.current_weather.temperature);
  } catch (err) {
    if (err.name === 'AbortError') return; // Bỏ qua nếu bị hủy
    alert(err.message);
  } finally {
    if (!signal.aborted) {
      loading.classList.add('hidden');
    }
  }
}

btnSearch.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) getWeather(city);
});

getWeather('Hanoi');
