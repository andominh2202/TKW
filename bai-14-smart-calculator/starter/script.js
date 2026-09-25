// TODO: Viết logic máy tính
let currentVal = '0';
let prevVal = '';
let operation = null;

const screen = document.getElementById('screen');

function updateScreen() {
  screen.textContent = currentVal;
}

function appendNum(num) {
  if (currentVal === '0' && num !== '.') {
    currentVal = num;
  } else {
    currentVal += num;
  }
  updateScreen();
}

function chooseOp(op) {
  prevVal = currentVal;
  currentVal = '';
  operation = op;
}

function compute() {
  const prev = parseFloat(prevVal);
  const current = parseFloat(currentVal);
  if (isNaN(prev) || isNaN(current)) return;
  
  let res = 0;
  if (operation === '+') res = prev + current;
  if (operation === '-') res = prev - current;
  if (operation === '*') res = prev * current;
  if (operation === '/') res = prev / current;

  currentVal = res.toString();
  operation = null;
  updateScreen();
}

function clearScreen() {
  currentVal = '0';
  prevVal = '';
  operation = null;
  updateScreen();
}

function deleteDigit() {
  if (currentVal.length > 1) {
    currentVal = currentVal.slice(0, -1);
  } else {
    currentVal = '0';
  }
  updateScreen();
}
