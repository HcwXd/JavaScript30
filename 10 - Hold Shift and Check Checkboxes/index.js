let lastChecked;
let isInBetween = false;

function handleCheck(e) {
    if (e.shiftKey && this.checked) {
        input_node.forEach((node) => {
            if (node === lastChecked || node === this) {
                isInBetween = !isInBetween;
            }
            if (isInBetween) {
                node.checked = true;
            }
        });
    }

    lastChecked = this;
}

const input_node = document.querySelectorAll('input');
input_node.forEach((node) => {
    node.addEventListener('click', handleCheck);
});
