function debounce(func, wait) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    };
}

window.addEventListener("scroll", function() {
    const hrAnims = document.getElementsByClassName("hr anim")
    Array.from(hrAnims).forEach( element => {
        const style = this.getComputedStyle(element)
        const currentPosition = style.getPropertyValue("--animation-progress") || "0"

        element.style.setProperty("--animation-duration", "6s")
    })

    debounce(() => {
        Array.from(hrAnims).forEach(element => {
            element.style.setProperty("--animation-duration", "60s");
        });
    }, 150)()
})