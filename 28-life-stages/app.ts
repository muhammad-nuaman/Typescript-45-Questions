/* 
<<<< Task No: 28 >>>>

# Stages of Life: 

> Write an if-else chain that determines a person’s stage of life. 

> Set a value for the variable age, and then:

*/


// Random Value between 0 to 5
let random_name: number = Math.floor(Math.random() * 6);

// Random Value between 1 to 70
let random_age: number = Math.floor(Math.random() * 70 + 1);

// Multiple Persons Name 
const persons: string[] = [
    "Salman",
    "Ali",
    "Ahmed",
    "Omar",
    "Hassan",
    "Zaid"
];
  
// Define Person Name
let person_name: string =  persons[random_name];

// Define Person Age
let person_age: number = random_age;


// Print Person Name and Age
console.log(`${person_name} age is ${person_age}`);


// Define Life Stages
const life_stage: {[key: string]: boolean} = {
    baby: person_age < 2, 
    toddler: person_age >= 2 && person_age < 4,
    kid: person_age >= 4 && person_age < 13,
    teenager: person_age >= 13 && person_age < 20,
    adult: person_age >= 20 && person_age < 65,
    elder: person_age >= 65
}

if (life_stage.baby) console.dir(`He's a baby`)                 // Baby
else if (life_stage.toddler) console.dir(`He's a toddler`)      // Toddler  
else if (life_stage.kid) console.dir(`He's a kid`)              // Kid
else if (life_stage.teenager) console.dir(`He's a teenager`)    // Teenager
else if (life_stage.adult) console.dir(`He's an Adult`)         // Adult
else if (life_stage.elder) console.dir(`He's an Elder`)         // Elder

