// TODO: Viết logic sinh mật khẩu sử dụng Web Crypto API (CSPRNG)
const pwdOutput = document.getElementById('pwdOutput');
const btnGen = document.getElementById('btnGen');
const btnCopy = document.getElementById('btnCopy');
const lenSlider = document.getElementById('lenSlider');
const lenVal = document.getElementById('lenVal');

lenSlider.addEventListener('input', (e) => {
  lenVal.textContent = e.target.value;
});

// Sinh số ngẫu nhiên an toàn bằng crypto.getRandomValues thay vì Math.random()
function getSecureRandomInt(max) {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return array[0] % max;
}

function generate() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  let result = '';
  let len = parseInt(lenSlider.value, 10);
  if (isNaN(len) || len < 6) len = 6;
  if (len > 32) len = 32;

  for (let i = 0; i < len; i++) {
    result += chars.charAt(getSecureRandomInt(chars.length));
  }
  pwdOutput.value = result;
}

btnGen.addEventListener('click', generate);

btnCopy.addEventListener('click', async () => {
  if (pwdOutput.value) {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(pwdOutput.value);
    }
    alert('Đã copy vào bộ nhớ tạm!');
  }
});

generate();
