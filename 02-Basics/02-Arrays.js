// Defining two arrays, one for Marvel heroes and one for DC heroes
const marvel_heros = ["Thor", "iron", "Spiderman"]
const dc_heros = ["Superman", "Batman", "Flash"]

// Pushing the dc_heros array into the marvel_heros array as a nested array
// marvel_heros.push(dc_heros)

// Logging the marvel_heros array, which now includes dc_heros as a nested array
// console.log(marvel_heros) // Output: ["Thor", "iron", "Spiderman", ["Superman", "Batman", "Flash"]]
// Accessing and logging the second element of the nested dc_heros array within marvel_heros
// console.log(marvel_heros[3][1]) // Output: "Batman"

// Concatenating marvel_heros and dc_heros into a new array allHeros
// const allHeros = marvel_heros.concat(dc_heros)
// Logging the allHeros array
// console.log(allHeros) // Output: ["Thor", "iron", "Spiderman", "Superman", "Batman", "Flash"]

// Using the spread operator to concatenate marvel_heros and dc_heros into a new array all_new_Heros
// const all_new_Heros = [...marvel_heros, ...dc_heros] // This is called the spread operator. It works the same as concatenation.
// Logging the all_new_Heros array
// console.log(all_new_Heros) // Output: ["Thor", "iron", "Spiderman", "Superman", "Batman", "Flash"]

// Defining a nested array another_array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// Flattening the nested array to any depth using flat(Infinity)
const real_another_array = another_array.flat(Infinity)

// Logging the flattened array
console.log(real_another_array) // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Checking if a string is an array using Array.isArray
console.log(Array.isArray("Inayath")) // Output: false

// Creating an array from a string using Array.from
console.log(Array.from("Inayath")) // Output: ["I", "n", "a", "y", "a", "t", "h"]

// Attempting to create an array from an object (this doesn't work as intended because Array.from needs an iterable or array-like object)
console.log(Array.from({name: "Inayath"})) // Output: []

// Defining three separate scores
let score1 = 100
let score2 = 200
let score3 = 300

// Creating an array from the scores using Array.of
console.log(Array.of(score1, score2, score3)) // Output: [100, 200, 300]
