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

    radius: {
		title: "Radius",
            text: "Radius is a native mobile app designed to connect local businesses with customers. It allows businesses to post polls, discounts, and announcements, increasing their reach within their communities. Radius was built with Expo React Native, the Places API, Drizzle ORM, and a Supabase backend. Radius won ninth place at FBLC's Canadian National Leadership Conference in the Coding and Programming event.",
		image: "pictures/Radius2.png",
		github: "https://github.com/acise03/fblcCP",
		devpost: "",
		ysc: "",
	},

    deltadispatch: {
		title: "DeltaDispatch",
            text: "DeltaDispatch is an AI-powered 911 dispatch system that prioritizes calls based on urgency, allowing dispatchers to address the most time-critical calls first. Compared to traditional dispatch systems, which prompt users to call again when all dispatchers are busy, DeltaDispatch uses the Gemini API to provide dispatchers with information even when they are busy. It was built with Twilio API, Gemini API, FastAPI, Redis, and Next.js at DeltaHacks",
		image: "pictures/DeltaDispatch.png",
		github: "https://github.com/Penguin60/deltahacks-xii",
		devpost: "https://devpost.com/software/delta-dispatch",
		ysc: "",
	},

    trashtag: {
		title: "TrashTag",
            text: "TrashTag is a native Android app that gamifies environmental cleanup. It awards points to users who report or pick up trash with photographic evidence. TrashTag was made with the Places API, a Firebase backend, and Android Kotlin. It won third place at IncubatorHacks.",
		image: "pictures/TrashTag2.png",
		github: "https://github.com/leotyes/TrashTagMobileApp",
		devpost: "https://devpost.com/software/trashtag-o1itd0",
		ysc: "",
	},

    leaf: {
		title: "Leaf",
            text: "Leaf is a native Android todo list with time- and location-based reminders. It was made with Android Kotlin, XML UI, Room database, and follows the MVVM architecture.",
		image: "pictures/Leaf2.png",
		github: "https://github.com/leotyes/TodoList",
		devpost: "",
		ysc: "",
	},

    studylocal: {
		title: "StudyLocal",
            text: "StudyLocal is a web app that allow students to find and compare the best study spots with several filters such as WiFi availability, accessibility, and noise level. It was made with vanilla HTML, CSS, JavaScript, and the Maps API at Ignition Hacks, my first hackathon.",
		image: "pictures/StudyLocal2.jpg",
		github: "https://github.com/STRSigmas/ignitionHacksSTRSigmas",
		devpost: "https://devpost.com/software/studylocal",
		ysc: "",
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
