// for loop problems
// 1. Write a program to print the numbers from 1 to 10.

// function printNumbers() {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }

// printNumbers();

// Explanation: In the above program, we are using a for loop to print the numbers from 1 to 10. The loop starts from 1 and ends at 10. The loop will run until the condition i <= 10 is true. The loop will increment the value of i by 1 in each iteration.

// ************************************************************************************************

// Problem 2: Sum of Numbers
// Write a program to calculate the sum of numbers from 1 to 10.

// function sumNumber()
// {
//     let sum=0;
//     for(let i=1; i<=10;i++)
//     {
//         sum+=i;
//     }
//     return sum;
// }

// console.log(sumNumber());

// Explanation: In the above program, we are using a for loop to calculate the sum of numbers from 1 to 10. The loop starts from 1 and ends at 10. The loop will run until the condition i <= 10 is true. The loop will increment the value of i by 1 in each iteration. We are using a variable sum to store the sum of numbers. In each iteration, we are adding the value of i to the sum.

// ************************************************************************************************

// Problem 3: Multiplication Table
// Write a program to print the multiplication table of a given number.

// function multiplicationTable(num) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${num} x ${i} = ${num * i}`);
//   }
// }

// multiplicationTable(5);

// Explanation: In the above program, we are using a for loop to print the multiplication table of a given number. The loop starts from 1 and ends at 10. The loop will run until the condition i <= 10 is true. The loop will increment the value of i by 1 in each iteration. We are using the template literal to print the multiplication table.

// ************************************************************************************************

// Problem 4: Array Elements
// Write a program to print the elements of an array.

// function printArrayElements(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// console.log(printArrayElements([1, 2, 3, 4, 5]));

// Explanation: In the above program, we are using a for loop to print the elements of an array. The loop starts from 0 and ends at the length of the array. The loop will run until the condition i < arr.length is true. The loop will increment the value of i by 1 in each iteration. We are using the index i to access the elements of the array.

// ************************************************************************************************

// Problem 5: Reverse Array
// Write a program to print the elements of an array in reverse order.

// function reverseArray(arr) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         console.log(arr[i]);
//     }
// }
// console.log(reverseArray([1, 2, 3, 4, 5]));

// Explanation: In the above program, we are using a for loop to print the elements of an array in reverse order. The loop starts from the last index of the array and ends at 0. The loop will run until the condition i >= 0 is true. The loop will decrement the value of i by 1 in each iteration. We are using the index i to access the elements of the array.

// ************************************************************************************************
// While Loop Problems

// Problem 1: Print Numbers
// Write a program to print the numbers from 1 to 10 using a while loop.

// function printNumbers() {
//     let i = 1;
//     while (i <= 10) {
//         console.log(i);
//         i++;
//     }
// }

// printNumbers();

// Explanation: In the above program, we are using a while loop to print the numbers from 1 to 10. We have initialized a variable i with 1. The loop will run until the condition i <= 10 is true. The loop will increment the value of i by 1 in each iteration.

// ************************************************************************************************

// Problem 2: Sum of Numbers
// Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

// function sumNumbers() { 
//     let i = 1;
//     let sum = 0;
//     while (i <= 10) {
//         sum += i;
//         i++;
//     }
//     return sum;
// }

// console.log(sumNumbers());

// Explanation: In the above program, we are using a while loop to calculate the sum of numbers from 1 to 10. We have initialized a variable i with 1 and sum with 0. The loop will run until the condition i <= 10 is true. The loop will increment the value of i by 1 in each iteration. We are adding the value of i to the sum in each iteration.

// ************************************************************************************************

// Problem 3: Factorial
// Write a program to calculate the factorial of a number using a while loop.

// function factorial(num) {
//     let i = 1;
//     let fact = 1;
//     while (i <= num) {
//         fact *= i;
//         i++;
//     }
//     return fact;
// }

// console.log(factorial(5));

// Explanation: In the above program, we are using a while loop to calculate the factorial of a number. We have initialized a variable i with 1 and fact with 1. The loop will run until the condition i <= num is true. The loop will increment the value of i by 1 in each iteration. We are multiplying the value of i to the fact in each iteration.

// ************************************************************************************************

// Problem 4: Guessing Game
// Write a program to create a guessing game. The program generates a random number between 1 and 10. The user has to guess the number. If the user guesses the correct number, the program will display "You guessed the correct number". If the user guesses the wrong number, the program will display "You guessed the wrong number".

// const readlineSync = require('readline-sync');

// function guessingGame() {
//     const randomNumber = Math.floor(Math.random() * 10) + 1;
//     let guess;
//     while (guess !== randomNumber) {
//         guess = parseInt(readlineSync.question("Guess a number between 1 and 10: "));
//         if (guess === randomNumber) {
//             console.log("You guessed the correct number");
//         } else {
//             console.log("You guessed the wrong number");
//         }
//     }
// }

// guessingGame();

// Explanation: In the above program, we are using a while loop to create a guessing game. We are generating a random number between 1 and 10 using the Math.random() function. The user has to guess the number. We are using the readline-sync module to take input from the user. The loop will run until the user guesses the correct number. If the user guesses the correct number, the program will display "You guessed the correct number". If the user guesses the wrong number, the program will display "You guessed the wrong number".

// ************************************************************************************************

// Problem 5: Fibonacci Sequence
// Write a program to print the Fibonacci sequence up to a given number using a while loop.

// function fibonacciSequence(num) {
//     let a = 0, b = 1, c;
//     let i = 2;
//     console.log(a);
//     console.log(b);
//     while (i < num) {
//         c = a + b;
//         console.log(c);
//         a = b;
//         b = c;
//         i++;
//     }
// }

// fibonacciSequence(10);

// Explanation: In the above program, we are using a while loop to print the Fibonacci sequence up to a given number. We have initialized three variables a, b, and c with 0, 1, and 0 respectively. We have initialized a variable i with 2. We are printing the first two numbers of the Fibonacci sequence. The loop will run until the condition i < num is true. In each iteration, we are calculating the next number of the Fibonacci sequence and updating the values of a, b, and c.

// ************************************************************************************************

                                                                // Do-While Loop Problems

// Problem 1: Print Numbers
// Write a program to print the numbers from 1 to 10 using a do-while loop.

// function printNumbers() {  
//     let i = 1;
//     do {
//         console.log(i);
//         i++;
//     } while (i <= 10);
// }

// printNumbers();

// Explanation: In the above program, we are using a do-while loop to print the numbers from 1 to 10. We have initialized a variable i with 1. The loop will run until the condition i <= 10 is true. The loop will increment the value of i by 1 in each iteration.

// ************************************************************************************************

// Problem 2: Sum of Numbers
// Write a program to calculate the sum of numbers from 1 to 10 using a do-while loop.

// function sumNumbers() {
//     let i = 1;
//     let sum = 0;
//     do {
//         sum += i;
//         i++;
//     } while (i <= 10);
//     return sum;
// }

// console.log(sumNumbers());

// Explanation: In the above program, we are using a do-while loop to calculate the sum of numbers from 1 to 10. We have initialized a variable i with 1 and sum with 0. The loop will run until the condition i <= 10 is true. The loop will increment the value of i by 1 in each iteration. We are adding the value of i to the sum in each iteration.

// ************************************************************************************************

// Problem 3: Repeat User Input
// Write a program to repeat the user input until the user enters the word "stop".

// const readlineSync = require('readline-sync');

// function repeatUserInput() {
//     let input;
//     do {
//         input = readlineSync.question("Enter a word: ");
//     } while (input !== "stop");
// }

// repeatUserInput();

// Explanation: In the above program, we are using a do-while loop to repeat the user input until the user enters the word "stop". We are using the readline-sync module to take input from the user. The loop will run until the user enters the word "stop".

// ************************************************************************************************

// Problem 4: Validate Number Input
// Write a program to validate the user input. The program will prompt the user to enter a number between 1 and 10. The program will keep prompting the user until the user enters a valid number.

// const readlineSync = require('readline-sync');
// function validateNumberInput() {
//     let number;
//     do {
//         number = parseInt(readlineSync.question("Enter a number between 1 and 10: "));
//     } while (number < 1 || number > 10);
//     console.log("Valid Number");
// }

// validateNumberInput();

// Explanation: In the above program, we are using a do-while loop to validate the user input. We are prompting the user to enter a number between 1 and 10. The loop will run until the user enters a valid number. If the user enters a number less than 1 or greater than 10, the program will keep prompting the user to enter a valid number.

// ************************************************************************************************

// Problem 5: Random Number Guessing Game

// Write a program to create a random number guessing game using a do-while loop. The program generates a random number between 1 and 10. The user has to guess the number. If the user guesses the correct number, the program will display "You guessed the correct number". If the user guesses the wrong number, the program will display "You guessed the wrong number".

// const readlineSync = require('readline-sync');
// function randomGuessingGame() { 
//     const randomNumber = Math.floor(Math.random() * 10) + 1;
//     let guess;
//     do {
//         guess = parseInt(readlineSync.question("Guess a number between 1 and 10: "));
//         if (guess === randomNumber) {
//             console.log("You guessed the correct number");
//         } else {
//             console.log("You guessed the wrong number");
//         }
//     } while (guess !== randomNumber);
// }

// randomGuessingGame();

// Explanation: In the above program, we are using a do-while loop to create a random number guessing game. We are generating a random number between 1 and 10 using the Math.random() function. The user has to guess the number. We are using the readline-sync module to take input from the user. The loop will run until the user guesses the correct number. If the user guesses the correct number, the program will display "You guessed the correct number". If the user guesses the wrong number, the program will display "You guessed the wrong number".

// ************************************************************************************************

