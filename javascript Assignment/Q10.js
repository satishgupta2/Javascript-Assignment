/*
10)Write a JavaScript program to sort the items of an entered array.
input : [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]
output : -4,-3,1,2,3,5,6,7,8

*/

function sortArray(inputArray) {
    const sortedArray = inputArray.slice().sort((a, b) => a - b);
    return sortedArray.join(',');
}


const userInput = prompt('Enter an array (comma-separated values):');
const inputArray = userInput.split(',').map(Number); 
const sortedResult = sortArray(inputArray);
console.log(sortedResult);



//output : -4,-3,1,2,3,5,6,7,8