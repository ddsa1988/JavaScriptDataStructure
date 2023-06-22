"use strict";

//The Array.from method creates a new array from an existing one
const numbers = [1, 2, 3, 4, 5];
const aNumbers = Array.from(numbers);

console.log(numbers);
console.log(aNumbers);
console.log();

const evens = Array.from(numbers, function (number) {
    return number % 2 === 0;
});
console.log(evens);
console.log();

const odds = Array.from(numbers, (number) => {
    return number % 2 !== 0;
});
console.log(odds);
