/*
<<<< Task No: 20 >>>>
Think of something you could store in a array. 
For example, you could make a list of mountains, 
rivers, countries, cities, languages, or anything else you’d like. 
Write a program that creates a list containing these items.
*/

// Function: create list
const listing = (...list: string[]) => list;    

// Mountains List
const mountains = listing('k2', 'Mount Everest');

// Cities List
const cities = listing('Karachi', 'Lahore', 'Islamabad');

// Print Lists
console.table(mountains);
console.table(cities);
