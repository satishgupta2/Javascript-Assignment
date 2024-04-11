/*
1) Write a Javascript program to check the week days and weekends from the week when user enters the day.
input : Tuesday
output : week day

input : Sunday
output : weekend

*/


function checkDayType(day) {
    const weekdays = ['Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday'];
    const weekends = ['Saturday', 'Sunday'];

    const inputDay = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();

    if (weekdays.includes(inputDay)) {
        console.log(`${inputDay} is a weekday.`);
    } else if (weekends.includes(inputDay)) {
        console.log(`${inputDay} is a weekend day.`);
    } else {
        console.log('Invalid input. Please enter a valid day.');
    }
}


const userInput = prompt('Enter a day:'); 
checkDayType(userInput);
