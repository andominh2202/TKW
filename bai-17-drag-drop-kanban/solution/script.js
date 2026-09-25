// ==========================================================
// BÀI 17: JAVASCRIPT HTML5 DRAG & DROP API KANBAN BOARD
// ==========================================================

const columns = document.querySelectorAll('.kanban-column');
const cards = document.querySelectorAll('.kanban-card');
const lanes = document.querySelectorAll('.cards-lane');

// Modal & Form
const addModal = document.getElementById('addModal');
const addCardForm = document.getElementById('addCardForm');
const btnCloseModal = document.getElementById('btnCloseModal');
const btnCancelModal = document.getElementById('btnCancelModal');
const btnQuickAdd = document.getElementById('btnQuickAdd');
const targetColumnStatus = document.getElementById('targetColumnStatus');

// 1. GÁN SỰ KIỆN KÉO THẢ CHO MỖI THẺ (DRAGGABLE CARD)
function attachCardDragEvents(card) {
  card.addEventListener('dragstart', (e) => {
    card.classList.add('is-dragging');
    e.dataTransfer.setData('text/plain', card.id);
    e.dataTransfer.effectAllowed = 'move';
  });

  card.addEventListener('dragend', () => {
    card.classList.remove('is-dragging');
    updateColumnCounts();
    saveKanbanToStorage();
  });
}

// 2. GÁN SỰ KIỆN NHẬN THẢ CHO CÁC LÀN CỘT (DROP ZONES)
lanes.forEach(lane => {
  const column = lane.closest('.kanban-column');

  lane.addEventListener('dragover', (e) => {
    e.preventDefault(); // Bắt buộc để cho phép drop
    e.dataTransfer.dropEffect = 'move';
    column.classList.add('drag-over');

    const draggingCard = document.querySelector('.is-dragging');
    if (!draggingCard) return;

    // Tính toán vị trí chèn giữa các thẻ
    const afterElement = getDragAfterElement(lane, e.clientY);
    if (afterElement == null) {
      lane.appendChild(draggingCard);
    } else {
      lane.insertBefore(draggingCard, afterElement);
    }
  });

  lane.addEventListener('dragleave', () => {
    column.classList.remove('drag-over');
  });

  lane.addEventListener('drop', (e) => {
    e.preventDefault();
    column.classList.remove('drag-over');
    updateColumnCounts();
    saveKanbanToStorage();
  });
});

// Hàm hỗ trợ tìm vị trí chèn chuột mượt mà
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

// 3. ĐẾM SỐ LƯỢNG THẺ TRONG MỖI CỘT
function updateColumnCounts() {
  const countTodo = document.getElementById('countTodo');
  const countProgress = document.getElementById('countProgress');
  const countDone = document.getElementById('countDone');

  if (countTodo) countTodo.textContent = document.querySelectorAll('#laneTodo .kanban-card').length;
  if (countProgress) countProgress.textContent = document.querySelectorAll('#laneProgress .kanban-card').length;
  if (countDone) countDone.textContent = document.querySelectorAll('#laneDone .kanban-card').length;
}

// 4. LƯU VÀ TẢI TỪ LOCALSTORAGE
function saveKanbanToStorage() {
  const data = {
    todo: getLaneCardIds('laneTodo'),
    inprogress: getLaneCardIds('laneProgress'),
    done: getLaneCardIds('laneDone')
  };
  localStorage.setItem('kanban_board_state', JSON.stringify(data));
}

function getLaneCardIds(laneId) {
  const lane = document.getElementById(laneId);
  if (!lane) return [];
  return [...lane.querySelectorAll('.kanban-card')].map(c => c.id);
}

// 5. MODAL THÊM CÔNG VIỆC
window.openAddTaskModal = function(colStatus = 'todo') {
  targetColumnStatus.value = colStatus;
  addModal.classList.remove('hidden');
  document.getElementById('taskTitle').focus();
};

function closeModal() {
  addModal.classList.add('hidden');
  addCardForm.reset();
}

if (btnCloseModal) btnCloseModal.addEventListener('click', closeModal);
if (btnCancelModal) btnCancelModal.addEventListener('click', closeModal);
if (btnQuickAdd) btnQuickAdd.addEventListener('click', () => openAddTaskModal('todo'));

if (addCardForm) {
  addCardForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('taskTitle').value.trim();
    const desc = document.getElementById('taskDesc').value.trim() || 'Chưa có mô tả chi tiết.';
    const tag = document.getElementById('taskTag').value;
    const priority = document.getElementById('taskPriority').value;
    const status = targetColumnStatus.value;

    let targetLaneId = 'laneTodo';
    if (status === 'inprogress') targetLaneId = 'laneProgress';
    if (status === 'done') targetLaneId = 'laneDone';

    const targetLane = document.getElementById(targetLaneId);

    // Tạo thẻ mới
    const newCard = document.createElement('div');
    newCard.className = 'kanban-card';
    newCard.draggable = true;
    newCard.id = `card-${Date.now()}`;

    let tagClass = 'tag-frontend';
    if (tag === 'UI Design') tagClass = 'tag-design';
    if (tag === 'JavaScript') tagClass = 'tag-js';
    if (tag === 'CSS Grid') tagClass = 'tag-css';

    let prioClass = 'medium';
    if (priority === 'Cao') prioClass = 'high';
    if (priority === 'Thấp') prioClass = 'low';

    newCard.innerHTML = `
      <div class="card-tags">
        <span class="tag ${tagClass}">${tag}</span>
        <span class="priority ${prioClass}">${priority}</span>
      </div>
      <h4 class="card-title">${title}</h4>
      <p class="card-desc">${desc}</p>
      <div class="card-footer">
        <div class="assignee">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="Avatar">
          <span>Bạn</span>
        </div>
        <span class="due-date">📅 Hôm nay</span>
      </div>
    `;

    attachCardDragEvents(newCard);
    targetLane.appendChild(newCard);

    updateColumnCounts();
    saveKanbanToStorage();
    closeModal();
  });
}

// Khởi chạy gắn sự kiện kéo thả ban đầu
cards.forEach(card => attachCardDragEvents(card));
updateColumnCounts();
