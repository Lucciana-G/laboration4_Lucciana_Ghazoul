/* Lösning till Uppgift 7. Av Lucciana Ghazoul, 2026 */

"use strict";

//Skapar en array med tal
let numbers = [2,4,6,8,10,12,14,16,18,20];

// Funktion som räknar ut summan
function summa(numbers) {
    let sum = 0;
    for (let n of numbers) {// n här representerar varje siffra som ska räknas
        sum += n;
    }
    return sum;
}

// Anropa och skriv ut
console.log("Min array är: " + numbers);
console.log("Summan är " + summa(numbers));