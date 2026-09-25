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

// 1. HÀM CHÍNH GỌI API THỜI TIẾT BẰNG ASYNC / AWAIT
async function fetchWeatherData(cityQuery) {
  if (!cityQuery.trim()) return;

  // Bật loading và ẩn kết quả cũ
  loadingCard.classList.remove('hidden');
  errorCard.classList.add('hidden');
  weatherCard.classList.add('hidden');

  try {
    // BƯỚC 1: Geocoding API tìm vĩ độ & kinh độ theo tên thành phố
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityQuery)}&count=1&language=vi`;
    apiLogUrlEl.textContent = geoUrl;

    const geoResponse = await fetch(geoUrl);
    if (!geoResponse.ok) throw new Error('Không thể kết nối tới máy chủ định vị.');
    
    const geoData = await geoResponse.json();
    if (!geoData.results || geoData.results.length === 0) {
      throw new Error(`Không tìm thấy thành phố "${cityQuery}". Vui lòng thử lại với tên tiếng Anh hoặc không dấu.`);
    }

    const targetCity = geoData.results[0];
    const { latitude, longitude, name, country } = targetCity;

    // BƯỚC 2: Gọi Weather Forecast API
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relativehumidity_2m&timezone=auto`;
    apiLogUrlEl.textContent = weatherUrl;

    const weatherResponse = await fetch(weatherUrl);
    if (!weatherResponse.ok) throw new Error('Không thể tải thông số thời tiết.');

    const weatherData = await weatherResponse.json();
    const current = weatherData.current_weather;

    // Lấy độ ẩm tương đối từ mảng hourly
    let humidity = 70;
    if (weatherData.hourly && weatherData.hourly.relativehumidity_2m) {
      humidity = weatherData.hourly.relativehumidity_2m[0] || 70;
    }

    // BƯỚC 3: Cập nhật giao diện
    renderWeather({
      cityName: name,
      country: country || 'Quốc tế',
      temp: Math.round(current.temperature),
      windspeed: current.windspeed,
      winddirection: current.winddirection,
      weathercode: current.weathercode,
      humidity: humidity
    });

  } catch (error) {
    // Xử lý lỗi trong Catch
    console.error('Fetch Error:', error);
    errorDesc.textContent = error.message || 'Đã có lỗi xảy ra trong quá trình truyền dữ liệu.';
    errorCard.classList.remove('hidden');
  } finally {
    // Tắt loading trong Finally
    loadingCard.classList.add('hidden');
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
