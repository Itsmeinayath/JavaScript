// Prototype in JavaScript is a property of a function that points to an object.
// This object is shared among all instances of that function, allowing properties and methods to be added to all instances of a particular object type.

// Define an array of superhero names
let myHeros = ["Ironman", "Thor", "Hulk", "Captain America"];

// Define an object with superhero powers
let heroPower = {
    thor: "hammer", // Thor's power is a hammer
    spiderman: "web", // Spiderman's power is web
    ironman: "suit", // Ironman's power is his suit

    // Method to get Spiderman's power
    getSpiderPoer: function() {
        // console.log(`Spiderman has ${this.spiderman}`); // Logs Spiderman's power to the console
    }
}

// Add a method to the Object prototype
Object.prototype.inayath = function() {
    // console.log(`Inayath is present in all objects`); // Logs a message indicating the presence of the method in all objects
}

Array.prototype.heyinayath = function() {
    // console.log(`Hey Inayath is present in all arrays`); // Logs a message indicating the presence of the method in all arrays
}
// The inayath method is now available to all objects, including arrays and custom objects

// Uncommenting the following line would call the inayath method on the heroPower object
// heroPower.inayath()

// Call the inayath method on the myHeros array
// myHeros.inayath(); // Logs "Inayath is present in all objects" to the console
// myHeros.heyinayath(); // Logs "Hey Inayath is present in all arrays" to the console
// heroPower.heyinayath(); 

// inheritance in javascript.
// Inheritance in JavaScript is a mechanism that allows a class to inherit properties and methods from another class.


// this is a simple example of inheritance in javascript.This old way of inheritance is not recommended.
const User = {
    name: "chai",
    email:"chail@goole.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport ={
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

// Moder Syntax of inheritance in javascript.

// here left side object is inheriting the properties of right side object.
// Object.setPrototypeOf(TeachingSupport,Teacher)

// console.log(TeachingSupport.makeVideo); // true

let anotherUsername = "mohammed            "

String.prototype.trueLength = function() {
  console.log(`${this}`);
  console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength(); // Logs "mohammed" to the console

"inayath".trueLength(); // Logs "mohammed" to the console

"iceTea".trueLength(); // Logs "mohammed" to the console  