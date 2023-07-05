"use strict";

import { Stack } from "../../001 - Stack/stack-map.js";

function baseConverter(decimalNumber, base) {
    const isDataValid = Number.isInteger(decimalNumber);

    if (!isDataValid) {
        return "";
    }

    const restStack = new Stack();
    const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let number = decimalNumber;
    let binaryString = "";

    while (number > 0) {
        restStack.push(number % base);
        number = Math.trunc(number / base);
    }

    while (!restStack.isEmpty()) {
        binaryString = binaryString.concat(digits[restStack.pop()]);
    }

    return binaryString;
}

console.log(baseConverter(100345, 2)); // 11000011111111001
console.log(baseConverter(100345, 8)); // 303771
console.log(baseConverter(100345, 16)); // 187F9
console.log(baseConverter(100345, 35)); // 2BW0
