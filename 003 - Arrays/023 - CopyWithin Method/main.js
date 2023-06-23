"use strict";

{
    const numbers = [1, 2, 3, 4, 5, 6];
    console.log(numbers);

    numbers.copyWithin(0, 3);
    console.log(numbers);
}
console.log();
{
    const numbers = [1, 2, 3, 4, 5, 6];
    console.log(numbers);

    numbers.copyWithin(1, 3, 5);
    console.log(numbers);
}
