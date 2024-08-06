// Creating an empty object named tinderUser
const tinderUser = {}

// Adding properties to the tinderUser object
tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

// Creating an object regularUser with nested objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Mohammed",
            lastname: "Inayath"
        }
    }
}

// Accessing and logging the firstname property of the nested userfullname object
console.log(regularUser.fullname.userfullname.firstname) // Output: Mohammed

// Creating three separate objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// Merging obj1, obj2, and obj4 into a new object using spread syntax
const obj3 = {...obj1, ...obj2, ...obj4}

// Logging the merged object
console.log(obj3) // Output: {1: "a", 2: "b", 3: "a", 4: "b", 5: "a", 6: "b"}

// Creating an array of user objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// Accessing the email of the second user in the array
users[1].email

// Logging the tinderUser object
console.log(tinderUser) // Output: { id: "123abc", name: "sam", isLoggedIn: false }

// Logging the keys of the tinderUser object
console.log(Object.keys(tinderUser)) // Output: ["id", "name", "isLoggedIn"]

// Logging the values of the tinderUser object
console.log(Object.values(tinderUser)) // Output: ["123abc", "sam", false]

// Logging the number of values in the tinderUser object
console.log(Object.values(tinderUser).length) // Output: 3

// Logging the entries of the tinderUser object (key-value pairs as arrays)
console.log(Object.entries(tinderUser)) // Output: [["id", "123abc"], ["name", "sam"], ["isLoggedIn", false]]

// Checking if tinderUser has the property 'isLoggedIn'
console.log(tinderUser.hasOwnProperty('isLoggedIn')) // Output: true

// Checking if tinderUser has the property 'isLoggediIn' (note the typo)
console.log(tinderUser.hasOwnProperty('isLoggediIn')) // Output: false
