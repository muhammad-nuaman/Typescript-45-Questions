/*
<<<<< Task No: 38 >>>>>>
Cities:
Write a function called describe_city() that accepts the name of
a city and its country. The function should print a simple sentence,
such as Karachi is in Pakistan. Give the parameter for the country a
default value. Call your function for three different cities,
at least one of which is not in the default country.
 */
function describe_city(city = 'karachi', country = 'Pakistan') { console.log(`${city} is the city of ${country}`); }
// Print Cities and Countries Name
describe_city('Tokyo', 'Japan');
describe_city('Dhaka', 'Bangladesh');
describe_city('Lahore');
describe_city();
export {};
