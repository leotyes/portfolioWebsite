function bindSpaLinks() {
	document.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", async (e) => {
			const url = link.href;

			if (!url.startsWith(window.location.origin)) return;
            if (link.hasAttribute("download")) return;

			e.preventDefault();

			try {
				const html = await fetch(url).then((r) => r.text());
				const doc = new DOMParser().parseFromString(html, "text/html");
				await syncPageStyles(doc);

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
                    bindIconHoverSwap();
                    bindProjectClicks();
                    setProject("portfolio");
					applyBodyStyles();
					updateRightTitle(); // TODO do not remove make the update functions all one function
				});
			} catch (err) {}
		});
	});
}

function syncPageStyles(doc) {
	const currentStyles = Array.from(document.querySelectorAll('link[rel="stylesheet"][href*="css/"]'));
	const nextStyles = Array.from(doc.querySelectorAll('link[rel="stylesheet"][href*="css/"]')).map((link) =>
		link.cloneNode(true)
	);

	const loadStyles = nextStyles.map(
		(link) =>
			new Promise((resolve) => {
				link.addEventListener("load", resolve, { once: true });
				link.addEventListener("error", resolve, { once: true });
				document.head.appendChild(link);
			})
	);

	return Promise.all(loadStyles).then(() => {
		currentStyles.forEach((link) => link.remove());
	});
}

document.addEventListener("DOMContentLoaded", () => {
	bindSpaLinks();
	backUpdater();
	updateSvgButtons();
	bindCursorHover();
    bindIconHoverSwap();
    bindProjectClicks();
    setProject("portfolio");
	syncCursorState();
	updateRightTitle();
    applyBodyStyles();
});

function applyBodyStyles() {
	const path = window.location.pathname.toLowerCase();

	if (path.endsWith("resume.html") || path.endsWith("about.html")) {
        console.log("switched");
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
            padding-left: 12vw !important;
        `;
	}
}

window.addEventListener("popstate", async () => {
	const url = window.location.href;

	try {
		const html = await fetch(url).then((r) => r.text());
		const doc = new DOMParser().parseFromString(html, "text/html");
		await syncPageStyles(doc);

		const newContent = doc.querySelector("#app");
		if (!newContent) return;

		document.querySelector("#app").innerHTML = newContent.innerHTML;

		requestAnimationFrame(() => {
			backUpdater();
			updateSvgButtons();
			bindCursorHover();
			syncCursorState();
            bindIconHoverSwap();
			applyBodyStyles();
			updateRightTitle();
            bindProjectClicks();
            setProject("portfolio");
		});

		bindSpaLinks();
	} catch (err) {
		console.error(err);
	}
});
