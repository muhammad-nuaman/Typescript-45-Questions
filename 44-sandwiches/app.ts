/*
<<<<< Task No: 44 >>>>>
Sandwiches: 
Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the
function call provides, and it should print a summary of the sandwich that is
being ordered. Call the function three times, using a different number of
arguments each time.
*/

// Define Ingredients
type ingredients = [
    'white bread' | 'brown bread',
    'tomato ketchup' | 'chilli sauce',
    'cucumber and tomato' | 'cucumber' | 'tomato',
    'chicken spread' | 'veg spread'
];

// Define Sandwich
function sandwich(...order: ingredients) {
    console.count('\nSandwich Order');
    order.forEach((item, index) => console.log(`> ${item}`)
    );
}

// Sandwich Orders
sandwich('white bread', 'tomato ketchup', 'cucumber and tomato', 'chicken spread');
sandwich('brown bread', 'chilli sauce', 'tomato', 'chicken spread');
sandwich('white bread', 'tomato ketchup', 'cucumber', 'veg spread');