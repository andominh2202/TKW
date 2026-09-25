// ==========================================================
// BÀI 17: JAVASCRIPT HTML5 DRAG & DROP API KANBAN BOARD
// Hỗ Trợ Lưu Trữ Đầy Đủ (Persistence) & Chống XSS Tuyệt Đối
// ==========================================================

// Cấu trúc dữ liệu mặc định ban đầu
const DEFAULT_KANBAN_STATE = {
  cards: {
    "card-1": {
      id: "card-1",
      title: "Thiết kế mẫu màu Dark Mode cho Landing Page",
      description: "Tạo bộ biến CSS Custom Properties :root đồng bộ toàn trang.",
      tag: "UI Design",
      priority: "Cao",
      assigneeName: "Minh Anh",
      assigneeAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
      dueDate: "📅 28 Th9"
    },
    "card-2": {
      id: "card-2",
      title: "Viết bài học Semantic Blog với thẻ <article>",
      description: "Bổ sung thẻ audio podcast và details/summary cho mục FAQ.",
      tag: "Frontend",
      priority: "Vừa",
      assigneeName: "Tuấn Kiệt",
      assigneeAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
      dueDate: "📅 30 Th9"
    },
    "card-3": {
      id: "card-3",
      title: "Tích hợp Open-Meteo API cho App Thời Tiết",
      description: "Xử lý async/await, khối try catch và màn hình loading spinner.",
      tag: "JavaScript",
      priority: "Cao",
      assigneeName: "Hoàng Yến",
      assigneeAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
      dueDate: "🔥 Hôm nay"
    },
    "card-4": {
      id: "card-4",
      title: "Xây dựng Bảng Doanh Thu Tài Chính",
      description: "Hoàn tất Sticky table header và cuộn ngang responsive trên di động.",
      tag: "CSS Grid",
      priority: "Thấp",
      assigneeName: "Bảo Long",
      assigneeAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
      dueDate: "✅ Đã duyệt"
    }
  },
  lanes: {
    todo: ["card-1", "card-2"],
    inprogress: ["card-3"],
    done: ["card-4"]
  }
};

let kanbanState = loadKanbanState();

// 1. Hàm đọc trạng thái từ LocalStorage an toàn (chống corrupt data, ID trùng lặp hoặc thẻ rác)
function loadKanbanState() {
  try {
    const raw = localStorage.getItem('kanban_board_state_v2');
    if (!raw) return JSON.parse(JSON.stringify(DEFAULT_KANBAN_STATE));
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object' && parsed.cards && typeof parsed.cards === 'object' && parsed.lanes &&
        Array.isArray(parsed.lanes.todo) &&
        Array.isArray(parsed.lanes.inprogress) &&
        Array.isArray(parsed.lanes.done)) {

      // Lọc và chuẩn hóa cards hợp lệ
      const validCards = {};
      Object.keys(parsed.cards).forEach(key => {
        const c = parsed.cards[key];
        if (c && typeof c === 'object' && c.id && typeof c.title === 'string' && c.title.trim()) {
          validCards[c.id] = {
            id: String(c.id),
            title: String(c.title).trim(),
            description: typeof c.description === 'string' ? c.description.trim() : '',
            tag: typeof c.tag === 'string' ? c.tag : 'General',
            priority: typeof c.priority === 'string' ? c.priority : 'Vừa',
            assigneeName: typeof c.assigneeName === 'string' ? c.assigneeName : 'Bạn',
            assigneeAvatar: typeof c.assigneeAvatar === 'string' ? c.assigneeAvatar : '',
            dueDate: typeof c.dueDate === 'string' ? c.dueDate : '📅 Hôm nay'
          };
        }
      });

      // Lọc lanes: chỉ giữ thẻ tồn tại trong validCards và loại bỏ hoàn toàn trùng lặp ID giữa các làn
      const seenIds = new Set();
      const cleanLane = (arr) => {
        const res = [];
        arr.forEach(id => {
          if (validCards[id] && !seenIds.has(id)) {
            seenIds.add(id);
            res.push(id);
          }
        });
        return res;
      };

      const cleanLanes = {
        todo: cleanLane(parsed.lanes.todo),
        inprogress: cleanLane(parsed.lanes.inprogress),
        done: cleanLane(parsed.lanes.done)
      };

      // Đưa những thẻ mồ côi (tồn tại trong validCards nhưng chưa nằm trong làn nào) vào làn todo
      Object.keys(validCards).forEach(id => {
        if (!seenIds.has(id)) {
          seenIds.add(id);
          cleanLanes.todo.push(id);
        }
      });

      if (Object.keys(validCards).length > 0) {
        return { cards: validCards, lanes: cleanLanes };
      }
    }
  } catch (e) {
    console.warn('LocalStorage data corrupt or unavailable, resetting to default state:', e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_KANBAN_STATE));
}

// 2. Hàm lưu trạng thái vào LocalStorage
function saveKanbanState() {
  try {
    localStorage.setItem('kanban_board_state_v2', JSON.stringify(kanbanState));
  } catch (e) {
    console.warn('Failed to save kanban state to localStorage:', e);
  }
}

// 3. Helper lấy class CSS
function getTagClass(tag) {
  if (tag === 'UI Design') return 'tag-design';
  if (tag === 'JavaScript') return 'tag-js';
  if (tag === 'CSS Grid') return 'tag-css';
  return 'tag-frontend';
}

function getPriorityClass(prio) {
  if (prio === 'Cao') return 'high';
  if (prio === 'Thấp') return 'low';
  return 'medium';
}

// 4. Tạo phần tử DOM Card AN TOÀN TUYỆT ĐỐI (Dùng textContent chống XSS)
function createCardElement(cardData) {
  const card = document.createElement('div');
  card.className = 'kanban-card';
  card.draggable = true;
  card.id = cardData.id;

  // Header tags
  const tagsDiv = document.createElement('div');
  tagsDiv.className = 'card-tags';

  const tagSpan = document.createElement('span');
  tagSpan.className = `tag ${getTagClass(cardData.tag)}`;
  tagSpan.textContent = cardData.tag || 'General';

  const prioSpan = document.createElement('span');
  prioSpan.className = `priority ${getPriorityClass(cardData.priority)}`;
  prioSpan.textContent = cardData.priority || 'Vừa';

  tagsDiv.appendChild(tagSpan);
  tagsDiv.appendChild(prioSpan);

  // Title & Description (textContent)
  const titleH4 = document.createElement('h4');
  titleH4.className = 'card-title';
  titleH4.textContent = cardData.title;

  const descP = document.createElement('p');
  descP.className = 'card-desc';
  descP.textContent = cardData.description || 'Chưa có mô tả chi tiết.';

  // Footer & Assignee
  const footerDiv = document.createElement('div');
  footerDiv.className = 'card-footer';

  const assigneeDiv = document.createElement('div');
  assigneeDiv.className = 'assignee';

  const avatarImg = document.createElement('img');
  avatarImg.src = cardData.assigneeAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80';
  avatarImg.alt = 'Avatar';

  const nameSpan = document.createElement('span');
  nameSpan.textContent = cardData.assigneeName || 'Bạn';

  assigneeDiv.appendChild(avatarImg);
  assigneeDiv.appendChild(nameSpan);

  const dateSpan = document.createElement('span');
  dateSpan.className = 'due-date';
  dateSpan.textContent = cardData.dueDate || '📅 Hôm nay';

  footerDiv.appendChild(assigneeDiv);
  footerDiv.appendChild(dateSpan);

  // Ghép nối phần tử
  card.appendChild(tagsDiv);
  card.appendChild(titleH4);
  card.appendChild(descP);
  card.appendChild(footerDiv);

  attachCardDragEvents(card);
  return card;
}

// 5. Gán sự kiện Drag & Drop cho thẻ
function attachCardDragEvents(card) {
  card.addEventListener('dragstart', (e) => {
    card.classList.add('is-dragging');
    e.dataTransfer.setData('text/plain', card.id);
    e.dataTransfer.effectAllowed = 'move';
  });

  card.addEventListener('dragend', () => {
    card.classList.remove('is-dragging');
    syncLanesFromDOM();
    updateColumnCounts();
    saveKanbanState();
  });
}

// 6. Gán sự kiện Drop Zones cho 3 làn
const lanes = [
  { el: document.getElementById('laneTodo'), status: 'todo' },
  { el: document.getElementById('laneProgress'), status: 'inprogress' },
  { el: document.getElementById('laneDone'), status: 'done' }
];

lanes.forEach(({ el: lane }) => {
  if (!lane) return;
  const column = lane.closest('.kanban-column');

  lane.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (column) column.classList.add('drag-over');

    const draggingCard = document.querySelector('.is-dragging');
    if (!draggingCard) return;

    const afterElement = getDragAfterElement(lane, e.clientY);
    if (afterElement == null) {
      lane.appendChild(draggingCard);
    } else {
      lane.insertBefore(draggingCard, afterElement);
    }
  });

  lane.addEventListener('dragleave', () => {
    if (column) column.classList.remove('drag-over');
  });

  lane.addEventListener('drop', (e) => {
    e.preventDefault();
    if (column) column.classList.remove('drag-over');
    syncLanesFromDOM();
    updateColumnCounts();
    saveKanbanState();
  });
});

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.kanban-card:not(.is-dragging)')];

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// Đồng bộ thứ tự ID thẻ từ DOM vào kanbanState.lanes
function syncLanesFromDOM() {
  kanbanState.lanes.todo = [...document.querySelectorAll('#laneTodo .kanban-card')].map(c => c.id);
  kanbanState.lanes.inprogress = [...document.querySelectorAll('#laneProgress .kanban-card')].map(c => c.id);
  kanbanState.lanes.done = [...document.querySelectorAll('#laneDone .kanban-card')].map(c => c.id);
}

// 7. Render toàn bộ bảng từ kanbanState
function renderBoard() {
  const laneMap = {
    todo: document.getElementById('laneTodo'),
    inprogress: document.getElementById('laneProgress'),
    done: document.getElementById('laneDone')
  };

  Object.keys(laneMap).forEach(key => {
    const laneEl = laneMap[key];
    if (!laneEl) return;
    laneEl.innerHTML = '';

    const cardIds = kanbanState.lanes[key] || [];
    cardIds.forEach(id => {
      const cardData = kanbanState.cards[id];
      if (cardData) {
        const cardEl = createCardElement(cardData);
        laneEl.appendChild(cardEl);
      }
    });
  });

  updateColumnCounts();
}

function updateColumnCounts() {
  const countTodo = document.getElementById('countTodo');
  const countProgress = document.getElementById('countProgress');
  const countDone = document.getElementById('countDone');

  if (countTodo) countTodo.textContent = document.querySelectorAll('#laneTodo .kanban-card').length;
  if (countProgress) countProgress.textContent = document.querySelectorAll('#laneProgress .kanban-card').length;
  if (countDone) countDone.textContent = document.querySelectorAll('#laneDone .kanban-card').length;
}

// 8. Modal Thêm Công Việc
const addModal = document.getElementById('addModal');
const addCardForm = document.getElementById('addCardForm');
const btnCloseModal = document.getElementById('btnCloseModal');
const btnCancelModal = document.getElementById('btnCancelModal');
const btnQuickAdd = document.getElementById('btnQuickAdd');
const targetColumnStatus = document.getElementById('targetColumnStatus');

window.openAddTaskModal = function(colStatus = 'todo') {
  if (targetColumnStatus) targetColumnStatus.value = colStatus;
  if (addModal) {
    addModal.classList.remove('hidden');
    addModal.setAttribute('aria-modal', 'true');
    addModal.setAttribute('role', 'dialog');
  }
  const taskTitleInput = document.getElementById('taskTitle');
  if (taskTitleInput) taskTitleInput.focus();
};

function closeModal() {
  if (addModal) addModal.classList.add('hidden');
  if (addCardForm) addCardForm.reset();
}

if (btnCloseModal) btnCloseModal.addEventListener('click', closeModal);
if (btnCancelModal) btnCancelModal.addEventListener('click', closeModal);
if (btnQuickAdd) btnQuickAdd.addEventListener('click', () => openAddTaskModal('todo'));

// Lắng nghe sự kiện mở modal cho các nút thêm công việc tại từng cột
document.querySelectorAll('[data-action="open-add"]').forEach(btn => {
  btn.addEventListener('click', () => {
    const lane = btn.getAttribute('data-lane') || 'todo';
    openAddTaskModal(lane);
  });
});

// Đóng modal khi bấm Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && addModal && !addModal.classList.contains('hidden')) {
    closeModal();
  }
});

if (addCardForm) {
  addCardForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('taskTitle').value.trim();
    const desc = document.getElementById('taskDesc').value.trim() || 'Chưa có mô tả chi tiết.';
    const tag = document.getElementById('taskTag').value;
    const priority = document.getElementById('taskPriority').value;
    const status = targetColumnStatus.value || 'todo';

    if (!title) return;

    const newId = `card-${Date.now()}`;
    const newCardData = {
      id: newId,
      title: title,
      description: desc,
      tag: tag,
      priority: priority,
      assigneeName: "Bạn",
      assigneeAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
      dueDate: "📅 Hôm nay"
    };

    // Cập nhật State
    kanbanState.cards[newId] = newCardData;
    if (!kanbanState.lanes[status]) kanbanState.lanes[status] = [];
    kanbanState.lanes[status].push(newId);

    saveKanbanState();
    renderBoard();
    closeModal();
  });
}

// Khởi chạy khi nạp trang
renderBoard();
