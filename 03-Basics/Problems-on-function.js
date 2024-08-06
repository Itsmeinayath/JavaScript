// Problem 1: Function Declaration and Invocation
//decsription: Write a function greet that takes a name as an argument and prints "Hello, [name]!".

// function greet(name) {
//     console.log(`Hello,${name}!`);
// }

// greet("Inayath");

// Explanation:
// Function greet is declared and takes one parameter name.
// It prints a greeting message using template literals.
// The function is invoked with the argument "Inayath".

// ********************************************************************************************************************

// Problem 2: Function Expression
// description: Create a function expression square that takes a number and returns its square.

// const square =function(num)
// {
//     return num  * num ;
// }
// console.log(square(3));

// Explanation:A function expression square is assigned to a constant.
// The function takes a number and returns its square.
// The function is invoked with the argument `3`.

// ********************************************************************************************************************

// Problem 3: Arrow Function
// description: Create an arrow function cube that takes a number and returns its cube.

// const cube = (num) => {
//     return num * num * num;
// }
// console.log(cube(2));

// Explanation: An arrow function cube is declared.
// The function takes a number and returns its cube.
// The function is invoked with the argument `2`.

// ********************************************************************************************************************

// Problem 4: Default Parameters
// description: Create a function greet that takes a name as an argument and prints "Hello, [name]!". If the name is not provided, it should print "Hello there!".  

// function greet(name,message="Hello there!")
// {
//     console.log(`${message},${name}!`);
// }

// greet("Inayath");
// greet("inayath","hi")

// Explanation:
// Default parameters are used to provide a default value for the message parameter if it is not supplied.

// ********************************************************************************************************************

// Problem 5: Rest Parameters
// description: Create a function sum that takes any number of arguments and returns their sum.

// function sum(...num){
//     return num.reduce((total,num)=>total+num,0);
// }

// console.log(sum(1,2,3,4,5));
// console.log(sum(200,400,600,800));

// Explanation:
// The sum function uses rest parameters to gather all arguments into an array.
// The reduce method is used to sum the elements.

// ********************************************************************************************************************

// Problem 6: Higher-Order Functions
// description :Write a higher-order function repeat that takes a function fn and a number n, and invokes fn n times.

// function repeat(fn,n){
//     for(let i=0;i<n;i++)
//     {
//         fn();
//     }
// }

// // repeat(() => console.log("Hello, World!"), 5);

// Explanation:
// The repeat function takes a function fn and a number n.
// It invokes fn n times using a loop.

// ********************************************************************************************************************

// Problem 7: Closures
// description:Write a function createCounter that returns a function. The returned function should increment and return a counter each time it is called.

// function createCounter(){
//     let counter = 0;
//     return function(){
//         counter++;
//         return counter;
//     };
// }

// const counter = createCounter();
// console.log(counter());
// console.log(counter()); 
// console.log(counter());

// Explanation:
// createCounter returns a function that has access to the counter variable through closure.
// Each call to the returned function increments and returns the counter.

// ********************************************************************************************************************

// Problem 8: IIFE (Immediately Invoked Function Expression)
// description:Write an IIFE that prints "Hello, World!" to the console.

// (function(){
//     console.log("Hello, World!");
// })();

// // Explanation:
// An IIFE is a function that is defined and immediately invoked.
// The function is wrapped in parentheses and followed by () to invoke it immediately.

// ********************************************************************************************************************

// Problem 9: Recursion
// description:Write a recursive function factorial that calculates the factorial of a number.

// function factorial(num)
// {
//     if(num === 0)
//     {
//         return 1;
//     }
//     else{
//         return num * factorial(num-1);
//     }
// }

// console.log(factorial(5));

// Explanation:
// The factorial function calls itself recursively until the base case (n === 0) is reached.
// Each recursive call multiplies the number by the factorial of the number minus one.

// ********************************************************************************************************************

// Problem 10: Function Currying

// description:Write a function curry that takes a binary function and an argument, and returns a function that takes the second argument.      

// function add(a)
// {
//     return function(b){
//         return a+b;
//     };
// }

// const addfive = add(5);
// console.log(addfive(10));


// Explanation:
// The add function returns another function that takes the second argument.
// This is an example of function currying, where a function with multiple arguments is transformed into a sequence of functions, each with a single argument.




