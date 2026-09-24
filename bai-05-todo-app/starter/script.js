// ======================================================
// BÀI 05: TO-DO LIST APP (STARTER JS)
// Hãy hoàn thành các hàm bên dưới theo chỉ dẫn TODO!
// ======================================================

// 1. Quản lý State: Lấy danh sách từ LocalStorage hoặc mảng rỗng
let todos = JSON.parse(localStorage.getItem('my_todos')) || [
  { id: 1, text: 'Học cú pháp HTML5 Semantic', completed: true },
  { id: 2, text: 'Thực hành Flexbox và CSS Grid', completed: false },
  { id: 3, text: 'Lập trình JavaScript DOM Manipulation', completed: false }
];

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
  localStorage.setItem('my_todos', JSON.stringify(todos));
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

  // Duyệt qua từng công việc và tạo thẻ <li>
  filteredTodos.forEach(todo => {
    const li = document.createElement('li');
    li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
    li.innerHTML = `
      <div class="todo-item-left">
        <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''} data-id="${todo.id}">
        <span class="todo-text">${todo.text}</span>
      </div>
      <button class="btn-delete" data-id="${todo.id}">✕</button>
    `;
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
