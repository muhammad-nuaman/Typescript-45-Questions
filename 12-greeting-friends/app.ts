/*
<<<< Task No: 12 >>>> 
Greetings: Start with the array you used in Exercise 11, 
but instead of just printing each person’s name, 
print a message to them. The text of each message should be the same, 
but each message should be personalized with the person’s name.
*/

// Import Friends Name
import {friends} from "../modules/names";

// Greeting to Friends
console.group('\nGreetings:');
for (let friend of friends) {
    console.log(`"Hi ${friend}, hope you're having an amazing day!"`)
}
console.groupEnd();
