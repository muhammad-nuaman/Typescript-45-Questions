/*
<<<< Task No: 14 >>>>
Guest List: If you could invite anyone, living or deceased, 
to dinner, who would you invite? Make a list that includes at
least three people you’d like to invite to dinner. 
Then use your list to print a message to each person, 
inviting them to dinner. 
 */

let guest_list: string[] = [
    'Bill Gates', 
    'Mark Zuckerberg', 
    'Elon Musk', 
    'Steve Jobs'
];

console.group("<<<< Invitation For Dinner >>>>\n");
guest_list.forEach(guest => {
    console.log(`Dear ${guest}, 
    would you like to join me for dinner?\n`)
});
