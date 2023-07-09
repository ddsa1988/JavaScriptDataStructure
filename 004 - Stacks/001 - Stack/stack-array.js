"use strict";

class Stack {
    #items = [];
    constructor() {}

    push(element) {
        this.#items.push(element);
    }

    pop() {
        return this.#items.pop();
    }

    peek() {
        return this.#items[this.#items.length - 1];
    }

    search(element) {
        return this.#items.indexOf(element);
    }

    size() {
        return this.#items.length;
    }

    isEmpty() {
        return this.#items.length === 0;
    }

    clear() {
        this.#items = [];
    }

    toString() {
        return this.isEmpty() ? "" : this.#items.join(", ");
    }
}

export { Stack };
