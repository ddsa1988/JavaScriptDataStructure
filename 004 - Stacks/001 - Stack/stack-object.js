"use strict";

class Stack {
    #items = {};
    #count = 0;

    constructor() {}

    push(element) {
        this.#items[this.#count++] = element;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }

        const element = this.#items[--this.#count];
        delete this.#items[this.#count];

        return element;
    }

    peek() {
        return this.isEmpty() ? undefined : this.#items[this.#count - 1];
    }

    search(element) {
        const itemsArray = Object.values(this.#items);

        for (let i = 0; i < itemsArray.length; i++) {
            if (element === itemsArray[i]) {
                return i;
            }
        }

        return -1;
    }

    size() {
        return this.#count;
    }

    isEmpty() {
        return this.#count === 0;
    }

    clear() {
        this.#items = {};
        this.#count = 0;
    }

    toString() {
        return this.isEmpty() ? "" : Object.values(this.#items).join(", ");
    }
}

export { Stack };
