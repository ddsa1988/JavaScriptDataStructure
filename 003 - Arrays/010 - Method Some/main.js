"use strict";

//The some method iterates each element of the array until the function returns true

function isEven(number) {
    return number % 2 === 0;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(numbers.some(isEven));

console.log(
    numbers.some(function (number) {
        return number % 2 === 0;
    })
);

console.log(
    numbers.some((number) => {
        return number % 2 === 0;
    })
);

console.log(numbers.some((number) => number % 2 === 0));
