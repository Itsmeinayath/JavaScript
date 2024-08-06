let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate)

let myCreatedDate = new Date("01-11-2023")
// console.log(myCreatedDate)

let myTimeStamp = Date.now()

// console.log(myTimeStamp)

let newDate = new Date()

// console.log(newDate)

// console.log(newDate.getMonth())
// console.log(newDate.getDay())
// console.log(newDate.getFullYear())

newDate.toLocaleString('default',{
    weekday:"long",
    
})

console.log(newDate)