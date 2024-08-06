// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// advantage of map() method is that it returns a new array with the same length as the original array.
const myNumners = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumners.map((num => num +10))

// What is Chnaing in js? Chaining is a technique used to call multiple methods on the same object in a single line.

// Here the first map() method is used to multiply each element of the array by 10 and the second map() method is used to add 1 to each element of the array.
// The first map() runs first and then the second map() runs on the output of the first map() method.


// const newNums = myNumners.map((num) => num * 10) //this will return a new array with each element multiplied by 10.

// const newNums = myNumners.map((num) => num * 10).map((num) => num +1) //this will return a new array with each element multiplied by 10 and then 1 is added to each element of the array.

const newNums = myNumners.map((num) => num * 10).map((num) => num +1).filter((num) => num > 50) //this will return a new array with each element multiplied by 10 and then 1 is added to each element of the array and then filter out the elements which are greater than 50.
console.log(newNums)