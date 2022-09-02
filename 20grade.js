/*
20. Write a code which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F
*/

const setGrade = (marks) => {
    if (marks >=80 && marks<=100){
        console.log("GRADE A")
    } else if (marks >= 70 && marks <=79){
        console.log("GRADE B")
    } else if (marks >= 60 && marks <= 69){
        console.log("GRADE C")
    } else if (marks >=50 && marks <=59){
        console.log("GRADE D")
    } else if (marks >=0 && marks <=49){
        console.log("GRADE F")
    } else {
        console.log("Enter marks 0-100")
    }
}

setGrade(27)