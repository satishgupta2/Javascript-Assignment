/*
11)Write a JavaScript program to Find the Sum of Natural Numbers
input : 5 
output : 15 
*/

function sumOfNaturalNumbers(n) {
    if (n <= 0) {
        return 'Please enter a positive integer.';
    }

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}


const userInput = parseInt(prompt('Enter a positive integer:'));
const result = sumOfNaturalNumbers(userInput);

console.log(`The sum of natural numbers up to ${userInput} is: ${result}`);



// output : The sum of natural numbers up to 5 is: 15