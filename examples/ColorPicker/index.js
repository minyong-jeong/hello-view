const box = document.getElementById("box");
const redInput = document.getElementById("red");
const greenInput = document.getElementById("green");
const blueInput = document.getElementById("blue");
let red = 0;
let green = 0;
let blue = 0;

const rgbToHex = () => {
    const rgb = (red << 16) | (green << 8) | (blue << 0);
    return '#' + (0x1000000 + rgb).toString(16).slice(1);
}

const colorChange = () => {
    document.getElementById("hex-text").innerHTML = "HEX (" + rgbToHex() + ")";
    document.getElementById("rgb-text").innerHTML = "RGB (" + red + ", " + green + ", " + blue + ")";
    box.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

const randomColor = () => {
    redInput.value = red = Math.floor(Math.random() * 256);
    greenInput.value = green = Math.floor(Math.random() * 256);
    blueInput.value = blue = Math.floor(Math.random() * 256);
}

redInput.addEventListener("input", (e) => {
    red = redInput.value;
    colorChange();
});

greenInput.addEventListener("input", (e) => {
    green = greenInput.value;
    colorChange();
});

blueInput.addEventListener("input", (e) => {
    blue = blueInput.value;
    colorChange();
});

window.onload = () => {
    randomColor();
    colorChange();
}

