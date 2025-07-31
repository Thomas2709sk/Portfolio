const txt = "Full Stack Software Developer";
const speed = 70;      // ms per letter (typing)
const eraseSpeed = 40; // ms per letter (erasing)
const delay = 1200;    // delay before erasing

let i = 0;
let isErasing = false;
const target = document.getElementById("typewriter");

function typeEraseLoop() {
    if (!isErasing && i <= txt.length) {
        target.textContent = txt.substring(0, i);
        i++;
        if (i > txt.length) {
            isErasing = true;
            setTimeout(typeEraseLoop, delay);
        } else {
            setTimeout(typeEraseLoop, speed);
        }
    } else if (isErasing && i >= 0) {
        target.textContent = txt.substring(0, i);
        i--;
        if (i < 0) {
            isErasing = false;
            setTimeout(typeEraseLoop, 400);
        } else {
            setTimeout(typeEraseLoop, eraseSpeed);
        }
    }
}
typeEraseLoop();