// if explanation:if is a conditional statement that executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed.

// if (2 === "2") {
//     console.log("This is true");
// }
// else{
//     console.log("This is false");
// }
// comparision operators
// == is equal to, === is equal to and same type, != is not equal to, !== is not equal to and same type, > is greater than, < is less than, >= is greater than or equal to, <= is less than or equal to, && is and, || is or, ! is not, ? is ternary operator, : is ternary operator, ?? is nullish coalescing operator, ??= is nullish coalescing assignment operator.

// The Logical operators are : &&, ||, ! are the logical operators in javascript. The logical operators are used to determine the logic between variables or values.

// const temperature = 45;
// if(temperature <50)
// {
//     console.log("The temerature is less than 50");
// }
// else{
    
//     console.log("The temperature greater than 50");
// }

// const score = 200
// if(score > 100)
// {
//     const power = "flying"
//     console.log(`user has ${power} power`);
// }

// short hand notation explanation: The short hand notation is a way to write a code in a shorter way. It is a way to write a code in a more readable way.

// const balane = 1000;

// // if(balane > 500) console.log("You have a good balance");

// if (balane < 500) {
//     console.log("The balance is less than 500");
// }
// else if(balane < 750){
//     console.log("The balance is less than 750");
// }
// else if (balane < 900){
//     console.log("The balance is less than 900");
// }
// else
// {
//     console.log("The balance is less thn 1200");
// }

// This below code is an example of nested if statement

const userLoggedIn = true;
const debitCard = true;
const loggedFromGoogle = false;
const loggedFromEmail = true;

// if(userLoggedIn && debitCard)
// {
//     console.log("You can make a purchase");
// }
// else if(userLoggedIn && !debitCard)
// {
//     console.log("You can not make a purchase");
// }
// else{
//     console.log("You are not logged in");
// }

if(loggedFromGoogle || loggedFromEmail)
{
    console.log("You are logged in");
    if(userLoggedIn && debitCard)
    {
        console.log("You can make a purchase");
    }
    else if(userLoggedIn && !debitCard)
    {
        console.log("You can not make a purchase");
    }
    else{
        console.log("You are not logged in");
    }
}