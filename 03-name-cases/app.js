"use strict";
// Task No: 3
/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase. */
Object.defineProperty(exports, "__esModule", { value: true });
let second_person = 'salman';
// lower case
console.log(second_person.toLowerCase());
// upper case
console.log(second_person.toUpperCase());
// title case 
second_person = second_person[0].toUpperCase() + second_person.slice(1).toLowerCase();
console.log(second_person);
