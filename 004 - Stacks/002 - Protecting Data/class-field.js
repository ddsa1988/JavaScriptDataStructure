"use strict";

class Stack {
    #items = [];

    constructor() {}

    push(element) {
        this.#items.push(element);
    }
}

const stack = new Stack();

stack.push(8);
// console.log(stack.items); Undefined
// console.log(stack.#items); Error
