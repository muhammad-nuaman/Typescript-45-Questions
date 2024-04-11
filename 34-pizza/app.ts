/*
<<<< Task No: 34 >>>>

# Pizzas: 

> Think of at least three kinds of your favorite pizza. 
Store these pizza names in a array, and then use a for loop to 
print the name of each pizza.

*/

// Define Pizzas
const pizzas: string[] = [
    "Margherita",
    "Pepperoni",
    "Vegetarian",
    "Hawaiian"
];

// Define Opinions About Pizzas
const opinions: string[] = [
    'pizza because of its simplicity and the fresh taste of basil and tomatoes.',

    'pizza is my favorite due to its savory pepperoni slices and gooey cheese combination.',
    
    'pizza is a great choice for me as I enjoy the variety of colorful vegetables and flavors it offers.',
    
    'pizza is a unique blend of sweet and savory with the combination of pineapple and ham, which I find quite delicious.'
];


// Print Opinions (First Way)
for (let i = 0; i < pizzas.length; i++) console.log(`${pizzas[i]} ${opinions[i]} \n`);

// Print Opinions (Second Way)
// pizzas.forEach((pizza, index) => console.log(`${pizza} ${opinions[index]}\n`));

// Print Final statement
console.dir("I really like pizza!");
