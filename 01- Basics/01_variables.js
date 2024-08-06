const accountId = 144553
let accountEmail = "inayath@gmail.com"
var accountPassword = "12345"
let accountState;
accountCity = "Ballari"

// accountId = 2  // this not allwoed becase we cant change the constant

console.log(accountId);

accountEmail = "hithis@gmail.com"

accountPassword = "2424534"

accountCity = "Bengalore"

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// console.log(accountCity)

/*
prefer not to use var 
because of issue in block scope and functional scope
*/