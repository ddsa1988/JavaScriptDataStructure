"use strict";

{
    const numbers = Array.of(1, 2, 3, 4, 5, 6);
    console.log(numbers);
}
console.log();
{
    const names = ["diego", "amanda", "rodrigo", "tainara", "ivanice"];
    const otherNames = Array.of(...names);
    console.log(otherNames);
}
