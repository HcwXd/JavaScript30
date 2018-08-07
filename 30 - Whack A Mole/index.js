const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

let lastHole;
let timeUp = false;
let score = 0;
let GAMETIME = 30000;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    let holeIdx = Math.floor(Math.random() * holes.length);
    let hole = holes[holeIdx];
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function molePop() {
    let popTime = randomTime(300, 800);
    let popHole = randomHole(holes);

    popHole.classList.add('up');
    setTimeout(() => {
        popHole.classList.remove('up');
        if (!timeUp) molePop();
    }, popTime);
}

function startGame() {
    score = 0;
    scoreBoard.textContent = score;

    timeUp = false;
    molePop();
    setTimeout(() => {
        timeUp = true;
    }, GAMETIME);
}

function hitMole(e) {
    if (!e.isTrusted) return;

    this.parentNode.classList.remove('up');
    score++;
    scoreBoard.textContent = score;
}

moles.forEach((mole) => mole.addEventListener('click', hitMole));
