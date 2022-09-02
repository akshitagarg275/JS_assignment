/*
17. Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm
*/

let year = now.getFullYear()
let month = now.getMonth()
let day = now.getDate()
let hour = now.getHours()
let minutes = now.getMinutes()

console.log(`${year}-${month+1 <10 ? '0':''}${month+1}-${day <10 ? '0':''}${day} ${hour}:${minutes}`)
console.log(`${day <10 ? '0':''}${day}-${month+1 <10 ? '0':''}${month+1}-${year} ${hour}:${minutes}`)
console.log(`${day <10 ? '0':''}${day}/${month+1 <10 ? '0':''}${month+1}/${year} ${hour}:${minutes}`)
