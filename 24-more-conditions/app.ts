/* 
<<<< Task No: 24 >>>>
More Conditional Tests: You don’t have to limit the number 
of tests you create to 10. If you want to try more comparisons,
write more tests. Have at least one True and one False result for
each of the following:
*/


//======================================
// Interfaces
//======================================
type Person = {
    name: string;
    age: number;
    marriedStatus: boolean;
    jobStatus: boolean;
    country: string;
    takeAdmision: boolean,
    university: 'Hardvard' | 'Cambridge',
    goAbroadStudy: boolean;
}
type University = {
    name: string;
    admissionOpen: boolean,
    ageRequired: {
        min: number,
        max: number
    }
}
//======================================

//======================================
// Person
//======================================
const person: Person = {
    name: 'Ali',
    age: 30,
    marriedStatus: false,
    jobStatus: true,
    country: 'Pakistan',
    takeAdmision: true,
    university: 'Cambridge',
    goAbroadStudy: true,
}
const myThinking = {
    name: 'ali',
};
// Name Cases
console.log('Your name is Ali? ', ('Ali' === person.name));
console.log('Your name is ali?', ('ali' === person.name));
console.log('Your name is ALI? ', ('ALI' === person.name));
// Marriage
console.log(`I think you're Married`, (true === person.marriedStatus));
// Job
console.log(`I think You're doing Job`, (true === person.jobStatus));
// Age
console.log(`I think You're older than 22!`, (person.age > 22));
// living
console.log(`I think You're living in Pakistan`, ('Pakistan' === person.country));
// Admision?
console.log(`I Think want to take admision?`, (true === person.takeAdmision));
// University?
if (person.takeAdmision) {
        console.log(`Which University You want to take admision?`, person.university);
}
// Foreign

console.log(`I think You want to go to abroad?`, (true === person.goAbroadStudy));
if (!person.goAbroadStudy) {
    console.log(`He does not want to go abroad.`);
}

// spaces
console.log('\n');



//======================================
// Universities
//======================================
const university1: University = {
    name: 'Hardvard',
    admissionOpen:  true,
    ageRequired: {
        min: 18,
        max: 32
    }
}
const university2: University = {
    name: 'Cambridge',
    admissionOpen: true,
    ageRequired: {
        min: 18,
        max: 36
    }
}

if (person.takeAdmision) {
    // Hardvard University
    if (person.university === 'Hardvard') {
        // Admision Open
        if (university1.admissionOpen) {
            console.log('Hardvard admisions are open');            
            // Age Required
            if ( 
                person.age >= university1.ageRequired.min &&   
                person.age <= university1.ageRequired.max   
                ) 
            {console.log('Your are Illegible')} //illegible
            else {console.log('Your are not Illegible')} // not illegible
            }
        // Admision not Open
        else {console.log('Hardvard admisions are not open')}
    }
    
    // Cambridge University
    else if (person.university === 'Cambridge') {
        if (university2.admissionOpen) {
            console.log('Cambridge admisions are open');
            // Age Required
            if ( 
                person.age >= university2.ageRequired.min &&   
                person.age <= university2.ageRequired.max   
                ) 
            {console.log('Your are Illegible')} // illegible
            else {console.log('Your are not Illegible')} // not illegible            
        }
        // Admision not Open
        else {console.log('Cambridge admisions are not open')}
    }
}
