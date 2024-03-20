/*
<<<< Task No: 30 >>>>
Hello Admin: Make a array of five or more usernames,
including the name 'admin'. Imagine you are writing code that will print a greeting
to each user after they log in to a website.
Loop through the array, and print a greeting to each user:
 */
function status() {
    // const state = [false, true];
    // return state[];
    return [false, true][Math.floor(Math.random() * 2)];
}
let users = [
    { username: "admin", loginstatus: status() },
    { username: "Ali Khan", loginstatus: status() },
    { username: "Fatima Ahmed", loginstatus: status() },
    { username: "Muhammad Hassan", loginstatus: status() },
    { username: "Aisha Malik", loginstatus: status() },
    { username: "Ibrahim Ahmed", loginstatus: status() }
];
users.forEach((user) => {
    if (user.loginstatus) {
        if (user.username === 'admin') {
            console.log(`Hi admin, would you like to see a status report?`);
        }
        else {
            console.log(`Hi ${user.username}, thank you for logging in again.`);
        }
    }
});
export {};
