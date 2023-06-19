"use strict";

//Logic about insert elements at the beginning
{
    function insertFirstElement(arr, value) {
        for (let i = arr.length; i > 0; i--) {
            arr[i] = arr[i - 1];
        }
        arr[0] = value;
    }

    const numbers = [1, 2, 3, 4, 5, 6];
    console.log(numbers);
    console.log(numbers.length);

    console.log();

    insertFirstElement(numbers, 100);
    console.log(numbers);
    console.log(numbers.length);
}
console.log();

//The array unshift method adds an element at the end of the array
{
    const numbers = [1, 2, 3, 4, 5, 6];
    console.log(numbers);
    console.log(numbers.length);

    console.log();

    numbers.unshift(100);
    console.log(numbers);
    console.log(numbers.length);

    console.log();

    numbers.unshift(200, 300, 400);
    console.log(numbers);
    console.log(numbers.length);
}
