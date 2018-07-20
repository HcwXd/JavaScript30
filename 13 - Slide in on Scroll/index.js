function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkScroll() {
    sliderImages.forEach((img) => {
        let scrollDistanceToImgMiddle = window.scrollY + window.innerHeight - img.height / 2;
        let distanceToImgBottom = img.offsetTop + img.height;
        let isScrollToMiddle = scrollDistanceToImgMiddle > img.offsetTop;
        let isNotScrollOverBottom = window.scrollY < distanceToImgBottom;
        if (isScrollToMiddle && isNotScrollOverBottom) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkScroll));
