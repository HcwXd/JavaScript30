const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function showWrap() {
    this.classList.add('trigger-enter');
    setTimeout(() => {
        this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active');
    }, 150);
    const dropdown = this.querySelector('.dropdown');
    const cords = dropdown.getBoundingClientRect();
    const navCords = nav.getBoundingClientRect();

    background.classList.add('open');
    background.style.width = `${cords.width}px`;
    background.style.height = `${cords.height}px`;
    background.style.top = `${cords.top - navCords.top}px`;
    background.style.left = `${cords.left - navCords.left}px`;
}

function hideWrap() {
    background.classList.remove('open');

    this.classList.remove('trigger-enter', 'trigger-enter-active');
}

triggers.forEach((trigger) => trigger.addEventListener('mouseenter', showWrap));
triggers.forEach((trigger) => trigger.addEventListener('mouseleave', hideWrap));
