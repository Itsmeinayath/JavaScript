function multiply(num) {
  return num*5;
}

multiply.power = 2;
console.log(multiply(5)); 
console.log(multiply.power);
console.log(multiply.prototype)

// Here in js functions are objects, so we can add properties to functions as well.

function createUser(username, score){
  this.username = username;
  this.score = score;

}

createUser.prototype.increment = function()
{
  this.score++;
}

createUser.prototype.printme =function(){
  console.log(`score is ${this.score}`);
}

// The importance of new keyword is that it creates a new object and assigns the value of this to the object created by new keyword.
// If we don't use new keyword, this will point to the global object and it will throw an error if we are in strict mode.
// In non strict mode, it will create a global variable and assign the value to it.
const inayath = new createUser("Inayath",30)

const coffe = new createUser("Coffe", 40)

inayath.printme();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/