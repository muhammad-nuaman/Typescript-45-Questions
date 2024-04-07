"use strict";
/*
<<<<< Task No: 44 >>>>>
Sandwiches:
Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the
function call provides, and it should print a summary of the sandwich that is
being ordered. Call the function three times, using a different number of
arguments each time.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define Function
function sandwich(...items) {
    console.count(`\nSandwich Order Summary`);
    items.forEach(item => console.log(item));
}
// Call Function
sandwich('Cheese', 'chicken', 'Lettuce');
sandwich('Cheese', 'chicken');
sandwich('Cheese');
