// Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build functions
function togglePlayVideo() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function togglePlayBtn() {
    const btnIcon = video.paused ? '►' : '❚ ❚';
    toggle.textContent = btnIcon;
}

function skipVideo() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function updateInputChange() {
    video[this.name] = this.value;
}

function updateVideoTime() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function jumpByDrag(e) {
    const jumpTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = jumpTime;
}

// AddEventListener
video.addEventListener('click', togglePlayVideo);
video.addEventListener('pause', togglePlayBtn);
video.addEventListener('play', togglePlayBtn);
video.addEventListener('timeupdate', updateVideoTime);

let isMoving = false;
progress.addEventListener('mousemove', (e) => {
    isMoving && jumpByDrag(e);
});
progress.addEventListener('click', jumpByDrag);
progress.addEventListener('mousedown', () => (isMoving = true));
progress.addEventListener('mouseup', () => (isMoving = false));

toggle.addEventListener('click', togglePlayVideo);
skipButtons.forEach((btn) => btn.addEventListener('click', skipVideo));
ranges.forEach((range) => {
    range.addEventListener('change', updateInputChange);
});
