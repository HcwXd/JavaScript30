let secret = 'fuck';
let clean = 'ArrowUpArrowDownArrowLeftArrowRight';
let press_record = [];
window.addEventListener('keyup', (e) => {
    console.log(e.key);
    press_record.push(e.key);
    press_record.splice(-secret.length - 1, press_record.length - secret.length);
    if (press_record.join('').includes(secret)) {
        cornify_add();
    }
    if (press_record.join('').includes(clean)) {
        document.body.innerHTML = '';
    }
});
