"use strict";

//The entries of an array are the index and the value of each element
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

{
    const entries = numbers.entries();
    console.log(entries);
    console.log(entries.next().value);
    console.log(entries.next().value);
    console.log(entries.next().value);
}
console.log();

{
    const entries = numbers.entries();
    for (const [index, value] of entries) {
        console.log(`${index} - ${value}`);
    }
}
