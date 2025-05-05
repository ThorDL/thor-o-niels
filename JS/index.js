console.log("index.js loaded");

const startButton = document.getElementById('start-button');
const clearButton = document.getElementById('clear-button');
startButton.addEventListener('click', () => {startCountdown(5 * 60);}); // 5 minutes in seconds
// Countdown Timer
let currentPoint = 0; 
let vandautomat = 0; // antal gange man har besøgt vandautomaten
sessionStorage.setItem('currentPoint', currentPoint); // Initialize points in session storage
sessionStorage.setItem('vandautomat', vandautomat); // Initialize vandautomat in session storage

clearButton.addEventListener('click', () => {
    sessionStorage.clear();
    console.log("Countdown cleared");
    clearInterval(timerInterval)
});