"use strict";
/*
<<<<< Task No: 43 >>>>>

# Unchanged Magicians:

> Start with your work from Exercise 42. Call the function make_great()
with a copy of the array of magicians’ names. Because the original
array will be unchanged, return the new array and store it in a
separate array. Call show_magicians() with each array to show that
you have one array of the original names and one array with the Great
added to each magician’s name.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define Magicans Name 
const magicians = [
    "Albus Dumbledore",
    "Harry Potter",
    "Ronald Weasley",
    "Hermione Granger"
];
// Define Function: Print Magicians Name
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
// Define Function: Make Great Magicians Name
function make_great(magicians) {
    const greatMagicians = [];
    magicians.forEach((magician) => {
        greatMagicians.push(`The Great ${magician}`);
    });
    return greatMagicians;
}
// Sepearte The Great Magicians Name
const theGreatMagicians = make_great(magicians);
// Print The Magicians Name
console.dir(`Magicians:`);
show_magicians(magicians);
console.log('=================');
// Print The Great Magicians Name
console.dir(`The Great Magicians:`);
show_magicians(theGreatMagicians);
