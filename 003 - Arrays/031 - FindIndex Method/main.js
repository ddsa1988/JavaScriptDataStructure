"use strict";

//The findIndex method returns the index of the first value of the array that satisfies the proposed condition

const numbers = [1, 2, 3, 4, 15, 3, 10];

function findMultipleOf5(number) {
    return number % 5 === 0;
}

const result = numbers.findIndex(findMultipleOf5);
console.log(result);
