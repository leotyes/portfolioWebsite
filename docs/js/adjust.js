function updateSvgButtons() {
	const wrapperSelectors = [".cyber-button-wrapper", ".project-item-wrapper"];

	for (const selector of wrapperSelectors) {
		const wrappers = document.querySelectorAll(selector);

		for (const wrapper of wrappers) {
			const svg = wrapper.querySelector("svg");
			const path = wrapper.querySelector("path");

			if (!svg || !path) continue;

			const width = wrapper.clientWidth;
			let height = 60;
			if (selector == ".project-item-wrapper") {
				height = 80;
			}
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

			path.setAttribute("d", d);
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
