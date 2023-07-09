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

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(100);
queue.enqueue(50);

console.log(queue.toString());
