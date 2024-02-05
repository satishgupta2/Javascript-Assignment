/*
5)Write a JavaScript program to check from two given integers, whether one is positive and another one is negative. 
input : -45,67
output : first integer is negative
*/




function checkIntegers(num1, num2) {
    if (num1 > 0 && num2 < 0) {
        console.log('First integer is positive and second integer is negative.');
    } else if (num1 < 0 && num2 > 0) {
        console.log('First integer is negative and second integer is positive.');
    } else {
        console.log('Both integers have the same sign or are both zero.');
    }
}


const userInput1 = parseInt(prompt('Enter the first integer:'));
const userInput2 = parseInt(prompt('Enter the second integer:'));

checkIntegers(userInput1, userInput2);


// output : First integer is negative and second integer is positive.
