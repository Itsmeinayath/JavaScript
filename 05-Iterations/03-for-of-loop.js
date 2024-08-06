// for of loop explanation : The for...of statement creates a loop iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.    

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const num of arr) {
//     console.log(num);
      
// }

// const greeting = 'Hello World!';

// for (const greet of greeting) {
//     if(greet === ' ')
//     {
//         continue;
//     }
//     console.log(greet);
// }

// for (const greet of greeting) {

//     console.log(greet);
// }

// // Maps and Sets are also iterable objects.
// // const myMap = new Map();

// map's are key-value pair ,map's are unique key's
// const map = new Map();

// // map.set('a', 1);
// map.set('IND', 'India');
// map.set('USA', 'United States of America');
// map.set('UK', 'United Kingdom');

// console.log(map);

// for (const [key , value] of map) {
//     console.log(key ,':-', value);
// }


// const myObj = {
//     'Game1': 'Cricket',
//     'Game2': 'Football',
//     'Game3': 'Tennis'    
// }

// for (const [key,value] of myObj) {
//     console.log(key ,':-', value);
    
// }
// Here object is not iterable so it will throw an error.

// map is


// const map = new Map();
// map.set('IND', 'India');
// map.set('USA', 'United States of America');
// map.set('UK', 'United Kingdom')

// for (const key in map) {
//     console.log(key);
//     console.log(map[key]);
// }

// the above code will throw an error because map is not iterable.