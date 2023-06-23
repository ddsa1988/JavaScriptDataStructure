"use strict";

//The sort method sorts the elements lexicographically and assumes all the elements are strings

{
    const numbers = [10, 1, 30, 15, 40, 300, 100, 200];

    numbers.sort();
    console.log(numbers);
}
console.log();

{
    const numbers = [10, 1, 30, 15, 40, 300, 100, 200];

    function compare(a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    }

    numbers.sort(compare);
    console.log(numbers);
}
console.log();

{
    const numbers = [10, 1, 30, 15, 40, 300, 100, 200];

    numbers.sort(function (a, b) {
        return a - b;
    });
    console.log(numbers);
}
console.log();

{
    const numbers = [10, 1, 30, 15, 40, 300, 100, 200];

    numbers.sort((a, b) => {
        return a - b;
    });
    console.log(numbers);
}
console.log();

{
    const numbers = [10, 1, 30, 15, 40, 300, 100, 200];

    numbers.sort((a, b) => a - b);
    console.log(numbers);
}
console.log();
