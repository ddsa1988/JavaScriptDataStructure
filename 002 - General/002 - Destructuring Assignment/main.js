"use strict";

//With destructuring assignment
{
    let [a, b] = [10, 20];
    [b, a] = [a, b];

    console.log(a, b);

    const obj = { a, b };
    console.log(obj);
}

console.log();

//Without destructuring assignment
{
    let a = 10;
    let b = 20;

    a = a + b;
    b = a - b;
    a = a - b;

    console.log(a, b);

    const obj = { a: a, b: b };
    console.log(obj);
}
