const startButton = document.getElementById('start-button');
const clearButton = document.getElementById('clear-button');
startButton.addEventListener('click', () => {startCountdown(5 * 60);}); // 5 minutes in seconds
// Countdown Timer

clearButton.addEventListener('click', () => {
    sessionStorage.clear();
    console.log("Countdown cleared");
    clearInterval(timerInterval)
});