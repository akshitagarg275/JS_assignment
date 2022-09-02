/*
35. Write a functions which checks if all items are unique in the array.

*/

const checkUnique = (arr) => {
    let freq = {}

    for (let ele of arr ){
        if (Object.keys(freq).includes(String(ele))){
            return "All items are not unique"
            break
        }else{
            freq[ele] = 1
        }
    }
    return "All items are unique"
}

console.log(checkUnique([1,2,3,4]))
console.log(checkUnique([1,2,3,4,3]))