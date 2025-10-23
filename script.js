const dino = document.getElementById("dino");

const dinoImages = [
    "gif/trex.gif",
    "gif/steggy.gif",
    "gif/sauropod.gif",
    "gif/pterosaur.gif"
];

let currentIndex = 0;

// function to switch dino image
function changeDino() {
    currentIndex = (currentIndex + 1) % dinoImages.length;
    dino.src = dinoImages[currentIndex];
}

// --- SPACEBAR support ---
document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        e.preventDefault();
        changeDino();
    }
});

// --- TOUCH / TAP support (phones & tablets) ---
document.addEventListener("touchstart", (e) => {
    e.preventDefault(); // stops weird double-tap zooms
    changeDino();
});
