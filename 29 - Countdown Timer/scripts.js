let countDownTimer;
const leftTimeDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end-time');
const btn = document.querySelectorAll('[data-time]');

function timer(seconds) {
    clearInterval(countDownTimer);

    let endTime = Date.now() + seconds * 1000;
    displayLeftTime(seconds);
    displayEndTime(endTime);

    countDownTimer = setInterval(() => {
        let secLeft = Math.round((endTime - Date.now()) / 1000);
        displayLeftTime(secLeft);
        if (secLeft <= 0) {
            clearInterval(countDownTimer);
        }
    }, 1000);
}

function displayLeftTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    let displayText = `${min}:${('0' + sec).slice(-2)}`;
    leftTimeDisplay.textContent = displayText;
    document.title = displayText;
}

function displayEndTime(seconds) {
    let endTime = new Date(seconds);
    let hour = endTime.getHours();
    let min = endTime.getMinutes();
    let displayText = `Be Back At ${('0' + hour).slice(-2)}:${('0' + min).slice(-2)}`;
    endTimeDisplay.textContent = displayText;
}

function handleBtnClick() {
    timer(parseInt(this.dataset.time));
}

btn.forEach((btn) => btn.addEventListener('click', handleBtnClick));

document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
});
