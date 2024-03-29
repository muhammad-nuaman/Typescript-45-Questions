/*
<<<< Task No: 5 >>>> 
Famous Quote 2: 
Repeat Exercise 4, but this time store 
the famous person’s name in a variable called famous_person. 
Then compose your message and store it in a new variable called message.
Print your message.
*/

// Declare Person Name
let famous_person:string = 'Muhammad Ali Jinnah';

// Declare Person's Quote
let quote:string = 
    'Think 100 times before you take a decision \n'+ 
    'But once that decision is taken, stand by it as one man';

// Declare Message
let message:string =`${famous_person} once said,\n "${quote}"`;

// Print Message
console.log(message);

