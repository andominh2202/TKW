// ======================================================
// DEVCRAFT WEBLAB - NỀN TẢNG HỌC THIẾT KẾ WEB TƯƠNG TÁC
// Logic Thí Nghiệm Trực Quan, Code Playground & Kho Bài Tập
// ======================================================

// ======================================================
// 1. DỮ LIỆU KHO BÀI TẬP (9 BÀI TẬP TỪ SỐ 0 ĐẾN SHOPPING CART)
// ======================================================
const exercises = [
  {
    id: 0,
    num: "BÀI 00",
    title: "Khởi Động: Làm Quen Thẻ, Bố Cục, Margin & Padding",
    level: "basic",
    levelText: "🟢 Nhập môn",
    desc: "Hiểu sâu bản chất CSS Box Model (Content - Padding - Border - Margin), kéo thanh trượt nhìn hộp phồng to và học 3 dòng Flexbox căn giữa.",
    tags: ["CSS Box Model", "Margin vs Padding", "Thẻ HTML Cơ Bản", "Border Radius", "Flexbox Căn Giữa"],
    starterUrl: "bai-00-nhap-mon-box-model/starter/index.html",
    solutionUrl: "bai-00-nhap-mon-box-model/solution/index.html",
    readmeContent: `
      <h2>Mục Tiêu Bài 00 (Khởi Động)</h2>
      <p>Dành riêng cho người mới bắt đầu từ số 0 để hiểu bản chất hình học của mọi thẻ web (mô hình hộp Box Model).</p>
      <h3>Kiến thức trọng tâm:</h3>
      <ul>
        <li><strong>Content</strong>: Phần ruột chứa chữ, ảnh.</li>
        <li><strong>Padding (Đệm trong)</strong>: Khoảng cách từ chữ ra viền (làm phồng hộp, làm nút bấm êm mắt).</li>
        <li><strong>Border (Viền)</strong>: Đường bao quanh hộp.</li>
        <li><strong>Margin (Lề ngoài)</strong>: Khoảng cách đẩy các hộp khác ra xa.</li>
        <li><strong>Căn giữa Flexbox 3 dòng</strong>: <code>display: flex; justify-content: center; align-items: center;</code></li>
      </ul>
    `
  },
  {
    id: 1,
    num: "BÀI 01",
    title: "Thẻ Thông Tin Cá Nhân (Profile Card)",
    level: "basic",
    levelText: "🟢 Cơ bản",
    desc: "Căn giữa thẻ Card hoàn hảo bằng Flexbox, bo góc ảnh avatar hình tròn (50%), hiệu ứng đổ bóng đa tầng và các badge kỹ năng mềm mại.",
    tags: ["HTML5 Semantic", "CSS Box Model", "Flexbox Center", "Border Radius", "Box Shadow"],
    starterUrl: "bai-01-profile-card/starter/index.html",
    solutionUrl: "bai-01-profile-card/solution/index.html",
    readmeContent: `
      <h2>Mục Tiêu Bài 01</h2>
      <p>Nắm vững mô hình hộp (Box Model), căn giữa phần tử ra giữa màn hình bằng CSS Flexbox và thiết lập góc bo tròn, đổ bóng hiện đại.</p>
    `
  },
  {
    id: 2,
    num: "BÀI 02",
    title: "Form Liên Hệ Hiện Đại (Modern Contact Form)",
    level: "basic",
    levelText: "🟢 Cơ bản",
    desc: "Thiết kế form chuẩn trợ năng, tùy biến focus viền phát sáng (:focus-visible), custom checkbox và layout 2 cột tự chuyển thành 1 cột trên mobile.",
    tags: ["HTML Form", "Input Styling", "Focus Glow", "Custom Checkbox", "Responsive Grid"],
    starterUrl: "bai-02-contact-form/starter/index.html",
    solutionUrl: "bai-02-contact-form/solution/index.html",
    readmeContent: `<h2>Mục Tiêu Bài 02</h2><p>Thiết kế form nhập liệu chuyên nghiệp, viền phát sáng và responsive.</p>`
  },
  {
    id: 3,
    num: "BÀI 03",
    title: "Bảng Báo Giá Dịch Vụ (Pricing Table)",
    level: "medium",
    levelText: "🟡 Trung cấp",
    desc: "Chia 3 cột cân xứng bằng CSS Grid, làm nổi bật gói Khuyên Dùng (Pro) với ruy-băng badge và tích hợp công tắc chuyển đổi tháng/năm.",
    tags: ["CSS Grid", "Popular Ribbon", "Toggle Switch", "Hover 3D Lift", "Feature Checklist"],
    starterUrl: "bai-03-pricing-table/starter/index.html",
    solutionUrl: "bai-03-pricing-table/solution/index.html",
    readmeContent: `<h2>Mục Tiêu Bài 03</h2><p>Ứng dụng CSS Grid chia 3 cột và công tắc thanh toán tháng/năm.</p>`
  },
  {
    id: 4,
    num: "BÀI 04",
    title: "Landing Page Header & Hero Section",
    level: "medium",
    levelText: "🟡 Trung cấp",
    desc: "Thanh điều hướng dính cố định (Sticky) hiệu ứng kính mờ, menu Hamburger mượt mà trên mobile và khu vực Hero banner cực kỳ ấn tượng.",
    tags: ["Sticky Header", "Glassmorphism", "Mobile Hamburger", "Hero Layout", "Typography"],
    starterUrl: "bai-04-landing-hero/starter/index.html",
    solutionUrl: "bai-04-landing-hero/solution/index.html",
    readmeContent: `<h2>Mục Tiêu Bài 04</h2><p>Xây dựng Landing Page Header & Hero chuẩn responsive.</p>`
  },
  {
    id: 5,
    num: "BÀI 05",
    title: "Ứng Dụng Quản Lý Công Việc (To-Do App)",
    level: "advanced",
    levelText: "🔴 Nâng cao",
    desc: "Toàn bộ chu trình CRUD: thêm việc, gạch hoàn thành, xóa, sửa văn bản, lọc trạng thái, thanh tiến độ % và lưu trữ vĩnh viễn vào LocalStorage.",
    tags: ["JavaScript DOM", "LocalStorage", "CRUD Operations", "Filter Tabs", "Progress Bar"],
    starterUrl: "bai-05-todo-app/starter/index.html",
    solutionUrl: "bai-05-todo-app/solution/index.html",
    readmeContent: `<h2>Mục Tiêu Bài 05</h2><p>Làm chủ thao tác DOM, State mảng và lưu LocalStorage.</p>`
  },
  {
    id: 6,
    num: "BÀI 06",
    title: "Ứng Dụng Trắc Nghiệm Tính Điểm (Quiz Web App)",
    level: "advanced",
    levelText: "🔴 Nâng cao",
    desc: "Hệ thống trắc nghiệm kiến thức Web với bộ đếm ngược 15s/câu, thanh thời gian chạy liên tục, khung giải thích chi tiết và bảng tổng kết phân hạng.",
    tags: ["State Management", "Timer setInterval", "Array of Objects", "Instant Feedback", "Rank Summary"],
    starterUrl: "bai-06-quiz-app/starter/index.html",
    solutionUrl: "bai-06-quiz-app/solution/index.html",
    readmeContent: `<h2>Mục Tiêu Bài 06</h2><p>Quản lý thời gian setInterval và tính điểm trắc nghiệm.</p>`
  },
  {
    id: 7,
    num: "BÀI 07",
    title: "Bộ Sưu Tập Ảnh Có Bộ Lọc & Lightbox",
    level: "advanced",
    levelText: "🔴 Nâng cao",
    desc: "Lưới ảnh phong cách hiện đại với bộ lọc danh mục (Thiên nhiên, Kiến trúc, Công nghệ) và cửa sổ phóng to Lightbox toàn màn hình có điều hướng phím bàn phím.",
    tags: ["Image Grid", "Category Filter", "Modal Lightbox", "Keyboard Nav (Esc, ←, →)", "Fullscreen API"],
    starterUrl: "bai-07-filter-gallery/starter/index.html",
    solutionUrl: "bai-07-filter-gallery/solution/index.html",
    readmeContent: `<h2>Mục Tiêu Bài 07</h2><p>Lọc ảnh danh mục và Modal Lightbox xem ảnh lớn.</p>`
  },
  {
    id: 8,
    num: "BÀI 08",
    title: "Giỏ Hàng Mua Sắm Mini (Mini E-commerce Cart)",
    level: "advanced",
    levelText: "🔴 Nâng cao",
    desc: "Cửa hàng phụ kiện công nghệ hoàn chỉnh: thêm vào giỏ, ngăn kéo trượt (Slide-in Drawer), tăng giảm số lượng, nhập mã voucher giảm giá và thanh toán.",
    tags: ["E-commerce Logic", "Cart Drawer", "Price Calculator", "Voucher System", "Toast & Modals"],
    starterUrl: "bai-08-shopping-cart/starter/index.html",
    solutionUrl: "bai-08-shopping-cart/solution/index.html",
    readmeContent: `<h2>Mục Tiêu Bài 08</h2><p>Xây dựng hệ thống giỏ hàng và thanh toán e-commerce mini.</p>`
  }
];

// ======================================================
// 2. CHUYỂN ĐỔI TAB CHÍNH (LABS vs PLAYGROUND vs BÀI TẬP)
// ======================================================
function initMainTabs() {
  const mainTabBtns = document.querySelectorAll('.main-tab-btn');
  const tabViews = document.querySelectorAll('.tab-view-content');

  mainTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      mainTabBtns.forEach(b => b.classList.remove('active'));
      tabViews.forEach(v => v.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const targetView = document.getElementById(targetId);
      if (targetView) targetView.classList.add('active');

      if (targetId === 'tabPlayground') {
        updatePlaygroundPreview();
      }
    });
  });
}

// ======================================================
// 3. 🧪 PHÒNG THÍ NGHIỆM TRỰC QUAN (INTERACTIVE LABS)
// ======================================================
function initInteractiveLabs() {
  // A. BOX MODEL STUDIO
  const padInput = document.getElementById('labPadInput');
  const marInput = document.getElementById('labMarInput');
  const radInput = document.getElementById('labRadInput');
  const borInput = document.getElementById('labBorInput');
  const widthInput = document.getElementById('labWidthInput');

  const padValText = document.getElementById('labPadVal');
  const marValText = document.getElementById('labMarVal');
  const radValText = document.getElementById('labRadVal');
  const borValText = document.getElementById('labBorVal');
  const widthValText = document.getElementById('labWidthVal');

  const simMarginBox = document.getElementById('simMarginBox');
  const simPaddingBox = document.getElementById('simPaddingBox');
  const simContentBox = document.getElementById('simContentBox');
  const boxModelCodeOutput = document.getElementById('boxModelCodeOutput');

  function updateBoxModel() {
    if (!padInput) return;
    const pad = padInput.value;
    const mar = marInput.value;
    const rad = radInput.value;
    const bor = borInput.value;
    const w = widthInput.value;

    padValText.textContent = `${pad}px`;
    marValText.textContent = `${mar}px`;
    radValText.textContent = `${rad}px`;
    borValText.textContent = `${bor}px`;
    widthValText.textContent = `${w}px`;

    // Cập nhật lên phần tử mô phỏng
    simMarginBox.style.padding = `${mar}px`;
    simPaddingBox.style.padding = `${pad}px`;
    simPaddingBox.style.borderRadius = `${rad}px`;
    simPaddingBox.style.borderWidth = `${bor}px`;
    simPaddingBox.style.width = `${w}px`;

    // Sinh mã CSS
    boxModelCodeOutput.textContent = `.chiec-hop {
  width: ${w}px;
  padding: ${pad}px;          /* Đệm trong: làm phồng hộp */
  margin: ${mar}px;           /* Lề ngoài: đẩy các hộp khác ra xa */
  border: ${bor}px solid #3b82f6; /* Viền bao quanh */
  border-radius: ${rad}px;    /* Bo góc tròn */
  box-sizing: border-box;
}`;
  }

  [padInput, marInput, radInput, borInput, widthInput].forEach(inp => {
    if (inp) inp.addEventListener('input', updateBoxModel);
  });
  updateBoxModel();

  // B. FLEXBOX PLAYGROUND
  const flexContainer = document.getElementById('labFlexContainer');
  const flexCodeOutput = document.getElementById('flexCodeOutput');
  const justifyBtns = document.querySelectorAll('[data-justify]');
  const alignBtns = document.querySelectorAll('[data-align]');
  const dirBtns = document.querySelectorAll('[data-direction]');
  const gapSlider = document.getElementById('labGapSlider');
  const gapValText = document.getElementById('labGapVal');

  let currentJustify = 'center';
  let currentAlign = 'center';
  let currentDir = 'row';
  let currentGap = '16';

  function updateFlexbox() {
    if (!flexContainer) return;
    flexContainer.style.justifyContent = currentJustify;
    flexContainer.style.alignItems = currentAlign;
    flexContainer.style.flexDirection = currentDir;
    flexContainer.style.gap = `${currentGap}px`;

    if (flexCodeOutput) {
      flexCodeOutput.textContent = `.khung-cha {
  display: flex;
  flex-direction: ${currentDir};
  justify-content: ${currentJustify};
  align-items: ${currentAlign};
  gap: ${currentGap}px;
}`;
    }
  }

  justifyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      justifyBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentJustify = btn.getAttribute('data-justify');
      updateFlexbox();
    });
  });

  alignBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      alignBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentAlign = btn.getAttribute('data-align');
      updateFlexbox();
    });
  });

  dirBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      dirBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDir = btn.getAttribute('data-direction');
      updateFlexbox();
    });
  });

  if (gapSlider) {
    gapSlider.addEventListener('input', (e) => {
      currentGap = e.target.value;
      if (gapValText) gapValText.textContent = `${currentGap}px`;
      updateFlexbox();
    });
  }
  updateFlexbox();

  // C. JAVASCRIPT DOM STUDIO
  const domTarget = document.getElementById('domTargetBox');
  const domTargetTitle = document.getElementById('domTargetTitle');
  const domTargetCount = document.getElementById('domTargetCount');
  const domCodeLog = document.getElementById('domCodeLog');

  let clickCounter = 0;
  const colors = ['#6366f1', '#ec4899', '#10b981', '#f59e0b', '#8b5cf6', '#06b6d4'];
  let colorIdx = 0;

  window.runDomAction = function(action) {
    if (!domTarget) return;

    if (action === 'changeColor') {
      colorIdx = (colorIdx + 1) % colors.length;
      const c = colors[colorIdx];
      domTarget.style.borderColor = c;
      domTarget.style.backgroundColor = c + '22'; // 15% opacity
      domCodeLog.textContent = `// 1. Đổi màu viền và màu nền bằng Javascript
const box = document.getElementById('targetBox');
box.style.borderColor = '${c}';
box.style.backgroundColor = '${c}22';`;
    } else if (action === 'changeText') {
      const messages = ['JavaScript thật tuyệt vời!', 'Giao diện đã thay đổi!', 'DOM Manipulation dễ hiểu!', 'Bạn đang lập trình Web!'];
      const m = messages[Math.floor(Math.random() * messages.length)];
      domTargetTitle.textContent = m;
      domCodeLog.textContent = `// 2. Thay đổi nội dung chữ
const title = document.getElementById('targetTitle');
title.textContent = '${m}';`;
    } else if (action === 'toggleShake') {
      domTarget.classList.toggle('shake');
      domCodeLog.textContent = `// 3. Bật/tắt class hiệu ứng
const box = document.getElementById('targetBox');
box.classList.toggle('shake');`;
    } else if (action === 'countUp') {
      clickCounter++;
      domTargetCount.textContent = clickCounter;
      domCodeLog.textContent = `// 4. Tăng biến đếm và gán ra giao diện
let count = ${clickCounter};
document.getElementById('counter').textContent = count;`;
    }
  };
}

// ======================================================
// 4. 💻 LIVE CODE PLAYGROUND (TỰ GÕ CODE & CHẠY TRỰC TIẾP)
// ======================================================
const codeTemplates = {
  profileCard: {
    html: `<div class="card">
  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" alt="Avatar" class="avatar">
  <h2>Lê Minh Anh</h2>
  <p class="role">Frontend Developer</p>
  <p class="bio">Đam mê học thiết kế web hiện đại và làm hiệu ứng CSS.</p>
  <button class="btn">Theo dõi</button>
</div>`,
    css: `body {
  font-family: sans-serif;
  background: #0f172a;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}
.card {
  background: #1e293b;
  padding: 30px;
  border-radius: 16px;
  text-align: center;
  width: 280px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);
}
.avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 3px solid #6366f1;
}
.role {
  color: #818cf8;
  font-size: 14px;
}
.bio {
  color: #94a3b8;
  font-size: 13px;
  line-height: 1.5;
}
.btn {
  background: #6366f1;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}
.btn:hover {
  background: #4f46e5;
}`,
    js: `document.querySelector('.btn').addEventListener('click', () => {
  alert('Cảm ơn bạn đã theo dõi!');
});`
  },
  neonButton: {
    html: `<div class="wrapper">
  <button class="neon-btn">Khám Phá Ngay</button>
</div>`,
    css: `body {
  background: #090d16;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: sans-serif;
}
.neon-btn {
  background: transparent;
  color: #06b6d4;
  border: 2px solid #06b6d4;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 9999px;
  cursor: pointer;
  letter-spacing: 1px;
  box-shadow: 0 0 15px rgba(6, 182, 212, 0.3);
  transition: all 0.3s ease;
}
.neon-btn:hover {
  background: #06b6d4;
  color: #090d16;
  box-shadow: 0 0 30px rgba(6, 182, 212, 0.8);
  transform: translateY(-3px);
}`,
    js: `console.log('Nút Neon sẵn sàng!');`
  },
  interactiveCounter: {
    html: `<div class="counter-box">
  <h3>Bộ Đếm JavaScript</h3>
  <h1 id="countText">0</h1>
  <div class="actions">
    <button id="btnMinus">- Giảm</button>
    <button id="btnPlus">+ Tăng</button>
  </div>
</div>`,
    css: `body {
  background: #111827;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: sans-serif;
}
.counter-box {
  background: #1f2937;
  padding: 30px;
  border-radius: 14px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0,0,0,0.4);
}
#countText {
  font-size: 48px;
  color: #10b981;
  margin: 10px 0 20px;
}
button {
  background: #374151;
  color: white;
  border: none;
  padding: 10px 18px;
  margin: 0 6px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
}
button:hover { background: #4b5563; }`,
    js: `let count = 0;
const text = document.getElementById('countText');
document.getElementById('btnPlus').addEventListener('click', () => {
  count++;
  text.textContent = count;
});
document.getElementById('btnMinus').addEventListener('click', () => {
  count--;
  text.textContent = count;
});`
  }
};

function initLivePlayground() {
  const htmlEditor = document.getElementById('editorHtml');
  const cssEditor = document.getElementById('editorCss');
  const jsEditor = document.getElementById('editorJs');
  const outputFrame = document.getElementById('playgroundOutput');
  const templateSelect = document.getElementById('templateSelect');
  const btnRun = document.getElementById('btnRunCode');
  const btnReset = document.getElementById('btnResetCode');
  const editorTabBtns = document.querySelectorAll('.editor-tab-btn');

  // Chuyển tab HTML / CSS / JS trong Playground
  editorTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      editorTabBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.code-textarea').forEach(t => t.classList.remove('active'));

      btn.classList.add('active');
      const lang = btn.getAttribute('data-lang');
      const target = document.getElementById(`editor${lang.charAt(0).toUpperCase() + lang.slice(1)}`);
      if (target) target.classList.add('active');
    });
  });

  // Tải template mẫu
  function loadTemplate(tplKey) {
    const tpl = codeTemplates[tplKey] || codeTemplates.profileCard;
    if (htmlEditor) htmlEditor.value = tpl.html;
    if (cssEditor) cssEditor.value = tpl.css;
    if (jsEditor) jsEditor.value = tpl.js;
    updatePlaygroundPreview();
  }

  window.updatePlaygroundPreview = function() {
    if (!outputFrame || !htmlEditor) return;
    const html = htmlEditor.value;
    const css = cssEditor.value;
    const js = jsEditor.value;

    const source = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          * { box-sizing: border-box; }
          ${css}
        </style>
      </head>
      <body>
        ${html}
        <script>
          try {
            ${js}
          } catch(err) {
            console.error(err);
          }
        <\/script>
      </body>
      </html>
    `;

    outputFrame.srcdoc = source;
  };

  // Cập nhật khi nhấn Run hoặc sau khi dừng gõ 500ms
  let debounceTimeout = null;
  [htmlEditor, cssEditor, jsEditor].forEach(ed => {
    if (ed) {
      ed.addEventListener('input', () => {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(updatePlaygroundPreview, 500);
      });
    }
  });

  if (btnRun) btnRun.addEventListener('click', updatePlaygroundPreview);
  if (btnReset) btnReset.addEventListener('click', () => {
    if (templateSelect) loadTemplate(templateSelect.value);
  });

  if (templateSelect) {
    templateSelect.addEventListener('change', (e) => loadTemplate(e.target.value));
  }

  // Khởi tạo template ban đầu
  loadTemplate('profileCard');
}

// ======================================================
// 5. 📚 KHO BÀI TẬP (9 BÀI TẬP VÀ MODAL PREVIEW)
// ======================================================
let currentFilter = 'all';
let currentSearch = '';
let activeModalExercise = null;
let currentPreviewMode = 'solution';

function initExercisesSection() {
  const exercisesGrid = document.getElementById('exercisesGrid');
  const filterBtns = document.querySelectorAll('.level-filter-btn');
  const searchInput = document.getElementById('searchInput');

  // Modals
  const previewModal = document.getElementById('previewModal');
  const previewIframe = document.getElementById('previewIframe');
  const previewModalTitle = document.getElementById('previewModalTitle');
  const modeSolutionBtn = document.getElementById('modeSolutionBtn');
  const modeStarterBtn = document.getElementById('modeStarterBtn');
  const deviceBtns = document.querySelectorAll('.device-btn');
  const btnOpenNewTab = document.getElementById('btnOpenNewTab');
  const btnClosePreview = document.getElementById('btnClosePreview');

  const readmeModal = document.getElementById('readmeModal');
  const readmeModalTitle = document.getElementById('readmeModalTitle');
  const readmeModalBody = document.getElementById('readmeModalBody');
  const btnCloseReadme = document.getElementById('btnCloseReadme');

  function renderCards() {
    if (!exercisesGrid) return;
    exercisesGrid.innerHTML = '';

    const filtered = exercises.filter(item => {
      const matchLevel = currentFilter === 'all' || item.level === currentFilter;
      const query = currentSearch.toLowerCase();
      const matchSearch = item.title.toLowerCase().includes(query) ||
                          item.desc.toLowerCase().includes(query) ||
                          item.tags.some(t => t.toLowerCase().includes(query));
      return matchLevel && matchSearch;
    });

    filtered.forEach(ex => {
      const card = document.createElement('div');
      card.className = 'exercise-card';

      let badgeClass = 'badge-basic';
      if (ex.level === 'medium') badgeClass = 'badge-medium';
      if (ex.level === 'advanced') badgeClass = 'badge-advanced';

      card.innerHTML = `
        <div class="card-top">
          <span class="card-num">${ex.num}</span>
          <span class="level-badge ${badgeClass}">${ex.levelText}</span>
        </div>

        <h3 class="card-title">${ex.title}</h3>
        <p class="card-desc">${ex.desc}</p>

        <div class="card-tags">
          ${ex.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>

        <div class="card-actions-grid">
          <button class="btn-action demo" onclick="openLivePreview(${ex.id}, 'solution')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            <span>Chạy Thử Demo</span>
          </button>
          <button class="btn-action starter" onclick="openLivePreview(${ex.id}, 'starter')">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            <span>Khung Starter</span>
          </button>
          <button class="btn-action readme" onclick="openReadmeModal(${ex.id})">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
            <span>Đề Bài</span>
          </button>
        </div>
      `;
      exercisesGrid.appendChild(card);
    });
  }

  // Mở Live Preview Modal
  window.openLivePreview = function(exerciseId, mode = 'solution') {
    activeModalExercise = exercises.find(e => e.id === exerciseId);
    if (!activeModalExercise) return;

    currentPreviewMode = mode;
    updatePreviewIframe();

    previewModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  function updatePreviewIframe() {
    if (!activeModalExercise) return;
    previewModalTitle.textContent = `${activeModalExercise.num}: ${activeModalExercise.title}`;

    if (currentPreviewMode === 'solution') {
      modeSolutionBtn.classList.add('active');
      modeStarterBtn.classList.remove('active');
      previewIframe.src = activeModalExercise.solutionUrl;
      btnOpenNewTab.href = activeModalExercise.solutionUrl;
    } else {
      modeStarterBtn.classList.add('active');
      modeSolutionBtn.classList.remove('active');
      previewIframe.src = activeModalExercise.starterUrl;
      btnOpenNewTab.href = activeModalExercise.starterUrl;
    }
  }

  if (modeSolutionBtn) modeSolutionBtn.addEventListener('click', () => { currentPreviewMode = 'solution'; updatePreviewIframe(); });
  if (modeStarterBtn) modeStarterBtn.addEventListener('click', () => { currentPreviewMode = 'starter'; updatePreviewIframe(); });

  deviceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      deviceBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.getAttribute('data-view');
      previewIframe.className = 'preview-iframe';
      if (view === 'tablet') previewIframe.classList.add('tablet');
      if (view === 'mobile') previewIframe.classList.add('mobile');
    });
  });

  if (btnClosePreview) {
    btnClosePreview.addEventListener('click', () => {
      previewModal.classList.add('hidden');
      previewIframe.src = 'about:blank';
      document.body.style.overflow = '';
    });
  }

  // Readme Modal
  window.openReadmeModal = function(exerciseId) {
    const ex = exercises.find(e => e.id === exerciseId);
    if (!ex) return;
    readmeModalTitle.textContent = `${ex.num}: ${ex.title}`;
    readmeModalBody.innerHTML = ex.readmeContent;
    readmeModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  if (btnCloseReadme) {
    btnCloseReadme.addEventListener('click', () => {
      readmeModal.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  // Lọc
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-level');
      renderCards();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim();
      renderCards();
    });
  }

  renderCards();
}

// Khởi chạy khi tải trang
document.addEventListener('DOMContentLoaded', () => {
  initMainTabs();
  initInteractiveLabs();
  initLivePlayground();
  initExercisesSection();
});
