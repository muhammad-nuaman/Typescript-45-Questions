// Task No: 3
/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase. */

let second_person:string = 'sir zia khan';
// lower case
console.log(second_person.toLowerCase());
// upper case
console.log(second_person.toUpperCase());

let $second_person: string[] = second_person.split(" ");
$second_person.forEach((e, i, arr)=>{
    arr[i] = e[0].toUpperCase()+e.slice(1).toLowerCase();
});

// title case
console.log(...$second_person);

