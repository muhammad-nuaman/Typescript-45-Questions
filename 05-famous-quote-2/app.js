"use strict";
/*
<<<< Task No: 5 >>>>
Famous Quote 2:
Repeat Exercise 4, but this time store
the famous person’s name in a variable called famous_person.
Then compose your message and store it in a new variable called message.
Print your message.
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Quote
const quotes_js_1 = __importDefault(require("../modules/quotes.js"));
// Declare Person Name
let famous_person = 'Muhammad Ali Jinnah';
// Declare Message
let message = `${famous_person} once said,\n "${quotes_js_1.default}"`;
// Print Message
console.log(message);
