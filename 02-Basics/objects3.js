// Defining an object course with properties courseNmae, price, and courseInstructor
const course = {
    courseNmae: "JS",
    price: "999",
    courseInstructor: "Hitesh"
}

// Logging the courseInstructor property directly from the course object (commented out)
// console.log(course.courseInstructor) // Output: Hitesh

// Destructuring courseInstructor from the course object and renaming it to insstructor
const {courseInstructor: insstructor} = course

// Logging the destructured variable insstructor
console.log(insstructor) // Output: Hitesh

// If we try to log courseInstructor, it would result in an error because we renamed it to insstructor
// console.log(courseInstructor) // This would result in an error: ReferenceError: courseInstructor is not defined
