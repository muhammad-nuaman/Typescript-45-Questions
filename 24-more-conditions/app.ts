/* 
<<<< Task No: 24 >>>>

# More Conditional Tests: 

> You don’t have to limit the number 
of tests you create to 10. If you want to try more comparisons,
write more tests. Have at least one True and one False result for
each of the following:

*/

type Person = {
  name: string;
  age: number;
  gender: string;
  isMarried: boolean;
  isGraduate: boolean;
  haveJob: boolean;
  courses: string[];
}

const person: Person = {
    name: "Hussain",
    age: 25,
    gender: "male",
    isMarried: false,
    isGraduate: true,
    haveJob: true,
    courses: ['Web Development', 'Data Science', 'GenEng']
}

// Not Equal Condition
console.log(`\nPerson Name (${person.name}) is Not Hussain`);
console.log(person.name !== 'Hussain');

// Not Equal Condition with Lower Case
console.log(`\nPerson Name (${person.name}) is Not hussain`);
console.log(person.name !== 'hussain');

// Equal Condition
console.log(`\nPerson Name (${person.name}) is Hussain`);
console.log(person.name === 'Hussain');

// Equal Condition with Lower Case
console.log(`\nPerson Name (${person.name}) is hussain`);
console.log(person.name === 'hussain');


// Greater than Age
console.log(`\nPerson Age (${person.age}) is Greater than 25`);
console.log(person.age > 25);

// Greater than or equal Age 
console.log(`\nPerson Age (${person.age}) is Greater than or equal 25`);
console.log(person.age >= 25);

// Less than Age
console.log(`\nPerson Age (${person.age}) is Less than 25`);
console.log(person.age < 25);

// Less than or equal Age 
console.log(`\nPerson Age (${person.age}) is Less than or equal 25`);
console.log(person.age <= 25);

// Person Marriage Status
console.log(`\nPerson is Not Married!`);
console.log(!person.isMarried);

// Person Graduate Status
console.log(`\nPerson is Graduate!`);
console.log(person.isGraduate);


// Person Graduate Status
console.log(`\nPerson have a Job!`);
console.log(person.haveJob);


// Person Marriage and Graduate Status
console.log(`\nPerson is Graduate and have a Job`);
console.log(person.isGraduate && person.haveJob);

// Visa Required
console.log();
console.dir(`Visa Required:`);
console.log('Person has Married or Graduate!\n');
console.log(`Person Married State: ${person.isMarried}`);
console.log(`Person Graduate State: ${person.isGraduate}`);
console.log();
console.dir(`Visa Eligibility: ${person.isMarried || person.isGraduate}`);
console.log('\n');


// Courses
console.log('\nPerson taking Graphic Design Course?');
console.log(person.courses.includes('Graphic Design'));
console.log('\nPerson taking GenEng Course?');
console.log(person.courses.includes('GenEng'));
