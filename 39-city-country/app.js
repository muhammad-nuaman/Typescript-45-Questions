"use strict";
/*
<<<<< Task No: 39 >>>>>
City Names:
Write a function called city_country() that takes in the name of a city
and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs,
and print the value that’s returned.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define Function
const city_country = (city, country) => `${city}, ${country}`;
// Call Function
console.log(city_country('Karachi', 'Pakistan'));
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Quetta', 'Pakistan'));
