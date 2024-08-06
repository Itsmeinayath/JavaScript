// classes in js are just syntactic sugar for the prototype chain.whats is a class in js? a class is a blueprint for creating objects with pre-defined properties and methods.

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassord(){
//         return this.password = this.password.split("").reverse().join("");
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai","chai@gmail.com","123456");

// console.log(chai.encryptPassord()); //654321
// console.log(chai.changeUsername()); //CHAI

// The below code is the same as above but using the prototype chain.The above code is just a syntactic sugar for the below code.The major difference between the two is that the class syntax is more readable and easier to write than the prototype chain.

// behind the scenes, js is still using the prototype chain to create classes. the above class can be written as below using the prototype chain.

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassord = function(){
    return this.password = this.password.split("").reverse().join("");
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("iceTea","iceTea@gmail.com","123456");

console.log(tea.encryptPassord()); //654321
console.log(tea.changeUsername()); //ICETEA