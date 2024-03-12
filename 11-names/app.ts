/* 
<<<< Task No: 10>>>> 
Names: Store the names of a few of your friends in a 
array called names. Print each person’s name by 
accessing each element in the list, one at a time.
*/

// Friends Names List
const names: string[] = ['Kashif', 'Husnain', 'Zeeshan', 'Bilal'];

// Print Names into Group
console.group('Friends Name: ');
names.forEach((e, i) => console.log(`${(++i)}: ${e}`));
console.groupEnd();
