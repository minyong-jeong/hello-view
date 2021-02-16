const box = document.getElementById("box");
const redInput = document.getElementById("red");
const greenInput = document.getElementById("green");
const blueInput = document.getElementById("blue");
const hexText = document.getElementById("hex-text");
const redLabel = document.getElementById("red-label");
const greenLabel = document.getElementById("green-label");
const blueLabel = document.getElementById("blue-label");

let red = 0;
let green = 0;
let blue = 0;

redInput.addEventListener("input", (e) => {
    red = redInput.value;
    box.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    hexText.innerHTML = "Hex (" + rgbToHex() + ")";
    redLabel.innerHTML = "R (" + red + ")";
});

greenInput.addEventListener("input", (e) => {
    green = greenInput.value;
    box.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    greenLabel.innerHTML = "G (" + green + ")";
});

blueInput.addEventListener("input", (e) => {
    blue = blueInput.value;
    box.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    blueLabel.innerHTML = "B (" + blue + ")";
});

const rgbToHex = () => {
    const rgb = (red << 16) | (green << 8) | (blue << 0);
    return '#' + (0x1000000 + rgb).toString(16).slice(1);
}
