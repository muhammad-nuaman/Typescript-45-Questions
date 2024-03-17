/*
<<<< Task No: 20 >>>>
Think of something you could store in a array.
For example, you could make a list of mountains,
rivers, countries, cities, languages, or anything else you’d like.
Write a program that creates a list containing these items.
*/
// Function: create list
const lister = (...list) => list;
// mountains list
const mountains = lister('k2', 'Mount Everest');
// cities list
const cities = lister('Karachi', 'Lahore');
// Print Lists
console.table(mountains);
console.table(cities);
export {};
