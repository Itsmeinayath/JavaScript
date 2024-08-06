// For loop is used to iterate over a block of code a number of times.
// The for loop has the following syntax:   
// for (statement 1; statement 2; statement 3) {
//   code block to be executed
// }

// for (let i = 0; i < 10; i++) {
//     // const element = array[i];
//     if( i == 5)
//     {
//         console.log('5 is my favorite number');
//     }
//     console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`inner loop value: ${j} and inner loop ${i}`);
//         console.log(i + ' x ' + j + '=' + i*j);
//     }
// }
// explanation:The above code will print the value of i from 0 to 10 and for each value of i, it will print the value of j from 0 to 10.


// let myArray = ['apple', 'banana', 'mango', 'orange', 'grapes'];
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// break and continue in for loop explanation : 
// break statement is used to exit the loop immediately, regardless of the loop condition.
// continue statement is used to skip the current iteration and continue with the next iteration.

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log('5 is my favorite number');
//         break;
//     }
//     console.log(index);
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log('5 is my favorite number');
        // continue;
    }
    console.log(index);
}