// Truthy and falsy  explaination:  https://www.sitepoint.com/javascript-truthy-falsy/

// const userEmail = []

// if(userEmail)
// {
//     console.log("The email is valid");
// }
// else{
//     console.log("The email is not valid");
// }

// falsy values in javascript: false, 0, -0, "", undefined, null, NaN, false,BigInt 0n.
// truthy values in javascript: everything else other than falsy values.
// "0",'false', " ",[],{},function(){} are all truthy values.'

// if(userEmail.length === 0)
// {
//     console.log("The email is not valid because array is empty");
// }

// const emptyObj = {}
//     if(Object.keys(emptyObj).length === 0)
//     {
//         console.log("The object is empty");
//     }


    // nullish coalescing operator: The nullish coalescing operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

    let val1;

    // val1 = null ?? 10;
    // val1 = 5 ?? 10; 
    // val1 = undefined ?? 15

    val1 = null ?? 10 ?? 15 // here the first value is null so it will return the second value which is 10 and it will not check the third value.

    console.log(val1);


    // Terinary operator: The ternary operator is the only javascript operator that takes three operands. This operator is frequently used as a shortcut for the if statement.  It is used to assign a value to a variable based on some condition.

    // consdition ? true : false;

    // example:
const iceTeaPrice =100

iceTeaPrice <= 80 ? console.log("I will buy ice tea") : console.log("I will not buy ice tea");