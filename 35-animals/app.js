"use strict";
/*
<<<<< Task No 35>>>>>>

# Animals:

> Think of at least three different animals that have a common
characteristic.
Store the names of these animals in a list, and then use a for
loop to print out the name of each animal.

• Modify your program to print a statement about each animal, such as
A dog would make a great pet.

• Add a line at the end of your program stating what these animals
have in common. You could print a sentence such as Any of these animals
would make a great pet!
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Animals Names
const animals = ['Dog', 'Cat', 'Rabbit'];
// Animal Characteristics
const characteristic = [
    'Dog are highly social animal that form strong bonds with their human families',
    'Independent and curious, cat explore their world with unmatched agility and grace.',
    'Rabbit can also be very affectionate pet, bonding closely with their owner through gentle interactions and snuggling. '
];
// Print Animals Names
animals.forEach((animal, index) => console.log((++index), animal));
console.log(''); // line space
// Print Animals Characteristics
characteristic.forEach((char, index) => {
    console.dir(animals[index]);
    console.log(char, '\n');
});
// Print Message
console.dir('These animals are great pets');
