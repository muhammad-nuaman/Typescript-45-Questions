"use strict";
/*
<<<<< Task No 36 >>>>>>

# T-Shirt:

> Write a function called make_shirt()
that accepts a size and the text of a message that should be
printed on the shirt.
The function should print a sentence summarizing the size of
the shirt and the message printed on it. Call the function.

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define Function
function make_shirt(size, text) {
    console.dir('Ready to Wear!');
    console.log(`Shirt Size:  ${size}`);
    console.log(`Shirt Text:  ${text}`);
}
// Call Function
make_shirt('Large', 'I Love TypeScript');
