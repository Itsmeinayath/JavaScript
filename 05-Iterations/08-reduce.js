// reduce is a function that takes an array and a function and returns a single value. It uses the function to combine all the elements of the array into a single value.

const myNums = [1,2,3]

// const total = myNums.reduce(function(acc,curval)
// {
//     console.log(`acc: ${acc}, curval: ${curval}`)
//     return acc + curval
// },0)

const total = myNums.reduce((acc,curval) => acc + curval,0)

// console.log(total)


const shoppingCart = [
    { product: 'laptop', price: 1000 },
    { product: 'mouse', price: 40 },
    { product: 'keyboard', price: 80 },
    { product: 'headphones', price: 70 }
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price,0)

console.log(priceToPay)