// filter in js is used to filter out the elements from an array based on a condition.

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNum.filter((num) => num > 4) // filter out the elements from myNum array which are greater than 4.this one way to use filter method.
// const newNums = myNum.filter((num) => {
//     return num > 4 // We need to use return keyword when we are using curly braces in arrow function.
// })

// const newNums = []

// myNum.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// This is how we can use forEach loop to filter out the elements from an array based on a condition.
// console.log(newNums);

const books = [
    { title: 'Book one', genere: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book two', genere: 'Non-Fiction', publish: 1982, edition: 2005 },
    { title: 'Book three', genere: 'Fiction', publish: 1983, edition: 2006 },
    { title: 'Book four', genere: 'Non-Fiction', publish: 1984, edition: 2007 },
    { title: 'Book five', genere: 'Fiction', publish: 1985, edition: 2008 },
    { title: 'Book six', genere: 'Non-Fiction', publish: 1986, edition: 2009 },
    { title: 'Book seven', genere: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book eight', genere: 'Non-Fiction', publish: 1988, edition: 2011 },
    { title: 'Book nine', genere: 'Fiction', publish: 1989, edition: 2012 },
    { title: 'Book ten', genere: 'Non-Fiction', publish: 1990, edition: 2013 },
];

let userBooks = books.filter( (bk) => bk.genere === 'Non-Fiction')

 userBooks = books.filter( (bk) => { return bk.publish >= 1987})

 userBooks = books.filter( (bk) => bk.publish >= 1987 && bk.genere === 'Non-Fiction')


console.log(userBooks)