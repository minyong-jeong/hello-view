const terminalCard = document.getElementById("terminal");
const digitalClockCard = document.getElementById("digital-clock");

terminalCard.addEventListener('click', () => {
    location.href = "./terminal/terminal.html"
});

digitalClockCard.addEventListener('click', () => {
    location.href = "./digital_clock/digital_clock.html"
});