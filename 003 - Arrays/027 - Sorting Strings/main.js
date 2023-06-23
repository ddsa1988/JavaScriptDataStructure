"use strict";

/* 
Javascript compares each character according to its ASCII value
Example: A = 65, J = 74, a = 97, j = 106
*/

{
    const names = [
        "Diego",
        "Rodrigo",
        "Amanda",
        "Tainara",
        "Ivanice",
        "alexandre",
    ];

    names.sort();
    console.log(names);
}
console.log();
{
    const names = [
        "Diego",
        "Rodrigo",
        "Amanda",
        "Tainara",
        "Ivanice",
        "alexandre",
    ];

    names.sort(function (a, b) {
        return a.toLowerCase() < b.toLowerCase()
            ? -1
            : a.toLowerCase() > b.toLowerCase()
            ? 1
            : 0;
    });
    console.log(names);
}
