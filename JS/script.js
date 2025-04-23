const Timer = document.getElementById('Timer');
const point = document.getElementById('Point');
let timerInterval; // Declare globally to clear it if needed


point.innerHTML ="Point:" + sessionStorage.getItem('currentPoint') || 0; // Display current points

function startCountdown(durationInSeconds) {
    console.log("Countdown started");

    let remainingTime = durationInSeconds;

    timerInterval = setInterval(() => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        Timer.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        sessionStorage.setItem('remainingTime', remainingTime); // Save dynamically

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            sessionStorage.removeItem('remainingTime'); // Clear saved time
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