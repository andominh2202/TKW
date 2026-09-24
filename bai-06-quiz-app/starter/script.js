// ======================================================
// BÀI 06: QUIZ WEB APP (STARTER JS)
// Hãy theo dõi các chỉ dẫn TODO để hoàn thiện logic!
// ======================================================

// 1. Mảng dữ liệu câu hỏi trắc nghiệm
const questions = [
  {
    question: "Thẻ HTML nào dùng để xác định vùng liên kết điều hướng chính của trang web?",
    options: ["<navigation>", "<nav>", "<menu>", "<links>"],
    answerIndex: 1
  },
  {
    question: "Thuộc tính CSS nào dùng để căn giữa các phần tử con theo trục chính trong Flexbox?",
    options: ["align-items", "text-align", "justify-content", "align-content"],
    answerIndex: 2
  },
  {
    question: "Trong JavaScript, từ khóa nào khai báo biến có phạm vi khối (block-scoped) và không thể gán lại giá trị?",
    options: ["var", "let", "const", "static"],
    answerIndex: 2
  },
  {
    question: "Hàm nào trong JavaScript dùng để thực thi lặp đi lặp lại một đoạn code sau mỗi khoảng thời gian?",
    options: ["setTimeout()", "setInterval()", "setPeriod()", "requestAnimationFrame()"],
    answerIndex: 1
  },
  {
    question: "Phương thức nào dùng để chuyển đổi một Object JavaScript thành chuỗi JSON?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.objectify()", "JSON.toText()"],
    answerIndex: 1
  }
];

// 2. Các biến trạng thái
let currentIndex = 0;
let score = 0;
let timer = null;
let timeLeft = 15;

// 3. DOM Elements
const questionCountEl = document.getElementById('questionCount');
const timerTextEl = document.getElementById('timerText');
const questionTitleEl = document.getElementById('questionTitle');
const optionsContainer = document.getElementById('optionsContainer');
const nextBtn = document.getElementById('nextBtn');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');
const finalScoreEl = document.getElementById('finalScore');
const totalQuestionsEl = document.getElementById('totalQuestions');
const scoreFeedbackEl = document.getElementById('scoreFeedback');
const restartBtn = document.getElementById('restartBtn');

// TODO 1: Hàm đếm ngược thời gian (15 giây cho mỗi câu)
function startTimer() {
  timeLeft = 15;
  timerTextEl.textContent = `${timeLeft}s`;
  clearInterval(timer);

  timer = setInterval(() => {
    timeLeft--;
    timerTextEl.textContent = `${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      handleTimeOut();
    }
  }, 1000);
}

// TODO 2: Hàm hiển thị câu hỏi hiện tại ra giao diện
function loadQuestion() {
  const currentQ = questions[currentIndex];
  questionCountEl.textContent = `Câu ${currentIndex + 1}/${questions.length}`;
  questionTitleEl.textContent = currentQ.question;
  optionsContainer.innerHTML = '';
  nextBtn.classList.add('hidden');

  currentQ.options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = `${String.fromCharCode(65 + index)}. ${opt}`;
    btn.addEventListener('click', () => selectAnswer(index));
    optionsContainer.appendChild(btn);
  });

  startTimer();
}

// TODO 3: Xử lý khi người dùng chọn một phương án
function selectAnswer(selectedIndex) {
  clearInterval(timer);
  const currentQ = questions[currentIndex];
  const buttons = optionsContainer.querySelectorAll('.option-btn');

  // Khóa tất cả các nút
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === currentQ.answerIndex) {
      btn.classList.add('correct');
    }
  });

  if (selectedIndex === currentQ.answerIndex) {
    score++;
  } else {
    buttons[selectedIndex].classList.add('incorrect');
  }

  nextBtn.classList.remove('hidden');
}

// TODO 4: Xử lý khi hết giờ mà chưa bấm chọn
function handleTimeOut() {
  const currentQ = questions[currentIndex];
  const buttons = optionsContainer.querySelectorAll('.option-btn');
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === currentQ.answerIndex) {
      btn.classList.add('correct');
    }
  });
  nextBtn.classList.remove('hidden');
}

// TODO 5: Chuyển sang câu hỏi tiếp theo
nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
});

// TODO 6: Hiển thị kết quả cuối cùng
function showResults() {
  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
  finalScoreEl.textContent = score;
  totalQuestionsEl.textContent = questions.length;

  if (score === questions.length) {
    scoreFeedbackEl.textContent = "Xuất sắc! Bạn nắm kiến thức Web rất vững vàng! 🌟";
  } else if (score >= 3) {
    scoreFeedbackEl.textContent = "Khá tốt! Bạn đã có nền tảng tốt, hãy rèn luyện thêm! 👍";
  } else {
    scoreFeedbackEl.textContent = "Đừng nản chí! Hãy xem lại tài liệu và thử lại nhé! 💪";
  }
}

// TODO 7: Nút làm lại từ đầu
restartBtn.addEventListener('click', () => {
  currentIndex = 0;
  score = 0;
  resultScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  loadQuestion();
});

// Khởi chạy khi vào trang
loadQuestion();
