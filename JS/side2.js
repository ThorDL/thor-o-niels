console.log("side2.js loaded");

const computer = document.querySelector('.computer'); //finder element med computer class

let computerCounter = 0; //hvor mange gange der er klikket på computer
console.log('start computerCounter: ' + computerCounter); //logger computerCounter

computer.addEventListener('click', () => {
    computerCounterFunction();
});

function fortnite() {
    console.log('Fortnite function called'); //logger besked
    const computer = document.querySelector('.computer'); //finder element med computer class
    if (computer) { //hvis elementet findes
        console.log('Computer element found'); //logger besked
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
    console.log('Fortnite image added'); //logger besked
}

computerCounterFunction = () => {
    console.log('Computer clicked');
    computerCounter = parseInt(sessionStorage.getItem('computerCounter')) || 0; //henter computerCounter fra sessionStorage, hvis den ikke findes, sættes den til 0
    console.log('ComputerCounter fra sessionStorage: ' + computerCounter); //logger computerCounter fra sessionStorage
    computerCounter +=1; //+1 til computerCounter
    sessionStorage.setItem('computerCounter', computerCounter); //sætter computerCounter i sessionStorage
    console.log('ny computerCounter: ' + computerCounter); //logger computerCounter

    if (computerCounter == 2) { //hvis computerCounter er lig med 2
        alert("Du har klikket på computeren " + computerCounter + " gange. Du bør tage en pause.");
        console.log("Du har klikket på computeren " + computerCounter + " gange. Du bør tage en pause."); //logger besked
    }
    else if (computerCounter == 3) { //hvis computerCounter er større end eller lig med 3
        console.log(computerCounter); //logger besked
    }
    else if (computerCounter == 4) { //hvis computerCounter er lig med 4
        console.log(computerCounter); //logger besked
        fortnite(); //kalder fortnite funktionen
    }
    else if (computerCounter == 5) { //hvis computerCounter er større end eller lig med 5
        console.log(computerCounter); //logger besked
    }
    else
    {
        console.log(computerCounter); //logger besked
    }
}
