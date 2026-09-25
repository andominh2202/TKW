// ==========================================================
// BÀI 14: JAVASCRIPT LOGIC CHO MÁY TÍNH CẦM TAY
// ==========================================================

class Calculator {
  constructor(prevElement, currElement) {
    this.prevElement = prevElement;
    this.currElement = currElement;
    this.history = [];
    this.clear();
  }

  clear() {
    this.currentOperand = '0';
    this.previousOperand = '';
    this.operation = undefined;
    this.shouldResetScreen = false;
  }

  delete() {
    if (this.currentOperand === '0') return;
    if (this.currentOperand.length === 1 || (this.currentOperand.length === 2 && this.currentOperand.startsWith('-'))) {
      this.currentOperand = '0';
    } else {
      this.currentOperand = this.currentOperand.slice(0, -1);
    }
  }

  appendNumber(number) {
    if (this.shouldResetScreen) {
      this.currentOperand = '';
      this.shouldResetScreen = false;
    }
    if (number === '.' && this.currentOperand.includes('.')) return;
    if (this.currentOperand === '0' && number !== '.') {
      this.currentOperand = number.toString();
    } else {
      this.currentOperand += number.toString();
    }
  }

  toggleSign() {
    if (this.currentOperand === '0') return;
    this.currentOperand = (parseFloat(this.currentOperand) * -1).toString();
  }

  percent() {
    if (this.currentOperand === '0') return;
    this.currentOperand = (parseFloat(this.currentOperand) / 100).toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '×':
      case '*':
        computation = prev * current;
        break;
      case '÷':
      case '/':
        if (current === 0) {
          alert('Không thể chia cho số 0!');
          this.clear();
          return;
        }
        computation = prev / current;
        break;
      default:
        return;
    }

    // Làm tròn số thập phân tránh lỗi 0.1 + 0.2 = 0.30000000000000004
    const result = Math.round(computation * 100000000) / 100000000;
    
    // Ghi lại lịch sử
    const historyItem = {
      expression: `${prev} ${this.operation} ${current}`,
      result: result
    };
    this.history.unshift(historyItem);
    renderHistory(this.history);

    this.currentOperand = result.toString();
    this.operation = undefined;
    this.previousOperand = '';
    this.shouldResetScreen = true;
  }

  updateDisplay() {
    this.currElement.textContent = this.currentOperand;
    if (this.operation != null) {
      this.prevElement.textContent = `${this.previousOperand} ${this.operation}`;
    } else {
      this.prevElement.textContent = '';
    }
  }
}

// Khởi tạo các phần tử DOM
const prevOperandText = document.getElementById('prevOperand');
const currOperandText = document.getElementById('currOperand');
const calculator = new Calculator(prevOperandText, currOperandText);

// Bắt sự kiện bàn phím trên giao diện
document.querySelectorAll('[data-num]').forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.getAttribute('data-num'));
    calculator.updateDisplay();
  });
});

document.querySelectorAll('[data-op]').forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.getAttribute('data-op'));
    calculator.updateDisplay();
  });
});

document.querySelectorAll('[data-action]').forEach(button => {
  button.addEventListener('click', () => {
    const action = button.getAttribute('data-action');
    if (action === 'calculate') calculator.compute();
    if (action === 'all-clear') calculator.clear();
    if (action === 'delete') calculator.delete();
    if (action === 'toggle-sign') calculator.toggleSign();
    if (action === 'percent') calculator.percent();
    calculator.updateDisplay();
  });
});

// Lắng nghe bàn phím vật lý
window.addEventListener('keydown', (e) => {
  if (e.key >= '0' && e.key <= '9') {
    calculator.appendNumber(e.key);
    calculator.updateDisplay();
  }
  if (e.key === '.') {
    calculator.appendNumber('.');
    calculator.updateDisplay();
  }
  if (e.key === '=' || e.key === 'Enter') {
    e.preventDefault();
    calculator.compute();
    calculator.updateDisplay();
  }
  if (e.key === 'Backspace') {
    calculator.delete();
    calculator.updateDisplay();
  }
  if (e.key === 'Escape') {
    calculator.clear();
    calculator.updateDisplay();
  }
  if (['+', '-'].includes(e.key)) {
    calculator.chooseOperation(e.key);
    calculator.updateDisplay();
  }
  if (e.key === '*') {
    calculator.chooseOperation('×');
    calculator.updateDisplay();
  }
  if (e.key === '/') {
    e.preventDefault();
    calculator.chooseOperation('÷');
    calculator.updateDisplay();
  }
});

// Lịch sử tính toán
const btnToggleHistory = document.getElementById('btnToggleHistory');
const historyDrawer = document.getElementById('historyDrawer');
const historyList = document.getElementById('historyList');
const btnClearHistory = document.getElementById('btnClearHistory');

if (btnToggleHistory) {
  btnToggleHistory.addEventListener('click', () => {
    historyDrawer.classList.toggle('hidden');
  });
}

function renderHistory(history) {
  if (!historyList) return;
  historyList.innerHTML = '';
  if (!history || history.length === 0) {
    const emptyP = document.createElement('p');
    emptyP.className = 'empty-hist';
    emptyP.textContent = 'Chưa có phép tính nào';
    historyList.appendChild(emptyP);
    return;
  }
  history.slice(0, 10).forEach(item => {
    const itemEl = document.createElement('div');
    itemEl.className = 'history-item';

    const expDiv = document.createElement('div');
    expDiv.className = 'hist-exp';
    expDiv.textContent = `${item.expression} =`;

    const resDiv = document.createElement('div');
    resDiv.className = 'hist-res';
    resDiv.textContent = String(item.result);

    itemEl.appendChild(expDiv);
    itemEl.appendChild(resDiv);
    historyList.appendChild(itemEl);
  });
}

if (btnClearHistory) {
  btnClearHistory.addEventListener('click', () => {
    calculator.history = [];
    renderHistory([]);
  });
}
