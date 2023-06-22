"use strict";

//The keys of an array is the index of each element
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

{
    const keys = numbers.keys();
    console.log(keys);
    console.log(keys.next().value);
    console.log(keys.next().value);
    console.log(keys.next().value);
}
console.log();

{
    const keys = numbers.keys();
    for (const key of keys) {
        console.log(key);
    }
}
