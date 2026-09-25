// ==========================================================
// BÀI 15: JAVASCRIPT SINH MẬT KHẨU & ĐO ĐỘ MẠNH (STRENGTH)
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

// 1. Cập nhật số hiển thị slider
if (lengthSlider) {
  lengthSlider.addEventListener('input', (e) => {
    lengthVal.textContent = e.target.value;
    generatePassword();
  });
}

// 2. Hàm sinh mật khẩu ngẫu nhiên
function generatePassword() {
  const length = parseInt(lengthSlider.value, 10);
  let availableChars = '';
  let guaranteedChars = [];

  if (chkUpper.checked) {
    availableChars += UPPERCASE_CHARS;
    guaranteedChars.push(UPPERCASE_CHARS[Math.floor(Math.random() * UPPERCASE_CHARS.length)]);
  }
  if (chkLower.checked) {
    availableChars += LOWERCASE_CHARS;
    guaranteedChars.push(LOWERCASE_CHARS[Math.floor(Math.random() * LOWERCASE_CHARS.length)]);
  }
  if (chkNumbers.checked) {
    availableChars += NUMBER_CHARS;
    guaranteedChars.push(NUMBER_CHARS[Math.floor(Math.random() * NUMBER_CHARS.length)]);
  }
  if (chkSymbols.checked) {
    availableChars += SYMBOL_CHARS;
    guaranteedChars.push(SYMBOL_CHARS[Math.floor(Math.random() * SYMBOL_CHARS.length)]);
  }

  // Nếu người dùng bỏ tick hết, tự động bật chkLower
  if (availableChars === '') {
    chkLower.checked = true;
    availableChars = LOWERCASE_CHARS;
    guaranteedChars.push(LOWERCASE_CHARS[Math.floor(Math.random() * LOWERCASE_CHARS.length)]);
  }

  let generatedPassword = [...guaranteedChars];
  for (let i = guaranteedChars.length; i < length; i++) {
    const randomChar = availableChars[Math.floor(Math.random() * availableChars.length)];
    generatedPassword.push(randomChar);
  }

  // Xáo trộn ngẫu nhiên (Fisher-Yates Shuffle)
  for (let i = generatedPassword.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [generatedPassword[i], generatedPassword[j]] = [generatedPassword[j], generatedPassword[i]];
  }

  const finalPassword = generatedPassword.join('');
  passwordOutput.value = finalPassword;
  evaluateStrength(finalPassword);
}

// 3. Hàm đánh giá độ mạnh của mật khẩu
function evaluateStrength(pwd) {
  let score = 0;
  
  if (pwd.length >= 8) score++;
  if (pwd.length >= 14) score++;
  if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;

  if (score <= 2) {
    strengthText.textContent = '🔴 Yếu (Dễ bị bẻ khóa)';
    strengthText.style.color = '#ef4444';
    meterBarFill.style.width = '25%';
    meterBarFill.style.backgroundColor = '#ef4444';
  } else if (score === 3) {
    strengthText.textContent = '🟡 Trung Bình (Khá an toàn)';
    strengthText.style.color = '#f59e0b';
    meterBarFill.style.width = '55%';
    meterBarFill.style.backgroundColor = '#f59e0b';
  } else if (score === 4) {
    strengthText.textContent = '🟢 Mạnh (An toàn cao)';
    strengthText.style.color = '#10b981';
    meterBarFill.style.width = '80%';
    meterBarFill.style.backgroundColor = '#10b981';
  } else {
    strengthText.textContent = '💎 Cực Mạnh (Chuẩn quân đội)';
    strengthText.style.color = '#38bdf8';
    meterBarFill.style.width = '100%';
    meterBarFill.style.backgroundColor = '#38bdf8';
  }
}

// 4. Sao chép vào Clipboard kèm Toast
async function copyToClipboard() {
  const text = passwordOutput.value;
  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
    copyToast.classList.add('show');
    setTimeout(() => {
      copyToast.classList.remove('show');
    }, 2000);
  } catch (err) {
    // Fallback cho trình duyệt cũ
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
