"use strict";
/*
<<<< Task No: 12 >>>>

# Greetings:

> Start with the array you used in Exercise 11, but instead of just
printing each person’s name,

> print a message to them. The text of each message should be the same,
but each message should be personalized with the person’s name.

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define Friends Name
const names = ['Kashif', 'Husnain', 'Zeeshan', 'Bilal'];
// Greeting to Friends
console.group('\nGreetings:');
names.forEach(name => console.log(`"Hi ${name}, hope you're having an amazing day!"`));
console.groupEnd();
