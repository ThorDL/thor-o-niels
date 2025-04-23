let savedPoint = parseInt(sessionStorage.getItem('currentPoint'));
savedPoint += 10; // Increment points by 10
sessionStorage.setItem('currentPoint', savedPoint); // Save updated points
console.log("Points updated to: " + savedPoint); // Log the updated points

let vandautomat = parseInt(sessionStorage.getItem('vandautomat'));
vandautomat += 1; // Increment visits by 1
sessionStorage.setItem('vandautomat', vandautomat); // Save updated visits
console.log("Vandautomat visits updated to: " + vandautomat); // Log the updated visits

if (vandautomat == 2) {
    console.log("Du har besøgt automaten " + vandautomat + " gange. du bør tage en pause.");
    alert("Du har besøgt automaten " + vandautomat + " gange. du bør tage en pause.");
} else if (vandautomat >= 3) {
    let RanNummer = Math.random() * 3; // Random number between 0 and 3
    console.log("Random number generated: " + RanNummer); // Log the random number for debugging
    if (RanNummer < 1) {
        alert("Du har besøgt automaten " + vandautomat + " gange. Mette står ved automaten og hun slår dig (-20 point)");
        savedPoint -= 30; // Decrease points by 20
        const metteElements = document.querySelectorAll('.Mette'); // Select all elements with the 'Mette' class
        metteElements.forEach(element => {
            element.style.opacity = '1'; // Change opacity to 1 (fully visible)
            console.log("Changed opacity of Mette element to 1");
        });
    } else if (RanNummer < 2) {
        alert("Du har besøgt automaten " + vandautomat + " gange. Søren Ryge står ved automaten og han giver dig 20 point");
        savedPoint += 10; // Increase points by 20
        sessionStorage.setItem('currentPoint', savedPoint); // Save updated points
        const SørenElements = document.querySelectorAll('.Søren'); // Select all elements with the 'Søren' class
        SørenElements.forEach(element => {
            element.style.opacity = '1'; // Change opacity to 1 (fully visible)
            console.log("Changed opacity of Søren element to 1");
        });
    } else {
        alert("Du har besøgt automaten " + vandautomat + " gange. Du har drukket for meget vand og du pisser i bukserne (-50 point)");
        savedPoint -= 60; // Decrease points by 10
        sessionStorage.setItem('currentPoint', savedPoint); // Save updated points
        const pissElements = document.querySelectorAll('.Piss'); // Select all elements with the 'Piss' class
        pissElements.forEach(element => {
            element.style.opacity = '1'; // Change opacity to 1 (fully visible)
            console.log("Changed opacity of Piss element to 1");
        });
    }
}

