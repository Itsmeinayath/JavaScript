// function sayMyName() {
//     console.log("I")
//     console.log("N")
//     console.log("a")
//     console.log("y")
//     console.log("a")
//     console.log("t")
//     console.log("h")
// }

// sayMyName()

// function addTwoNumbers(num1,num2) {
//   console.log(num1+num2);
// }

// function addTwoNumbers(num1,num2) {
//     // let result = num1+num2;
//     // return result;  
//     return num1+num2;
// }

// const result = addTwoNumbers(1,2)
// console.log("The result is :",result)

// function loginUserMessage(username)
// {
//     if (username === undefined) {
//      console.log("Please provide a username");
//         return
//     }
//     return`${username} is logged in`;
// }
// explaination of the above code
// function loginUserMessage(username ="Sam")
// {
//     if (username === undefined) {
//      console.log("Please provide a username");
//         return
//     }
//     return`${username} is logged in`;
// }

// console.log(loginUserMessage("Inayath"))

// Like this we can add n number of arguments in the function
// function calculateCartPrice(...num1) {
//     return num1
    
// }
// console.log(calculateCartPrice(1,2,3,4,5,6,7,8,9,10))

const user={
    username:"Inayath",
    price:199
}

function handleObject(anyobject){
    console.log(`the username is ${anyobject.username} and the price is ${anyobject.price}`)
}

// handleObject(user)

// Passing the object directly in the function

handleObject({
    username:"smith",
    price:99
})

// handleObject(user)

// passing the array in the function

const mynewArray = [1,2,3,4,5,6,7,8,9,10]

function returnsecondvalue(getArray){
    return getArray[1]
}

// console.log(returnsecondvalue(mynewArray))
console.log(returnsecondvalue([200,400,600,800]))

