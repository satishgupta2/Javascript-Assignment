/* 
2)Write a JavaScript program to take 3 integers from user and check the greatest integer.
input : -8 67 99
output : 99 
*/

function findGreatestInteger(num1, num2, num3) {
    const max = Math.max(num1, num2, num3);
    console.log(`The greatest integer is: ${max}`);
}


const userInput1 = parseInt(prompt('Enter the first integer:'));
const userInput2 = parseInt(prompt('Enter the second integer:'));
const userInput3 = parseInt(prompt('Enter the third integer:'));

findGreatestInteger(userInput1, userInput2, userInput3);

//output : The greatest integer is: 99