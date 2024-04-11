"use strict";
/*
<<<<< Task No: 42 >>>>>

# Great Magicians:

> Start with a copy of your program from Exercise 41.
Write a function called make_great() that modifies the array of magicians
by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define Magicians Name
const magicians = [
    'Albus Dumbledore',
    'Harry Potter',
    'Ronald Weasley',
    'Hermione Granger'
];
// Define Function to Print Magicians Name
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
// Define Function to Make Great Magicians
function make_great(magicians) {
    magicians.forEach((magician, index, magicians) => {
        magicians[index] = `The Great ${magician}`;
    });
}
// Call Function to Make Great Magicians
make_great(magicians);
// Call Function to Print Magicians Name
show_magicians(magicians);
