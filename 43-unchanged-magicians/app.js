"use strict";
/*
<<<<< Task No: 43 >>>>>
Unchanged Magicians:
Start with your work from Exercise 42. Call the function make_great()
with a copy of the array of magicians’ names. Because the original
array will be unchanged, return the new array and store it in a
separate array. Call show_magicians() with each array to show that
you have one array of the original names and one array with the Great
added to each magician’s name.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Magicians
const magicians = [
    "Albus Dumbledore",
    "Harry Potter",
    "Ronald Weasley"
];
// Show Magicians
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
// Make The Great Magicians
function make_great(magicians) {
    magicians.forEach((magician, index, magicians) => {
        magicians[index] = `The Great ${magician}`;
    });
    return magicians;
}
// The Great Magicians
const greatMagicians = make_great([...magicians]);
console.dir(`Magicians:`);
show_magicians(magicians);
console.log('=================');
console.dir(`Great Magicians: `);
show_magicians(greatMagicians);
