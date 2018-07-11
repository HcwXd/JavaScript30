const inputs = document.querySelectorAll(".controls input");

function updateCSS() {
    const suffix = this.dataset.sizing || ""; //dataset gets attribute with prefix data-
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}


inputs.forEach(input => input.addEventListener("change", updateCSS));
inputs.forEach(input => input.addEventListener("mousemove", updateCSS));