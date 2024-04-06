/*
<<<<< Task No 37 >>>>>>
Large Shirts: 
Modify the make_shirt() function so that shirts are large by default with 
a message that reads I love TypeScript. Make a large shirt and a medium
shirt with the default message, and a shirt of any size with a different message.
*/

// Define Shirt Sizes
type sizes = 'Small' | 'Medium' | 'Large';

// Define Function
function make_shirt(
    // Default Values
    size: sizes = 'Large', 
    text: string = 'I Love Typescript'
) {
    // Print Message
    console.dir('Ready to Wear!');
    console.log(`Shirt Size:  ${size}`);
    console.log(`Shirt Text:  ${text} \n`);
}

// =======================================
// Call Function
// =======================================

// Default: Size and Text
make_shirt();

// Default: Size
make_shirt('Medium');

// Default: Nothing
make_shirt('Small', '♡ Typescript ♡');

