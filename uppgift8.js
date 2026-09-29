/* Lösning till Uppgift 8. Av Lucciana Ghazoul, 2026 */

"use strict";

//skapar en objekt till en bok med sina egenskaper
let book = {
    titel:"The hobbit",
    writer: "J.R.R. Tolkien",
    yearofPublication: 1937
}

//skriva ut objektet med funktion
function showBook(book){
    console.log("Titel: " + book.titel);
    console.log("Författare: " + book.writer);
    console.log("Utgivningsår: " + book.yearofPublication);
}

//anrpoa function
console.log("The book is: ");
showBook(book);
