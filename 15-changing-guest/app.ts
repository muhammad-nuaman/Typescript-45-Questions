/*
<<<< Task No: 15 >>>>
Changing Guest List: You just heard that one of your 
guests can’t make the dinner, so you need to send out a 
new set of invitations. You’ll have to think of someone 
else to invite.
 */

let guests_list: string[] = [
    'Bill Gates', 
    'Mark Zuckerburg', 
    'Elon Musk', 
    'Steve Jobs'
];

let guest_message = 
    `Sorry! Steve Jobs can't accept your invitation because he's no more`;


guests_list.forEach(guest => {
    if (guest_message.includes(guest)) {
        guests_list[guests_list.indexOf(guest)] = 'Sam Altman';
    }
});

console.group('<<<< New Invitation For Dinner >>>>\n');
guests_list.forEach(guest => {
    console.log(`Dear ${guest}, 
    would you like to join me for dinner?\n`)
});
console.groupEnd();