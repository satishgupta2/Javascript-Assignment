/*
12)Write a JavaScript program which returns a subset of a string entered by the user.
input : dog
output :  ["d", "do", "dog", "o", "og", "g"]
*/


function generateSubsets(inputString) {
    const subsets = [];

    for (let i = 0; i < inputString.length; i++) {
        for (let j = i + 1; j <= inputString.length; j++) {
            subsets.push(inputString.slice(i, j));
        }
    }

    return subsets;
}

// Example usage
const userInput = prompt('Enter a string:');
const result = generateSubsets(userInput);
console.log(result);

//output :['d', 'do', 'dog', 'o', 'og', 'g']