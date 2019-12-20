const terminalCard = document.getElementById("terminal");
const digitalClockCard = document.getElementById("digital-clock");
const filterTableCard = document.getElementById("filter-table");

terminalCard.addEventListener('click', () => {
    location.href = "./terminal/terminal.html"
});

digitalClockCard.addEventListener('click', () => {
    location.href = "./digital_clock/digital_clock.html"
});

filterTableCard.addEventListener('click', () => {
    location.href = "./filter_table/filter_table.html"
});