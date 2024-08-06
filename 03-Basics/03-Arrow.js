const user = {
    username: 'batman',
    price: 999,

    welcomeMessage:function()
    {
        console.log(`welcome  to website ${this.username}`)
        console.log(this)
    }
}

// user.welcomeMessage()

// user.username="superman"

// user.welcomeMessage()

// console.log(this)

// function chai()
// {
//     let username="Inayath"
//     console.log(this.username)
// }

// chai()


// const chai = function chai()
// {
//     let username="Inayath"
//     console.log(this.username)
// }

// chai()

// const chai = () =>
// {
//     let username="Inayath"
//     console.log(this)
// }
// chai()

// here we are using arrow function to define a function.And we are using curly braces to define the function body. If we are using curly braces, we need to use return keyword to return the value from the function.This is called explicit return.
// const addTwo=(num1,num2) =>
//     {
//         return num1 + num2
//     } 

// Here we are using arrow function to define a function. We are not using curly braces to define the function body. If we are not using curly braces, we dont need to use return keyword to return the value from the function.This is called implicit return.

// const addTwo=(num1,num2) => num1 + num2

// Here we are using object literal syntax to return an object from the function. We need to use parenthesis to return an object from the function.
const addTwo=(num1,num2) => ({username:"Inayath"})
console.log(addTwo(2,3))


const myArray = [1,2,3,4,5];