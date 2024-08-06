// **************************************************Problems On Array******************************************************************
// Problem 1: Array Methods (Push and Pop)
// Description: Create an array of numbers and use the push and pop methods to add and remove elements from the array.

// const numbers = [];
// numbers.push(1);
// numbers.push(2);
// numbers.push(3);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);

// Explanation: The push method adds elements to the end of the array, while the pop method removes the last element from the array.

// ********************************************************************************************************************

// Problem 2: Array Methods (Shift and Unshift)
// Description: Create an array of numbers and use the shift and unshift methods to add and remove elements from the array.

// const fruits =[];
// fruits.unshift("Banana");
// fruits.unshift("Apple");
// console.log(fruits);

// fruits.shift();
// console.log(fruits);
// Explanation: The unshift method adds elements to the beginning of the array, while the shift method removes the first element from the array.

// ********************************************************************************************************************

// problem 3:Array Concatenation

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const result = array1.concat(array2);

// console.log(result);

// Explanation: The concat method is used to combine two or more arrays into a single array. It does not modify the original arrays, but instead returns a new array containing the elements of the original arrays.

// ********************************************************************************************************************

// Problem 4: Array Slice   
// Description: Create an array of numbers and use the slice method to extract a portion of the array.

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.slice(1, 4);
// console.log(result);

// Explanation: The slice method returns a portion of the array starting from the specified start index and ending at the specified end index. The original array is not modified.

// ********************************************************************************************************************

// Problem 5: Array Splice
// Description: Create an array of numbers and use the splice method to add or remove elements from the array.

// const numbers = [1, 2, 3, 4, 5];  
// const removedNumber = numbers.splice(1,2)
// console.log(numbers);
// console.log(removedNumber);

// explaination: The splice method can be used to add or remove elements from an array. The first argument specifies the index at which to start modifying the array, the second argument specifies the number of elements to remove, and any additional arguments specify the elements to add to the array. The splice method returns an array containing the removed elements.

// ********************************************************************************************************************

// Problem 6: Array Map
// Description: Create an array of numbers and use the map method to transform each element of the array.

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map((number) => number * 2); 
// console.log(result);

// Explanation: The map method is used to transform each element of an array using a callback function. The callback function is called with each element of the array, and the return value of the callback function is used as the new value for that element in the resulting array.

// ********************************************************************************************************************

// Problem 7: Array Filter
// Description: Create an array of numbers and use the filter method to select elements that meet a certain condition.

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.filter((number) => number % 2 === 0);
// console.log(result);

// Explanation: The filter method is used to select elements from an array that meet a certain condition. The callback function is called with each element of the array, and the return value of the callback function determines whether the element is included in the resulting array.

// ********************************************************************************************************************

// Problem 8: Array Reduce  
// Description: Create an array of numbers and use the reduce method to calculate the sum of the elements in the array.

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reduce((accumulator, number) => accumulator + number, 0);   
// console.log(result);

// Explanation: The reduce method is used to calculate a single value from an array. The callback function is called with an accumulator value and each element of the array, and the return value of the callback function is used as the new accumulator value for the next iteration. The second argument to the reduce method is the initial value of the accumulator.

// ********************************************************************************************************************

// Problem 9: Array Find
// Description: Create an array of numbers and use the find method to find the first element that meets a certain condition.

// const numbers = [1, 2, 3, 4, 5];
// const firstgreaterThanThree = numbers.find((number) => number > 3);
// console.log(greaterThanThree);

// Explanation: The find method is used to find the first element in an array that meets a certain condition. The callback function is called with each element of the array, and the return value of the callback function determines whether the element is the one being searched for.

// ********************************************************************************************************************

// Problem 10: Array FindIndex  
// Description: Create an array of numbers and use the findIndex method to find the index of the first element that meets a certain condition.

// const numbers = [1, 2, 3, 4, 5];    
// const index = numbers.findIndex((number) => number > 3);
// console.log(index);

// Explanation: The findIndex method is used to find the index of the first element in an array that meets a certain condition. The callback function is called with each element of the array, and the return value of the callback function determines whether the element is the one being searched for.