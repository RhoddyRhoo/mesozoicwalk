
const dino = document.getElementById("dino");
const dinoImages = [
    "gif/trex.gif", "gif/steggy.gif", "gif/sauropod.gif", "gif/pterosaur.gif"];
let currentIndex = 0;

// Listen for key press
document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        e.preventDefault(); // prevents page from scrolling
        currentIndex = (currentIndex + 1) % dinoImages.length;
        dino.src = dinoImages[currentIndex];
    }
});