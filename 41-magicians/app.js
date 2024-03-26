/*
<<<<< Task No: 41 >>>>>
Magicians:
Make an array of magician’s names.
Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.
*/
// Magicians Names
const magicians = [
    "Albus Dumbledore",
    "Harry Potter",
    "Ronald Weasley"
];
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
show_magicians(magicians);
export {};
