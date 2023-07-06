"use strict";

class Queue {
    #items = {};
    #count = 0;
    #lowestCount = 0;

    constructor() {}

    enqueue(element) {
        this.#items[this.#count++] = element;
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        const element = this.#items[this.#lowestCount];
        delete this.#items[this.#lowestCount++];

        return element;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.#items[this.#lowestCount];
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.#count - this.#lowestCount;
    }

    clear() {
        this.#items = {};
        this.#count = 0;
        this.#lowestCount = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return "";
        }

        return Object.values(this.#items).join(", ");
    }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(100);
queue.enqueue(50);

console.log(queue.toString());
