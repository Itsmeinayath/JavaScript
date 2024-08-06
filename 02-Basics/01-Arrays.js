// Creating an array myArr with initial elements
const myArr = [0, 1, 2, 3, 4, 5]

// Logging the array (commented out)
// console.log(myArr) // Output: [0, 1, 2, 3, 4, 5]

// Creating an array myHeros with two elements
const myHeros = ["Shaktiman", "naagraj"]

// Creating an array myArr2 using the Array constructor
const myArr2 = new Array(1, 2, 3, 4, 5)

// Logging the first element of myArr (commented out)
// console.log(myArr[0]) // Output: 0

// Array methods in JavaScript

// Adding elements to the end of myArr using push (commented out)
// myArr.push(8)
// myArr.push(9)
// Removing the last element from myArr using pop (commented out)
// myArr.pop()

// Adding an element to the beginning of myArr using unshift (commented out)
// myArr.unshift(9)
// Logging the updated array (commented out)
// console.log(myArr) // Output after unshift: [9, 0, 1, 2, 3, 4, 5]
// Removing the first element from myArr using shift (commented out)
// myArr.shift()

// Checking if myArr includes the value 9 (commented out)
// console.log(myArr.includes(9)) // Output: false
// Finding the index of the value 9 in myArr (commented out)
// console.log(myArr.indexOf(9)) // Output: -1

// Joining all elements of myArr into a string
// const newArr = myArr.join()

// Logging the original array (commented out)
// console.log(myArr) // Output: [0, 1, 2, 3, 4, 5]

// Logging the joined string (commented out)
// console.log(newArr) // Output: "0,1,2,3,4,5"
// Logging the type of newArr (commented out)
// console.log(typeof newArr) // Output: string

// Slice and Splice

// Logging the original array before slice
console.log("A", myArr) // Output: A [0, 1, 2, 3, 4, 5]

// Using slice to get a subarray from index 1 to 2 (3 is not included)
const myn1 = myArr.slice(1, 3) // Slice extracts elements from index 1 to 3 (excluding 3). So, it returns [1, 2].

// Logging the result of the slice operation
console.log(myn1) // Output: [1, 2]

// Logging the original array to show it is unchanged after slice
console.log("B", myArr) // Output: B [0, 1, 2, 3, 4, 5]

// Using splice to remove elements from index 1 to 3 (3 is included)
const myn2 = myArr.splice(1, 3) // Splice removes 3 elements starting from index 1. So, it removes [1, 2, 3] from the original array.

// Logging the modified array after splice
console.log("C", myArr) // Output: C [0, 4, 5]

// Logging the result of the splice operation
console.log(myn2) // Output: [1, 2, 3]
