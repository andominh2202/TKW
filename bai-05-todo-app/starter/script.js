// ======================================================
// BÀI 05: TO-DO LIST APP (STARTER JS)
// Hãy hoàn thành các hàm bên dưới theo chỉ dẫn TODO!
// ======================================================

// 1. Quản lý State: Lấy danh sách từ LocalStorage an toàn hoặc dùng mảng mặc định
const DEFAULT_TODOS = [
  { id: 1, text: 'Học cú pháp HTML5 Semantic', completed: true },
  { id: 2, text: 'Thực hành Flexbox và CSS Grid', completed: false },
  { id: 3, text: 'Lập trình JavaScript DOM Manipulation', completed: false }
];

function loadTodos() {
  try {
    const data = localStorage.getItem('my_todos');
    if (!data) return DEFAULT_TODOS;
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? parsed : DEFAULT_TODOS;
  } catch (err) {
    console.warn('Lỗi đọc LocalStorage:', err);
    return DEFAULT_TODOS;
  }
}

let todos = loadTodos();
let currentFilter = 'all'; // 'all' | 'active' | 'completed'

// 2. DOM Elements
const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const itemsLeft = document.getElementById('itemsLeft');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');
const filterBtns = document.querySelectorAll('.tab-btn');

// TODO 1: Hàm lưu mảng `todos` vào LocalStorage
function saveTodos() {
  try {
    localStorage.setItem('my_todos', JSON.stringify(todos));
  } catch (err) {
    console.warn('Không thể lưu vào LocalStorage:', err);
  }
}

// TODO 2: Hàm render (hiển thị) danh sách công việc ra HTML
function renderTodos() {
  // Xóa sạch nội dung cũ trong <ul>
  todoList.innerHTML = '';

  // Lọc công việc theo currentFilter
  const filteredTodos = todos.filter(todo => {
    if (currentFilter === 'active') return !todo.completed;
    if (currentFilter === 'completed') return todo.completed;
    return true; // 'all'
  });

  // Duyệt qua từng công việc và tạo thẻ <li> an toàn
  filteredTodos.forEach(todo => {
    const li = document.createElement('li');
    li.className = `todo-item ${todo.completed ? 'completed' : ''}`;

    const leftDiv = document.createElement('div');
    leftDiv.className = 'todo-item-left';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-checkbox';
    checkbox.checked = !!todo.completed;
    checkbox.setAttribute('data-id', todo.id);

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = todo.text; // An toàn tuyệt đối chống XSS

    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(span);

    const btnDelete = document.createElement('button');
    btnDelete.className = 'btn-delete';
    btnDelete.setAttribute('data-id', todo.id);
    btnDelete.textContent = '✕';

    li.appendChild(leftDiv);
    li.appendChild(btnDelete);
    todoList.appendChild(li);
  });

  // Cập nhật số việc còn lại
  const remaining = todos.filter(t => !t.completed).length;
  itemsLeft.textContent = `Còn ${remaining} việc cần làm`;
}

// TODO 3: Xử lý sự kiện Submit Form (Thêm công việc mới)
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  
  if (!text) return; // Nếu rỗng thì bỏ qua

  const newTodo = {
    id: Date.now(),
    text: text,
    completed: false
  };

  todos.push(newTodo);
  saveTodos();
  renderTodos();

  todoInput.value = ''; // Reset input
});

// TODO 4: Lắng nghe click trên danh sách việc (Event Delegation)
todoList.addEventListener('click', (e) => {
  const id = Number(e.target.getAttribute('data-id'));
  if (!id) return;

  // Nếu click vào checkbox
  if (e.target.classList.contains('todo-checkbox')) {
    todos = todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
    saveTodos();
    renderTodos();
  }

  // Nếu click vào nút xóa (✕)
  if (e.target.classList.contains('btn-delete')) {
    todos = todos.filter(t => t.id !== id);
    saveTodos();
    renderTodos();
  }
});

// TODO 5: Chuyển đổi bộ lọc (Filter tabs)
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.getAttribute('data-filter');
    renderTodos();
  });
});

// TODO 6: Xóa tất cả việc đã hoàn thành
clearCompletedBtn.addEventListener('click', () => {
  todos = todos.filter(t => !t.completed);
  saveTodos();
  renderTodos();
});

// Khởi chạy lần đầu khi load trang
renderTodos();
