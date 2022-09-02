/*
29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
*/

let sum_even = 0
let sum_odd = 0

for(let i = 0 ; i<=100 ; i++){
    if(i%2 == 0){
        sum_even = sum_even + i
    }else{
        sum_odd = sum_odd + i
    }
}

console.log("Sum of evens: ",sum_even)
console.log("Sum of odds: ",sum_odd)