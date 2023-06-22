"use strict";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

{
    const iterator = numbers[Symbol.iterator]();

    console.log(iterator);
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    console.log(iterator.next().value);
}
console.log();

{
    const iterator = numbers[Symbol.iterator]();

    for (const number of iterator) {
        console.log(number);
    }
}
