"use strict";
/*
<<<< Task No: 32 >>>>
Checking Usernames:
Do the following to create a program that simulates
how websites ensure that everyone has a unique username.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const currentUsers = [
    "Muhammad",
    "Fatima",
    "Ali",
    "Abdullah",
    "Aisha",
    "Ahmed",
    "Yusuf",
    "Khadija",
    "Omar",
];
const newUsers = [
    "Hassan",
    "Zainab",
    "Omar",
    "Safiya",
    "Amina",
    "Yusuf",
    "Abdullah",
];
newUsers.forEach((name) => {
    if (currentUsers.includes(name))
        console.log(`Sorry! ${name} is already used`);
    else
        console.log(`${name} is available`);
});
