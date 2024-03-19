/*
<<<< Task No: 25 >>>>
Alien Colors #1: 
Imagine an alien was just shot down in a game.
Create a variable called alien_color and assign it a value of
'green', 'yellow', or 'red'.
*/

// multiple colors 
const colors: string[] = ['green', 'yellow', 'red'];
// random indexing
const random: number = Math.floor(Math.random() * 3);
// random choice
const alien_color: string = colors[random]; 

// Print Choice
console.log(`\nYou Choose Color: ${alien_color}`);

// choose green 
if (alien_color === 'green') {
    // Program Heading
    console.log('\nFirst Program');
    // Earn 5 point
    console.log('you just earned 5 points\n');
}


/*
<<<< Task No: 26 >>>>
Alien Colors #2: 
Choose a color for an alien as you did in Exercise 25, 
and write an if-else chain.
*/

// choose green
if (alien_color === 'green') {
    // Program Heading
    console.log('\nSecond Program');
    //  Earn 5 point
    console.log('you just earned 5 points\n');
}
// choose another 
else {
    // Program Heading
    console.log('\nSecond Program');
    // Earn 10 point
    console.log('you just earned 10 points\n');
}

/*
<<<< Task No: 27 >>>>
Alien Colors #3: 
Turn your if-else chain from Exercise 5-4 into an if-else chain.
*/


// choose green
if (alien_color === 'green') {
    // Program Heading
    console.log('\nThird Program');
    //  Earn 5 point
    console.log('you just earned 5 points\n');
}
// choose yellow
else if (alien_color === 'yellow') {
    // Program Heading
    console.log('\nThird Program');
    // Earn 10 point
    console.log('you just earned 10 points\n');
    
}
// choose red
else if (alien_color === 'red') {
    // Program Heading
    console.log('\nThird Program');
    // Earn 15 point
    console.log('you just earned 15 points\n');
}