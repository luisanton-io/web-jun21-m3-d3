const numbers = [1, 2, 3, 4]

// Array.foreach accepts a VOID function as argument

numbers.forEach(number => {
    console.log(number)
})


// Array.map
// NON-Mutating

// .map accepts a fruitful function as argument


// const doubleNumbers = numbers.map(
//     function (number) {
//         return number * 2
//     }
// )// [2,3,6,8]
const doubleNumbers = numbers.map((n, i) => i * n)// [2,3,6,8]

console.log(doubleNumbers)

const people = ["Luis", "Tetiana", "Lidia", "Ubeyt"]

// const paragraphs = people.map(person => `<p>${person}</p>`)
const paragraphs = people.map(
    function (person, index) {
        return `<p id="${index}">${person}</p>`
    }
)

console.log(people)
console.log(paragraphs)


// Array.filter 
// Filtering the array using a predicate function as argument
// A predicate function is a function that returns either true or false.

// Returns an array of elements which, when provided to the predicate function, return true


const _numbers = [1000, 1111, 1113, 11110]


// Old boring way

// let _numbersHigherThan10 = []

// for (let number of _numbers) {
//     if (number > 10) {
//         _numbersHigherThan10.push(number)
//     }
// }

// new fresh way

// const numberHigherThan10 = _numbers.filter(
//     Predicate function returning either true or false run on each element of the array
//     function(n) {
//         return n > 10
//     }
// )

const numberHigherThan10 = _numbers.filter(n => n > 10)

console.log({ numberHigherThan10 })

// Array.find

// Returns the first element which, when provided to the predicate function, returns true

const firstNumberHigherThan10 = _numbers.find(n => n > 10)
// const firstNumberHigherThan10 = _numbers.filter(n => n > 10)[0] // same thing

console.log({ firstNumberHigherThan10 })

// .some

// Returns a boolean value, reflecting whether there is any element
// in the array which, when provided to the predicate function, return true

// Is there any element in the array higher than 10 ?

const anyHigherThan10 = _numbers.some(n => n > 10)

console.log({ anyHigherThan10 })


// .every 

// Are all the elements in the array respectig the predicate?

const everyoneHigherThan10 = _numbers.every(n => n > 10)

console.log({ everyoneHigherThan10 })

// .reverse()

// Reversing the array order

const myFruits = ["orange", "apple", "tomatoes"]

// let reversedFruits = []
// for (let i = myFruits.length; i >= 0; i--) {
//     reversedFruits = myFruits[i]
// }

console.log(myFruits.reverse())

// .sort

// .reduce






/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

/* WRITE YOUR CODE HERE */

function ex2(array) {
    return array.reduce((a, c) => a > c ? a : c)
}

/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

function ex3(array) {
    return array.reduce((a, c) => a < c ? a : c)
}

