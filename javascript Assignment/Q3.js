/*
3)Write a JavaScript program to make calculator in which integer and operation(+,-,*,/,%) will be taken from the user.
input : 5, 4   operation : *
output : 20
*/

function calculator(num1, num2, operation) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return 'Cannot divide by zero';
            }
        case '%':
            if (num2 !== 0) {
                return num1 % num2;
            } else {
                return 'Cannot find modulus with zero';
            }
        default:
            return 'Invalid operation';
    }
}


const userInput1 = parseInt(prompt('Enter the first integer:'));
const userInput2 = parseInt(prompt('Enter the second integer:'));
const userOperation = prompt('Enter the operation (+, -, *, /, %):');

const result = calculator(userInput1, userInput2, userOperation);
console.log(`Result: ${result}`);


// output : 20