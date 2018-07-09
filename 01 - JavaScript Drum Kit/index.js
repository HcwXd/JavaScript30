function removeTransition(e) {
    if (e.propertyName !== "transform") {
        return;
    }
    this.classList.remove("playing");
}


function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    key.classList.add("playing");

    audio.currentTime = 0;
    audio.play();
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);