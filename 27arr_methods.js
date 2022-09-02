/*
27. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method
*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort()

let max = ages[0]
let min = ages[ages.length-1]

console.log(ages)
console.log(max)
console.log(min)

let total = ages.length

if (total %2 == 0){
    console.log(((ages[total/2])+(ages[total/2+1]))/2)

}else{
    console.log((total+1)/2)
}

let total_of_ages = 0

for(let a of ages){
    total_of_ages  = total_of_ages + a
}

let avg = total_of_ages / ages.length

console.log(avg)

let range = max - min
console.log(range)

console.log(`difference between min and average: ${Math.abs(min-avg).toFixed(2)}`)
console.log(`difference between max and average: ${Math.abs(max-avg).toFixed(2)}`)