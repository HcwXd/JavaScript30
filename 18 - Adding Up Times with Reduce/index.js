const vidTimesNodes = [...document.querySelectorAll('[data-time]')];

const totalTime = vidTimesNodes
    .map((node) => node.dataset.time)
    .map((timeCode) => {
        const [min, sec] = timeCode.split(':').map(parseFloat);
        console.log([min, sec], min * 60 + sec);
        return min * 60 + sec;
    })
    .reduce((total, vidSecs) => total + vidSecs);

let secondsLeft = totalTime;

let hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

let mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(`${hours}:${mins}:${secondsLeft}`);
