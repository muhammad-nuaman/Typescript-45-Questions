/* 
<<<< Task No: 11 >>>> 
Names: Store the names of a few of your friends in a 
array called names. Print each person’s name by 
accessing each element in the list, one at a time.
*/

// My Friends Name
const friends: string[] = ['Kashif', 'Husnain', 'Zeeshan', 'Bilal'];

// Print Friends Name
console.group('My Friends Name: ');
friends.forEach((name, index) => console.log(`${(++index)}: ${name}`));
console.groupEnd();


/*
<<<< Task No: 12 >>>> 
Greetings: Start with the array you used in Exercise 11, 
but instead of just printing each person’s name, 
print a message to them. The text of each message should be the same, 
but each message should be personalized with the person’s name.
*/

// Greeting to Friends
console.group('\nGreetings:');
for (let friend of friends) {
    console.log(`"Hi ${friend}, hope you're having an amazing day!"`)
}
console.groupEnd();
