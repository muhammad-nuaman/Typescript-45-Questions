/* 
<<<< Task No: 3 >>>> 
Name Cases: 
Store a person’s name in a variable, and 
then print that person’s name in lowercase, uppercase, and 
titlecase. 
*/
import {list} from '../modules/feature.js';

console.log(list.pop());

// Declare Name
let person: string = 'saLmaN';

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


