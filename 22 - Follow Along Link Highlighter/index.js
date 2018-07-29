const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.className = 'highlight';
document.body.appendChild(highlight);

function showHighlight() {
    let DOMRect = this.getBoundingClientRect();
    let cord = {
        width: DOMRect.width,
        height: DOMRect.height,
        top: DOMRect.top + window.scrollY,
        left: DOMRect.left + window.screenX,
    };
    highlight.style.width = `${cord.width + 8}px`;
    highlight.style.height = `${cord.height}px`;

    highlight.style.transform = `translate(${cord.left - 4}px, ${cord.top}px)`;
}

triggers.forEach((link) => link.addEventListener('mouseenter', showHighlight));
