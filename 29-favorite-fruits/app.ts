/*
<<<< Task No: 29 >>>>
Favorite Fruit: 
Make a array of your favorite fruits, 
and then write a series of independent if statements 
that check for certain fruits in your array.
*/

// Favorite Fruits
const favoriteFruits: string[] = ["Apple", "Banana", "Mango"];
const fruits: string[] = [
    "Banana",
    "Mango",
    "Pineapple",
    "Apple",
    "Kiwi"
  ];
  


//  Check Favroite Fruits
fruits.forEach(fruit => {
    if (favoriteFruits.includes(fruit)) {console.log(`You really like ${fruit}`)}
  })
