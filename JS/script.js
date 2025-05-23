console.log("script.js loaded");

const Timer = document.getElementById('Timer');
const point = document.getElementById('Point');
let timerInterval; 


point.innerHTML ="Point:" + sessionStorage.getItem('currentPoint') || 0; // Display Points fra sessionStorage

function startCountdown(durationInSeconds) {
    console.log("Countdown started");

    let remainingTime = durationInSeconds;

    timerInterval = setInterval(() => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        Timer.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        sessionStorage.setItem('remainingTime', remainingTime); // gemmer den resterende tid i sessionStorage

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            sessionStorage.removeItem('remainingTime'); // fjerner den resterende tid fra sessionStorage
            Timer.innerHTML = "Tid er gået!"; // Opdaterer timeren til at vise "Tid er gået!"
            console.log("Time's up!");
        }

        remainingTime--;
    }, 1000);
}

  

const savedTime = sessionStorage.getItem('remainingTime');
if (savedTime) {
    const remainingTime = parseInt(savedTime, 10);
    if (remainingTime > 0) {
        startCountdown(remainingTime);
    } else {
        sessionStorage.removeItem('remainingTime'); // Clear invalid time
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === 't' || event.key === 't') { // Tjekker om tasten "t" blev trykket
        sessionStorage.clear(); // Rydder sessionStorage
        console.log('t key pressed. sessionStorage cleared.');
    }
});