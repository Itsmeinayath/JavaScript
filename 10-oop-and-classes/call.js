function SetUsername(username){
    //complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username,email,password){
    // The .call() method in JavaScript is used to invoke a function with a specified this value and arguments provided individually. Here's a detailed explanation of why .call() and this are used in the given code:
    SetUsername.call(this,username);
    this.email = email;
    this.password = password;

}

const chai = new createUser("chai","chail@fb.com","123456");

console.log(chai); 

// Explanation
// Function Invocation with Specific this Context:

// The .call() method allows you to call a function with a specific this context. This is useful when you want to control what this refers to inside the function.
// In this case, SetUsername is a function, and by using .call(this, username), you are invoking SetUsername with this set to the current context where the .call() is used.
// Why Use this:

// this typically refers to the object that is currently calling the function. By passing this as the first argument to .call(), you ensure that SetUsername operates within the same context as the caller.
// This is particularly useful in object-oriented programming where methods need to operate on the same object instance.
// Passing Arguments:

// The second argument, username, is passed to the SetUsername function as its parameter. The .call() method allows you to pass arguments individually, unlike .apply() which requires an array of arguments.