// Object literals
// Object.create // This method is called a constructor method. In this method, Singleton is built

const mySym = Symbol("key1") // Creating a unique symbol

// Defining an object jsuser with various properties
const jsuser = {
    name: "Inayath",
    "full name": "Mohammed Inayath",
    [mySym]: "mykey1", // Using a symbol as a key in the object
    age: 22,
    location: "Bengalore",
    email: "inayath@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// Accessing properties of the jsuser object
// console.log(jsuser.email) // Output: inayath@gmail.com
// console.log(jsuser["email"]) // Output: inayath@gmail.com
// console.log(jsuser["full name"]) // Output: Mohammed Inayath
// console.log(jsuser[mySym]) // Output: mykey1 (accessing the symbol-keyed property)
// console.log(typeof jsuser[mySym]) // Output: string

// Updating the email property of the jsuser object
jsuser.email = "newemail@gmail.com"

// Freezing the jsuser object to prevent modifications
// Object.freeze(jsuser) // By using freeze, we can freeze the object so that new entries cannot be added and existing properties cannot be modified

// Attempting to update the email property after freezing (this will not work if the object is frozen)
// jsuser.email = "inayath@microsoft.com"

// console.log(jsuser) // Output: {name: "Inayath", "full name": "Mohammed Inayath", Symbol(key1): "mykey1", age: 22, location: "Bengalore", email: "newemail@gmail.com", isLoggedIn: false, lastLoginDays: ["Monday", "Saturday"]}

// Adding methods to the jsuser object
jsuser.greeting = function() {
    console.log("Hello js user");
}

jsuser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}

// Calling the methods
console.log(jsuser.greeting()) // Output: Hello js user (followed by undefined because the console.log of the method itself returns undefined)
console.log(jsuser.greetingTwo()) // Output: Hello JS User, Inayath (followed by undefined because the console.log of the method itself returns undefined)

// Explanation of Key Concepts
// Object Methods: Functions that are defined as properties of an object. They allow the object to perform actions or behaviors.
// The this Keyword: In the context of a method, this refers to the object that the method is a property of. It allows methods to access other properties of the same object.
// Template Literals: Used in the greetingTwo method for string interpolation, enclosed by backticks (`), which allows embedding expressions like ${this.name}.

// Accessing Symbol Properties: You can access the symbol-keyed property using the symbol
console.log(jsuser[mySym]); // Output: mykey1
