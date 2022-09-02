/*
10. Boolean value is either true or false.
    - Write three JavaScript statement which provide truthy value.
    - Write three JavaScript statement which provide falsy value.
*/
//Tythy values
let t1 = 5>3
let t2 = 2>3 || 5<19
let t3 = !0

console.log("truthy t1: ",t1)
console.log("truthy t2: ",t2)
console.log("truthy t3: ",t3)

// Falsy values
let f1 = null
let f2 = 3<2 && 5>2
let f3 

console.log("falsy f1: ",f1)
console.log("falsy f2: ",f2)
console.log("falsy f3: ",f3)