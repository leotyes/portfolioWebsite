const projects = {
	portfolio: {
		title: "Portfolio Website",
		text: "You're on it right now!",
		image: "pictures/PortfolioWebsite.png",
		github: "",
		devpost: "",
	},

	circuitforge: {
		title: "CircuitForge",
		text: "Web app that helps hobbyists design PCBs",
		image: "pictures/circuitforge.jpeg",
		github: "https://github.com/...",
		devpost: "https://devpost.com/...",
	},

	nexus: {
		title: "NEXUS",
		text: "Assistive device that helps people with deafblindness follow conversations",
		image: "pictures/nexus.jpeg",
		github: "",
		devpost: "",
        ysc: "https://ysc.com"
	},
};

function setProject(id) {
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