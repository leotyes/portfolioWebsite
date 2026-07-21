const cursor = document.getElementById("cursor");
let mouseX = 0;
let mouseY = 0;
let cursorFrame = null;
let cursorMode = "normal";

// Detect coarse pointer (touch) devices
const isTouch = window.matchMedia('(pointer: coarse)').matches || /Mobi|Android|iPhone|iPad|Tablet|Mobile/.test(navigator.userAgent);

if (isTouch) {
  if (cursor) cursor.style.display = "none";
} else {
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

		if (cursorFrame !== null) return;

		cursorFrame = window.requestAnimationFrame(() => {
			cursorFrame = null;

			if (!cursor) return;

			cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
			syncCursorState();
		});
  });
}

function setCursorMode(mode) {
	if (!cursor || cursorMode === mode) return;
	cursorMode = mode;
	cursor.src = mode === "click" ? "pictures/CursorClick.png" : "pictures/CursorNormal.png";
}

function bindCursorHover() {
	const cursor = document.getElementById("cursor");
	if (!cursor) return;

	const targets = document.querySelectorAll("a, button, .clickable");

	targets.forEach((el) => {
		if (el.dataset.cursorBound === "true") return;
		el.dataset.cursorBound = "true";

		el.addEventListener("mouseenter", () => {
			setCursorMode("click");
		});

		el.addEventListener("mouseleave", () => {
			setCursorMode("normal");
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
		setCursorMode("click");
	} else {
		setCursorMode("normal");
	}
}
