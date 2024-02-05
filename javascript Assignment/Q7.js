/*
7)Write a JavaScript function to  get the number of occurrences of each letter in specified string from user.
input : credence analytics
output : {"c":3,"r":1,"e":3,"d":1,"n":2,"a":2,"l":1,"y":1,"t":1,"i":1,"s":1}
*/

function countLetterOccurrences(inputString) {
    const letterCount = {};

    // Removing spaces converting to lowercase for case-insensitive counting
    const cleanedString = inputString.replace(/\s/g, '').toLowerCase();

    for (let char of cleanedString) {
        if (/[a-z]/.test(char)) {
            letterCount[char] = (letterCount[char] || 0) + 1;
        }
    }

    return letterCount;
}


const userInput = prompt('Enter a string:');
const result = countLetterOccurrences(userInput);
console.log(result);


//output :{c:3,r:1,e:3,d:1,n:2,a:2,l:1,y:1,t:1,i:1,s:1}