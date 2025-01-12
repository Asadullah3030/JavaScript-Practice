//                                           OBJECTS  IN JAVASCRIPT 

// HEAP MOMERY // consept
let firstObj = {
    nName : 'iamasadch',
    id : 123465,
    nEmail : 'iamchasad@gmail.com',
}

let secondObj = firstObj
secondObj.nName = 'asadulah' 
// console.log(secondObj)
// console.log(firstObj)

let mySymbol = Symbol('key1')

let otherUser = {
    oneUser : 'mapia',
    mapiaId : 213243,
    mapiaEmail : 'mapia2gmail.com',
    [mySymbol] : 'chacha'
}

// console.log(otherUser['mapiaId']);
// console.log(otherUser);
// console.log(otherUser[mySymbol]);


otherUser.greadding = function(){
    console.log(`hello js user ${this.oneUser}`)
}
// console.log(otherUser.greadding())


// +++++++++++++++++++++++++++++++ NEXT VIDEO START ++++++++++++++++++++++++++++++

let singleTon = new Object() // SINGLETON 
// console.log(singleTon)

let nonSingleTone = {}   // nonSingleTone
// console.log(nonSingleTone)


let regularUser = {
    email: 'usre@gmail.com',
    userName : {
        firtsName : 'asad',
        lastName : 'ullah',
        userFinalName:{
            userFullName : 'asadullah'
        }
    }
}

// console.log(regularUser.userName.userFinalName.userFullName)

// Merge tow object 

let obj1 = {
    nami : 'asad',
    kahani : 1234
}

let obj2 = {
    nami : 'abdul',
    kahani : 5678
}

// let ansObj = {...obj1,...obj2} // spread Operater
let ansObj = Object.assign({}, obj1,obj2) // assign method
// console.log(ansObj)


// kai bar kya hota ha ap kay pass data ata ha {[object or an array may]}  

const myData = [
    {
        user1 : 'danish',
        id : 321
    },
    {
        userr2 : 'tamoor',
        id : 654
    }
]

console.log(myData[0].id)

console.log(Object.keys(obj1)) // array may convert karta ha
console.log(Object.values(obj1)) // arrays may convert karta ha

// console.log(obj1.hasOwnProperty('nami'))

//  +++++++++++++++++++++++++++++ NEXT VIDEO +++++++++++++++++++++++++++++++++++

//                      Object de-structure and JSON API

let ourLife = {
    Name : 'asadullah',
    age : 32,
    city : 'Rahim yar khan'
}

let {Name:n,age:a,city:c} = ourLife
console.log(n,a,c) 