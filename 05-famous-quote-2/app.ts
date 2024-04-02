/*
<<<< Task No: 5 >>>> 
Famous Quote 2: 
Repeat Exercise 4, but this time store 
the famous person’s name in a variable called famous_person. 
Then compose your message and store it in a new variable called message.
Print your message.
*/

// Import Quote
import quote from '../modules/quotes.js'

// Declare Person Name
let famous_person:string = 'Muhammad Ali Jinnah';


// Declare Message
let message:string =`${famous_person} once said,\n "${quote}"`;

// Print Message
console.log(message);

