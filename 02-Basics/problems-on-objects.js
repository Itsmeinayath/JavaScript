// *****************************Problems on Objects******************************** 

// Problem 1:Object Property Access
// Create an object person with properties firstName, lastName, and age.Access and log each property to the console.

// const person = {
//     firstName:"John",
//     lastName:"Doe",
//     age:30
// }

// console.log(person.firstName)
// console.log(person.lastName);
// console.log(person.age);

// Explanation:
// This problem demonstrates how to create an object and access its properties using dot notation.

//*****************************************************************************************************************

// Problem 2:Object Methods
// Add a method greet to the person object that logs "Hello, [firstName]!" to the console. Call the method.

// const person = {
//     firstName:"Mohammed",
//     lastName:"Inayath",
//     age:22,
//     greet:function()
//     {
//         console.log(`Hello, ${this.firstName}!`)
//     }
// }
// person.greet();

// Explanation:
// This problem shows how to define a method within an object and use the this keyword to refer to the object’s properties.

// *****************************************************************************************************************

// Problem 3:Destructuring
// Destructure the properties firstName and age from the person object and log them.

// const person = {
//     firstName:"Mohammed",
//     lastName:"Inayath",
//     age:22
// };

// const {firstName,age} = person

// console.log(firstName);
// console.log(age)

// Explanation:
// This problem demonstrates how to use destructuring to extract properties from an object into variables.

// *****************************************************************************************************************

// Problem 4:Dynamic Property Names
// Create an object car with properties make and model. Add a property year dynamically using a variable.

const car ={
    make:"Toyota",
    model:"Corolla"
};

const propertyName = "year";
car[propertyName]=2021;

console.log(car.year);

console.log(car)

// Explanation:
// This problem shows how to add properties to an object dynamically using bracket notation and a variable.

// *****************************************************************************************************************

// Problem 5: Merging Objects
// Merge two objects, obj1 and obj2, into a new object mergedObj.

const obj1 = {a:1,b:2};
const obj2 = {c:1,d:2};

const mergedObj = {...obj1, ...obj2};

console.log(mergedObj);

// Explanation:
// This problem illustrates how to merge objects using the spread operator. Properties from obj2 will overwrite those in obj1.

// *****************************************************************************************************************

// Problem 6: Object.keys, Object.values, Object.entries
// Create an object fruit and log its keys, values, and entries using Object.keys, Object.values, and Object.entries.

const fruits ={
    name:"Apple",
    color:"Red",
    taste:"Sweet"
}

console.log(Object.keys(fruits));
console.log(Object.values(fruits));
console.log(Object.entries(fruits));

// Explanation:
// This problem shows how to retrieve the keys, values, and entries (key-value pairs) of an object using built-in methods.

// *****************************************************************************************************************

// Problem 7: Checking Property Existence
// Check if the property age exists in the person object using the in operator and hasOwnProperty.

const person ={
    firstName:"Mohammed",
    lastName:"Inayath",
    age:22
};

console.log('age' in person);// Output: true
console.log(person.hasOwnProperty('age')); // Output: true

//The output will returns in Boolean 
// Explanation:
// This problem demonstrates two ways to check for the existence of a property in an object.

// *****************************************************************************************************************

// Problem 8: Cloning Objects
// Clone an object original into a new object clone.

const og = {x:10,y:20};
const clone ={...og};

console.log(clone);

// Explanation:
// This problem shows how to create a shallow copy of an object using the spread operator.

// *****************************************************************************************************************

// Problem 9: Nested Objects
// Create a nested object student with properties name, age, and address (which itself has properties street and city). Access and log the city property.

const student ={
    name:"Inayath",
    age:22,
    addres:{
        street:"123 main St",
        city:"Banglore"
    }
};

// console.log(student.addres.city);

// Explanation:
// This problem demonstrates how to create and access nested objects.

// *****************************************************************************************************************

// Problem 10: Freezing Objects
// Freeze an object settings and attempt to modify its properties. Log the result.

const settings ={
    theme:"dark",
    notification:true
};

Object.freeze(settings);
settings.theme = "light";// This will not change the property

console.log(settings.theme);

// Explanation:
// This problem shows how to use Object.freeze to make an object immutable and demonstrates that attempts to modify it will not succeed.


