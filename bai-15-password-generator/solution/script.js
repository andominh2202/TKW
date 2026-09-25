// ==========================================================
// BÀI 15: JAVASCRIPT SINH MẬT KHẨU & ĐO ĐỘ MẠNH (STRENGTH)
// Sử dụng Cryptographically Secure Pseudo-Random (Web Crypto API)
// ==========================================================

const passwordOutput = document.getElementById('passwordOutput');
const btnRefresh = document.getElementById('btnRefresh');
const btnCopy = document.getElementById('btnCopy');
const btnGenerate = document.getElementById('btnGenerate');
const copyToast = document.getElementById('copyToast');

const lengthSlider = document.getElementById('lengthSlider');
const lengthVal = document.getElementById('lengthVal');

const chkUpper = document.getElementById('chkUpper');
const chkLower = document.getElementById('chkLower');
const chkNumbers = document.getElementById('chkNumbers');
const chkSymbols = document.getElementById('chkSymbols');

const strengthText = document.getElementById('strengthText');
const meterBarFill = document.getElementById('meterBarFill');

// Bảng ký tự
const UPPERCASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE_CHARS = 'abcdefghijklmnopqrstuvwxyz';
const NUMBER_CHARS = '0123456789';
const SYMBOL_CHARS = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

// 1. Hàm sinh số nguyên ngẫu nhiên bảo mật cao (CSPRNG, không modulo bias)
function getCryptoRandomInt(max) {
  if (max <= 0) return 0;
  const cryptoObj = (typeof window !== 'undefined' && window.crypto) || (typeof crypto !== 'undefined' ? crypto : null);
  if (!cryptoObj || !cryptoObj.getRandomValues) {
    throw new Error('Môi trường trình duyệt không hỗ trợ Web Crypto API (crypto.getRandomValues).');
  }
  const range = 0x100000000; // 2^32
  const limit = range - (range % max);
  const array = new Uint32Array(1);
  let rand;
  do {
    cryptoObj.getRandomValues(array);
    rand = array[0];
  } while (rand >= limit);
  return rand % max;
}

// 2. Cập nhật số hiển thị slider
if (lengthSlider) {
  lengthSlider.addEventListener('input', (e) => {
    let len = parseInt(e.target.value, 10);
    if (isNaN(len)) len = 16;
    if (len < 6) len = 6;
    if (len > 32) len = 32;
    lengthVal.textContent = len;
    generatePassword();
  });
}

// 3. Hàm sinh mật khẩu ngẫu nhiên
function generatePassword() {
  let length = parseInt(lengthSlider.value, 10);
  if (isNaN(length) || length < 6) length = 6;
  if (length > 32) length = 32;

  let availableChars = '';
  let guaranteedChars = [];

  if (chkUpper.checked) {
    availableChars += UPPERCASE_CHARS;
    guaranteedChars.push(UPPERCASE_CHARS[getCryptoRandomInt(UPPERCASE_CHARS.length)]);
  }
  if (chkLower.checked) {
    availableChars += LOWERCASE_CHARS;
    guaranteedChars.push(LOWERCASE_CHARS[getCryptoRandomInt(LOWERCASE_CHARS.length)]);
  }
  if (chkNumbers.checked) {
    availableChars += NUMBER_CHARS;
    guaranteedChars.push(NUMBER_CHARS[getCryptoRandomInt(NUMBER_CHARS.length)]);
  }
  if (chkSymbols.checked) {
    availableChars += SYMBOL_CHARS;
    guaranteedChars.push(SYMBOL_CHARS[getCryptoRandomInt(SYMBOL_CHARS.length)]);
  }

  // Nếu người dùng bỏ tick hết, tự động bật chkLower
  if (availableChars === '') {
    chkLower.checked = true;
    availableChars = LOWERCASE_CHARS;
    guaranteedChars.push(LOWERCASE_CHARS[getCryptoRandomInt(LOWERCASE_CHARS.length)]);
  }

  let generatedPassword = [...guaranteedChars];
  for (let i = guaranteedChars.length; i < length; i++) {
    const randomChar = availableChars[getCryptoRandomInt(availableChars.length)];
    generatedPassword.push(randomChar);
  }

  // Xáo trộn ngẫu nhiên bảo mật (Fisher-Yates Shuffle với CSPRNG)
  for (let i = generatedPassword.length - 1; i > 0; i--) {
    const j = getCryptoRandomInt(i + 1);
    [generatedPassword[i], generatedPassword[j]] = [generatedPassword[j], generatedPassword[i]];
  }

  const finalPassword = generatedPassword.join('');
  passwordOutput.value = finalPassword;
  evaluateStrength(finalPassword);
}

// 4. Hàm đánh giá độ mạnh của mật khẩu (Heuristic Evaluation)
function evaluateStrength(pwd) {
  let score = 0;
  
  if (pwd.length >= 8) score++;
  if (pwd.length >= 14) score++;
  if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;

  if (score <= 2) {
    strengthText.textContent = '🔴 Yếu (Chưa đạt đủ tiêu chí độ dài & đa dạng ký tự)';
    strengthText.style.color = '#ef4444';
    meterBarFill.style.width = '25%';
    meterBarFill.style.backgroundColor = '#ef4444';
  } else if (score === 3) {
    strengthText.textContent = '🟡 Trung Bình (Đạt mức cơ bản theo tiêu chí hiện tại)';
    strengthText.style.color = '#f59e0b';
    meterBarFill.style.width = '55%';
    meterBarFill.style.backgroundColor = '#f59e0b';
  } else if (score === 4) {
    strengthText.textContent = '🟢 Mạnh (Đáp ứng tiêu chí khuyến nghị về độ dài & ký tự)';
    strengthText.style.color = '#10b981';
    meterBarFill.style.width = '80%';
    meterBarFill.style.backgroundColor = '#10b981';
  } else {
    strengthText.textContent = '💎 Rất Mạnh (Đạt mức tối đa theo các tiêu chí hiện tại)';
    strengthText.style.color = '#38bdf8';
    meterBarFill.style.width = '100%';
    meterBarFill.style.backgroundColor = '#38bdf8';
  }
}

// 5. Sao chép vào Clipboard kèm Toast
async function copyToClipboard() {
  const text = passwordOutput.value;
  if (!text) return;

  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      passwordOutput.select();
      document.execCommand('copy');
    }
    copyToast.classList.add('show');
    setTimeout(() => {
      copyToast.classList.remove('show');
    }, 2000);
  } catch (err) {
    passwordOutput.select();
    document.execCommand('copy');
    copyToast.classList.add('show');
    setTimeout(() => copyToast.classList.remove('show'), 2000);
  }
}

// Gán sự kiện
if (btnRefresh) btnRefresh.addEventListener('click', generatePassword);
if (btnGenerate) btnGenerate.addEventListener('click', generatePassword);
if (btnCopy) btnCopy.addEventListener('click', copyToClipboard);

[chkUpper, chkLower, chkNumbers, chkSymbols].forEach(chk => {
  if (chk) chk.addEventListener('change', generatePassword);
});

// Khởi chạy tạo mật khẩu ban đầu
generatePassword();
