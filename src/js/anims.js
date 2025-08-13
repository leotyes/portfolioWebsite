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
        element.style.setProperty("--animation-duration", "20s")
    })

    debounce(() => {
        Array.from(hrAnims).forEach(element => {
            element.style.setProperty("--animation-duration", "120s");

        });
    }, 150)()
})