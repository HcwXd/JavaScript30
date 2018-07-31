const msg = new SpeechSynthesisUtterance();
let voicesList = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

function generateVoicesList() {
    voicesList = this.getVoices();
    voicesDropdown.innerHTML = voicesList.map((voice) => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`).join('');
}

function setVoiceConfig() {
    msg.voice = voicesList.find((voice) => voice.name === this.value);
    console.log(msg);
    togglePlay();
}

function togglePlay(startOver = true) {
    speechSynthesis.cancel();
    if (startOver) {
        speechSynthesis.speak(msg);
    }
}

function handleOptionChange() {
    msg[this.name] = this.value;
    togglePlay();
}

options.forEach((option) => option.addEventListener('change', handleOptionChange));
voicesDropdown.addEventListener('change', setVoiceConfig);
speechSynthesis.addEventListener('voiceschanged', generateVoicesList);
speakButton.addEventListener('click', togglePlay);
stopButton.addEventListener('click', () => togglePlay(false));
