/* Lösning till Uppgift 1. Av Lucciana Ghazoul, 2026 */

"use strict";

//For-loop som skrivet ut alla heltal från 1 till 20

for(let i = 1; i <=20; i++){
    console.log(i);
}

//For-loop som endast skriver ut jämna tal från 1 till 20
console.log("Här är bara jämna tal: ");

for(let i = 1; i <=20; i++){
    if(i % 2 === 0){
       console.log(i);
    }
}