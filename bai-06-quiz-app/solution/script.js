// ======================================================
// BÀI 06: QUIZ MASTER PRO (LỜI GIẢI CHUẨN - JS LOGIC)
// ======================================================

const questionsData = [
  {
    question: "Thẻ HTML5 nào được khuyến nghị sử dụng để bao bọc một bài viết, bình luận hoặc sản phẩm độc lập có thể tái sử dụng?",
    options: ["<section>", "<div>", "<article>", "<main>"],
    answerIndex: 2,
    explanation: "<article> đại diện cho khối nội dung độc lập, hoàn chỉnh và có ý nghĩa khi đứng một mình (như bài blog, tin tức, sản phẩm thương mại). <section> chỉ là một phân vùng theo chủ đề."
  },
  {
    question: "Trong CSS Flexbox, để các phần tử tự động rớt xuống dòng tiếp theo khi chiều rộng không đủ, ta dùng thuộc tính nào?",
    options: ["flex-flow: nowrap", "flex-wrap: wrap", "flex-direction: column", "overflow: wrap"],
    answerIndex: 1,
    explanation: "Mặc định flex-wrap có giá trị 'nowrap' (ép tất cả trên 1 dòng). Đặt 'flex-wrap: wrap' cho phép các phần tử tự động xuống dòng khi chạm ngưỡng mép container."
  },
  {
    question: "Biến được khai báo bằng 'const' trong JavaScript có đặc tính nào sau đây?",
    options: [
      "Có thể gán lại giá trị mới bất kỳ lúc nào",
      "Có phạm vi khối (block-scope) và không thể tái gán định danh (reassign)",
      "Tự động được đẩy lên đầu file (hoisting) và nhận giá trị undefined",
      "Chỉ dùng được trong hàm số học"
    ],
    answerIndex: 1,
    explanation: "'const' tạo ra một liên kết bất biến với giá trị tham chiếu trong phạm vi khối ({ ... }). Tuy nhiên nếu là Object/Array thì thuộc tính bên trong vẫn có thể sửa đổi."
  },
  {
    question: "Sự khác biệt chính giữa thuộc tính 'opacity: 0' và 'display: none' trong CSS là gì?",
    options: [
      "opacity: 0 vẫn chiếm không gian và vẫn nhận sự kiện chuột (click), display: none thì biến mất hoàn toàn khỏi bố cục",
      "display: none hỗ trợ transition mượt mà hơn opacity: 0",
      "Cả hai hoàn toàn giống nhau",
      "opacity: 0 xóa phần tử khỏi cây DOM"
    ],
    answerIndex: 0,
    explanation: "'display: none' loại bỏ phần tử khỏi luồng render (không chiếm chỗ). Còn 'opacity: 0' chỉ làm phần tử vô hình nhưng nó vẫn chiếm diện tích thực tế và vẫn kích hoạt được hover/click."
  },
  {
    question: "Để lưu trữ một đối tượng JavaScript vào 'localStorage' của trình duyệt, ta cần làm gì trước?",
    options: [
      "Gọi trực tiếp localStorage.setItem('key', myObj)",
      "Chuyển đối tượng thành chuỗi với JSON.stringify(myObj)",
      "Mã hóa Base64 chuỗi đó",
      "Chuyển đối tượng thành Array với Object.keys()"
    ],
    answerIndex: 1,
    explanation: "LocalStorage chỉ lưu trữ dữ liệu dưới dạng chuỗi (String). Nếu truyền trực tiếp Object, nó sẽ bị chuyển thành '[object Object]'. Vì vậy bắt buộc dùng JSON.stringify() trước khi lưu."
  },
  {
    question: "Phương thức nào trong Javascript lắng nghe sự kiện mà không ghi đè lên các hàm xử lý đã gán trước đó?",
    options: [
      "element.onclick = fn",
      "element.addEventListener('click', fn)",
      "element.attach('click', fn)",
      "element.listen('click', fn)"
    ],
    answerIndex: 1,
    explanation: "'addEventListener' cho phép gắn nhiều hàm xử lý cho cùng một sự kiện mà không bị ghi đè, hỗ trợ tốt cho kiến trúc module hóa."
  }
];

// Biến trạng thái
let currentIdx = 0;
let score = 0;
let timerInterval = null;
const QUESTION_TIME = 15; // 15 giây / câu
let timeLeft = QUESTION_TIME;

// DOM Elements
const questionBadge = document.getElementById('questionBadge');
const timerNumber = document.getElementById('timerNumber');
const timerProgress = document.getElementById('timerProgress');
const questionText = document.getElementById('questionText');
const optionsList = document.getElementById('optionsList');
const explanationBox = document.getElementById('explanationBox');
const explanationText = document.getElementById('explanationText');
const liveScore = document.getElementById('liveScore');
const btnNext = document.getElementById('btnNext');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');

// Result Screen DOMs
const finalScoreVal = document.getElementById('finalScoreVal');
const finalTotalVal = document.getElementById('finalTotalVal');
const accuracyPercent = document.getElementById('accuracyPercent');
const rankTitle = document.getElementById('rankTitle');
const feedbackMessage = document.getElementById('feedbackMessage');
const trophyEmoji = document.getElementById('trophyEmoji');
const btnRestart = document.getElementById('btnRestart');

// Bắt đầu đếm ngược
function startCountdown() {
  clearInterval(timerInterval);
  timeLeft = QUESTION_TIME;
  timerNumber.textContent = `${timeLeft}s`;
  timerProgress.style.width = '100%';

  timerInterval = setInterval(() => {
    timeLeft--;
    timerNumber.textContent = `${timeLeft}s`;
    const percent = (timeLeft / QUESTION_TIME) * 100;
    timerProgress.style.width = `${percent}%`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeout();
    }
  }, 1000);
}

// Tải câu hỏi
function displayQuestion() {
  const q = questionsData[currentIdx];
  questionBadge.textContent = `Câu ${currentIdx + 1}/${questionsData.length}`;
  questionText.textContent = q.question;
  explanationBox.classList.add('hidden');
  btnNext.classList.add('hidden');
  optionsList.innerHTML = '';

  const prefixes = ['A', 'B', 'C', 'D'];
  q.options.forEach((optText, index) => {
    const item = document.createElement('button');
    item.className = 'option-item';

    const prefixSpan = document.createElement('span');
    prefixSpan.className = 'option-prefix';
    prefixSpan.textContent = prefixes[index] || '';

    const textSpan = document.createElement('span');
    textSpan.className = 'option-text';
    textSpan.textContent = optText;

    item.appendChild(prefixSpan);
    item.appendChild(textSpan);
    item.addEventListener('click', () => onSelectOption(index));
    optionsList.appendChild(item);
  });

  startCountdown();
}

// Xử lý khi click vào phương án
function onSelectOption(selectedIndex) {
  clearInterval(timerInterval);
  const q = questionsData[currentIdx];
  const items = optionsList.querySelectorAll('.option-item');

  // Khóa tất cả các nút
  items.forEach((item, idx) => {
    item.disabled = true;
    if (idx === q.answerIndex) {
      item.classList.add('correct');
    }
  });

  if (selectedIndex === q.answerIndex) {
    score++;
    liveScore.textContent = score;
  } else {
    items[selectedIndex].classList.add('incorrect');
  }

  // Hiển thị lời giải
  explanationText.textContent = q.explanation;
  explanationBox.classList.remove('hidden');

  btnNext.classList.remove('hidden');
}

// Xử lý hết thời gian
function handleTimeout() {
  const q = questionsData[currentIdx];
  const items = optionsList.querySelectorAll('.option-item');
  items.forEach((item, idx) => {
    item.disabled = true;
    if (idx === q.answerIndex) {
      item.classList.add('correct');
    }
  });

  explanationText.textContent = `Hết giờ! Đáp án đúng là phương án ${['A', 'B', 'C', 'D'][q.answerIndex]}. ${q.explanation}`;
  explanationBox.classList.remove('hidden');
  btnNext.classList.remove('hidden');
}

// Sang câu tiếp theo
btnNext.addEventListener('click', () => {
  currentIdx++;
  if (currentIdx < questionsData.length) {
    displayQuestion();
  } else {
    renderFinalResults();
  }
});

// Kết thúc quiz và hiển thị kết quả
function renderFinalResults() {
  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');

  const total = questionsData.length;
  finalScoreVal.textContent = score;
  finalTotalVal.textContent = `/${total}`;

  const pct = Math.round((score / total) * 100);
  accuracyPercent.textContent = `${pct}%`;

  if (pct === 100) {
    trophyEmoji.textContent = '👑';
    rankTitle.textContent = 'Huyền Thoại Web (Master)';
    feedbackMessage.textContent = 'Hoàn hảo tuyệt đối! Bạn nắm trọn vẹn kiến thức HTML5, CSS3 và Javascript!';
  } else if (pct >= 80) {
    trophyEmoji.textContent = '🏆';
    rankTitle.textContent = 'Chuyên Gia Web (Pro)';
    feedbackMessage.textContent = 'Rất ấn tượng! Bạn đã sẵn sàng xây dựng các dự án web thực chiến chất lượng cao!';
  } else if (pct >= 50) {
    trophyEmoji.textContent = '🎖️';
    rankTitle.textContent = 'Lập Trình Viên Tiềm Năng';
    feedbackMessage.textContent = 'Kết quả khá tốt! Hãy ôn lại các phần giải thích chi tiết để đạt điểm tuyệt đối nhé!';
  } else {
    trophyEmoji.textContent = '📚';
    rankTitle.textContent = 'Người Mới Bắt Đầu';
    feedbackMessage.textContent = 'Đừng lo lắng! Hãy mở trang Bảng Tra Cứu (bang-tra-cuu.html) ôn lại và thử lại nhé!';
  }
}

// Nút làm lại bài
btnRestart.addEventListener('click', () => {
  currentIdx = 0;
  score = 0;
  liveScore.textContent = '0';
  resultScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  displayQuestion();
});

// Khởi chạy ban đầu
displayQuestion();
