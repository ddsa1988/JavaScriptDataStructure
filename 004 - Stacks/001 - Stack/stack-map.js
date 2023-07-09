"use strict";

class Stack {
    #items = new Map();

    constructor() {}

    push(element) {
        this.#items.set(this.size(), element);
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }

        const key = this.size() - 1;
        const element = this.#items.get(key);
        this.#items.delete(key);

        return element;
    }

    peek() {
        return this.isEmpty() ? undefined : this.#items.get(this.size() - 1);
    }

    size() {
        return this.#items.size;
    }

    isEmpty() {
        return this.#items.size === 0;
    }

    clear() {
        this.#items.clear();
    }

    toString() {
        return this.isEmpty() ? "" : [...this.#items.values()].join(", ");
    }
}

export { Stack };
