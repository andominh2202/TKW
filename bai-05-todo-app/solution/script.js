// ======================================================
// BÀI 05: TO-DO LIST PRO (LỜI GIẢI CHUẨN - JS LOGIC)
// ======================================================

// 1. Quản lý trạng thái (State) với hàm nạp an toàn từ LocalStorage
const DEFAULT_TODOS = [
  { id: 1, text: 'Học cú pháp HTML5 Semantic và SEO', completed: true },
  { id: 2, text: 'Làm chủ CSS Flexbox và Grid Responsive', completed: true },
  { id: 3, text: 'Thực hành JavaScript DOM Events & State', completed: false },
  { id: 4, text: 'Tối ưu trải nghiệm UI/UX và Dark Mode', completed: false }
];

function loadTodosFromStorage() {
  try {
    const raw = localStorage.getItem('devcraft_todos_v2');
    if (!raw) return DEFAULT_TODOS;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return DEFAULT_TODOS;
    return parsed.filter(item => item && typeof item.text === 'string');
  } catch (e) {
    console.warn('Lỗi đọc LocalStorage Todo, sử dụng danh sách mặc định:', e);
    return DEFAULT_TODOS;
  }
}

let todos = loadTodosFromStorage();
let activeFilter = 'all';

// 2. DOM Elements
const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const emptyState = document.getElementById('emptyState');
const footerInfo = document.getElementById('footerInfo');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');
const progressFill = document.getElementById('progressFill');
const progressPercent = document.getElementById('progressPercent');
const counterBadge = document.getElementById('counterBadge');
const allCount = document.getElementById('allCount');
const activeCount = document.getElementById('activeCount');
const completedCount = document.getElementById('completedCount');
const filterBtns = document.querySelectorAll('.filter-btn');

// 3. Hiển thị ngày tháng hiện tại
function displayTodayDate() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const today = new Date().toLocaleDateString('vi-VN', options);
  const dateEl = document.getElementById('currentDateDisplay');
  if (dateEl) {
    dateEl.textContent = today.charAt(0).toUpperCase() + today.slice(1);
  }
}

// 4. Lưu vào LocalStorage an toàn
function persistData() {
  try {
    localStorage.setItem('devcraft_todos_v2', JSON.stringify(todos));
  } catch (e) {
    console.warn('Không thể lưu vào LocalStorage:', e);
  }
}

// 5. Cập nhật Thống kê & Tiến độ
function updateMetrics() {
  const total = todos.length;
  const completed = todos.filter(t => t.completed).length;
  const active = total - completed;

  allCount.textContent = total;
  activeCount.textContent = active;
  completedCount.textContent = completed;
  counterBadge.textContent = `${total} việc`;
  footerInfo.textContent = `Còn ${active} việc chưa hoàn thành`;

  // Tiến độ %
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  progressPercent.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;

  // Trạng thái trống
  if (total === 0) {
    emptyState.classList.remove('hidden');
    todoList.style.display = 'none';
  } else {
    emptyState.classList.add('hidden');
    todoList.style.display = 'flex';
  }
}

// 6. Render danh sách
function render() {
  todoList.innerHTML = '';

  const filtered = todos.filter(todo => {
    if (activeFilter === 'active') return !todo.completed;
    if (activeFilter === 'completed') return todo.completed;
    return true;
  });

  filtered.forEach(todo => {
    const li = document.createElement('li');
    li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
    li.setAttribute('data-id', todo.id);

    const leftDiv = document.createElement('div');
    leftDiv.className = 'todo-left';

    const checkBtn = document.createElement('button');
    checkBtn.className = 'custom-check';
    checkBtn.setAttribute('aria-label', 'Toggle completed');
    checkBtn.setAttribute('data-action', 'toggle');
    checkBtn.innerHTML = `
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    `;

    const titleSpan = document.createElement('span');
    titleSpan.className = 'todo-title';
    titleSpan.title = 'Nháy đúp chuột để chỉnh sửa';
    titleSpan.textContent = todo.text; // An toàn tuyệt đối chống DOM XSS

    leftDiv.appendChild(checkBtn);
    leftDiv.appendChild(titleSpan);

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'todo-actions';
    actionsDiv.innerHTML = `
      <button class="btn-icon-action" data-action="delete" title="Xóa việc này" aria-label="Xóa việc này">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
      </button>
    `;

    li.appendChild(leftDiv);
    li.appendChild(actionsDiv);
    todoList.appendChild(li);
  });

  updateMetrics();
}

// 8. Xử lý Thêm Việc Mới
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (!text) return;

  todos.unshift({
    id: Date.now(),
    text: text,
    completed: false
  });

  persistData();
  render();
  todoInput.value = '';
  todoInput.focus();
});

// 9. Event Delegation trên Todo List (Toggle & Delete & Double click to edit)
todoList.addEventListener('click', (e) => {
  const target = e.target.closest('[data-action]');
  if (!target) return;

  const li = target.closest('.todo-item');
  const id = Number(li.getAttribute('data-id'));
  const action = target.getAttribute('data-action');

  if (action === 'toggle') {
    todos = todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
    persistData();
    render();
  } else if (action === 'delete') {
    li.style.transform = 'translateX(20px)';
    li.style.opacity = '0';
    setTimeout(() => {
      todos = todos.filter(t => t.id !== id);
      persistData();
      render();
    }, 200);
  }
});

// Nháy đúp (double click) vào tiêu đề để sửa nhanh
todoList.addEventListener('dblclick', (e) => {
  const titleSpan = e.target.closest('.todo-title');
  if (!titleSpan) return;

  const li = titleSpan.closest('.todo-item');
  const id = Number(li.getAttribute('data-id'));
  const currentText = titleSpan.textContent;

  const inputEdit = document.createElement('input');
  inputEdit.type = 'text';
  inputEdit.value = currentText;
  inputEdit.className = 'todo-input';
  inputEdit.style.padding = '6px 10px';
  inputEdit.style.fontSize = '0.92rem';

  titleSpan.replaceWith(inputEdit);
  inputEdit.focus();

  const handleSave = () => {
    const newText = inputEdit.value.trim();
    if (newText) {
      todos = todos.map(t => t.id === id ? { ...t, text: newText } : t);
      persistData();
    }
    render();
  };

  inputEdit.addEventListener('blur', handleSave);
  inputEdit.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') handleSave();
    if (ev.key === 'Escape') render();
  });
});

// 10. Chuyển đổi bộ lọc
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.getAttribute('data-filter');
    render();
  });
});

// 11. Xóa việc đã xong
clearCompletedBtn.addEventListener('click', () => {
  todos = todos.filter(t => !t.completed);
  persistData();
  render();
});

// Khởi tạo
displayTodayDate();
render();
