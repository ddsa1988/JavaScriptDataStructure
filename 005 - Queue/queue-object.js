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
        return this.isEmpty() ? undefined : this.#items[this.#lowestCount];
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
        return this.#count - this.#lowestCount;
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.#items = {};
        this.#count = 0;
        this.#lowestCount = 0;
    }

    toString() {
        return this.isEmpty() ? "" : Object.values(this.#items).join(", ");
    }
}

export { Queue };

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(100);
queue.enqueue(50);

console.log(queue.toString());
console.log(queue.search(50));
