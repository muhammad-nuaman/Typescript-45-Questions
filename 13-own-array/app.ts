/*
<<<< Task No: 13 >>>> 

# Your Own Array: 

> Think of your favorite mode of transportation, such as a motorcycle or 
a car, and make a list that stores several examples. 

> Use your list to print a series of statements about
these items, such as “I would like to own a Honda motorcycle.”

*/

// Define Transportations
let transportations: string[] = ['Car', 'Motor Bike', 'Bike'];

// Print Transportations
transportations.forEach(transportation => {
    console.log(`I would like to ride a ${transportation}`)
});