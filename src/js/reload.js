function bindSpaLinks() {
	document.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", async (e) => {
			const url = link.href;

			if (!url.startsWith(window.location.origin)) return;

			e.preventDefault();

			try {
				const html = await fetch(url).then((r) => r.text());
				const doc = new DOMParser().parseFromString(html, "text/html");

				const newContent = doc.querySelector("#app");
				if (!newContent) return;

				document.querySelector("#app").innerHTML = newContent.innerHTML;

				history.pushState({}, "", url);

				bindSpaLinks();

				requestAnimationFrame(() => {
					backUpdater();
					updateSvgButtons();
					bindCursorHover();
					syncCursorState();
					applyBodyStyles();
					updateRightTitle(); // TODO do not remove make the update functions all one function
				});
			} catch (err) {}
		});
	});
}

document.addEventListener("DOMContentLoaded", () => {
	bindSpaLinks();
	backUpdater();
	updateSvgButtons();
	bindCursorHover();
	syncCursorState();
	updateRightTitle();
});

function applyBodyStyles() {
	const path = window.location.pathname.toLowerCase();

	if (path.endsWith("resume.html")) {
		document.body.style.cssText = `
            margin: 0;
            height: 100vh;

            background: #07070a;

            font-family: "Poppins", sans-serif;

            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: 0px !important;
        `;
	} else if (path.endsWith("projects.html") || path.endsWith("index.html")) {
        console.log("working");
		document.body.style.cssText = `
            margin: 0;
            height: 100vh;
            background: #07070a;
            font-family: "Poppins", sans-serif;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-left: 12vw;
        `;
	}
}

window.addEventListener("popstate", async () => {
	const url = window.location.href;

	try {
		const html = await fetch(url).then((r) => r.text());
		const doc = new DOMParser().parseFromString(html, "text/html");

		const newContent = doc.querySelector("#app");
		if (!newContent) return;

		document.querySelector("#app").innerHTML = newContent.innerHTML;

		requestAnimationFrame(() => {
			backUpdater();
			updateSvgButtons();
			bindCursorHover();
			syncCursorState();
			applyBodyStyles();
			updateRightTitle();
		});

		bindSpaLinks();
	} catch (err) {
		console.error(err);
	}
});
