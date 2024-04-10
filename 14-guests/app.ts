/*
<<<< Task No: 14 >>>>

# Guest List: 

> If you could invite anyone, living or deceased, to dinner, who would 
you invite? Make a list that includes atleast three people you’d like to 
invite to dinner. 

> Then use your list to print a message to each person, inviting them 
to dinner. 

*/

// Define Guests List
const guests: string[] = [
    'Bill Gates', 
    'Elon Musk', 
    'Steve Jobs'
];

// Print Invitation
console.count("<<<< Invitation For Dinner >>>>");
guests.forEach(guest => {
    console.log(`Dear ${guest}, 
    would you like to join me for dinner?\n`)
});


/*
<<<< Task No: 15 >>>>

# Changing Guest List: 

> You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to 
think of someone else to invite.

*/

// Message from the Guest
let guest_message = 
`Sorry! Steve Jobs can't accept your invitation because he's no more`;

// Guest Replacing
guests.forEach((guest, index) => {
    if (guest_message.includes(guest)) {
        guests[index] = 'Sam Altman';
    }
});

// Print Invitation
console.count("<<<< Invitation For Dinner >>>>");
guests.forEach(guest => {
    console.log(`Dear ${guest}, 
    would you like to join me for dinner?\n`)
});


/*
<<<< Task No: 16 >>>>

More Guests: 

> You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.

*/


// Add More Guests
guests.unshift('Tim Cook');
guests.splice(guests.length / 2, 0, "Brendin Eich");
guests.push('Mark Zuckerberg');

// Print Invitation
console.count("<<<< Invitation For Dinner >>>>");
guests.forEach(guest => {
    console.log(`Dear ${guest}, 
    would you like to join me for dinner?\n`)
});


/*
<<<< Task No: 17 >>>>

# Shrinking Guest List: 

> You just found out that your new dinner table won’t arrive in time for 
the dinner, and you have space for only two guests.

*/

// Print Message
console.log(`>>> I can invite only two people for dinner.\n`);

// Shirink Guests
while(guests.length > 2) {
    let notIntivitedGuest: unknown = guests.pop();
    console.log(`Dear ${notIntivitedGuest}, I'm sorry i can’t invite you to dinner!`);
}
console.log('\n');

// Invitation Remaining 2 Guest for Dinner
console.count("<<<< Invitation For Dinner >>>>");
guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

// Clear Guests List
guests.splice(0, guests.length);

// Print Message
console.log(`\nDinner is over, there are no more guests`);
console.log(`Remaining Guest: ${guests.length}\n`);
