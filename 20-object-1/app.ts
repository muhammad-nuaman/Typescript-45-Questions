/*
<<<< Task No: 20 >>>>

> Think of something you could store in a array. For example, 
you could make a list of mountains, rivers, countries, cities, 
languages, or anything else you’d like. 

> Write a program that creates a list containing these items.

*/

// Define Function: that create list
const listMaker = (...list: string[]) => list;    

// List of the Mountains
const mountains = listMaker('k2', 'Mount Everest');

// List of Cities
const cities = listMaker('Karachi', 'Lahore', 'Islamabad');

// Print Lists
console.table(mountains);
console.table(cities);
