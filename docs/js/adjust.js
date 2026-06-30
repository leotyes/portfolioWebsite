function fitSvgText(textEl, maxWidth) {
	const fullText = textEl.dataset.fullText || textEl.textContent.trim();
	textEl.dataset.fullText = fullText;
	console.log(textEl.getComputedTextLength() + " textlength");
	console.log(maxWidth);
    textEl.textContent = fullText;
    textEl.getBoundingClientRect();

	if (textEl.getComputedTextLength() <= maxWidth) {
		console.log("alreayd less");
		textEl.textContent = fullText;
		return;
	}

	let low = 0;
	let high = fullText.length;
	let best = fullText;

	while (low < high) {
		const mid = Math.ceil((low + high) / 2);
		const candidate = fullText.slice(0, mid) + "...";

		textEl.textContent = candidate;
		const len = textEl.getComputedTextLength();

		if (len <= maxWidth) {
			low = mid;
			best = candidate;
		} else {
			high = mid - 1;
		}
	}
    console.log(best)
	textEl.textContent = best;
}

function updateProjectSubtext(wrapper, width) {
	const subtext = wrapper.querySelector(".project-subtext");
	if (!subtext) return;

	fitSvgText(subtext, width - 36);
}

function updateSvgButtons() {
	const wrapperSelectors = [".cyber-button-wrapper", ".project-item-wrapper"];

	for (const selector of wrapperSelectors) {
		const wrappers = document.querySelectorAll(selector);

		for (const wrapper of wrappers) {
			const svg = wrapper.querySelector("svg");
			const path = wrapper.querySelector("path");

			if (!svg || !path) continue;

			const width = wrapper.clientWidth;
			let height = wrapper.clientHeight;
			if (selector == ".project-item-wrapper") {
				height = 80;
			}
			const cut = height * 0.325;

			svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

			const d = `
                M0 0
                H${width}
                V${height - cut}
                L${width - cut} ${height}
                H0
                Z
		    `;

			path.setAttribute("d", d);

			if (selector === ".cyber-button-wrapper") {
				const text = svg.querySelector("text");

				if (text) {
					text.setAttribute("y", height * 0.55);
					text.setAttribute("dominant-baseline", "middle");

					const fontSize = Math.max(14, Math.min(24, height * 0.5));
					text.setAttribute("font-size", fontSize);
				}
			} else if (selector === ".project-item-wrapper") {
				updateProjectSubtext(wrapper, width);
			}
		}
	}
}

function updateRightTitle() {
	const wrappers = document.querySelectorAll(".right-title-image");

	for (const wrapper of wrappers) {
		console.log("applied");
		const svg = wrapper.querySelector("svg");
		const path = document.getElementById("main-path");
		const image = wrapper.querySelector("image");
		const clipPath = document.getElementById("clip-path-shape");

		if (!svg || !path) continue;

		const width = wrapper.clientWidth;
		const height = wrapper.clientHeight;
		const pad = 1;
		const cut = 16;

		svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

		const d = `
			M0 0
			H${width}
			V${height - cut}
			L${width - cut} ${height}
			H0
			Z
		`;

		const d2 = `
			M${pad} ${pad}
			H${width - pad}
			V${height - pad - cut}
			L${width - pad - cut} ${height - pad}
			H${pad}
			Z
		`;

		path.setAttribute("d", d);
		clipPath.setAttribute("d", d2);

		image.setAttribute("width", width);
		image.setAttribute("height", height);
	}
}

function backUpdater() {
	const wrappers = document.querySelectorAll(".back-button");

	for (const wrapper of wrappers) {
		const svg = wrapper.querySelector("svg");
		const path = wrapper.querySelector("path");
		const text = wrapper.querySelector("text");

		if (!svg || !path) continue;

		const width = wrapper.clientWidth;
		const height = wrapper.clientHeight;

		const cut = height * 0.25;

		svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

		const d = `
			M0 0
			H${width}
			V${height - cut}
			L${width - cut} ${height}
			H0
			Z
		`;

		path.setAttribute("d", d);

		if (text) {
			console.log(height / 2);
			text.setAttribute("y", height * 0.625);
		}
	}

	const download = document.querySelectorAll(".download-button");

	if (download) {
		for (const wrapper of download) {
			const svg = wrapper.querySelector("svg");
			const path = wrapper.querySelector("path");
			const text = wrapper.querySelector("text");

			if (!svg || !path) continue;

			const width = wrapper.clientWidth;
			const height = wrapper.clientHeight;

			const cut = height * 0.25;

			svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

			const d = `
			M0 0
			H${width}
			V${height - cut}
			L${width - cut} ${height}
			H0
			Z
		`;

			path.setAttribute("d", d);

			if (text) {
				console.log(height / 2);
				text.setAttribute("y", height * 0.625);
			}
		}
	}
}

window.addEventListener("load", backUpdater);
window.addEventListener("resize", backUpdater);
window.addEventListener("load", updateSvgButtons);
window.addEventListener("resize", updateSvgButtons);
window.addEventListener("load", updateRightTitle);
window.addEventListener("resize", updateRightTitle);
