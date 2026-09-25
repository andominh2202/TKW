// ======================================================
// DEVCRAFT WEBLAB - NỀN TẢNG HỌC THIẾT KẾ WEB TƯƠNG TÁC
// Hệ Thống 19 Bài Tập Toàn Diện (HTML • CSS • JavaScript)
// & 6 Phòng Thí Nghiệm Trực Quan Chuyên Sâu
// ======================================================

// ======================================================
// 1. DỮ LIỆU KHO 19 BÀI TẬP THỰC CHIẾN (TỪ SỐ 0 ĐẾN NÂNG CAO)
// ======================================================
const exercises = [
  // --- PHẦN 1: 🟢 NHẬP MÔN & CƠ BẢN (5 BÀI) ---
  {
    id: 0,
    num: "BÀI 00",
    title: "Khởi Động: Làm Quen Thẻ, Bố Cục, Margin & Padding",
    level: "basic",
    levelText: "🟢 Nhập môn",
    tech: "css",
    desc: "Hiểu sâu bản chất CSS Box Model (Content - Padding - Border - Margin), kéo thanh trượt nhìn hộp phồng to và học 3 dòng Flexbox căn giữa.",
    tags: ["CSS Box Model", "Margin vs Padding", "Thẻ HTML Cơ Bản", "Border Radius", "Flexbox Căn Giữa"],
    starterUrl: "bai-00-nhap-mon-box-model/starter/index.html",
    solutionUrl: "bai-00-nhap-mon-box-model/solution/index.html",
    labLink: "labBoxModel",
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
    tech: "css",
    desc: "Căn giữa thẻ Card hoàn hảo bằng Flexbox, bo góc ảnh avatar hình tròn (50%), hiệu ứng đổ bóng đa tầng và các badge kỹ năng mềm mại.",
    tags: ["HTML5 Semantic", "CSS Box Model", "Flexbox Center", "Border Radius", "Box Shadow"],
    starterUrl: "bai-01-profile-card/starter/index.html",
    solutionUrl: "bai-01-profile-card/solution/index.html",
    labLink: "labFlexContainer",
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
    tech: "html",
    desc: "Thiết kế form chuẩn trợ năng, tùy biến focus viền phát sáng (:focus-visible), custom checkbox và layout 2 cột tự chuyển thành 1 cột trên mobile.",
    tags: ["HTML Form", "Input Styling", "Focus Glow", "Custom Checkbox", "Responsive Grid"],
    starterUrl: "bai-02-contact-form/starter/index.html",
    solutionUrl: "bai-02-contact-form/solution/index.html",
    readmeContent: `<h2>Mục Tiêu Bài 02</h2><p>Thiết kế form nhập liệu chuyên nghiệp, viền phát sáng và responsive.</p>`
  },
  {
    id: 9,
    num: "BÀI 09",
    title: "Trang Báo Điện Tử Đa Phương Tiện (Semantic Blog)",
    level: "basic",
    levelText: "🟢 Cơ bản",
    tech: "html",
    desc: "Cấu trúc chuẩn SEO với thẻ ngữ nghĩa HTML5: article, aside, figure, figcaption, time, audio podcast và khối FAQ native details/summary.",
    tags: ["HTML5 Semantic", "article & aside", "figure & figcaption", "audio tag", "details & summary"],
    starterUrl: "bai-09-semantic-blog/starter/index.html",
    solutionUrl: "bai-09-semantic-blog/solution/index.html",
    readmeContent: `
      <h2>Mục Tiêu Bài 09 (HTML5 Semantic)</h2>
      <p>Học cách phân cấp ngữ nghĩa chuẩn quốc tế, giúp Google SEO nhận diện bài viết và Screen Reader hỗ trợ người khiếm thị đọc chuẩn xác.</p>
      <h3>Thẻ mới trong bài:</h3>
      <ul>
        <li><code>&lt;article&gt;</code>: Khung bài viết độc lập.</li>
        <li><code>&lt;aside&gt;</code>: Thanh bên nội dung phụ và thông tin tác giả.</li>
        <li><code>&lt;figure&gt; &amp; &lt;figcaption&gt;</code>: Chèn ảnh kèm chú thích nguồn ảnh.</li>
        <li><code>&lt;time datetime="..."&gt;</code>: Thời gian định dạng ISO cho máy tìm kiếm.</li>
        <li><code>&lt;details&gt; &amp; &lt;summary&gt;</code>: FAQ đóng mở không cần JavaScript.</li>
      </ul>
    `
  },
  {
    id: 10,
    num: "BÀI 10",
    title: "Bảng Dữ Liệu Báo Cáo Tài Chính (Advanced Tables)",
    level: "basic",
    levelText: "🟢 Cơ bản",
    tech: "html",
    desc: "Xây dựng bảng doanh thu phức tạp: thead, tbody, tfoot, colspan gộp cột, rowspan, scope trợ năng và kỹ thuật CSS Sticky Header khi cuộn dài.",
    tags: ["HTML Tables", "thead & tbody & tfoot", "colspan & rowspan", "Sticky Header", "Responsive Table"],
    starterUrl: "bai-10-financial-table/starter/index.html",
    solutionUrl: "bai-10-financial-table/solution/index.html",
    readmeContent: `
      <h2>Mục Tiêu Bài 10 (HTML Tables Chuyên Sâu)</h2>
      <p>Làm chủ cấu trúc bảng dữ liệu, gộp ô và kỹ thuật Sticky Header cố định tiêu đề khi người dùng cuộn xem báo cáo.</p>
      <h3>Thuộc tính trọng tâm:</h3>
      <ul>
        <li><code>colspan="3"</code>: Gộp 3 cột thành 1 ô ở hàng tổng kết tfoot.</li>
        <li><code>scope="col" / scope="row"</code>: Thuộc tính trợ năng cho Screen Readers.</li>
        <li><code>position: sticky; top: 0;</code>: Giữ hàng thead dính ở đỉnh bảng.</li>
      </ul>
    `
  },

  // --- PHẦN 2: 🟡 TRUNG CẤP (5 BÀI) ---
  {
    id: 3,
    num: "BÀI 03",
    title: "Bảng Báo Giá Dịch Vụ (Pricing Table)",
    level: "medium",
    levelText: "🟡 Trung cấp",
    tech: "css",
    desc: "Chia 3 cột cân xứng bằng CSS Grid, làm nổi bật gói Khuyên Dùng (Pro) với ruy-băng badge và tích hợp công tắc chuyển đổi tháng/năm.",
    tags: ["CSS Grid", "Popular Ribbon", "Toggle Switch", "Hover 3D Lift", "Feature Checklist"],
    starterUrl: "bai-03-pricing-table/starter/index.html",
    solutionUrl: "bai-03-pricing-table/solution/index.html",
    labLink: "labGridStudio",
    readmeContent: `<h2>Mục Tiêu Bài 03</h2><p>Ứng dụng CSS Grid chia 3 cột và công tắc thanh toán tháng/năm.</p>`
  },
  {
    id: 4,
    num: "BÀI 04",
    title: "Landing Page Header & Hero Section",
    level: "medium",
    levelText: "🟡 Trung cấp",
    tech: "css",
    desc: "Thanh điều hướng dính cố định (Sticky) hiệu ứng kính mờ, menu Hamburger mượt mà trên mobile và khu vực Hero banner cực kỳ ấn tượng.",
    tags: ["Sticky Header", "Glassmorphism", "Mobile Hamburger", "Hero Layout", "Typography"],
    starterUrl: "bai-04-landing-hero/starter/index.html",
    solutionUrl: "bai-04-landing-hero/solution/index.html",
    readmeContent: `<h2>Mục Tiêu Bài 04</h2><p>Xây dựng Landing Page Header & Hero chuẩn responsive.</p>`
  },
  {
    id: 11,
    num: "BÀI 11",
    title: "Hệ Thống Giao Diện Sáng / Tối (Dark & Light Theme)",
    level: "medium",
    levelText: "🟡 Trung cấp",
    tech: "css",
    desc: "Quản trị toàn bộ màu sắc bằng biến CSS (:root), công tắc đổi giao diện chuyển màu êm ái và lưu lựa chọn vào LocalStorage.",
    tags: ["CSS Variables :root", "Dark Mode", "LocalStorage State", "prefers-color-scheme", "Smooth Transition"],
    starterUrl: "bai-11-theme-dark-light/starter/index.html",
    solutionUrl: "bai-11-theme-dark-light/solution/index.html",
    readmeContent: `
      <h2>Mục Tiêu Bài 11 (Theme System Hiện Đại)</h2>
      <p>Xây dựng hệ thống đổi màu sáng/tối chuyên nghiệp chuẩn các web lớn (GitHub, Youtube) qua CSS Custom Properties.</p>
    `
  },
  {
    id: 12,
    num: "BÀI 12",
    title: "CSS Animation & Hiệu Ứng Thẻ 3D Tilt (Keyframes)",
    level: "medium",
    levelText: "🟡 Trung cấp",
    tech: "css",
    desc: "Làm chủ chuyển động CSS với @keyframes, thẻ lật 2 mặt 3D bằng perspective, quả cầu phát sáng Neon Pulse và khung chờ Skeleton Shimmer.",
    tags: ["CSS @keyframes", "3D Perspective", "rotateY Flip Card", "Neon Glow Pulse", "Skeleton Shimmer"],
    starterUrl: "bai-12-css-animation-3d/starter/index.html",
    solutionUrl: "bai-12-css-animation-3d/solution/index.html",
    labLink: "labAnimStudio",
    readmeContent: `
      <h2>Mục Tiêu Bài 12 (Animation & 3D)</h2>
      <p>Làm chủ không gian 3D và các hoạt ảnh chuyển động CSS thuần túy.</p>
    `
  },
  {
    id: 13,
    num: "BÀI 13",
    title: "Menu Đa Cấp & Ngăn Kéo Offcanvas (Mega Menu)",
    level: "medium",
    levelText: "🟡 Trung cấp",
    tech: "css",
    desc: "Thanh điều hướng thương mại điện tử: Submenu dropdown khi hover, Mega Menu chia 3 cột danh mục và ngăn kéo trượt ra từ mép trái mobile.",
    tags: ["Responsive Nav", "Mega Menu 3 Columns", "Dropdown Hover", "Offcanvas Drawer", "Backdrop Blur"],
    starterUrl: "bai-13-responsive-megamenu/starter/index.html",
    solutionUrl: "bai-13-responsive-megamenu/solution/index.html",
    readmeContent: `
      <h2>Mục Tiêu Bài 13 (Mega Menu & Offcanvas)</h2>
      <p>Thiết kế hệ thống điều hướng phức tạp cho web lớn, hỗ trợ mobile slide drawer hoàn hảo.</p>
    `
  },

  // --- PHẦN 3: 🔴 NÂNG CAO JAVASCRIPT (9 BÀI) ---
  {
    id: 14,
    num: "BÀI 14",
    title: "Máy Tính Cầm Tay Thông Minh (Smart Calculator)",
    level: "advanced",
    levelText: "🔴 Nâng cao",
    tech: "js",
    desc: "Ứng dụng máy tính hoàn chỉnh: xử lý số thập phân, phần trăm, đổi dấu ±, bắt phím bàn phím vật lý (0-9, Enter, Backspace) và lưu lịch sử.",
    tags: ["JavaScript Class", "Math Calculation", "Keyboard Events (keydown)", "History Stack", "Edge Cases"],
    starterUrl: "bai-14-smart-calculator/starter/index.html",
    solutionUrl: "bai-14-smart-calculator/solution/index.html",
    readmeContent: `
      <h2>Mục Tiêu Bài 14 (JavaScript Logic Máy Tính)</h2>
      <p>Xây dựng logic tính toán chặt chẽ, xử lý trường hợp chia cho 0, dấu thập phân và bàn phím máy tính.</p>
    `
  },
  {
    id: 15,
    num: "BÀI 15",
    title: "Trình Tạo Mật Khẩu An Toàn & Đánh Giá Độ Mạnh",
    level: "advanced",
    levelText: "🔴 Nâng cao",
    tech: "js",
    desc: "Thuật toán sinh chuỗi ngẫu nhiên tùy biến (hoa, thường, số, ký tự đặc biệt), đo độ mạnh thời gian thực bằng Regex và sao chép Clipboard 1-click.",
    tags: ["Password Generator", "Regex Pattern", "Entropy Strength Meter", "Clipboard API", "Toast Notifications"],
    starterUrl: "bai-15-password-generator/starter/index.html",
    solutionUrl: "bai-15-password-generator/solution/index.html",
    readmeContent: `
      <h2>Mục Tiêu Bài 15 (Bảo Mật & Clipboard)</h2>
      <p>Thuật toán sinh mật khẩu ngẫu nhiên và đo độ an toàn theo 4 cấp bậc màu sắc.</p>
    `
  },
  {
    id: 5,
    num: "BÀI 05",
    title: "Ứng Dụng Quản Lý Công Việc (To-Do App)",
    level: "advanced",
    levelText: "🔴 Nâng cao",
    tech: "js",
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
    tech: "js",
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
    tech: "js",
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
    tech: "js",
    desc: "Cửa hàng phụ kiện công nghệ hoàn chỉnh: thêm vào giỏ, ngăn kéo trượt (Slide-in Drawer), tăng giảm số lượng, nhập mã voucher giảm giá và thanh toán.",
    tags: ["E-commerce Logic", "Cart Drawer", "Price Calculator", "Voucher System", "Toast & Modals"],
    starterUrl: "bai-08-shopping-cart/starter/index.html",
    solutionUrl: "bai-08-shopping-cart/solution/index.html",
    readmeContent: `<h2>Mục Tiêu Bài 08</h2><p>Xây dựng hệ thống giỏ hàng và thanh toán e-commerce mini.</p>`
  },
  {
    id: 16,
    num: "BÀI 16",
    title: "Dự Báo Thời Tiết Live API (Async/Await & Fetch)",
    level: "advanced",
    levelText: "🔴 Nâng cao",
    tech: "js",
    desc: "Gọi Open-Meteo REST API lấy dữ liệu khí tượng thực tế: xử lý Promise, async/await, bắt lỗi mạng try...catch, loading spinner và chip thành phố nhanh.",
    tags: ["Async / Await", "Fetch API", "Open-Meteo REST API", "Loading Spinner", "Try Catch Handling"],
    starterUrl: "bai-16-weather-app/starter/index.html",
    solutionUrl: "bai-16-weather-app/solution/index.html",
    labLink: "labAsyncStudio",
    readmeContent: `
      <h2>Mục Tiêu Bài 16 (Gọi Mạng Bất Đồng Bộ API)</h2>
      <p>Kỹ năng quan trọng nhất cho lập trình Frontend: gọi API, xử lý vòng đời Loading / Success / Error bằng async/await.</p>
    `
  },
  {
    id: 17,
    num: "BÀI 17",
    title: "Bảng Kanban Kéo Thả (HTML5 Drag & Drop API)",
    level: "advanced",
    levelText: "🔴 Nâng cao",
    tech: "js",
    desc: "Bảng quản lý công việc Jira/Trello: sự kiện dragstart, dragover, drop, kéo thả di chuyển thẻ giữa 3 cột To-Do, In Progress, Done và lưu LocalStorage.",
    tags: ["HTML5 Drag & Drop", "dragstart & drop", "Kanban Columns", "Task Modal", "LocalStorage Sync"],
    starterUrl: "bai-17-drag-drop-kanban/starter/index.html",
    solutionUrl: "bai-17-drag-drop-kanban/solution/index.html",
    readmeContent: `
      <h2>Mục Tiêu Bài 17 (Kéo Thả Phần Tử Drag & Drop)</h2>
      <p>Ứng dụng native HTML5 Drag and Drop API xây dựng bảng Kanban tương tác chuyên nghiệp.</p>
    `
  },
  {
    id: 18,
    num: "BÀI 18",
    title: "Trình Phát Nhạc Mini (HTML5 Audio API & Playlist)",
    level: "advanced",
    levelText: "🔴 Nâng cao",
    tech: "js",
    desc: "App nghe nhạc Spotify thu nhỏ: new Audio(), thanh tiến độ tua bài hát scrub bar, đĩa than vinyl quay khi phát, danh sách phát Playlist và âm lượng.",
    tags: ["HTML5 Audio API", "Time Scrub Bar", "Vinyl Spin Animation", "Playlist Management", "Volume Control"],
    starterUrl: "bai-18-music-audio-player/starter/index.html",
    solutionUrl: "bai-18-music-audio-player/solution/index.html",
    readmeContent: `
      <h2>Mục Tiêu Bài 18 (Xử Lý Âm Thanh Audio API)</h2>
      <p>Quản lý luồng phát nhạc, tua bài hát theo thời gian thực và đồng bộ hoạt ảnh đĩa than.</p>
    `
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

// Chuyển tới một Lab cụ thể trong Tab 1
window.goToLab = function(labElementId) {
  const tabLabsBtn = document.querySelector('[data-tab="tabLabs"]');
  if (tabLabsBtn) tabLabsBtn.click();

  setTimeout(() => {
    const el = document.getElementById(labElementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.style.outline = '2px solid #38bdf8';
      setTimeout(() => el.style.outline = '', 2000);
    }
  }, 100);
};

// ======================================================
// 3. 🧪 PHÒNG THÍ NGHIỆM TRỰC QUAN (6 INTERACTIVE LABS)
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

    simMarginBox.style.padding = `${mar}px`;
    simPaddingBox.style.padding = `${pad}px`;
    simPaddingBox.style.borderRadius = `${rad}px`;
    simPaddingBox.style.borderWidth = `${bor}px`;
    simPaddingBox.style.width = `${w}px`;

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
      domTarget.style.backgroundColor = c + '22';
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

  // D. MODULE 4: CSS GRID 2D STUDIO
  const labGridContainer = document.getElementById('labGridContainer');
  const gridCodeOutput = document.getElementById('gridCodeOutput');
  const gridColBtns = document.querySelectorAll('[data-grid-cols]');
  const gridGapSlider = document.getElementById('labGridGapSlider');
  const gridGapVal = document.getElementById('labGridGapVal');
  const gridItemCountSlider = document.getElementById('labGridItemCountSlider');
  const gridItemCountVal = document.getElementById('labGridItemCountVal');

  let currentGridCols = 'repeat(3, 1fr)';
  let currentGridGap = '16';
  let currentItemCount = 6;

  function updateGridStudio() {
    if (!labGridContainer) return;
    labGridContainer.style.gridTemplateColumns = currentGridCols;
    labGridContainer.style.gap = `${currentGridGap}px`;

    // Render số lượng ô
    labGridContainer.innerHTML = '';
    for (let i = 1; i <= currentItemCount; i++) {
      const cell = document.createElement('div');
      cell.className = 'grid-item-cell';
      cell.textContent = i;
      labGridContainer.appendChild(cell);
    }

    if (gridCodeOutput) {
      gridCodeOutput.textContent = `.khung-luoi-grid {
  display: grid;
  grid-template-columns: ${currentGridCols};
  gap: ${currentGridGap}px;
}`;
    }
  }

  gridColBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      gridColBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentGridCols = btn.getAttribute('data-grid-cols');
      updateGridStudio();
    });
  });

  if (gridGapSlider) {
    gridGapSlider.addEventListener('input', (e) => {
      currentGridGap = e.target.value;
      if (gridGapVal) gridGapVal.textContent = `${currentGridGap}px`;
      updateGridStudio();
    });
  }

  if (gridItemCountSlider) {
    gridItemCountSlider.addEventListener('input', (e) => {
      currentItemCount = parseInt(e.target.value, 10);
      if (gridItemCountVal) gridItemCountVal.textContent = `${currentItemCount} ô`;
      updateGridStudio();
    });
  }
  updateGridStudio();

  // E. MODULE 5: CSS ANIMATION & KEYFRAMES STUDIO
  const animTarget = document.getElementById('animTargetElement');
  const animCodeOutput = document.getElementById('animCodeOutput');
  const animBtns = document.querySelectorAll('[data-anim]');
  const timingBtns = document.querySelectorAll('[data-timing]');
  const animDurSlider = document.getElementById('labAnimDurSlider');
  const animDurVal = document.getElementById('labAnimDurVal');

  let currentAnim = 'animBounce';
  let currentDur = '1.5';
  let currentTiming = 'ease-in-out';

  function updateAnimStudio() {
    if (!animTarget) return;
    animTarget.style.animation = `${currentAnim} ${currentDur}s ${currentTiming} infinite`;

    if (animCodeOutput) {
      animCodeOutput.textContent = `@keyframes ${currentAnim} {
  /* Các khung hình chuyển động... */
}

.phan-tu {
  animation-name: ${currentAnim};
  animation-duration: ${currentDur}s;
  animation-timing-function: ${currentTiming};
  animation-iteration-count: infinite;
}`;
    }
  }

  animBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      animBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentAnim = btn.getAttribute('data-anim');
      updateAnimStudio();
    });
  });

  timingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      timingBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTiming = btn.getAttribute('data-timing');
      updateAnimStudio();
    });
  });

  if (animDurSlider) {
    animDurSlider.addEventListener('input', (e) => {
      currentDur = e.target.value;
      if (animDurVal) animDurVal.textContent = `${currentDur}s`;
      updateAnimStudio();
    });
  }
  updateAnimStudio();

  // F. MODULE 6: JAVASCRIPT ASYNC & FETCH API SIMULATOR
  const btnTriggerAsync = document.getElementById('btnTriggerAsync');
  const asyncPacket = document.getElementById('asyncPacket');
  const asyncStatePill = document.getElementById('asyncStatePill');
  const asyncSimulationMode = document.getElementById('asyncSimulationMode');
  const asyncConsoleLog = document.getElementById('asyncConsoleLog');

  if (btnTriggerAsync) {
    btnTriggerAsync.addEventListener('click', () => {
      const mode = asyncSimulationMode.value;
      btnTriggerAsync.disabled = true;
      asyncPacket.classList.add('flying');

      asyncStatePill.className = 'async-state-pill pending';
      asyncStatePill.textContent = '⏳ PENDING (Đang gửi request & chờ server...)';

      asyncConsoleLog.textContent = `// 1. Gửi lệnh fetch()
console.log('Sending GET request to https://api.example.com/data...');
const promise = fetch('/api/data'); // Trạng thái ban đầu: PENDING`;

      setTimeout(() => {
        asyncPacket.classList.remove('flying');
        btnTriggerAsync.disabled = false;

        if (mode === 'success') {
          asyncStatePill.className = 'async-state-pill resolved';
          asyncStatePill.textContent = '✅ RESOLVED (200 OK - Nhận JSON thành công)';
          asyncConsoleLog.textContent = `// 2. Server phản hồi thành công 200 OK:
const response = await fetch('/api/data');
const data = await response.json();

console.log('Kết quả nhận về:', {
  status: 200,
  message: "Success",
  users: [
    { id: 1, name: "Minh Anh", role: "Frontend Dev" },
    { id: 2, name: "Tuấn Kiệt", role: "Backend Dev" }
  ]
});`;
        } else {
          asyncStatePill.className = 'async-state-pill rejected';
          asyncStatePill.textContent = '❌ REJECTED (500 Error - Bắt lỗi trong catch)';
          asyncConsoleLog.textContent = `// 3. Xảy ra lỗi kết nối mạng (Bắt trong catch block):
try {
  const response = await fetch('/api/data');
  if (!response.ok) throw new Error('Máy chủ gặp sự cố (500 Internal Error)');
} catch (error) {
  console.error('Bắt lỗi thành công:', error.message);
  alert('Không thể tải dữ liệu, vui lòng thử lại sau!');
}`;
        }
      }, 1800);
    });
  }
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
  font-size: 3rem;
  margin: 16px 0;
  color: #10b981;
}
.actions button {
  padding: 8px 16px;
  margin: 0 6px;
  border-radius: 6px;
  border: none;
  background: #374151;
  color: white;
  cursor: pointer;
  font-weight: bold;
}`,
    js: `let c = 0;
document.getElementById('btnPlus').addEventListener('click', () => {
  c++;
  document.getElementById('countText').textContent = c;
});
document.getElementById('btnMinus').addEventListener('click', () => {
  c--;
  document.getElementById('countText').textContent = c;
});`
  }
};

function initLivePlayground() {
  const templateSelect = document.getElementById('templateSelect');
  const editorHtml = document.getElementById('editorHtml');
  const editorCss = document.getElementById('editorCss');
  const editorJs = document.getElementById('editorJs');
  const editorTabs = document.querySelectorAll('.editor-tab-btn');
  const textareas = document.querySelectorAll('.code-textarea');
  const outputFrame = document.getElementById('playgroundOutput');
  const btnRun = document.getElementById('btnRunCode');
  const btnReset = document.getElementById('btnResetCode');

  function loadTemplate(tplKey) {
    const tpl = codeTemplates[tplKey];
    if (!tpl) return;
    if (editorHtml) editorHtml.value = tpl.html;
    if (editorCss) editorCss.value = tpl.css;
    if (editorJs) editorJs.value = tpl.js;
    updatePlaygroundPreview();
  }

  function updatePlaygroundPreview() {
    if (!outputFrame) return;
    const html = editorHtml ? editorHtml.value : '';
    const css = editorCss ? editorCss.value : '';
    const js = editorJs ? editorJs.value : '';

    const combined = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}<\/script>
        </body>
      </html>
    `;

    const doc = outputFrame.contentDocument || outputFrame.contentWindow.document;
    doc.open();
    doc.write(combined);
    doc.close();
  }

  // Chuyển tab HTML / CSS / JS trong Editor
  editorTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      editorTabs.forEach(b => b.classList.remove('active'));
      textareas.forEach(t => t.classList.remove('active'));

      btn.classList.add('active');
      const lang = btn.getAttribute('data-lang');
      if (lang === 'html' && editorHtml) editorHtml.classList.add('active');
      if (lang === 'css' && editorCss) editorCss.classList.add('active');
      if (lang === 'js' && editorJs) editorJs.classList.add('active');
    });
  });

  // Tự động cập nhật sau 500ms khi gõ
  let debounceTimeout = null;
  [editorHtml, editorCss, editorJs].forEach(ta => {
    if (ta) {
      ta.addEventListener('input', () => {
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

  loadTemplate('profileCard');
}

// ======================================================
// 5. 📚 KHO 19 BÀI TẬP (MODAL PREVIEW & BỘ LỌC ĐA NĂNG)
// ======================================================
let currentFilter = 'all';
let currentTechFilter = 'all';
let currentSearch = '';
let activeModalExercise = null;
let currentPreviewMode = 'solution';

function initExercisesSection() {
  const exercisesGrid = document.getElementById('exercisesGrid');
  const levelFilterBtns = document.querySelectorAll('.level-filter-btn');
  const techFilterBtns = document.querySelectorAll('.tech-filter-btn');
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
      const matchTech = currentTechFilter === 'all' || item.tech === currentTechFilter;
      const query = currentSearch.toLowerCase();
      const matchSearch = item.title.toLowerCase().includes(query) ||
                          item.desc.toLowerCase().includes(query) ||
                          item.tags.some(t => t.toLowerCase().includes(query));
      return matchLevel && matchTech && matchSearch;
    });

    if (filtered.length === 0) {
      exercisesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: rgba(255,255,255,0.02); border-radius: 16px; border: 1px dashed rgba(255,255,255,0.1);">
          <div style="font-size: 2.5rem; margin-bottom: 12px;">🔍</div>
          <h3 style="color: white; margin-bottom: 6px;">Không tìm thấy bài tập phù hợp</h3>
          <p style="color: var(--text-muted);">Thử xóa bớt từ khóa tìm kiếm hoặc chọn bộ lọc "Tất cả".</p>
        </div>
      `;
      return;
    }

    filtered.forEach(ex => {
      const card = document.createElement('div');
      card.className = 'exercise-card';

      let badgeClass = 'badge-basic';
      if (ex.level === 'medium') badgeClass = 'badge-medium';
      if (ex.level === 'advanced') badgeClass = 'badge-advanced';

      const labButtonHtml = ex.labLink ? `
        <button class="btn-action" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3);" onclick="goToLab('${ex.labLink}')" title="Mở phòng thí nghiệm trực quan cho chủ đề này">
          <span>👁️ Thí Nghiệm</span>
        </button>
      ` : '';

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
            <span>Demo Lời Giải</span>
          </button>
          <button class="btn-action starter" onclick="openLivePreview(${ex.id}, 'starter')">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            <span>Mã Khung</span>
          </button>
          <button class="btn-action readme" onclick="openReadmeModal(${ex.id})">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
            <span>Đề Bài</span>
          </button>
          ${labButtonHtml}
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

    let visualLabBanner = '';
    if (ex.labLink) {
      visualLabBanner = `
        <div style="background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 12px; padding: 16px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
          <div>
            <strong style="color: #38bdf8; display: block; font-size: 0.95rem;">💡 Có Ví Dụ Trực Quan Cho Bài Này!</strong>
            <span style="font-size: 0.85rem; color: #cbd5e1;">Nếu thấy khái niệm khó hiểu, hãy bấm nút bên cạnh để mở phòng thí nghiệm tương tác.</span>
          </div>
          <button style="background: #0284c7; color: white; border: none; padding: 8px 16px; border-radius: 8px; font-weight: 700; cursor: pointer;" onclick="document.getElementById('btnCloseReadme').click(); goToLab('${ex.labLink}');">
            Mở Thí Nghiệm Trực Quan ➔
          </button>
        </div>
      `;
    }

    readmeModalBody.innerHTML = visualLabBanner + ex.readmeContent;
    readmeModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  if (btnCloseReadme) {
    btnCloseReadme.addEventListener('click', () => {
      readmeModal.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  // Lọc theo Cấp Độ
  levelFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      levelFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-level');
      renderCards();
    });
  });

  // Lọc theo Môn Học
  techFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      techFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTechFilter = btn.getAttribute('data-tech');
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
