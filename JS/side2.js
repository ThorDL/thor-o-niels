console.log("side2.js loaded");

const computer = document.querySelector('.computer'); //finder element med computer class

let computerCounter = 0; //hvor mange gange der er klikket på computer
let savedPoint = parseInt(sessionStorage.getItem('currentPoint'));

console.log('computerCounter: ' + computerCounter); //logger computerCounter
console.log("Points updated to: " + savedPoint); // Logger de opdaterede points



computer.addEventListener('click', () => {
    computerCounterFunction();
});

function fortnite() {
    console.log('Fortnite function called'); //logger besked
    const tove = document.querySelector('.tove'); //finder element med tove class
    tove.style.opacity = '0'; //sætter opacity til 0
    savedPoint += 5; // +5 point for fortnite
    console.log('savedPoint: ' + savedPoint); //logger savedPoint
    sessionStorage.setItem('currentPoint', savedPoint); //sætter savedPoint i sessionStorage
    updatePoint(); //kalder updatePoint funktionen
    const computer = document.querySelector('.computer'); //finder element med computer class
    if (computer) { //hvis elementet findes
        // console.log('Computer element found'); //logger besked
        computer.remove(); //fjerner computer elementet
    } else {
        console.log('Computer element not found'); //logger besked
    }
    //opretter nyt billede
    const fortnite = document.createElement('img'); //opretter nyt element
    fortnite.src = '../billeder/computer-fortnite.png'; //sætter src til billedet
    fortnite.classList.add('computer'); //sætter class til computer
    fortnite.addEventListener('click', () => { //tilføjer event listener til billedet
        computerCounterFunction();
    });
    document.body.appendChild(fortnite); //tilføjer billedet til body
    //console.log('Fortnite image added'); //logger besked

    Math.random(); //genererer et random tal mellem 0 og 1
    if (Math.random() < 0.2) { //hvis random tal er mindre end 0.1
        alert("du spiller for meget i timen og din lærer kommer ind og slår dig (-50 point)"); //viser alert besked
        savedPoint -= 55; // -50 point for at spille og -5 fordi man ikke skal have de +5 point
        updatePoint(); //kalder updatePoint funktionen
}}

function kemi() {
    console.log('Kemi function called'); //logger besked
    const tove = document.querySelector('.tove'); //finder element med tove class
    tove.style.opacity = '0'; //sætter opacity til 0
    const computer = document.querySelector('.computer'); //finder element med computer class
    if (computer) { //hvis elementet findes
        // console.log('Computer element found'); //logger besked
        computer.remove(); //fjerner computer elementet
    } else {
        console.log('Computer element not found'); //logger besked
    }
    //opretter nyt billede
    const kemi = document.createElement('img'); //opretter nyt element
    kemi.src = '../billeder/computer-kemi.png'; //sætter src til billedet
    kemi.classList.add('computer'); //sætter class til computer
    kemi.addEventListener('click', () => { //tilføjer event listener til billedet
        computerCounterFunction();
    });
    document.body.appendChild(kemi); //tilføjer billedet til body
    //console.log('Kemi image added'); //logger besked

    Math.random(); //genererer et random tal mellem 0 og 1
    if (Math.random() < 0.1) { //hvis random tal er mindre end 0.1
        const userInput = prompt("Svært kemispørgsmål!!: hvad er trivialnavnet for HCl?");
        const korrektSvar = "saltsyre";
        if (userInput === korrektSvar) {
            savedPoint += 10; // +10 point for at svare rigtigt
            updatePoint(); //kalder updatePoint funktionen
            alert("Du svarede rigtigt! Du får 10 point"); //viser alert besked
            console.log("bruger svar: " + userInput); //logger brugerens input
        } else {
            savedPoint -= 100; // -100 point for at svare forkert
            updatePoint(); //kalder updatePoint funktionen
            alert("Tove hader dig! Du får 02 i standpunktskarakter (-100 point)"); //viser alert besked
            tove.style.opacity = '1'; //sætter opacity til 1
            console.log("forkert svar eller lukkede promt"); //logger besked hvis brugeren ikke skriver noget
        }
}   else if (Math.random() < 0.2) { //hvis random tal er mindre end 0.2
    const userInput = prompt("Svært kemispørgsmål!!: hvor mange carbonatomer er der i en 1-brom-3-chlor-8-ehtyl-2,2,4-trimethylnonan?");
    const korrektSvar = "14";
    if (userInput === korrektSvar) {
        savedPoint += 5; // +5point for at svare rigtigt
        updatePoint(); //kalder updatePoint funktionen
        alert("godt at du har øvet FORMLER spillet... +5 point"); //viser alert besked
        console.log("bruger svar: " + userInput); //logger brugerens input
    } else {
        savedPoint -= 1000; // -1000 point for at svare forkert
        updatePoint(); //kalder updatePoint funktionen
        alert("Det bliver Tove ik glad for, pas på hun ikke hælder uorganisk affald ud over dig! (-1000 point)"); //viser alert besked
        tove.style.opacity = '1'; //sætter opacity til 1
        console.log("forkert svar eller lukkede promt"); //logger besked hvis brugeren ikke skriver noget
    }
}}

function computerCounterFunction () {
    console.log('Computer clicked');
    computerCounter = parseInt(sessionStorage.getItem('computerCounter')) || 0; //henter computerCounter fra sessionStorage, hvis den ikke findes, sættes den til 0
    console.log('ComputerCounter fra sessionStorage: ' + computerCounter); //logger computerCounter fra sessionStorage
    computerCounter +=1; //+1 til computerCounter
    sessionStorage.setItem('computerCounter', computerCounter); //sætter computerCounter i sessionStorage
    console.log('ny computerCounter: ' + computerCounter); //logger computerCounter

    if (computerCounter % 2 == 0) { //hvis computerCounter er et lige tal
        console.log("Du har klikket på computeren " + computerCounter + " gange. LIGE");
        kemi(); //kalder kemi funktionen
    } else { //hvis computerCounter er et ulige tal½
        console.log("Du har klikket på computeren " + computerCounter + " gange. ULIGE");
        fortnite(); //kalder fortnite funktionen
    }
}

function updatePoint() {
    const point = document.getElementById('Point'); //finder element med id point
    point.textContent = `Points: ${savedPoint}`; // Opdaterer point oppe i hjørnet
}