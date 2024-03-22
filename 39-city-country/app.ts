/*
<<<<< Task No: 39 >>>>>
City Names: 
Write a function called city_country() that takes in the name of a city 
and its country. The function should return a string formatted like this:

"Lahore, Pakistan"
*/


//  City and Country
const city_country = (city: string, country: string) => `${city}, ${country}`;

// Print
console.log(city_country('karachi', 'Pakistan'))
console.log(city_country('Lahore', 'Pakistan'))
console.log(city_country('Quetta', 'Pakistan'))


