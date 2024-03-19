/*
<<<< Task No: 25 >>>>
Alien Colors #1: 
Imagine an alien was just shot down in a game.
Create a variable called alien_color and assign it a value of
'green', 'yellow', or 'red'.
*/

const colors: string[] = ['green', 'yellow', 'red'];
const random: number = Math.floor(Math.random() * 3);
const alien_color: string = colors[random]; 
console.log(`\nYou Choose: ${alien_color}`);

console.log();

// choose green earn 5 point
if (alien_color === 'green') {
    console.log('\nFirst Program');
    console.log('you just earned 5 points\n');
}


/*
<<<< Task No: 26 >>>>
Alien Colors #2: 
Choose a color for an alien as you did in Exercise 25, 
and write an if-else chain.
*/

// choose green earn 5 point
if (alien_color === 'green') {
    console.log('\nSecond Program');
    console.log('you just earned 5 points\n');
}
// choose another earn 10 point
else {
    console.log('\nSecond Program');
    console.log('you just earned 10 points\n');
}

/*
<<<< Task No: 27 >>>>
Alien Colors #3: 
Turn your if-else chain from Exercise 5-4 into an if-else chain.
*/


// choose green earn 5 point
if (alien_color === 'green') {
    console.log('\nThird Program');
    console.log('you just earned 5 points\n');
}
// choose yellow earn 10 point
else if (alien_color === 'yellow') {
    console.log('\nThird Program');
    console.log('you just earned 10 points\n');
    
}
// choose red earn 15 point
else if (alien_color === 'red') {
    console.log('\nThird Program');
    console.log('you just earned 15 points\n');
}