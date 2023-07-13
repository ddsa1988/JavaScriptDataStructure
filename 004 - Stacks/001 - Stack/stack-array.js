"use strict";

class Stack {
    #items = [];

    constructor() {}

    push(element) {
        this.#items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("EmptyStackException");
        }

        return this.#items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("EmptyStackException");
        }

        return this.#items[this.#items.length - 1];
    }

    search(element) {
        const searchIndex = [];
        let fromIndex = 0;

        while (true) {
            const index = this.#items.indexOf(element, fromIndex);

            if (index === -1) {
                if (searchIndex.length === 0) {
                    searchIndex.push(index);
                }

                break;
            }

            searchIndex.push(index);
            fromIndex = index + 1;
        }

        return searchIndex;
    }

    size() {
        return this.#items.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.#items = [];
    }

    toString() {
        return this.isEmpty() ? "" : this.#items.join(", ");
    }
}

export { Stack };
