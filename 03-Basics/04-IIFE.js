// Immediately Invoked Function Expression (IIFE)
// Here we are using IIFE to define a function and call it immediately. We are using parenthesis to define the function and call it immediately.
// This is named iife
// (function chai()
// {
//     console.log(`DB connected`)
// })();

// chai()

// Like this way we can use IIFE to define a function and call it immediately. We can use IIFE to avoid polluting the global scope.
// Here we are using arrow function to define a function and call it immediately. We are using parenthesis to define the function and call it immediately.
( () => {
    console.log(`DB connected`)
})();

// Here e are using iife and using an argument in the function.

// Here are we calling the function with an argument.
( (name) => {
    console.log(`DB connected ${name}`)
})("Inayath");


  