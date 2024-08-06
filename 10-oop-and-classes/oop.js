const user = {
    username: 'batman',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function()
    {
        // console.log(`Username is ${this.username}, user has logged in ${this.loginCount} times`);
        console.log(this)   // this keyword refers to the object it belongs to.it will print the object.current context of the object.
    }

} 
// There are two ways to access the properties of an object in JavaScript. The first way is to use the dot notation (.) and the second way is to use the square bracket notation ([]).
// console.log(user.username);
// console.log(user['username']);
// console.log(user.getUserDetails());

// why we use this keyword in object oriented programming in javascript.
// The this keyword refers to the object it belongs to. In other words, it has the value of the object which invokes the this keyword.
// The this keyword in JavaScript is used to refer to the object it belongs to. It has different values depending on where it is used:

// constructor function - this refers to the object created by the constructor function.
// constructor function - provides new instance every time.

// function User(username,loginCount,isLoggedIn)
// {
//     // This left hand side username is variable and right hand side username is parameter.
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn;

//     return this; // return the object
// }

// const userOne = User("superman",9,true);
// const userTwo = User("flash",12,false);

// console.log(userOne)
//here we can also the properties alo example userOne.username,userOne.loginCount,userOne.isLoggedIn

// if we use like this it will overwrite the properties of the object. And we wont get old properties.it will over write with new properties.Thats why we use "new" keyword.
// When we write new keyword it will create empty object,and new instance of the object and return the object.
// And constructor function will be called due to new keyword.


function User(username,loginCount,isLoggedIn)
{
    // This left hand side username is variable and right hand side username is parameter.
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this; // return the object
}

const userOne = new User("superman",9,true);
const userTwo = new User("flash",12,false);

console.log(userOne)
console.log(userTwo)