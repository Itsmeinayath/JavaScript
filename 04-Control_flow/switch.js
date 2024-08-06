// Switch explanation : The switch statement is used to perform different actions based on different conditions. The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 5

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Month not found");
        break;
}