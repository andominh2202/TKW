// TODO: Viết sự kiện kéo thả Drag & Drop
const cards = document.querySelectorAll('.card');
const lanes = document.querySelectorAll('.lane');

cards.forEach(card => {
  card.addEventListener('dragstart', () => {
    card.classList.add('dragging');
  });
  card.addEventListener('dragend', () => {
    card.classList.remove('dragging');
  });
});

lanes.forEach(lane => {
  lane.addEventListener('dragover', (e) => {
    e.preventDefault(); // Cho phép drop
    const draggingCard = document.querySelector('.dragging');
    if (draggingCard) lane.appendChild(draggingCard);
  });
});
