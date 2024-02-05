/*
6)Write a JavaScript function that accepts a string and counts the number of vowels within the string.
input : credencE Analytics
output : There are 6 vowels in the string (e,e,E,A,a,i)
*/

function countVowels(inputString) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let vowelList = [];

    for (let char of inputString) {
        if (vowels.includes(char)) {
            vowelCount++;
            vowelList.push(char);
        }
    }

    console.log(`There are ${vowelCount} vowels in the string (${vowelList.join(',')})`);
}


const userInput = prompt('Enter a string:');
countVowels(userInput);



//output: There are 6 vowels in the string (e,e,E,A,a,i)
