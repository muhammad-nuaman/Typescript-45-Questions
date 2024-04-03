"use strict";
/*
<<<< Task No: 5 >>>>
Famous Quote 2:
Repeat Exercise 4, but this time store
the famous person’s name in a variable called famous_person.
Then compose your message and store it in a new variable called message.
Print your message.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Declare Person Name
let famous_person = 'Muhammad Ali Jinnah';
// Declare Person Quote
let quote = 'Think 100 times before you take a decision ' +
    'But once that decision is taken, stand by it as one man';
// Declare Message
let message = `${famous_person} once said,\n "${quote}"`;
// Print Message
console.log(message);
