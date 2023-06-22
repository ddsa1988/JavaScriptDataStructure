"use strict";

//The values of an array is the value of each index
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

{
    const values = numbers.values();
    console.log(values);
    console.log(values.next().value);
    console.log(values.next().value);
    console.log(values.next().value);
}
console.log();

{
    const values = numbers.values();
    for (const value of values) {
        console.log(value);
    }
}
