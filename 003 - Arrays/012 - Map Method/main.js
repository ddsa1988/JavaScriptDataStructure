"use strict";

//The map method returns a new array with the result of each iteration

function isEven(number) {
    return number % 2 === 0;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

{
    const numbersBool = numbers.map(isEven);
    console.log(numbersBool);
}
console.log();

{
    const numbersBool = numbers.map(function (number) {
        return number % 2 === 0;
    });
    console.log(numbersBool);
}
console.log();

{
    const numbersBool = numbers.map((number) => {
        return number % 2 === 0;
    });
    console.log(numbersBool);
}
console.log();

{
    const numbersBool = numbers.map((number) => number % 2 === 0);
    console.log(numbersBool);
}
