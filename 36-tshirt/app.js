/*
<<<<< Task No 36 >>>>>>

T-Shirt:
Write a function called make_shirt()
that accepts a size and the text of a message that should be
printed on the shirt.
The function should print a sentence summarizing the size of
the shirt and the message printed on it. Call the function.

<<<<< Task No 37 >>>>>>
Large Shirts:
Modify the make_shirt() function so that shirts are large by default with
a message that reads I love TypeScript. Make a large shirt and a medium
shirt with the default message, and a shirt of any size with a different message.
*/
// Make Shirts
function make_shirt(
// shirt default configuration
size = 'Large', color = 'White', design = 'Typography', message = 'I love Typescript') {
    if (design.includes('Sublimation')) {
        console.log(`Your Shirt is Ready! \n` +
            `Size: ${size} \n` +
            `Color: ${color} \n` +
            `Design: ${design} \n`);
    }
    else {
        console.log(`Your Shirt is Ready! \n` +
            `Size: ${size} \n` +
            `Color: ${color} \n` +
            `Design: ${design} \n` +
            `Print Message: ${message} \n`);
    }
}
// Shirt 1
make_shirt('Medium', 'Black', 'Sublimation');
// Shirt 2
make_shirt('Small', 'Grey', 'Embroidery', 'make it simple');
// Shirt 3
make_shirt('Large', 'White', 'Typography', 'My love Forever JavaScript');
// Default 
make_shirt();
export {};
