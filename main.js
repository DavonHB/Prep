// 1
//
const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true,
        age: 20,
    },
    {
        id: 2,
        name: "Jill",
        isActive: true,
        age: 18,
    },
    {
        id: 3,
        name: "John",
        isActive: false,
        age: 28,
    },
]
// Write code to get array of names from given array of users
//

// const names = users.map((user) => user.name)

// const names =[]
// users.forEach(user => {
//     names.push(user.name)
// })

// const names = []
// for (let i = 0; i < users.length; i++) {
//     names.push(users[i].name);
// }
// console.log("names", names)

// Write code to get an array of user that are only active
//

// const names = []
// for (let i = 0; i < names.length; i++) {
//     if (users[i].isActive) {
//         names.push(users[i].name)
//     }
// }

// const names = users.filter(user => user.isActive).map((user)=> user.name)
// console.log("Is Active", names)

// Sort users by age descending
// 

// users.sort((user1, user2) => user1.age < user2.age ? 1 : -1)
// const names = []
// for (let i = 0; i < names.length; i++) {
//     if (users[i].isActive) {
//         names.push(users[i].name)
//     }
// }

// const names = users
//     .sort((user1, user2) => user1.age < user2.age ? 1 : -1)
//     .filter(user => user.isActive)
//     .map((user)=> user.name)

// console.log("Age", names)


//2 What will be logged in the first example and in the second example
//

// let var1;
// console.log(var1);
// console.log will display undefined, variable is declared with no value
// console.log(typeof var1);
// the type of variable will  display undefined

// let var2 = null;
// console.log(var2);
// console.log  will display null, variable is declared with a value
// console.log(typeof var2);
// console.log will display object, as the typeof variable, null, is an object

//3 what will be console.log here
//

// Question 1
// console.log(foo)
// foo = 1
// an error saying that foo is undefined

// Question 2
// console.log(foo2)
// var foo2 = 2
// var declaration hoists to the top of the file and undefined is displayed

// Question 3
// foo3 = 3
// console.log(foo3)
// var foo3
// logs the number as an object is declared before logged

// const and let declaration do not hoist anywhere, it exists where its declared

//3 create a counter function which has increment and getValue functionality
//

// const privateSecret = () => {
//     const secret = 'foo'

//     return () => secret
// }
// const getSecret = privateSecret()
// console.log(getSecret())

// const privateCounter = () => {
//     let count = 0;
//     return {
//         increment: (val = 1) => {
//             count += val;
//         },
//         getValue: () => {
//             return count
//         }
//     }
// }

// const counter = privateCounter();
// console.log(counter.getValue());
// counter.increment();
// console.log(counter.getValue());
// closure lets us have access to the properties within itself and properties declared before itself

//4 Write a function which helps to achieve multiply(a)(b) and returns product of a and b
//

// const multiply = (num1) => {
//     return num2 => {
//         return num1 * num2;
//     }
// }

// const multiply2 = num1 => num2 => num1 * num2

// console.log(multiply(5)(5))
// console.log(multiply2(5)(5))
// //Curry function
// // let curriedSum = curry((a, b, c) => a + b + c)
// const curry = function(fn) {
//     var arity = fn.length;
//     console.log("arity", arity);
//     return function f1(...args) {
//         if (args.length >= arity) {
//             console.log("enough arguments")
//             return fn(...args)
//         } else {
//             console.log("need more arguments")
//             return function f2(...moreArgs) {
//                 var newArgs = args.concat(moreArgs)
//                 return f1(...newArgs)
//             }
//         }
//     }
// }

// const curriedSum = curry((a, b, c) => a + b + c)
// const partiallyCurriedSum = curriedSum(1)
// console.log(partiallyCurriedSum(2, 3))

// //curry two functions, get and map
// const get = curry((property, object) => object[property])
// console.log(get('id', {id: 1}))
// let getId = get('id') //in browser can get a function property id
// const map = curry((fn, values) => values.map(fn))
// console.log(map(getId, [{id: 1}]))
// const getIds = map(getId)

//5 Write a function which gets an array and an element abd returns an arran with this element at the end

// const numbers = [1, 2]
// const append = (arr, element) => {
//     return [...arr, element]
//     // spreading all elements of the array in the new array, copies arrays
//     // arr.push(element)
//     // .push modifies the old array
//     return arr
// }
// const newNumbers = append(numbers, 3)
// console.log(newNumbers)
// // console.log(append(numbers), 3)

//6 Write a function which can concatenate 2 arrays

// const mergeArrays = (arr1, arr2) => {
//     // arr1.push(...arr2);
//     // return arr1
//     // return arr1.concat(...arr2)
//     // concat doesn't mutate an array
//     return [...arr1, ...arr2]
// }

// const arr1 = [1]
// const arr2 = [2, 3]
// const result = mergeArrays(arr1, arr2)
// console.log(result, arr1, arr2)

//7 Check if user exists with user array at the top
// idea is to check the property of an object within the array

// const doesNameExist = (name, arr) => arr.some(element => element.name === name)
// const doesNameExist = (name, arr) => {
//     const element = arr.find(element => element.name === name)
//     // element is an object, not an object
//     return Boolean(element)

//     const index = arr.findIndex(element => element.name === name)
//     // element is an object, not an object
//     return index > 0;
// }

// const doesNameExist = (name, users) => {
//     let exists = false
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].name === name) {
//             exists = true
//         }
//     }
//     return exists
//  }

// console.log(doesNameExist("John", users))
// console.log(doesNameExist("Foo", users))

//8 Remove all duplicates in the array

// const uniqueArray = array => {
//     return [...new Set(array)]
//     // new set allows us to store new values in a unique way
// }

// const uniqueArray = array => {
//     const result = []
//     array.forEach(item => {
//         if (!result.includes(item)) {
//             result.push(item)
//         }
//     })
//     return result;
// }

// const uniqueArray = array => {
//     return array.reduce((acc, el) => {
//         return acc.includes(el) ? acc : [...acc, el]
//     }, [])
// }

// console.log(uniqueArray([1, 1, 2]))

//9 Sort the array of numbers

// const array = [3, 5, 1]
// const result = array.sort((a, b) => a - b)
// // you can sort properties inside of objects
// // will mutate array
// console.log(array, result)

//sort by author
// const books = [
//     {name: "Potter", author: "Joanne Rowling"},
//     {name: "Warcross", author: "Marie Lu"},
//     {name: "Hunger", author: "Suzanne Collins"},
// ]

// books.sort((book1, book2) => {
//     const authorLastName1 = book1.author.split(" ")[1]
//     const authorLastName2 = book2.author.split(" ")[1]
//     return authorLastName1 < authorLastName2 ? -1 : 1
// })

// console.log(books)

// interview is a communication between several people