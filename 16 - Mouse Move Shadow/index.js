const wrap = document.querySelector('.hero');
const text = document.querySelector('h1');
const shadowBasis = 500;

function renderShadow(e) {
    const { offsetWidth: wrapWidth, offsetHeight: wrapHeight } = wrap;
    let { offsetX: x, offsetY: y } = e;

    if (e.target !== this) {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }

    let xShadow = Math.round((x / wrapWidth) * shadowBasis - shadowBasis / 2);
    let yShadow = Math.round((y / wrapHeight) * shadowBasis - shadowBasis / 2);

    text.style.textShadow = `
    ${xShadow}px ${yShadow}px 0 rgba(0, 255, 0 , 0.7),
    ${-xShadow}px ${yShadow}px 0 rgba(255, 0, 0 , 0.7),
    ${xShadow}px ${-yShadow}px 0 rgba(0, 0, 255, 0.7),
    ${-xShadow}px ${-yShadow}px 0 rgba(0, 255, 255 , 0.7),
    ${xShadow * 2}px ${yShadow * 2}px 10px rgba(0, 255, 0 , 0.7),
    ${-xShadow * 2}px ${yShadow * 2}px 10px rgba(255, 0, 0 , 0.7),
    ${xShadow * 2}px ${-yShadow * 2}px 10px rgba(0, 0, 255, 0.7),
    ${-xShadow * 2}px ${-yShadow * 2}px 10px rgba(0, 255, 255 , 0.7)
    `;
}

wrap.addEventListener('mousemove', renderShadow);
