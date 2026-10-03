/* Lösning till Uppgift 6. Av Lucciana Ghazoul, 2026 */

"use strict";

//Skaoar en funktion som skriver ut multiplikations-tabeller.
function printMultiplicationTable(number) {
    console.log("Multiplikationstabell för " + number + ":");

    for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}

