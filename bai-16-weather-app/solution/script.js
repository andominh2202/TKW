// ==========================================================
// BÀI 16: JAVASCRIPT ASYNC/AWAIT & FETCH API THỜI TIẾT
// ==========================================================

const searchForm = document.getElementById('searchForm');
const cityInput = document.getElementById('cityInput');
const cityChips = document.querySelectorAll('.city-chip');

const loadingCard = document.getElementById('loadingCard');
const errorCard = document.getElementById('errorCard');
const errorDesc = document.getElementById('errorDesc');
const weatherCard = document.getElementById('weatherDisplayCard');

// Các phần tử thông tin
const cityNameEl = document.getElementById('cityName');
const countryNameEl = document.getElementById('countryName');
const currentTimeEl = document.getElementById('currentTime');
const weatherEmojiEl = document.getElementById('weatherEmoji');
const tempValueEl = document.getElementById('tempValue');
const weatherConditionEl = document.getElementById('weatherCondition');
const windSpeedEl = document.getElementById('windSpeed');
const humidityValEl = document.getElementById('humidityVal');
const windDirEl = document.getElementById('windDir');
const apiLogUrlEl = document.getElementById('apiLogUrl');

// Bảng mã thời tiết WMO Weather interpretation codes
function decodeWmoWeather(code) {
  if (code === 0) return { text: 'Trời Quang Đãng', emoji: '☀️' };
  if (code === 1 || code === 2) return { text: 'Ít Mây / Nắng Nhẹ', emoji: '🌤️' };
  if (code === 3) return { text: 'Trời Nhiều Mây', emoji: '☁️' };
  if ([45, 48].includes(code)) return { text: 'Sương Mù Dày', emoji: '🌫️' };
  if ([51, 53, 55].includes(code)) return { text: 'Mưa Phùn Nhẹ', emoji: '🌦️' };
  if ([61, 63, 65].includes(code)) return { text: 'Mưa Rào', emoji: '🌧️' };
  if ([71, 73, 75].includes(code)) return { text: 'Tuyết Rơi', emoji: '❄️' };
  if ([80, 81, 82].includes(code)) return { text: 'Mưa Dông Lớn', emoji: '⛈️' };
  if ([95, 96, 99].includes(code)) return { text: 'Bão Sấm Sét', emoji: '⚡' };
  return { text: 'Thời Tiết Bình Thường', emoji: '⛅' };
}

// Bảng phương hướng gió
function decodeWindDirection(deg) {
  const directions = ['Bắc', 'Đông Bắc', 'Đông', 'Đông Nam', 'Nam', 'Tây Nam', 'Tây', 'Tây Bắc'];
  const index = Math.round(deg / 45) % 8;
  return `${directions[index]} (${deg}°)`;
}

// Quản lý AbortController để ngăn ngừa race condition khi người dùng tìm kiếm liên tục
let weatherAbortController = null;

// 1. HÀM CHÍNH GỌI API THỜI TIẾT BẰNG ASYNC / AWAIT
async function fetchWeatherData(cityQuery) {
  const query = (cityQuery || '').trim();
  if (!query) return;

  // Hủy request đang chạy trước đó nếu người dùng nhập thành phố mới (Latest request wins)
  if (weatherAbortController) {
    weatherAbortController.abort();
  }
  weatherAbortController = new AbortController();
  const { signal } = weatherAbortController;

  // Bật loading và ẩn kết quả cũ
  loadingCard.classList.remove('hidden');
  errorCard.classList.add('hidden');
  weatherCard.classList.add('hidden');

  try {
    // BƯỚC 1: Geocoding API tìm vĩ độ & kinh độ theo tên thành phố
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1&language=vi`;
    if (apiLogUrlEl) apiLogUrlEl.textContent = geoUrl;

    const geoResponse = await fetch(geoUrl, { signal });
    if (!geoResponse.ok) {
      throw new Error(`Máy chủ định vị trả về mã lỗi HTTP ${geoResponse.status}.`);
    }
    
    const geoData = await geoResponse.json();
    if (!geoData || !Array.isArray(geoData.results) || geoData.results.length === 0) {
      throw new Error(`Không tìm thấy thành phố "${query}". Vui lòng kiểm tra lại tên tiếng Anh hoặc không dấu.`);
    }

    const targetCity = geoData.results[0];
    const { latitude, longitude, name, country } = targetCity;
    if (typeof latitude !== 'number' || typeof longitude !== 'number') {
      throw new Error('Dữ liệu tọa độ địa lý không hợp lệ từ máy chủ.');
    }

    // BƯỚC 2: Gọi Weather Forecast API
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relativehumidity_2m&timezone=auto`;
    if (apiLogUrlEl) apiLogUrlEl.textContent = weatherUrl;

    const weatherResponse = await fetch(weatherUrl, { signal });
    if (!weatherResponse.ok) {
      throw new Error(`Máy chủ thời tiết trả về mã lỗi HTTP ${weatherResponse.status}.`);
    }

    const weatherData = await weatherResponse.json();
    if (!weatherData || !weatherData.current_weather) {
      throw new Error('Không nhận được dữ liệu thời tiết hiện tại từ máy chủ.');
    }
    const current = weatherData.current_weather;

    // Lấy độ ẩm tương đối từ mảng hourly tương ứng với mốc thời gian hiện tại
    let humidity = 70;
    if (weatherData.hourly && Array.isArray(weatherData.hourly.time) && Array.isArray(weatherData.hourly.relativehumidity_2m)) {
      const times = weatherData.hourly.time;
      const humidities = weatherData.hourly.relativehumidity_2m;
      // current.time có định dạng 'YYYY-MM-DDTHH:00'
      let hourIndex = times.indexOf(current.time);
      if (hourIndex === -1 && current.time) {
        const hourPrefix = current.time.slice(0, 13);
        hourIndex = times.findIndex(t => typeof t === 'string' && t.startsWith(hourPrefix));
      }
      if (hourIndex !== -1 && typeof humidities[hourIndex] === 'number') {
        humidity = Math.round(humidities[hourIndex]);
      } else if (typeof humidities[0] === 'number') {
        humidity = Math.round(humidities[0]);
      }
    }

    // BƯỚC 3: Cập nhật giao diện an toàn
    renderWeather({
      cityName: name || query,
      country: country || 'Quốc tế',
      temp: typeof current.temperature === 'number' ? Math.round(current.temperature) : 0,
      windspeed: typeof current.windspeed === 'number' ? current.windspeed : 0,
      winddirection: typeof current.winddirection === 'number' ? current.winddirection : 0,
      weathercode: typeof current.weathercode === 'number' ? current.weathercode : 0,
      humidity: humidity
    });

  } catch (error) {
    if (error.name === 'AbortError') {
      // Yêu cầu cũ bị hủy do người dùng tìm kiếm yêu cầu mới - không xem là lỗi
      return;
    }
    console.error('Fetch Error:', error);
    errorDesc.textContent = error.message || 'Đã có lỗi xảy ra trong quá trình truyền dữ liệu.';
    errorCard.classList.remove('hidden');
    weatherCard.classList.add('hidden');
  } finally {
    if (!signal.aborted) {
      loadingCard.classList.add('hidden');
    }
  }
}

// 2. Hàm render dữ liệu ra DOM
function renderWeather(data) {
  cityNameEl.textContent = data.cityName;
  countryNameEl.textContent = data.country;
  tempValueEl.textContent = data.temp;

  const wmo = decodeWmoWeather(data.weathercode);
  weatherEmojiEl.textContent = wmo.emoji;
  weatherConditionEl.textContent = wmo.text;

  windSpeedEl.textContent = `${data.windspeed} km/h`;
  humidityValEl.textContent = `${data.humidity}%`;
  windDirEl.textContent = decodeWindDirection(data.winddirection);

  const now = new Date();
  currentTimeEl.textContent = `Cập nhật: ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

  weatherCard.classList.remove('hidden');
}

// 3. Bắt sự kiện Form tìm kiếm
if (searchForm) {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (city) {
      cityChips.forEach(c => c.classList.remove('active'));
      fetchWeatherData(city);
    }
  });
}

// 4. Bắt sự kiện các Chip thành phố gợi ý
cityChips.forEach(chip => {
  chip.addEventListener('click', () => {
    cityChips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const city = chip.getAttribute('data-city');
    cityInput.value = city;
    fetchWeatherData(city);
  });
});

// Khởi chạy ban đầu với Hà Nội
fetchWeatherData('Hanoi');
