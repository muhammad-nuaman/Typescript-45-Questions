/*
<<<< Task No: 24 >>>>
More Conditional Tests: You don’t have to limit the number
of tests you create to 10. If you want to try more comparisons,
write more tests. Have at least one True and one False result for
each of the following:
*/
const person = {
    name: 'Ali',
    age: 22,
    marriedStatus: false,
    jobStatus: true,
    country: 'Pakistan',
    takeAdmision: true,
    university: "Hardvard",
    wantSettledForeign: true,
};
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
console.log(`He's want to take admision in Hardvard University?`, ('Hardvard' === person.university));
// Foreign
console.log(`He's want to Settled in foreign?`, (true === person.wantSettledForeign));
export {};
