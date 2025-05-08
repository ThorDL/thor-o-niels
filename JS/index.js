console.log("index.js loaded");

const startButton = document.getElementById('start-button');
const clearButton = document.getElementById('clear-button');
// nedtælling starter når knappen trykkes
startButton.addEventListener('click', () => {startCountdown(5 * 60);}); // 5 minutter i sekunder

let currentPoint = 0; 
let vandautomat = 0; // antal gange man har besøgt vandautomaten
sessionStorage.setItem('currentPoint', currentPoint); // initialiserer currentPoint i session storage
sessionStorage.setItem('vandautomat', vandautomat); // initialiserer vandautomat i session storage

clearButton.addEventListener('click', () => {
    sessionStorage.clear();
    console.log("Countdown cleared");
    clearInterval(timerInterval)
});