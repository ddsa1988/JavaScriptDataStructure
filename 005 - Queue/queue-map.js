"use strict";

class Queue {
    #items = new Map();
    #lowestCount = 0;

    constructor() {}

    enqueue(element) {
        this.#items.set(this.size(), element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        const element = this.#items.get(this.#lowestCount);
        this.#items.delete(this.#lowestCount++);

        return element;
    }

    peek() {
        return this.isEmpty() ? undefined : this.#items.get(this.#lowestCount);
    }

    search(element) {
        const itemsArray = [...this.#items.values()];
        for (let i = 0; i < itemsArray.length; i++) {
            if (element === itemsArray[i]) {
                return i;
            }
        }

        return -1;
    }

    size() {
        return this.#items.size;
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.#items.clear();
    }

    toString() {
        return this.isEmpty() ? "" : [...this.#items.values()].join(", ");
    }
}

export { Queue };
