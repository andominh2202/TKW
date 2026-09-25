// ==========================================================
// BÀI 18: JAVASCRIPT HTML5 AUDIO API & PLAYLIST
// ==========================================================

const playlist = [
  {
    title: "Chill Coding Beats",
    artist: "SoundHelix Melody 1",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Deep Focus Flow",
    artist: "SoundHelix Melody 2",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Late Night Synthesizer",
    artist: "SoundHelix Melody 3",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80"
  }
];

let currentTrackIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;

const audio = new Audio();
audio.src = playlist[currentTrackIndex].src;
audio.volume = 0.8;

// Các phần tử DOM
const vinylDisc = document.getElementById('vinylDisc');
const trackCover = document.getElementById('trackCover');
const trackTitle = document.getElementById('trackTitle');
const trackArtist = document.getElementById('trackArtist');

const progressTrack = document.getElementById('progressTrack');
const progressBar = document.getElementById('progressBar');
const currentTimeText = document.getElementById('currentTimeText');
const durationTimeText = document.getElementById('durationTimeText');

const btnPlayPause = document.getElementById('btnPlayPause');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const btnShuffle = document.getElementById('btnShuffle');
const btnRepeat = document.getElementById('btnRepeat');
const volumeSlider = document.getElementById('volumeSlider');

const btnTogglePlaylist = document.getElementById('btnTogglePlaylist');
const btnClosePlaylist = document.getElementById('btnClosePlaylist');
const playlistDrawer = document.getElementById('playlistDrawer');
const playlistList = document.getElementById('playlistList');

// 1. TẢI THÔNG TIN BÀI HÁT
function loadTrack(index) {
  currentTrackIndex = index;
  const track = playlist[currentTrackIndex];
  audio.src = track.src;
  trackTitle.textContent = track.title;
  trackArtist.textContent = track.artist;
  trackCover.src = track.cover;
  progressBar.style.width = '0%';
  currentTimeText.textContent = '00:00';

  renderPlaylistItems();
}

// 2. PHÁT VÀ DỪNG
function playAudio() {
  audio.play().then(() => {
    isPlaying = true;
    btnPlayPause.textContent = '⏸';
    vinylDisc.classList.add('playing');
  }).catch(e => {
    console.log('Chờ tương tác người dùng để phát audio:', e);
  });
}

function pauseAudio() {
  audio.pause();
  isPlaying = false;
  btnPlayPause.textContent = '▶';
  vinylDisc.classList.remove('playing');
}

btnPlayPause.addEventListener('click', () => {
  if (isPlaying) {
    pauseAudio();
  } else {
    playAudio();
  }
});

// 3. TIẾN ĐỘ THỜI GIAN & TUA BÀI
function formatTime(seconds) {
  if (isNaN(seconds)) return '00:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${percent}%`;
    currentTimeText.textContent = formatTime(audio.currentTime);
  }
});

audio.addEventListener('loadedmetadata', () => {
  durationTimeText.textContent = formatTime(audio.duration);
});

// Tua bài khi bấm chuột vào thanh progressTrack
progressTrack.addEventListener('click', (e) => {
  const rect = progressTrack.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const width = rect.width;
  if (audio.duration) {
    audio.currentTime = (clickX / width) * audio.duration;
  }
});

// 4. CHUYỂN BÀI (NEXT / PREV)
function nextTrack() {
  if (isShuffle) {
    let rand = Math.floor(Math.random() * playlist.length);
    while (rand === currentTrackIndex && playlist.length > 1) {
      rand = Math.floor(Math.random() * playlist.length);
    }
    loadTrack(rand);
  } else {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
  }
  playAudio();
}

function prevTrack() {
  currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrackIndex);
  playAudio();
}

btnNext.addEventListener('click', nextTrack);
btnPrev.addEventListener('click', prevTrack);

// Tự động chuyển bài khi kết thúc
audio.addEventListener('ended', () => {
  if (isRepeat) {
    audio.currentTime = 0;
    playAudio();
  } else {
    nextTrack();
  }
});

// Toggle Shuffle & Repeat
btnShuffle.addEventListener('click', () => {
  isShuffle = !isShuffle;
  btnShuffle.classList.toggle('active', isShuffle);
});

btnRepeat.addEventListener('click', () => {
  isRepeat = !isRepeat;
  btnRepeat.classList.toggle('active', isRepeat);
});

// Chỉnh âm lượng
volumeSlider.addEventListener('input', (e) => {
  audio.volume = e.target.value;
});

// 5. PLAYLIST DRAWER
function renderPlaylistItems() {
  if (!playlistList) return;
  playlistList.innerHTML = '';
  playlist.forEach((track, i) => {
    const li = document.createElement('li');
    li.className = `playlist-item ${i === currentTrackIndex ? 'active' : ''}`;
    li.setAttribute('data-index', i);

    const img = document.createElement('img');
    img.src = track.cover;
    img.alt = `${track.title} Cover`;
    img.className = 'pl-cover';

    const infoDiv = document.createElement('div');
    infoDiv.className = 'pl-info';

    const titleSpan = document.createElement('span');
    titleSpan.className = 'pl-title';
    titleSpan.textContent = track.title;

    const artistSpan = document.createElement('span');
    artistSpan.className = 'pl-artist';
    artistSpan.textContent = track.artist;

    infoDiv.appendChild(titleSpan);
    infoDiv.appendChild(artistSpan);

    const statusSpan = document.createElement('span');
    statusSpan.textContent = (i === currentTrackIndex && isPlaying) ? '🔊' : '';

    li.appendChild(img);
    li.appendChild(infoDiv);
    li.appendChild(statusSpan);

    playlistList.appendChild(li);
  });
}

// Event delegation thay vì inline onclick
if (playlistList) {
  playlistList.addEventListener('click', (e) => {
    const item = e.target.closest('.playlist-item');
    if (!item) return;
    const index = Number(item.getAttribute('data-index'));
    if (!isNaN(index)) {
      loadTrack(index);
      playAudio();
    }
  });
}

btnTogglePlaylist.addEventListener('click', () => {
  playlistDrawer.classList.toggle('hidden');
});

btnClosePlaylist.addEventListener('click', () => {
  playlistDrawer.classList.add('hidden');
});

// Đóng drawer khi nhấn phím Escape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && playlistDrawer && !playlistDrawer.classList.contains('hidden')) {
    playlistDrawer.classList.add('hidden');
  }
});

// Khởi tạo ban đầu
loadTrack(0);
