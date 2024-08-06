// Problem 1: Days of the Week
// Description : Write a function getDayName that takes a number (0-6) and returns the corresponding day of the week.

// function getDayName(dayNumber) {
//     let getDayName;
//     switch (dayNumber) {
//         case 0:
//             dayName = "Invalid option enetered"
//             break;
//         case 1:
//             dayName = "Sunday"
//             break;
//         case 2:
//             dayName = "Monday"
//             break;
//         case 3:
//             dayName = "Tuesday"
//             break;
//         case 4:
//             dayName = "Wednesday"
//             break;
//         case 5:
//             dayName = "Thursday"
//             break;
//         case 6:
//             dayName = "Friday"
//             break;
//         case 7:
//             dayName = "Saturday"
//             break;
//         default:
//             dayName = "Invalid option enetered"
//             break;
//     }
//     return dayName;

// }

// console.log(getDayName(1)); // Sunday
// console.log(getDayName(2)); // Monday
// console.log(getDayName(3)); // Tuesday

// Explanation: In the above code, we have a function getDayName that takes a number (1-7) and returns the corresponding day of the week. We have used a switch statement to check the value of the dayNumber and return the corresponding day name. If the dayNumber is not in the range of 0-6, we return "Invalid option entered".

// ********************************************************************************************************************

// Problem 2: Grade Calculator
// Description : Write a function getGrade that takes a number (0-100) and returns the corresponding letter grade.

// function getGrade(score) {
//     let grade;
//     switch (true) {
//         case (score >= 90 && score <= 100):
//             grade = "A"
//             break;
//         case (score >= 80 && score < 90):
//             grade = "B"
//             break;
//         case (score >= 70 && score < 80):
//             grade = "C"
//             break;
//         case (score >= 60 && score < 70):
//             grade = "D"
//             break;
//         case (score >= 0 && score < 60):
//             grade = "F"
//             break;
//         default:
//             grade = "Invalid score"
//             break;
//     }
//     return grade;
// }

// console.log(getGrade(95)); // A
// console.log(getGrade(85)); // B
// console.log(getGrade(75)); // C
// console.log(getGrade(65)); // D

// Explanation: In the above code, we have a function getGrade that takes a number (0-100) and returns the corresponding letter grade. We have used a switch statement with the condition true to check the value of the score and return the corresponding grade. If the score is not in the range of 0-100, we return "Invalid score".

// ********************************************************************************************************************

// Problem 3: Traffic Light
// Description : Write a function getTrafficLight that takes a string ("red", "yellow", "green") and returns the corresponding action.

// function getTrafficLight(color) {
//     let action;
//     switch (color) {
//         case "red":
//             action = "Stop"
//             break;
//         case "yellow":
//             action = "Slow down"
//             break;
//         case "green":
//             action = "Go"
//             break;
//         default:
//             action = "Invalid color"
//             break;
//     }
//     return action;
// }

// console.log(getTrafficLight("red")); // Stop
// console.log(getTrafficLight("yellow")); // Slow down
// console.log(getTrafficLight("green")); // Go

// Explanation: In the above code, we have a function getTrafficLight that takes a string ("red", "yellow", "green") and returns the corresponding action. We have used a switch statement to check the value of the color and return the corresponding action. If the color is not "red", "yellow", or "green", we return "Invalid color".

// ********************************************************************************************************************

// Problem 4: Month Name
// Description : Write a function getMonthName that takes a number (1-12) and returns the corresponding month name.

// function getMonthName(monthNumber) {    
//     let monthName;
//     switch (monthNumber) {
//         case 1:
//             monthName = "January"
//             break;
//         case 2:
//             monthName = "February"
//             break;
//         case 3:
//             monthName = "March"
//             break;
//         case 4:
//             monthName = "April"
//             break;
//         case 5:
//             monthName = "May"
//             break;
//         case 6:
//             monthName = "June"
//             break;
//         case 7:
//             monthName = "July"
//             break;
//         case 8:
//             monthName = "August"
//             break;
//         case 9:
//             monthName = "September"
//             break;
//         case 10:
//             monthName = "October"
//             break;
//         case 11:
//             monthName = "November"
//             break;
//         case 12:
//             monthName = "December"
//             break;
//         default:
//             monthName = "Invalid month number"
//             break;
//     }
//     return monthName;
// }

// console.log(getMonthName(1)); // January
// console.log(getMonthName(2)); // February
// console.log(getMonthName(3)); // March

// Explanation: In the above code, we have a function getMonthName that takes a number (1-12) and returns the corresponding month name. We have used a switch statement to check the value of the monthNumber and return the corresponding month name. If the monthNumber is not in the range of 1-12, we return "Invalid month number".

// ********************************************************************************************************************

// Problem 5: Season Checker
// Description : Write a function getSeason that takes a number (1-12) and returns the corresponding season.

// function getSeason(monthNumber) {
//     let season;
//     switch (monthNumber) {
//         case 12:
//         case 1:
//         case 2:
//             season = "Winter"
//             break;
//         case 3:
//         case 4:
//         case 5:
//             season = "Spring"
//             break;
//         case 6:
//         case 7:
//         case 8:
//             season = "Summer"
//             break;
//         case 9:
//         case 10:
//         case 11:
//             season = "Fall"
//             break;
//         default:
//             season = "Invalid month number"
//             break;
//     }
//     return season;
// }

// console.log(getSeason(1)); // Winter
// console.log(getSeason(4)); // Spring
// console.log(getSeason(8)); // Summer

// Explanation: In the above code, we have a function getSeason that takes a number (1-12) and returns the corresponding season. We have used a switch statement with multiple cases for each season to check the value of the monthNumber and return the corresponding season. If the monthNumber is not in the range of 1-12, we return "Invalid month number".

// ********************************************************************************************************************

// Problem 6: Check Browser
// Description : Write a function checkBrowser that takes a string ("Chrome", "Firefox", "Safari", "Edge") and returns the corresponding message.

// function checkBrowser(browser) {
//     let message;
//     switch (browser) {
//         case "Chrome":
//             message = "You are using Chrome"
//             break;
//         case "Firefox":
//             message = "You are using Firefox"
//             break;
//         case "Safari":
//             message = "You are using Safari"
//             break;
//         case "Edge":
//             message = "You are using Edge"
//             break;
//         default:
//             message = "Invalid browser"
//             break;
//     }
//     return message;
// }
// console.log(checkBrowser("Chrome")); // You are using Chrome
// console.log(checkBrowser("Firefox")); // You are using Firefox
// console.log(checkBrowser("Safari")); // You are using Safari
// console.log(checkBrowser("Edge")); // You are using Edge

// Explanation: In the above code, we have a function checkBrowser that takes a string ("Chrome", "Firefox", "Safari", "Edge") and returns the corresponding message. We have used a switch statement to check the value of the browser and return the corresponding message. If the browser is not "Chrome", "Firefox", "Safari", or "Edge", we return "Invalid browser".

// ********************************************************************************************************************

// Problem 7: Basic Calculator
// Description : Write a function basicCalculator that takes two numbers and an operator (+, -, *, /) and returns the result of the operation.

// function basicCalculator(num1, num2, operator) {
//     let result;
//     switch (operator) {
//         case "+":
//             result = num1 + num2
//             break;
//         case "-":
//             result = num1 - num2
//             break;
//         case "*":
//             result = num1 * num2
//             break;
//         case "/":
//             result = num1 / num2
//             break;
//         default:
//             result = "Invalid operator"
//             break;
//     }
//     return result;
// }

// console.log(basicCalculator(5, 3, "+")); // 8  
// console.log(basicCalculator(5, 3, "-")); // 2
// console.log(basicCalculator(5, 3, "*")); // 15
// console.log(basicCalculator(5, 3, "/")); // 1.6666666666666667

// Explanation: In the above code, we have a function basicCalculator that takes two numbers and an operator (+, -, *, /) and returns the result of the operation. We have used a switch statement to check the value of the operator and perform the corresponding operation. If the operator is not "+", "-", "*", or "/", we return "Invalid operator".

// ********************************************************************************************************************

// Problem 8: Fruit Price Checker
// Description : Write a function getFruitPrice that takes a string ("apple", "banana", "orange") and returns the corresponding price.

// function getFruitPrice(fruit) {
//     let price;
//     switch (fruit) {
//         case "apple":
//             price = 1.5
//             break;
//         case "banana":
//             price = 2
//             break;
//         case "orange":
//             price = 1
//             break;
//         default:
//             price = "Invalid fruit"
//             break;
//     }
//     return price;
// }

// console.log(getFruitPrice("apple")); // 1.5
// console.log(getFruitPrice("banana")); // 2
// console.log(getFruitPrice("orange")); // 1

// Explanation: In the above code, we have a function getFruitPrice that takes a string ("apple", "banana", "orange") and returns the corresponding price. We have used a switch statement to check the value of the fruit and return the corresponding price. If the fruit is not "apple", "banana", or "orange", we return "Invalid fruit".

// ********************************************************************************************************************

// Problem 9: User Role Checker
// Description : Write a function getUserRole that takes a string ("admin", "user", "guest") and returns the corresponding role.

// function getUserRole(role) {
//     let userRole;
//     switch (role) {
//         case "admin":
//             userRole = "Admin"
//             break;
//         case "user":
//             userRole = "User"
//             break;
//         case "guest":
//             userRole = "Guest"
//             break;
//         default:
//             userRole = "Invalid role"
//             break;
//     }
//     return userRole;
// }

// console.log(getUserRole("admin")); // Admin
// console.log(getUserRole("user")); // User
// console.log(getUserRole("guest")); // Guest

// Explanation: In the above code, we have a function getUserRole that takes a string ("admin", "user", "guest") and returns the corresponding role. We have used a switch statement to check the value of the role and return the corresponding role. If the role is not "admin", "user", or "guest", we return "Invalid role".

// ********************************************************************************************************************

// Problem 10: Animal Sound
// Description : Write a function getAnimalSound that takes a string ("cat", "dog", "cow") and returns the corresponding sound.

// function getAnimalSound(animal) {
//     let sound;
//     switch (animal) {
//         case "cat":
//             sound = "Meow"
//             break;
//         case "dog":
//             sound = "Woof"
//             break;
//         case "cow":
//             sound = "Moo"
//             break;
//         default:
//             sound = "Invalid animal"
//             break;
//     }
//     return sound;
// }

// console.log(getAnimalSound("cat")); // Meow
// console.log(getAnimalSound("dog")); // Woof
// console.log(getAnimalSound("cow")); // Moo

// Explanation: In the above code, we have a function getAnimalSound that takes a string ("cat", "dog", "cow") and returns the corresponding sound. We have used a switch statement to check the value of the animal and return the corresponding sound. If the animal is not "cat", "dog", or "cow", we return "Invalid animal".

// ********************************************************************************************************************