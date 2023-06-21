"use strict";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

{
    const sum = numbers.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    }, 0);
    console.log(sum);
}
console.log();

{
    const sum = numbers.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    }, 1000);
    console.log(sum);
}
console.log();

{
    const sum = numbers.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    }, 0);
    console.log(sum);
}
console.log();

{
    const sum = numbers.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        2000
    );
    console.log(sum);
}
console.log();

{
    const names = ["Diego", "dos", "Santos", "Alexandre"];

    const concatName = names.reduce((previousValue, currentValue) => {
        return previousValue.concat(currentValue, " ");
    }, "Concatenate Name: ");
    console.log(concatName);
}
