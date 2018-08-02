const divs = document.querySelectorAll('div');

function logText() {
    console.log(this.classList.value);
}

// Bubble
// divs.forEach((div) => div.addEventListener('click', logText));

// Capture
// divs.forEach((div) => div.addEventListener('click', logText, { capture: true }));

// Once
divs.forEach((div) => div.addEventListener('click', logText, { capture: true, once: true }));
