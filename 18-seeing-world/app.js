"use strict";
/*
<<<< Task No: 18 >>>>

# Seeing the World:

> Think of at least five places in the world you’d like to visit.

*/
Object.defineProperty(exports, "__esModule", { value: true });
let places = ['usa', 'canada', 'turkey', 'japan', 'germany'];
// 1. original
console.dir('Original');
console.table(places);
// 2. alphabetic
console.dir('Alphabetical');
console.table([...places].sort());
// 3. original
console.dir('Original');
console.table(places);
// 4. reverse alphabetical
console.dir('Reverse Alphabetical');
console.table([...places].sort().reverse());
// 5. original
console.dir('Original');
console.table(places);
// 6. original reverse 
console.dir('Original Reverse');
console.table(places.reverse());
// 7. original reverse again
console.dir('Original Reverse Again');
console.table(places.reverse());
// 8. original alphabetical
console.dir('Original Alphabetical');
console.table(places.sort());
// 9. original reverse alphabetical
console.dir('Original Reverse Alphabetical');
console.table(places.sort().reverse());
