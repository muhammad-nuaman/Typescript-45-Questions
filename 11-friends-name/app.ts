/* 
<<<< Task No: 11 >>>> 
Names: Store the names of a few of your friends in a 
array called names. Print each person’s name by 
accessing each element in the list, one at a time.
*/

// Import Friends Name
import {friends} from "../modules/names";

// Print Friends Name
console.group('My Friends Name: ');
friends.forEach((name, index) => console.log(`${(++index)}: ${name}`));
console.groupEnd();


