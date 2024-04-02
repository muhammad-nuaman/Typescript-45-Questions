"use strict";
/*
<<<< Task No: 28 >>>>
Stages of Life: Write an if-else chain that determines
a person’s stage of life.
Set a value for the variable age, and then:
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Provide Random Value between 1 to 70
let random_age = Math.floor(Math.random() * 70 + 1);
// Provide Random Value between 0 to 5
let random_name = Math.floor(Math.random() * 6);
// Multiple Persons 
const persons = [
    "Salman",
    "Ali",
    "Ahmed",
    "Omar",
    "Hassan",
    "Zaid"
];
// Person Age
let person_age = random_age;
// Person Name
let person_name = persons[random_name];
// About Person
console.log(`${person_name} age is ${person_age}`);
// 1. Baby
if (person_age < 2) {
    console.log(`He's a baby`);
}
// 2. Toddler
else if (person_age >= 2 && person_age < 4) {
    console.log(`He's a toddler`);
}
// 3. Kid
else if (person_age >= 4 && person_age < 13) {
    console.log(`He's a kid`);
}
// 4. Teenager
else if (person_age >= 13 && person_age < 20) {
    console.log(`He's a teenager`);
}
// 5. Adult
else if (person_age >= 20 && person_age < 65) {
    console.log(`He's a Adult`);
}
// 6. Elder
else if (person_age >= 65) {
    console.log(`He's a Elder`);
}
