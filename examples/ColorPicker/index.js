const box = document.getElementById("box");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const rgbToHex = () => {
    const rgb = (red.value << 16) | (green.value << 8) | (blue.value << 0);
    return '#' + (0x1000000 + rgb).toString(16).slice(1);
}

const colorChange = () => {
    document.getElementById("hex-text").innerHTML = "HEX (" + rgbToHex() + ")";
    document.getElementById("rgb-text").innerHTML = "RGB (" + red.value + ", " + green.value + ", " + blue.value + ")";
    box.style.backgroundColor = "rgb(" + red.value + "," + green.value + "," + blue.value + ")";
}

const randomColor = () => {
    red.value = Math.floor(Math.random() * 256);
    green.value = Math.floor(Math.random() * 256);
    blue.value = Math.floor(Math.random() * 256);
}

red.addEventListener("input", () => colorChange());
green.addEventListener("input", () => colorChange());
blue.addEventListener("input", () => colorChange());

window.onload = () => {
    randomColor();
    colorChange();
}

