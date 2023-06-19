"use strict";

//Logic about insert elements at the end
{
    const numbers = [1, 2, 3, 4, 5, 6];
    console.log(numbers);
    console.log(numbers.length);

    console.log();

    numbers[numbers.length] = 10;
    console.log(numbers);
    console.log(numbers.length);
}
console.log();

//The array push method adds an element at the end of the array
{
    const numbers = [1, 2, 3, 4, 5, 6];
    console.log(numbers);
    console.log(numbers.length);

    console.log();

    numbers.push(10);
    console.log(numbers);
    console.log(numbers.length);

    console.log();

    numbers.push(15, 20, 30);
    console.log(numbers);
    console.log(numbers.length);
}
