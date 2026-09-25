# Bài 18: Trình Phát Nhạc Mini (HTML5 Audio API & Playlist)

## 🎯 Mục Tiêu Bài Học
Xây dựng một ứng dụng nghe nhạc Spotify thu nhỏ bằng chính đối tượng JavaScript **`new Audio()`**:
- Điều khiển phát nhạc: `audio.play()`, `audio.pause()`, `audio.paused`.
- Lắng nghe các sự kiện âm thanh:
  - `timeupdate`: Cập nhật thời gian đang chạy (`audio.currentTime`) và % độ rộng thanh tiến độ (`progress bar`).
  - `loadedmetadata`: Lấy tổng thời lượng bài hát (`audio.duration`).
  - `ended`: Tự động chuyển sang bài tiếp theo khi bài hiện tại hát xong.
- Kỹ thuật **Tua bài hát (Seek / Scrub bar)**: Bấm chuột vào bất kỳ vị trí nào trên thanh tiến độ để nhảy thời gian phát.
- Hoạt họa đĩa than quay đều (`animation: spinVinyl 10s linear infinite`) đồng bộ với trạng thái đang phát (Play/Pause).
- Quản lý danh sách mảng bài hát (Playlist) và chuyển bài Trước / Kế tiếp (`prevTrack`, `nextTrack`).

---

## 🛠️ Yêu Cầu Đề Bài
1. **Giao Diện Máy Phát Nhạc**:
   - Ảnh bìa album tròn hình đĩa than (Vinyl Disc) tự động xoay khi đang phát nhạc và dừng lại khi tạm dừng.
   - Tên bài hát, tên nghệ sĩ và nhãn thời gian: `01:25 / 03:45`.
   - Thanh tiến độ tùy biến: Có con trượt hoặc thanh màu chạy ngang.
   - Bộ nút điều khiển: Phát ngẫu nhiên (Shuffle), Bài trước (Prev), Nút Play/Pause lớn, Bài kế (Next), Lặp lại (Repeat).
   - Thanh trượt âm lượng (Volume Slider).
2. **Danh Sách Phát (Playlist Drawer)**:
   - Danh sách các bài hát trong album, bấm vào bài nào sẽ lập tức phát bài đó và làm nổi bật hàng đang phát.

---

## 📝 Mã Mẫu Xử Lý Audio API
```javascript
const audio = new Audio();

function playTrack(index) {
  currentTrackIndex = index;
  audio.src = playlist[currentTrackIndex].src;
  audio.play();
  playBtn.textContent = '⏸️';
  vinylDisc.classList.add('playing');
}

// Cập nhật thanh tiến độ
audio.addEventListener('timeupdate', () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${percent}%`;
  currentTimeEl.textContent = formatTime(audio.currentTime);
});

// Tua bài hát khi click vào thanh tiến độ
progressContainer.addEventListener('click', (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  audio.currentTime = (clickX / width) * audio.duration;
});
```
