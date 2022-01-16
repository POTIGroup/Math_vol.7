const card1 = document.getElementById("0");
const card2 = document.getElementById("1");
const card3 = document.getElementById("2");
const card4 = document.getElementById("3");
const card5 = document.getElementById("4");
const card6 = document.getElementById("5");
const counter = document.getElementById("counter");
const clearButton = document.getElementById("clear-point-button");

var point = 0;

window.onload = () => {
	if (localStorage.totalPoint == null) {
		clearStorage();
	}
	
	if (localStorage.totalPoint == "0") {
		confettiParticle();
	}

	clearButton.onclick = () => {
		clearStorage();
		confettiFire();
	};

	if (localStorage.totalPoint == "100") {
		confettiParticle();
	}

	card1.addEventListener("click", () => {
		if (localStorage.point1 == "false") {
			localStorage.totalPoint = parseInt(localStorage.totalPoint) + 5;
		};
		localStorage.point1 = "true";
	});

	card2.addEventListener("click", () => {
		if (localStorage.point2 == "false") {
			localStorage.totalPoint = parseInt(localStorage.totalPoint) + 10;
		};
		localStorage.point2 = "true";
	});

	card3.addEventListener("click", () => {
		if (localStorage.point3 == "false") {
			localStorage.totalPoint = parseInt(localStorage.totalPoint) + 20;
		};
		localStorage.point3 = "true";
	});

	card4.addEventListener("click", () => {
		if (localStorage.point4 == "false") {
			localStorage.totalPoint = parseInt(localStorage.totalPoint) + 15;
		};
		localStorage.point4 = "true";
	});

	card5.addEventListener("click", () => {
		if (localStorage.point5 == "false") {
			localStorage.totalPoint = parseInt(localStorage.totalPoint) + 20;
		};
		localStorage.point5 = "true";
	});

	card6.addEventListener("click", () => {
		if (localStorage.point6 == "false") {
			localStorage.totalPoint = parseInt(localStorage.totalPoint) + 30;
		};
		localStorage.point6 = "true";
	});

	//alert (localStorage.getItem("totalPoint"));
	counter.innerText = localStorage.getItem("totalPoint") + "p";
};

function clearStorage() {
	localStorage.clear();
	for (var i = 1; i < 7; i++) {
		localStorage.setItem("point" + i, false);
	}
	localStorage.setItem("totalPoint", 0);

	counter.innerText = localStorage.totalPoint + "p";
}

function confettiParticle() {
	confetti({
		particleCount: 100,
		angle: 45,
		startVelocity: 75,
		spread: 90,
		ticks: 300,
		origin: {
			x: -0.2,
			y: 0.25
		}
	});

	confetti({
		particleCount: 100,
		angle: 135,
		startVelocity: 75,
		spread: 90,
		ticks: 300,
		origin: {
			x: 1.2,
			y: 0.25
		}
	});
}

function confettiFire() {
	fire();
	
	function fire() {
		confetti ({
			particleCount: 100,
			shapes: "circle"
		});
	};
};