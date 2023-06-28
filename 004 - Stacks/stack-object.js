"use strict";

class Stack {
    #items = {};
    #count = 0;

    constructor() {}

    push(element) {
        this.#items[this.#count++] = element;
    }
}

const stack = new Stack();
