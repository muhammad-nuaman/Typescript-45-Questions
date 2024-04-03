/*
<<<< Task No: 25 >>>>
Alien Colors #1: 
Imagine an alien was just shot down in a game.
Create a variable called alien_color and assign it a value of
'green', 'yellow', or 'red'.
*/

// Multiple Colors
const colors: string[] = ['green', 'yellow', 'red'];
// Random Indexing
const random: number = Math.floor(Math.random() * 3);
// Random Choice
const alien_color: string = colors[random]; 


// First Program
console.dir('First Program');
console.log(`Alien Color: ${alien_color}`);

// choosing green 
if (alien_color === 'green') { console.log('You just earned 5 points\n')}
else {console.log('')}

/*
<<<< Task No: 26 >>>>
Alien Colors #2: 
Choose a color for an alien as you did in Exercise 25, 
and write an if-else chain.
*/

// Second Program
 console.dir('Second Program');
console.log(`Alien Color: ${alien_color}`);

// choosing green
if (alien_color === 'green') {console.log('You just earned 5 points\n')}
// choosing another 
else {console.log('You just earned 10 points\n')}


// /*
// <<<< Task No: 27 >>>>
// Alien Colors #3: 
// Turn your if-else chain from Exercise 25 into an if-else chain.
// */

// Third Program
console.dir('Third Program');
console.log(`Alien Color: ${alien_color}`);

// choosing green
if (alien_color === 'green') {console.log('you just earned 5 points\n')}
// choosing yellow
else if (alien_color === 'yellow') {console.log('you just earned 10 points\n')}
// choosing red
else if (alien_color === 'red') {console.log('you just earned 15 points\n')}