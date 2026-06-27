const cursor = document.getElementById("cursor");

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

function bindCursorHover() {
    const cursor = document.getElementById("cursor");
    if (!cursor) return;

    document.querySelectorAll(".clickable").forEach(el => {
        if (el.dataset.bound === "true") return;
        el.dataset.bound = "true";

        el.addEventListener("mouseenter", () => {
            cursor.src = "pictures/CursorClick.png";
        });

        el.addEventListener("mouseleave", () => {
            cursor.src = "pictures/CursorNormal.png";
        });
    });
}

function syncCursorState() {
    const cursor = document.getElementById("cursor");
    if (!cursor) return;

    const el = document.elementFromPoint(mouseX, mouseY);

    if (el && el.closest(".clickable")) {
        cursor.src = "pictures/CursorClick.png";
    } else {
        cursor.src = "pictures/CursorNormal.png";
    }
}