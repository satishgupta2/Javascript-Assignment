/*
14)Write a JavaScript program to check Leap Year.
input : 2000
output : leap year
*/

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}


const userInput = parseInt(prompt('Enter a year:'));
const result = isLeapYear(userInput);

if (result) {
    console.log(`${userInput} is a leap year`);
} else {
    console.log(`${userInput} is not a leap year`);
}



// output : 2000 is a leap year