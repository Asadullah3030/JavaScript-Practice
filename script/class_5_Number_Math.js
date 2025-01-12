//                                      Number and maths in javacript

// 1 toFixed //

let myNum = 100.3000
console.log(myNum.toFixed(2))

// 2 toString

let myNum1 = 100
console.log(myNum1.toString().length)
console.log(typeof myNum1)  // temporery string may convert kiya ha

// 3 toPrecision

let myNum2 = 125.7500
console.log(myNum2.toPrecision(4))

// 4 toLocaleString

let myNum3 = 125753302134
console.log(myNum3.toLocaleString())

// 5 isInteger
console.log(Number.isInteger(12))
// 6 isNaN
console.log(Number.isNaN(NaN))

// ++++++++++++++++++++++++++++++ MATH IS START ++++++++++++++++++++++++++++++

// 1 Math.round

let mathRound = 5.8
console.log(Math.round(mathRound))

// 2 Math.floor

let mathfloor = 5.8
console.log(Math.floor(mathfloor))

// 3 Math.ceil

let mathceil = 5.2
console.log(Math.ceil(mathceil))

// 4 Math.random
console.log(Math.random())
// 5 Math.max
console.log(Math.max(1,3,5,7,1,0))
// 6 Math.min
console.log(Math.min(1,3,5,7,1,0))


console.log(Math.abs(-5)); // Output: 5
console.log(Math.pow(2, 3)); // Output: 8
console.log(Math.sqrt(16)); // Output: 4
