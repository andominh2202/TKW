// TODO: Viết hàm async/await gọi API Open-Meteo
const btnSearch = document.getElementById('btnSearch');
const cityInput = document.getElementById('cityInput');
const cityName = document.getElementById('cityName');
const tempVal = document.getElementById('tempVal');
const loading = document.getElementById('loading');

async function getWeather(city) {
  loading.classList.remove('hidden');
  try {
    // 1. Tìm tọa độ theo tên thành phố
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`);
    const geoData = await geoRes.json();
    if (!geoData.results) throw new Error('Không tìm thấy thành phố!');

    const { latitude, longitude, name } = geoData.results[0];

    // 2. Lấy dữ liệu thời tiết
    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const weatherData = await weatherRes.json();

    // 3. Hiển thị
    cityName.textContent = name;
    tempVal.textContent = Math.round(weatherData.current_weather.temperature);
  } catch (err) {
    alert(err.message);
  } finally {
    loading.classList.add('hidden');
  }
}

btnSearch.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) getWeather(city);
});

getWeather('Hanoi');
