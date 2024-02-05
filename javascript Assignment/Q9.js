/*
9)Write a JavaScript function to get the first and last element of an entered array.
input : [7, 9, 0, -2]
output : first element is 7 and last element is -2
*/



function getFirstAndLastElement(arr) {
    if (arr.length === 0) {
        return 'Array is empty.';
    }

    const firstElement = arr[0];
    const lastElement = arr[arr.length - 1];

    return `First element is ${firstElement} and last element is ${lastElement}`;
}


const userInput = prompt('Enter an array (comma-separated values):');
const inputArray = userInput.split(',').map(Number); 
const result = getFirstAndLastElement(inputArray);
console.log(result);



// output : First element is 7 and last element is -2