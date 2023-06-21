"use strict";

//The filter method returns a new array with the elements for which the function returned true

function isEven(number) {
    return number % 2 === 0;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

{
    const numbersBool = numbers.filter(isEven);
    console.log(numbersBool);
}
console.log();

{
    const numbersBool = numbers.filter(function (number) {
        return number % 2 === 0;
    });
    console.log(numbersBool);
}
console.log();

{
    const numbersBool = numbers.filter((number) => {
        return number % 2 === 0;
    });
    console.log(numbersBool);
}
console.log();

{
    const numbersBool = numbers.filter((number) => number % 2 === 0);
    console.log(numbersBool);
}
