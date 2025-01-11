//                    data Types in js           // 

        // Premitive Data type

// 1  string   typeof is = STRING       
// 2  number   typeof is = NUMBER
// 3  boolean  typeof is = BOOLEAN
// 4  symbol   typeof is = SYMBOL
// 5  undefined   typeof is = UNDEFINED
// 6  Null   typeof is = object


        // Non - Premitive

// 7  Array typeof is = OBJECT
// 8  Object typeof is = OBJECT
// 9  Function typeof is = OBJECT


let myString = 'Istanbul'
console.log(myString)
console.log(typeof myString)

let myNumber = +17230346784
console.log(typeof myNumber)

let isLoggedIn = false
console.log(typeof isLoggedIn)

let unDefined;
console.log(unDefined)

let Null = null
console.log(typeof Null)

let symbol = Symbol('hello master')
console.log(typeof symbol)

let hero = ['kings','master','slave','lion']
console.log(typeof hero)

let obj = {
    name : 'asad',
    age : 23,
    email : 'asad@gmail.com',
    date : 22-2512
} 
console.log(typeof obj)

function myFun() {
    console.log(typeof'hello wrold')
}
myFun()