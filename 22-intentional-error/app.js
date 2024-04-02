"use strict";
/*
<<<< Task No: 22 >>>>
Intentional Error:
If you haven’t received an array index error in one of
your programs yet, try to make one happen.
Change an index in one of your programs to produce
an index error. Make sure you correct the error
before closing the program.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// A Grocery List
let grocery = ["Rice", "Butter", "Chicken"];
// Through error
// console.log(grocery['Rice']); 
// Print with Indexing
console.log(grocery[0]);
console.log(grocery['0']);
