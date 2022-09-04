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