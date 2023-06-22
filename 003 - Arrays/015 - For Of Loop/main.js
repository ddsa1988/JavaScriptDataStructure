"use strict";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
    console.log(number % 2 === 0 ? "even" : "odd");
}
console.log();

for (const [index, value] of numbers.entries()) {
    console.log(`Index ${index} - value ${value}`);
}
