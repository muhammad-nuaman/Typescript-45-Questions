"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
<<<< Task No: 3 >>>>
Name Cases:
Store a person’s name in a variable, and
then print that person’s name in lowercase, uppercase, and
titlecase.
*/
const feature_js_1 = require("../modules/feature.js");
console.log(feature_js_1.list.pop());
// Declare Name
let person = 'saLmaN';
// Lower Case
console.log(`Lower Case:  ${person.toLowerCase()}`);
// Upper Case
console.log(`Upper Case:  ${person.toUpperCase()}`);
// Re-assigning
person =
    person[0].toUpperCase() +
        person.slice(1).toLowerCase();
// Title Case
console.log(`Title Case:  ${person}`);
