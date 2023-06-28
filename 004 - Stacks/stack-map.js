"use strict";

class Stack {
    #items = new Map();
    #count = 0;

    constructor() {}

    push(element) {
        this.#items.set(this.#count++, element);
    }
}

const stack = new Stack();
