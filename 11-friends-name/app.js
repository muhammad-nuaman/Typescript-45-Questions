"use strict";
/*
<<<< Task No: 11 >>>>
Names: Store the names of a few of your friends in a
array called names. Print each person’s name by
accessing each element in the list, one at a time.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Import Friends Name
const names_1 = require("../modules/names");
// Print Friends Name
console.group('My Friends Name: ');
names_1.friends.forEach((name, index) => console.log(`${(++index)}: ${name}`));
console.groupEnd();
