const logo = document.getElementById("dvd-logo");
//curr
let x = 100;
let y = 100;
// peed
let speedX = 2;
let speedY = 2;

logo.style.position = "absolute";

function animate() {

    x += speedX;
    y += speedY;

    logo.style.left = x + "px";
    logo.style.top = y + "px";

    requestAnimationFrame(animate);
}

animate();
