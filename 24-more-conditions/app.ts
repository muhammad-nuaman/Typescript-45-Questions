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
interface person {
    name: string;
    age: number;
    marriedStatus: boolean;
    jobStatus: boolean;
    country: string;
    takeAdmision: boolean,
    university: 'Hardvard' | 'Cambridge',
    wantSettledForeign: boolean;
}
interface university {
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
const person: person = {
    name: 'Ali',
    age: 32,
    marriedStatus: false,
    jobStatus: true,
    country: 'Pakistan',
    takeAdmision: true,
    university: 'Cambridge',
    wantSettledForeign: true,
}

// Name
console.log('His name is Ali ', ('Ali' === person.name));
console.log('His name is ali ', ('ali' === person.name));
console.log('His name is ALI ', ('ALI' === person.name));
// Marriage
console.log(`He's Married`, (true === person.marriedStatus));
// Job
console.log(`He's doing Job`, (true === person.jobStatus));
// Age
console.log(`His age is 22`, (22 === person.age));
// living
console.log(`He's living in Pakistan`, ('Pakistan' === person.country));
// Admision?
console.log(`He's want to take admision?`, (true === person.takeAdmision));
// University?
if (person.takeAdmision) {
        console.log(`Which University he's want to take admision?`, person.university);
}
// Foreign
console.log(`He's want to Settled in foreign?`, (true === person.wantSettledForeign));

// spaces
console.log('\n');



//======================================
// Universities
//======================================
const university1: university = {
    name: 'Hardvard',
    admissionOpen:  true,
    ageRequired: {
        min: 18,
        max: 32
    }
}
const university2: university = {
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
