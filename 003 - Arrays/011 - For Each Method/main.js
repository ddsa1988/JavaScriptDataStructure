"use strict";

/*
The for each method iterates all elements of the array no matter what. Break doesn't stop the iteration.
The for each always return undefined.
*/
function isEven(number) {
    return number % 2 === 0;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const result = [];

numbers.forEach(function (number) {
    result.push(isEven(number));
});
console.log(result);
console.log();

numbers.forEach((number) => {
    console.log(number % 2 === 0);
});
console.log();

numbers.forEach((number) => console.log(number % 2 === 0));
