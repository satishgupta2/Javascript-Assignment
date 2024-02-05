/*
15)Write a JavaScript program which contains all the string methods like String length()
String slice()
String substring()
String substr()
String replace()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split(). 

*/
function demonstrateStringMethods(inputString) {
    // String length()
    console.log(`String Length: ${inputString.length}`);

    // String slice()
    console.log(`Slice from index 2 to 5: ${inputString.slice(2, 5)}`);

    // String substring()
    console.log(`Substring from index 2 to 5: ${inputString.substring(2, 5)}`);

    // String substr()
    console.log(`Substr from index 2, length 5: ${inputString.substr(2, 5)}`);

    // String replace()
    console.log(`Replace 'Satish' with 'Sam': ${inputString.replace('Satish', 'Sam')}`);

    // String trim()
    console.log(`Trimmed String: ${inputString.trim()}`);

    // String trimStart()
    console.log(`Trimmed Start: ${inputString.trimStart()}`);

    // String trimEnd()
    console.log(`Trimmed End: ${inputString.trimEnd()}`);

    // String padStart()
    console.log(`Padded Start: ${inputString.padStart(15, '*')}`);

    // String padEnd()
    console.log(`Padded End: ${inputString.padEnd(15, '*')}`);

    // String charAt()
    console.log(`Character at index 3: ${inputString.charAt(3)}`);

    // String charCodeAt()
    console.log(`ASCII code at index 3: ${inputString.charCodeAt(3)}`);

    // String split()
    const splitArray = inputString.split(' ');
    console.log(`Split into array: ${JSON.stringify(splitArray)}`);
}


const userInput = prompt('Enter a string:');
demonstrateStringMethods(userInput);


/*

// output :
String Length: 6
Slice from index 2 to 5: tis
Substring from index 2 to 5: tis
Substr from index 2, length 5: tish
Replace 'Satish' with 'Sam': Sam
Trimmed String: Satish
Trimmed Start: Satish
Trimmed End: Satish
Padded Start: *********Satish
Padded End: Satish*********
Character at index 3: i
ASCII code at index 3: 105
Split into array: ["Satish"]

*/