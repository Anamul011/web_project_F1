
window.addEventListener('scroll', function () {
    const image = document.querySelector('.unique-image');
    const position = image.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
        image.classList.add('visible');
    }
});


// For the audios 


const audio = document.getElementById('customAudio');
const playBtn = document.getElementById('playBtn');
const progressBar = document.getElementById('progressBar');
const current = document.getElementById('current');
const total = document.getElementById('total');
const progressContainer = document.querySelector('.progress-bar-container');

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = '⏸️ Pause';
  } else {
    audio.pause();
    playBtn.textContent = '▶️ Play';
  }
});

audio.addEventListener('loadedmetadata', () => {
  total.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = percent + '%';
  current.textContent = formatTime(audio.currentTime);
});

progressContainer.addEventListener('click', (e) => {
  const width = progressContainer.clientWidth;
  const offsetX = e.offsetX;
  audio.currentTime = (offsetX / width) * audio.duration;
});

function formatTime(time) {
  const mins = Math.floor(time / 60);
  const secs = Math.floor(time % 60);
  return `${mins}:${secs < 10 ? '0' + secs : secs}`;
}





