"use strict";

//Recursion can access any nested array. It doesn't matter how deep it is.
{
    function printNestedArray(arr) {
        if (Array.isArray(arr)) {
            for (const item of arr.values()) {
                if (Array.isArray(item)) {
                    printNestedArray(item);
                } else {
                    console.log(item);
                }
            }
        }
    }

    const avgTemp = [
        [72, 75, 78, 79, 60, 81],
        [87, 79, 75, 75, 73, 75],
    ];

    printNestedArray(avgTemp);
}
console.log();

//Loop can access nested array, but you have to know how deep it is.
{
    const avgTemp = [
        [72, 75, 78, 79, 60, 81],
        [87, 79, 75, 75, 73, 75],
    ];

    for (let i = 0; i < avgTemp.length; i++) {
        for (let j = 0; j < avgTemp[i].length; j++) {
            console.log(avgTemp[i][j]);
        }
    }
}
