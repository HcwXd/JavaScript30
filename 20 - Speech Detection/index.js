window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.interimResults = true;
recognition.lang = 'en-US';

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', (e) => {
    // console.log(e);

    // console.log(e.results[0]);
    let transcript = [...e.results]
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');

    if (transcript.includes('***')) {
        alert('bad word alert!');
    }
    if (transcript.includes('happy')) {
        alert('glad to hear that you are happy!');
    }
    p.innerText = transcript;

    if (e.results[0].isFinal) {
        p = document.createElement('p');
        const words = document.querySelector('.words');
        words.appendChild(p);
    }
});

recognition.addEventListener('end', recognition.start);

recognition.start();
