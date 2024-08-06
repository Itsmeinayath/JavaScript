//  Promises in JavaScript. the Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//  A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.

const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // Db calls ,cryptography,network calls, etc

    setTimeout(function () {
        console.log('Async task has completed');
        resolve()
    }, 1000)

}) 

promiseOne.then(function(){
    console.log('promise consumed');
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task-2');
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async task-2 resolved");
})

const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Inayath", email:"inayath@gmail.com"});
    },1000)
})

PromiseThree.then(function(user){
    console.log(user);
})

const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true;
        if(!error)
        {
            resolve({username: "Mohammed", password:"1234"})
        }
        else
        {
            reject('Error in PromiseFour');
        }
    },1000)
})

 PromiseFour
 .then((user)=>{
    console.log(user);
    return user.username;
})
.then((username) => {
console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true;
        if(!error)
        {
            resolve({username: "john", password:"9999"})
        }
        else
        {
            reject('ERROR : JS went wrong');
        }
    },1000)
});

async function consumePromisefive(){
    try {
        const respose  = await promiseFive
        console.log(respose);
    } catch (error) {
        console.log(error);
    }
}

consumePromisefive();

// async function getAllUsers(){
//    try {
//     const respose = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await respose.json()
//   console.log(data);
// // console.log(respose);
//    } catch (error) {
//     console.log(error);
//    }
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((respose) => {
    return respose.json();
})
.then((data) =>{
    console.log(data);
})
.catch((error) => console.log(error))