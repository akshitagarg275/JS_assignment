/*
22. Write a program which tells the number of days in a month.
*/

let month = "January"

switch (month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        console.log("31")
        break;
    
    case 'February':
        console.log("28")

    case 'April':
    case 'June':
    case 'September':
    case 'November':
        console.log("30")

    default:
        console.log("Enter valid month name")
        break;
}