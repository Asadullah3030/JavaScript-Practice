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

let myvla = 12;


// aleart(3+4) // using node not working

'use strict' // for new version in js 

// symbol is use :: to identify for unique ness // in REACT

// null is :: standAlone Value


//  CONVERSION IN JAVASCRIPT

let Num1 = 33
let convertStr = String(Num1)

console.log(convertStr)
console.log(typeof convertStr)


let isloggedIn = 1
let convertBoolean = Boolean(isloggedIn)

console.log(convertBoolean)
console.log(typeof convertBoolean)


//  '' => false
//  'asad' => true