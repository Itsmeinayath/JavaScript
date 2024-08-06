// let a = 10
// const b = 20
// var c = 30

// if(true){
//     let a = 40
//     const b = 50
//     var c = 60
// }


// console.log(a)
// console.log(b)
// console.log(c)

// Global Scope: Variables declared outside any function or block. These variables can be accessed and modified from any part of the code.

// Local Scope: Variables declared within a function or a block (using let or const). These variables can only be accessed within the function or block they are declared in.

// Imp : Dont use var keyword in ES6, use let and const instead. Var has function scope, let and const have block scope.


// function one()
// {
//     const username  = "Inayath"
//     function two()
//     {
//         const website = "www.inayath.com"
//         console.log(username)
//     }
//     // console.log(website)
//     two()
// }
// one()


// if(true)
// {
//     const username = "Inayath "
//     if(username === "Inayath ")
//     {
//         const website = "www.inayath.com"
//         console.log(username +  website)
//     }
    // console.log(website)
// }

// console.log(username)

// This is called hoisting in JS. Function declarations are hoisted to the top of the code, so you can call the function before it is declared in the code.

// console.log(addone(2))
// function addone(num)
// {
//     return num + 1
// }

// addone(2)



// addTwo(5)
// const addTwo = function(num)
// {
//     return num + 2
// }
