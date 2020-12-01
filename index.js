const terminalCard = document.getElementById("terminal");
const digitalClockCard = document.getElementById("digital-clock");
const filterTableCard = document.getElementById("filter-table");
const analogClockCard = document.getElementById("analog-clock");

terminalCard.addEventListener('click', () => {
    location.href = "./terminal/index.html"
});

digitalClockCard.addEventListener('click', () => {
    location.href = "./digital_clock/index.html"
});

filterTableCard.addEventListener('click', () => {
    location.href = "./filter_table/index.html"
});

analogClockCard.addEventListener('click', () => {
    location.href = "./analog_clock/index.html"
});