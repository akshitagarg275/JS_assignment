/*
12. Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

let now = new Date()
console.log("Year: ",now.getFullYear())
console.log("Month: ",now.getMonth())
console.log("Date is: ",now.getDate())
console.log("Day: ",now.getDay())
console.log("Hours is : ",now.getHours())
console.log("Minutes is : ",now.getMinutes())
console.log("Seconds elapsed: ",now.valueOf())