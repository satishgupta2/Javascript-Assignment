/*
13)Write a JavaScript program to Convert the entered String into UpperCase/lowercase.
input : javascript
output : JAVASCRIPT

input : JAVASCRIPT
output : javascript
*/

function convertCase(inputString) {
    const upperCaseResult = inputString.toUpperCase();
    const lowerCaseResult = inputString.toLowerCase();

    console.log(`Original String: ${inputString}`);
    console.log(`Uppercase: ${upperCaseResult}`);
    console.log(`Lowercase: ${lowerCaseResult}`);
}

const userInput = prompt('Enter a string:');
convertCase(userInput);


/*
//output :
Original String: javascript
Uppercase: JAVASCRIPT

Lowercase: javascript


*/


