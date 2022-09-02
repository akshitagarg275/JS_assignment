/*
30. Write a script which generates a random hexadecimal number.
*/

let range=20;

console.log(`Random number generated from 0 to ${range} is : ${Math.floor(Math.random()*range)}`);

console.log(`Random hex number generated from 0 to ${range} is : ${Math.floor(Math.random()*range).toString(16)}`); //Hex has base 16