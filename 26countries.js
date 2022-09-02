/*
26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
*/

const country_arr = ["India" , "SA" , "USA" , "NZ" , "UK" , "Ethiopia"]

if (country_arr.includes("Ethiopia")){
    console.log("ETHIOPIA")
}else{
    country_arr.push("Ethiopia")
}
