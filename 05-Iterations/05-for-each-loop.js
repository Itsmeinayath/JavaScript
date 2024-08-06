// for each loop explanation : The forEach() method calls a function once for each element in an array, in order.

const coding = ["js", "cpp", "py", "rb"];

// coding.forEach(  function (item) {
//     console.log(item);
// } )


// coding.forEach( (item) =>{
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe);


// coding.forEach( (item, index ,array)=> {
//     console.log(item, index, array);
// })


// const myCoding = [

//     {
//         languageName: 'JavaScript',
//         languageType: 'Frontend',
//         languageFileName: 'js'
//     },
//     {
//         languageName: 'C++',
//         languageType: 'Backend',
//         languageFileName: 'cpp'
//     },
//     {
//         languageName: 'Python',
//         languageType: 'Backend',
//         languageFileName: 'py'
//     },
//     {
//         languageName: 'Ruby',
//         languageType: 'Backend',
//         languageFileName: 'rb'
//     }
// ]

// myCoding.forEach( (item) => {
//     console.log(item.languageName);
//     console.log(item.languageType);
//     console.log(item.languageFileName);
//     console.log('-------------------');
// })


// const value = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })

// console.log(value); // undefined