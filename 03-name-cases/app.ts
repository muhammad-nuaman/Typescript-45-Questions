/* 
<<<< Task No: 3 >>>> 
Name Cases: 
Store a person’s name in a variable, and 
then print that person’s name in lowercase, uppercase, and 
titlecase. 
*/

// Declare Name
let second_person: string = 'saLmaN';

// Lower Case
console.log(`Lower Case:  ${second_person.toLowerCase()}`);

// Upper Case
console.log(`Upper Case:  ${second_person.toUpperCase()}`);

// Re-assigning
second_person = 
    second_person[0].toUpperCase() + 
    second_person.slice(1).toLowerCase();

// Title Case
console.log(`Title Case:  ${second_person}`);

