const projects = {
	portfolio: {
		title: "Portfolio Website",
		text: "Made with vanilla HTML, JS, and CSS.",
		image: "pictures/PortfolioWebsite.png",
		github: "https://github.com/leotyes/portfolioWebsite",
		devpost: "",
	},

	circuitforge: {
		title: "CircuitForge",
		text: "CircuitForge is a web app that helps beginners get started with PCB design by placing components and showing necessary connections. It uses an .ioc file, a components list, and pictures of your hardware setup to accurately create to produce a KiCAD file, which can be edited further. CircuitForge was made with React, FastAPI, and the Gemini API and won Best Usage of Generative AI at JAMHacks, the largest high school hackathon in Canada.",
		image: "pictures/CircuitForge.png",
		github: "https://github.com/leotyes/jamhacks10",
		devpost: "https://devpost.com/software/circuit-sync-924t85",
	},

	nexus: {
		title: "NEXUS",
            text: "NEXUS is a wearable assistive device designed to support communication for individuals with deafblindness by enabling real-time access to spoken conversations. It captures surrounding audio, identifies who is speaking, and converts speech into accessible formats such as braille and enlarged text, allowing users to independently follow group discussions. It was built using an STM32 and Raspberry Pi with C and Python, implementing a novel real-time speaker diarization system. NEXUS won multiple awards including the Silver Excellence Award, the Youth Can Innovate Award, the Canadian Acoustical Association Special Award, and the Digital Technology Challenge Award at the senior level of the Canada-Wide Science Fair.",
		image: "pictures/Nexus.png",
		github: "",
		devpost: "",
		ysc: "https://partner.projectboard.world/ysc/project/nexus-a-multimodal-device-for-deafblind-communication-using-hybrid-dynamic-speaker-diarization-ljyrrz/",
	},
};

function setProject(id) {
    const path = window.location.pathname.toLowerCase();

	if (!path.endsWith("projects.html")) return;
	const data = projects[id];
	if (!data) return;

	document.querySelector(".right-title").textContent = data.title;
	document.querySelector(".right-text").innerHTML = data.text;

	const img = document.querySelector(".right-title-image image");
	img.setAttribute("href", data.image);

	const githubBox = document.querySelector('[data-icon="github"]');
	const githubLink = githubBox.querySelector("a");

	if (data.github) {
		githubBox.style.display = "block";
		githubLink.setAttribute("href", data.github);
	} else {
		githubBox.style.display = "none";
	}

	const devpostBox = document.querySelector('[data-icon="devpost"]');
	const devpostLink = devpostBox.querySelector("a");

	if (data.devpost) {
		devpostBox.style.display = "block";
		devpostLink.setAttribute("href", data.devpost);
	} else {
		devpostBox.style.display = "none";
	}

	const yscBox = document.querySelector('[data-icon="ysc"]');
	const yscLink = yscBox.querySelector("a");

	if (data.ysc) {
		yscBox.style.display = "block";
		yscLink.setAttribute("href", data.ysc);
	} else {
		yscBox.style.display = "none";
	}
}

function bindProjectClicks() {
	document.querySelectorAll(".project-item-wrapper").forEach((el) => {
		el.addEventListener("click", () => {
			const id = el.dataset.project;
			setProject(id);
		});
	});
}
