// In Js The Exection Context is the environment in which the code is executed.

// There are 3 types of Execution Context:
// 1. Global Execution Context
// 2. Functional Execution Context
// 3. Eval Execution Context\

// The Execution Context is created in two phases:
// 1. Creation Phase
// 2. Execution Phase

// Memory Creation Phase:
// 1. Creation of the Variable Object (VO)
// 2. Creation of the Scope Chain
// 3. Determine the value of 'this' keyword

// Execution Phase:
// The code is executed line by line.

// Example :

let val1 = 10
let val2 = 20

function add(num1, num2) {
     let total = num1 + num2
     return total
}

let result = add(val1, val2)
let result2 = add(30, 40)

console.log(result)
console.log(result2)

