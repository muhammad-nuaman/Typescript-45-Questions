/* 
<<<< Task No: 3 >>>> 

# Name Cases: 

> Store a person’s name in a variable, & then print that person’s name 
in lowercase, uppercase, and titlecase. 

*/

// Declare Name
const person: string = 'saLmaN';

// Lower Case
console.log(`Lower Case:  ${person.toLowerCase()}`);

// Upper Case
console.log(`Upper Case:  ${person.toUpperCase()}`);

// Title Case
console.log(
    `Title Case:  ${person[0].toUpperCase()+person.slice(1).toLowerCase()}`
);

