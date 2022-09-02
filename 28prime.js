/*

28. Use for loop to iterate from 0 to 100 and print only prime numbers
*/
let num=0
while (num<=100){
    let flag = true
    let i=2
    if (num == 0 || num ==1){
        num = num+1
        continue
    }
    while (i <= num/2){
        if (num%i == 0){
            flag = false
            break
        }else{
            flag = true
        }
        i=i+1
    }
    if(flag ){
        console.log(num)
    }
    num = num +1

} 