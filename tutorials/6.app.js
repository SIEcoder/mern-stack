const sayHiFunct = require('./tutorials/2.sayHi')
const namesObject = require('./tutorials/1.names')
const alternativeExports = require('./tutorials/4.alternativeExports')
require('./tutorials/5.mindGrenade')
let count = 0

for (name in namesObject){
    console.log(`${count += 1}. ${sayHiFunct(namesObject[name])}`)
}

console.log(alternativeExports.person)
console.log(alternativeExports.favCars)

//console.log(namesObject.elijah) 

