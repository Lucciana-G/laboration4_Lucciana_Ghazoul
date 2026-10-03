/* Lösning till Uppgift 5. Av Lucciana Ghazoul, 2026 */

"use strict";

//Skapar en array som innehåller maträtter

let dishes = ["Spagetti" , "Fisk och potatis" , "Köttbullar med potatis" , "Grillad kyckling", "sallad"];

//Skriver ut arrayen
console.log(dishes);

//skriver ut första elementet
console.log("Första maträtten: " + dishes[0]);

//skriver ut sista elementet
console.log("Sista maträtten: " + dishes[4]);

//lägga till en ny maträtt sist i arrayen
dishes.push("Tacos");

//ta bort den första maträtten i arrayen
dishes.shift();

//Skriv ut arrayen igen efter förändringarna
console.log("Arrayen efter förändringarna: ");
console.log(dishes);


