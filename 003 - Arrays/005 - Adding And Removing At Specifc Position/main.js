"use strict";

//Removing from a specif position
{
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(numbers);
    console.log(numbers.length);
    console.log();

    const removedNumbers = numbers.splice(2, 3);
    console.log(removedNumbers);
    console.log(numbers);
    console.log(numbers.length);
}
console.log();

//Adding from a specif position
{
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(numbers);
    console.log(numbers.length);
    console.log();

    const removedNumbers = numbers.splice(4, 0, 100, 200, 300);
    console.log(removedNumbers);
    console.log(numbers);
    console.log(numbers.length);
}
