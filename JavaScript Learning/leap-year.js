// conditions
/* If a year is divisible by 4, it's a leap year, unless it's also divisible by 100. 
   If a year is divisible by 100, it's not a leap year unless it's also divisible by 400. */

function leapYear(year){
    var isLeapYear = "";
    if (year / 4 === 0 && year / 100 !== 0){
        isLeapYear = "true"
    }
    else if (year / 100 === 0 && year / 400 === 0){
        isLeapYear = "true"
    } else {
        isLeapYear = "false"
    }
    return isLeapYear
}

console.log(leapYear(2000))