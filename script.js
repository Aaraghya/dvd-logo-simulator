const logo = document.getElementById("dvd-logo");
const counter = document.getElementById("counter");

let x = 100;
let y = 100;
let speedX = 3;
let speedY = 3;
let cornerHits = 0;
let isPaused = false;

logo.style.position = "absolute";

const colors = [
    "red",
    "blue",
    "lime",
    "yellow",
    "cyan",
    "magenta",
    "orange",
    "pink",
    "purple"
];

function randomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    logo.style.color = colors[randomIndex];
}

function checkCornerHit(screenWidth, screenHeight, logoWidth, logoHeight) {
    const threshold = 5;
    const left = x <= threshold;
    const right = x + logoWidth >= screenWidth - threshold;
    const top = y <= threshold;
    const bottom = y + logoHeight >= screenHeight - threshold;

    if ((left || right) && (top || bottom)) {
        cornerHits++;
        counter.textContent = "🏆 Corner Hits: " + cornerHits;
    }
}

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        event.preventDefault();
        isPaused = !isPaused;
    }
});

randomColor();

function animate() {
    if (isPaused) {
        requestAnimationFrame(animate);
        return;
    }

    x += speedX;
    y += speedY;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const logoWidth = logo.offsetWidth;
    const logoHeight = logo.offsetHeight;

    let bounced = false;

    if (x <= 0 || x + logoWidth >= screenWidth) {
        speedX = -speedX;
        randomColor();
        bounced = true;
    }

    if (y <= 0 || y + logoHeight >= screenHeight) {
        speedY = -speedY;
        randomColor();
        bounced = true;
    }

    if (bounced) {
        checkCornerHit(screenWidth, screenHeight, logoWidth, logoHeight);
    }

    logo.style.left = x + "px";
    logo.style.top = y + "px";

    requestAnimationFrame(animate);
}

animate();
