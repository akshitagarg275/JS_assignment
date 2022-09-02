/*
16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
*/


let radius = prompt("Enter the radius: ")
const PI = 3.14

let area = PI * radius * radius
let circumference = 2 * PI * radius

console.log("area of circle: ", area)
console.log("circumference of circle: ", circumference)
