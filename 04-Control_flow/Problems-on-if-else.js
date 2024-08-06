// Problem 1: Even or Odd
// Description: Write a program to check whether a number is even or odd using if-else statement.

// function evenOrOdd(num) {
//     if(num % 2 === 0)
//     {
//         console.log(`The ${num} is Even`);
//     }
//     else
//     {
//         console.log(`The ${num} is Odd`);
//     }
// }
// evenOrOdd(5);
// evenOrOdd(10);

// Explanation: In the above code, we have created a function called evenOrOdd which takes a number as an argument. Inside the function, we have used an if-else statement to check whether the number is even or odd. If the number is divisible by 2 then it is even otherwise it is odd.

// ***************************************************************************************************************

// Problem 2: Check Age
// Description: Write a program to check whether a person is eligible to vote or not using if-else statement.

// function eligible(Age) {
//     if(Age >= 18)
//     {
//         console.log(`The person is eligible to vote`);
//     }
//     else
//     {
//         console.log(`The person is not eligible to vote`);
//     }
// }

// eligible(20);  
// eligible(15);

// Explanation: In the above code, we have created a function called eligible which takes a number as an argument. Inside the function, we have used an if-else statement to check whether the person is eligible to vote or not. If the age is greater than or equal to 18 then the person is eligible to vote otherwise not.

// ***************************************************************************************************************

// Problem 3: Find the Largest Number
// Description: Write a program to find the largest number among three numbers using if-else statement.

// function largestNumber(num1,num2,num3)
// {
//     if(num1 > num2 && num1 > num3)
//     {
//         console.log(`The largest number is ${num1}`);
//     }
//     else if(num2 > num1 && num2 > num3)
//     {
//         console.log(`The largest number is ${num2}`);
//     }
//     else
//     {
//         console.log(`The largest number is ${num3}`);
//     }
// }

// largestNumber(10,20,30);
// largestNumber(50,30,20);
// largestNumber(30,500,10);

// Explanation: In the above code, we have created a function called largestNumber which takes three numbers as arguments. Inside the function, we have used if-else statements to find the largest number among the three numbers. We have compared each number with the other two numbers and printed the largest number.

// Problem 4: Grade Calculator
// Description: Write a program to calculate the grade of a student based on the marks obtained using if-else statement.

// function gradeCalculator(score) {
//     if(score >= 90)
//     {
//         console.log(`The grade is A`);
//     }
//     else if(score >=80 && score < 90)
//     {
//         console.log(`The grade is B`);
//     }
//     else if(score >=70 && score < 80)
//     {
//         console.log(`The grade is C`);
//     }   
//     else if(score >=60 && score < 70)
//     {
//         console.log(`The grade is D`);
//     }
//     else
//     {
//         console.log(`The grade is F`);
//     }
// }

// gradeCalculator(95);
// gradeCalculator(85);
// gradeCalculator(75);
// gradeCalculator(65);
// gradeCalculator(55);

// Explanation: In the above code, we have created a function called gradeCalculator which takes a number as an argument. Inside the function, we have used if-else statements to calculate the grade of a student based on the marks obtained. We have compared the score with different ranges and printed the grade accordingly.

// ***************************************************************************************************************

// Problem 5: Check Leap Year
// Description: Write a program to check whether a year is a leap year or not using if-else statement.

// function isLeapYear(year) {
//     if((year % 4 === 0 && year % 100 === 0) || year % 400 === 0)
//     {
//         console.log(`${year} is a leap year`);
//     }
//     else
//     {
//         console.log(`${year} is not a leap year`);
//     }
// }

// isLeapYear(2020);
// isLeapYear(2021);
// isLeapYear(2000);

// Explanation: In the above code, we have created a function called isLeapYear which takes a year as an argument. Inside the function, we have used an if-else statement to check whether the year is a leap year or not. We have used the leap year formula to check whether the year is divisible by 4 and not divisible by 100 or divisible by 400. If the condition is true then it is a leap year otherwise not.

// ***************************************************************************************************************

// Problem 6: Check Vowel or Consonant
// Description: Write a program to check whether a character is a vowel or consonant using if-else statement.

// function checkVowelOrConsonant(char) {
//     if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U')
//     {
//         console.log(`${char} is a vowel`);
//     }
//     else
//     {
//         console.log(`${char} is a consonant`);
//     }
// }

// checkVowelOrConsonant('a');
// checkVowelOrConsonant('b');
// checkVowelOrConsonant('E');
// checkVowelOrConsonant('z');

// Explanation: In the above code, we have created a function called checkVowelOrConsonant which takes a character as an argument. Inside the function, we have used an if-else statement to check whether the character is a vowel or consonant. We have compared the character with the vowels and printed whether it is a vowel or consonant.

// ***************************************************************************************************************

// Problem 7: Check Divisibility
// Description: Write a program to check whether a number is divisible by 2 and 3 using if-else statement.

// function divisible(num)
// {
//     if(num % 2 === 0 && num % 3 === 0)
//     {
//         console.log(`${num} is divisible by 2 and 3`);
//     }
//     else if (num % 2 === 0)
//     {
//         console.log(`${num} is divisible by 2`);
//     }
//     else if(num % 3 === 0)
//     {
//         console.log(`${num} is divisible by 3`);
//     }
//     else
//     {
//         console.log(`${num} is not divisible by 2 and 3`);
//     }
// }
// divisible(6);
// divisible(4);
// divisible(9);
// divisible(7);

// Explanation: In the above code, we have created a function called divisible which takes a number as an argument. Inside the function, we have used an if-else statement to check whether the number is divisible by 2 and 3. We have used the modulus operator to check the divisibility of the number by 2 and 3 and printed the result accordingly.

// ***************************************************************************************************************

// Problem 8: Calculate Discount
// description : Write a function calculateDiscount that takes the price and prints the discount amount based on the price range. (Above $100: 20% discount, $50-$100: 10% discount, Below $50: 5% discount)

// function calculateDiscount(price) {
//     if(price > 100)
//     {
//         console.log(`The discount amount is ${price * 0.20}`);
//     }
//     else if(price >= 50 && price <= 100)
//     {
//         console.log(`The discount amount is ${price * 0.10}`);
//     }
//     else
//     {
//         console.log(`The discount amount is ${price * 0.05}`);
//     }
// }
// calculateDiscount(150); 
// calculateDiscount(75);
// calculateDiscount(25);

// Explanation: In the above code, we have created a function called calculateDiscount which takes the price as an argument. Inside the function, we have used an if-else statement to calculate the discount amount based on the price range. We have compared the price with different ranges and calculated the discount amount accordingly.

// ***************************************************************************************************************

// Problem 9: Check Character Type
// Description: Write a program to check whether a character is an alphabet, digit, or special character using if-else statement.

// function chekCharType(char) {
//     if(char >='a' && char <= 'z' || char >= 'A' && char <= 'Z')
//     {
//         console.log(`${char} is an alphabet`);
//     }
//     else if(char >= '0' && char <= '9')
//     {
//         console.log(`${char} is a digit`);
//     }
//     else
//     {
//         console.log(`${char} is a special character`);
//     }   
// }
// chekCharType('a');
// chekCharType('5');
// chekCharType('#');

// Explanation: In the above code, we have created a function called chekCharType which takes a character as an argument. Inside the function, we have used an if-else statement to check whether the character is an alphabet, digit, or special character. We have compared the character with the ASCII values of alphabets and digits and printed the result accordingly.   

// ***************************************************************************************************************

// Problem 10: Nested If-Else with Logical Operators
// Description: Write a function nestedIfElseExample that takes two numbers and prints different messages based on various conditions using nested if-else and logical operators.

// function nestedIfElseExample(num1,num2) {
//     if(num1 > 0)
//     {
//         if(num2 > 0)
//         {
//             console.log(`Both numbers are positive`);
//         }        
//         else
//         {
//             console.log(`First number is positive and second number is negative`);
//         }  
//     }
//     else if(num1 < 0)
//     {
//         if(num2 > 0)
//         {
//             console.log(`First number is negative and second number is positive`);
//         }
//         else
//         {
//             console.log(`Both numbers are negative`);
//         }
//     }
//     else
//     {
//         if(num2 > 0)
//         {
//             console.log(`First number is zero and second number is positive`);
//         }
//         else if(num2 < 0)
//         {
//             console.log(`First number is zero and second number is negative`);
//         }
//         else
//         {
//             console.log(`Both numbers are zero`);
//         }
//     }
// }

// nestedIfElseExample(5,10);
// nestedIfElseExample(-5,10);
// nestedIfElseExample(-5,-10);

// Explanation: In the above code, we have created a function called nestedIfElseExample which takes two numbers as arguments. Inside the function, we have used nested if-else statements to check the sign of the numbers and print different messages based on various conditions. We have used logical operators to combine multiple conditions in the if-else statements.
