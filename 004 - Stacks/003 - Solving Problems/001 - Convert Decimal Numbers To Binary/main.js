"use strict";

import { Stack } from "../../001 - Stack/stack-object.js";

function decimalToBinary(decimalNumber) {
    const isDataValid = Number.isInteger(decimalNumber);

    if (!isDataValid) {
        return "";
    }

    const restStack = new Stack();

    let number = decimalNumber;
    let binaryString = "";

    while (number > 0) {
        restStack.push(number % 2);
        number = Math.trunc(number / 2);
    }

    while (!restStack.isEmpty()) {
        binaryString = binaryString.concat(restStack.pop());
    }

    return binaryString;
}

console.log(decimalToBinary(233)); // 11101001
console.log(decimalToBinary(10)); // 1010
console.log(decimalToBinary(1000)); // 1111101000

console.log(decimalToBinary("Diego"));
console.log(decimalToBinary(10.52));
console.log(decimalToBinary([1, 2, 3, 5]));
