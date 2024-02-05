/*
4)Write a JavaScript program to convert temperatures to Celsius and Fahrenheit.
input : 60C
output : 140F

input : 45F
output : 7.22C
*/

function convertTemperature(input) {
    const temperature = parseFloat(input);
    
    if (input.toUpperCase().includes('C')) {
        const fahrenheit = (temperature * 9/5) + 32;
        console.log(`${temperature}C is equal to ${fahrenheit.toFixed(2)}F`);
    } else if (input.toUpperCase().includes('F')) {
        const celsius = (temperature - 32) * 5/9;
        console.log(`${temperature}F is equal to ${celsius.toFixed(2)}C`);
    } else {
        console.log('Invalid input. Please include "C" or "F" in the temperature.');
    }
}


const userInput = prompt('Enter the temperature (e.g., 60C or 140F):');
convertTemperature(userInput);



//output:  60C is equal to 140.00F
// output : 45F is equal to 7.22C