// TODO: Viết logic sinh mật khẩu và copy
const pwdOutput = document.getElementById('pwdOutput');
const btnGen = document.getElementById('btnGen');
const btnCopy = document.getElementById('btnCopy');
const lenSlider = document.getElementById('lenSlider');
const lenVal = document.getElementById('lenVal');

lenSlider.addEventListener('input', (e) => {
  lenVal.textContent = e.target.value;
});

function generate() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  let result = '';
  const len = parseInt(lenSlider.value, 10);
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  pwdOutput.value = result;
}

btnGen.addEventListener('click', generate);

btnCopy.addEventListener('click', () => {
  if (pwdOutput.value) {
    navigator.clipboard.writeText(pwdOutput.value);
    alert('Đã copy!');
  }
});

generate();
