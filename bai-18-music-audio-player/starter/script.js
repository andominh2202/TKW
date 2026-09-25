// TODO: Viết logic Audio API
const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
const btnPlay = document.getElementById('btnPlay');
const progressBar = document.getElementById('progressBar');
const progressWrap = document.getElementById('progressWrap');

let isPlaying = false;

btnPlay.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    btnPlay.textContent = '▶';
  } else {
    audio.play().catch(err => console.log('Chờ tương tác để phát audio:', err));
    btnPlay.textContent = '⏸';
  }
  isPlaying = !isPlaying;
});

audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${percent}%`;
  }
});

progressWrap.addEventListener('click', (e) => {
  const width = progressWrap.clientWidth;
  const clickX = e.offsetX;
  if (audio.duration) {
    audio.currentTime = (clickX / width) * audio.duration;
  }
});
