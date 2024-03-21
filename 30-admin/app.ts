/*
<<<< Task No: 30 >>>>
Hello Admin: Make a array of five or more usernames, 
including the name 'admin'. Imagine you are writing code that will print a greeting 
to each user after they log in to a website. 
Loop through the array, and print a greeting to each user:
*/


const status = () => [false, true][Math.floor(Math.random() * 2)];

const users: { name: string; isLogin: boolean}[] = [
    { name: "admin", isLogin: status() },
    { name: "Ali Khan", isLogin: status() },
    { name: "Fatima Ahmed", isLogin: status() },
    { name: "Muhammad Hassan", isLogin: status() },
    { name: "Aisha Malik", isLogin: status() },
    { name: "Ibrahim Ahmed", isLogin: status() },
];


users.forEach((user) => {    
    if (user.isLogin) {
        if(user.name.includes('admin')) {
            console.log(`Hi admin, would you like to see a status report?`);       
        }
        else {
            console.log(`Hi ${user.name}, thank you for logging in again.`);       
        }
    }
});

/*
<<<< Task No: 31 >>>>
No Users: 
Add an if test to Exercise 30 to make sure the list of users is not empty.
 */

// Empty Array
const loginUsers:{name: string, isLogin: boolean}[] = [];

// Push Login User
users.forEach((user)=>{if(user.isLogin) loginUsers.push(user)})


// Print Message (when users not login)
if (loginUsers.length) {
    if (loginUsers.length > 1) {console.log(`\n${loginUsers.length} users are logged in`)}
    else {console.log(`\nOnly ${loginUsers.length} user is logged in`)}
}
else {console.log(`\nNo User: We are finding some users!`)}
