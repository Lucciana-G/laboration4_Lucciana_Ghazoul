/* Lösning till Uppgift 6. Av Lucciana Ghazoul, 2026 */

"use strict";

//Skapar en funktion för att räkna arean för en rekangel

function calculateArea( width , height){
    let area = width * height;
   
    return area;
}


//anropa funktionen och testa olika mått(siffror på bredd och höjd)

let area1 = calculateArea(4, 5);
let area2 = calculateArea(21, 2);
let area3 = calculateArea(10, 10);

//Skriv ut resultatet
console.log("Arean är " + area1);
console.log("Arean är " + area2);
console.log("Arean är " + area3);