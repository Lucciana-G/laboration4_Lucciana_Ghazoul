/* Lösning till Uppgift 9. Av Lucciana Ghazoul, 2026 */

"use strict";

let people = [
    {
        name: "Anna",
        age: 30,
        city: "Sundsvall"
    },
    {
        name: "Sofie",
        age: 45,
        city: "Hudiksvall"
    },
    {
        name: "Markus",
        age: 16,
        city: "Härnösand"
    }
];

// Funktion som skriver ut information om en person

function visaPerson(person) {
    let status = person.age >= 18 ? "är myndig" : "är inte myndig";
    console.log(person.name + " bor i " + person.city + " och " + status + ".");
}

// Loopa igenom arrayen och anropa funktionen för varje person
for (let person of people) {
   visaPerson(person);
}