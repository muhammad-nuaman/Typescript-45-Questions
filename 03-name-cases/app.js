"use strict";
/*
<<<< Task No: 3 >>>>
Name Cases: Store a person’s name in a variable, and
then print that p4erson’s name in lowercase, uppercase, and
titlecase.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// stored name
let second_person = 'salman';
// lower case
console.log(second_person.toLowerCase());
// upper case
console.log(second_person.toUpperCase());
// converting
second_person =
    second_person[0].toUpperCase() +
        second_person.slice(1).toLowerCase();
// title case 
console.log(second_person);
