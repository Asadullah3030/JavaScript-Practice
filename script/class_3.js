// comparsion in javaScript

console.log('1' > 0)  // true
console.log('01' > 0) // true

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // phelay wo 0 may convert karta ha  // true
console.log(undefined == 0) // false

// ===

console.log('2' === 2) // false/true


// stack 
let str = 'asad'
let change = str

str = 'abdul'
console.log(change) 

// heap

let hero = {
    name : 'asad',
    age:12
}

let hero1 = hero
hero.age = 22

console.log(hero1);