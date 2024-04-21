"use strict";
/*
<<<<< Task No: 41 >>>>>

# Magicians:

> Make an array of magician’s names.
Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define Magicians Name
const magicians = [
    'Albus Dumbledore',
    'Harry Potter',
    'Ronald Weasley',
    'Hermione Granger'
];
// Define Function
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
// Call Function
show_magicians(magicians);
