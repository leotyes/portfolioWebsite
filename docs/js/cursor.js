const cursor = document.getElementById("cursor");

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
	mouseX = e.clientX;
	mouseY = e.clientY;
	cursor.style.left = e.clientX + "px";
	cursor.style.top = e.clientY + "px";
});

function bindCursorHover() {
	const cursor = document.getElementById("cursor");
	if (!cursor) return;

	const targets = document.querySelectorAll("a, button, .clickable");

	targets.forEach((el) => {
		if (el.dataset.cursorBound === "true") return;
		el.dataset.cursorBound = "true";

		el.addEventListener("mouseenter", () => {
			cursor.src = "pictures/CursorClick.png";
		});

		el.addEventListener("mouseleave", () => {
			cursor.src = "pictures/CursorNormal.png";
		});
	});
}

function bindIconHoverSwap() {
	document.querySelectorAll(".icon-swap").forEach((el) => {
		if (el.dataset.bound === "true") return;
		el.dataset.bound = "true";

		const iconType = el.dataset.icon;
		const img = el.querySelector("image");
		if (!img || !iconType) return;

		let inactive = `pictures/${iconType}inactive.svg`;
		let active = `pictures/${iconType}active.svg`;
		if (iconType == "ysc") {
			inactive = `pictures/${iconType}inactive.png`;
			active = `pictures/${iconType}active.png`;
		}

		el.addEventListener("mouseenter", () => {
			img.setAttribute("href", active);
		});

		el.addEventListener("mouseleave", () => {
			img.setAttribute("href", inactive);
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
