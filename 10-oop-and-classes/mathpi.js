const descripter = Object.getOwnPropertyDescriptor(Math, 'PI');

// console.log(descripter);

// Why we cant change the value of PI in Math object ?. because it is a read only property. its hard coded in the engine.if we try to change the value of PI it will throw an error.

// Math.PI = 3.14; // TypeError: Cannot assign to read only property 'PI' of object '#<Object>'

// We can also create our own read only property using Object.defineProperty() method.

const chai ={
    name:"ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log(`Order placed for ${this.name}`);
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// Output:
// {
//     value: 'ginger chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }

Object.defineProperty(chai,"name",{
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// Output:
// {
//     value: 'ginger chai',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }

// here we have made the name property of chai object as read only and non enumerable. so we cant change the value of name property and also we cant loop through the object to get the name property.By using Object.defineProperty() method we can create our own read only properties.

for (let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);
    }
}

// here we are only printing the key value pairs of the object which are not functions.by using Object.entries() method we can loop through the object and get the key value pairs of the object.

