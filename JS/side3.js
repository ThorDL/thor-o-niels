console.log("side3.js loaded");

let savedPoint = parseInt(sessionStorage.getItem('currentPoint'));
savedPoint += 10; // forøg points med 10
sessionStorage.setItem('currentPoint', savedPoint); // gem de opdaterede points
console.log("Points updated to: " + savedPoint); // Log de opdaterede points

let vandautomat = parseInt(sessionStorage.getItem('vandautomat'));
vandautomat += 1; // Her forøges vandautomat med 1
sessionStorage.setItem('vandautomat', vandautomat); // her gemmes vndautomat i sessionStorage
console.log("Vandautomat visits updated to: " + vandautomat); // Log den opdaterede værdi

if (vandautomat == 2) {
    console.log("Du har besøgt automaten " + vandautomat + " gange. du bør tage en pause.");
    alert("Du har besøgt automaten " + vandautomat + " gange. du bør tage en pause.");
} else if (vandautomat >= 3) {
    let RanNummer = Math.random() * 3; // her vælges er tilfældigt tal mellem 0 og 3
    console.log("Random number generated: " + RanNummer); // Log det tilfældige tal for debugging
    if (RanNummer < 1) {
        alert("Du har besøgt automaten " + vandautomat + " gange. Mette står ved automaten og hun slår dig (-20 point)");
        savedPoint -= 30; // Her gives -20 point da der er +10 point for at drikke vand og -30 for at blive slået
        const metteElements = document.querySelectorAll('.Mette'); // her vælges alle elementer med klassen 'Mette'
        metteElements.forEach(element => {
            element.style.opacity = '1'; // her ændres opacity til 1 (fuldt synlig)
            console.log("Changed opacity of Mette element to 1");
        });
    } else if (RanNummer < 2) {
        alert("Du har besøgt automaten " + vandautomat + " gange. Søren Ryge står ved automaten og han giver dig 20 point");
        savedPoint += 10; // Her gives +20 point da der er +10 point for at drikke vand og +10 for at få 20 point af Søren
        sessionStorage.setItem('currentPoint', savedPoint); // her gemmes de opdaterede point
        const SørenElements = document.querySelectorAll('.Søren'); // her vælges alle elementer med klassen 'Søren'
        SørenElements.forEach(element => {
            element.style.opacity = '1'; // her ændres opacity til 1 (fuldt synlig)
            console.log("Changed opacity of Søren element to 1");
        });
    } else {
        alert("Du har besøgt automaten " + vandautomat + " gange. Du har drukket for meget vand og du pisser i bukserne (-50 point)");
        savedPoint -= 60; // Her gives -50 point da der er +10 point for at drikke vand og -60 for at tisse i bukserne
        sessionStorage.setItem('currentPoint', savedPoint); // her gemmes de opdaterede point
        const pissElements = document.querySelectorAll('.Piss'); // her vælges alle elementer med klassen 'Piss'
        pissElements.forEach(element => {
            element.style.opacity = '1'; // her ændres opacity til 1 (fuldt synlig)
            console.log("Changed opacity of Piss element to 1");
        });
    }
}

