"use strict";
/*
<<<< Task No: 21 >>>>
They think of something you could store in a TypeScript Object.
Write a program that creates Objects containing these items.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Function: create Object
const booker = (title, author, published) => {
    return {
        title: title,
        author: author,
        published: published
    };
};
// Create Book Objects
const book1 = booker('The Hobbit', 'J.R.R Tokien', 1937);
const book2 = booker('Harry Potter', 'J.K Rowling', 1997);
console.table(book1);
console.table(book2);
