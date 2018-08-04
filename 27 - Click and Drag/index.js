const slider = document.querySelector('.items');

let isMouseDown = false;
let mouseDownX;
let sliderScrollX;

slider.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    slider.classList.add('active');

    mouseDownX = e.pageX - slider.offsetLeft;
    sliderScrollX = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isMouseDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isMouseDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isMouseDown) {
        return;
    }
    let mouseMoveX = e.pageX - slider.offsetLeft;
    let moveDistance = (mouseMoveX - mouseDownX) * 1.5;
    slider.scrollLeft = sliderScrollX - moveDistance;
});
