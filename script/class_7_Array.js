let arr = new Array(1,2,3,4,5,6)
console.log(arr)
console.log(arr[3])

// Array ke end mein ek ya zyada elements add karta hai.
arr.push(9)
// console.log(myArr);

// Kaam: Array ke last element ko remove karta hai.
arr.pop()
// console.log(myArr);

// Array ke first element ko remove karta hai.
arr.shift()
// console.log(myArr);

// Kaam: Array ke start mein ek ya zyada elements add karta hai.
arr.unshift(0)
// console.log(myArr);


//  join:method  in array
const fruits = ["Apple", "Banana", "Cherry"];
const result = fruits.join();
console.log(result); // Output: "Apple,Banana,Cherry" // data type is STRING


// Joining an Array with a Custom Separator:
const fruit = ["Apple", "Banana", "Cherry"];
const results = fruit.join(" - ");
console.log(results); // Output: "Apple - Banana - Cherry"


// conact method in arrays // conact two arrays

let arrys1 = [1,2,3,4,5]
let arrys2 = [6,7,8,9,10]

let arrays3 = arrys1.concat(arrys2)
// console.log(arrays3)

// other method to concat arrays 

let arrys3 = [1,2,3,4,5]
let arrys4 = [6,7,8,9,10]

let = arraysAnswer = [...arrys3,...arrys4]
// console.log(arraysAnswer)

// convert into single array 

let simple = [1,2,3,4, [6,7,8,9,[3,3],[2,10]]]
// console.log(simple.flat(Infinity))

// slice & splice method in js 

let laras = ['asad','sherma','foodies','function']
let seeHero = laras.slice(1,2)
// console.log(seeHero)
// console.log(laras)

const fruitss = ["Apple", "Banana", "Cherry", "Dates"];
const removed = fruitss.splice(1, 2);
// console.log(removed); 
// console.log(fruitss);



// convert in array string > object 
console.log(Array.from ('asadullah'))
console.log(Array.isArray ('asadullah'))
console.log(Array.from({name : 'asad'}))


let score = 100
let score1 = 200
let score2 = 300

let arr_score = Array.of(score,score1,score2)
// console.log(arr_score);

//                      difference between array.of & array.from 

// this array.of 
let arrs = Array.of('asad')
console.log(arrs)


// this is array.from 
let arrss = Array.from('asad')
console.log(arrss)

