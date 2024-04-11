/*
<<<<< Task No: 44 >>>>>

# Sandwiches: 

> Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the
function call provides, and it should print a summary of the sandwich that is
being ordered. Call the function three times, using a different number of
arguments each time.

*/

  type Itmes = [
    ('Chicken Spread' | 'Veg Spread'),
    ('Cheese'  | null)?,
    ('Lettuce' | null)?,
    ('Tomato'  | null)?,
    ('Onion'   | null)?,
]

// Define Function
function sandwich(...items: Itmes) {
    console.count(`\n>> Order`);
    console.group(`>> Sandwich Items:`);
        items.forEach(item => {if (item) console.log(' ● ' + item)});
    console.groupEnd();
}

// Call Function
sandwich('Chicken Spread', 'Cheese', 'Lettuce', 'Tomato')
sandwich('Chicken Spread', 'Cheese', null, 'Tomato')
sandwich('Chicken Spread', 'Cheese')
sandwich('Chicken Spread')


