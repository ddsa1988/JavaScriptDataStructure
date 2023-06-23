"use strict";

{
    const numbers = Array.of(1, 2, 3, 4, 5, 6);
    console.log(numbers);

    numbers.fill(0);
    console.log(numbers);

    numbers.fill(2, 1);
    console.log(numbers);

    numbers.fill(1, 3, 5);
    console.log(numbers);
}
console.log();
{
    const numbers = new Array(5).fill(1);
    console.log(numbers);
}
