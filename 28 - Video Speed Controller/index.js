const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleSpeedChange(e) {
    let innerDistance = e.pageY - this.offsetTop;
    let innerPercent = innerDistance / this.offsetHeight;

    let height = Math.round(innerPercent * 100) + '%';
    let min = 0.5;
    let max = 5;
    let speedRate = innerPercent * (max - min) + min;

    bar.style.height = height;
    bar.textContent = speedRate.toFixed(2) + 'x';

    video.playbackRate = speedRate;
}

speed.addEventListener('mousemove', handleSpeedChange);
