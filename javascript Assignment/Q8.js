/*
8)Write a Javascript program to check if the entered number from user is odd or even, and display a message to the screen. 
input : 67
output : odd
*/



function checkOddOrEven(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even number`);
    } else {
        console.log(`${number} is odd number`);
    }
}


const userInput = parseInt(prompt('Enter a number:'));
checkOddOrEven(userInput);



// output : 67 is odd number