"use strict";

class Deque {
    #items = {};
    #count = 0;
    #lowestCount = 0;

    constructor() {}

    addFront(element) {}

    addBack(element) {
        this.#items[this.#count++] = element;
    }

    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }

        const element = this.#items[this.#lowestCount];
        delete this.#items[this.#lowestCount++];

        return element;
    }

    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }

        const element = this.#items[--this.#count];
        delete this.#items[this.#count];

        return element;
    }

    peekFront() {
        if (this.isEmpty()) {
            return undefined;
        }
    }

    peekBack() {
        if (this.isEmpty()) {
            return undefined;
        }
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

    toString() {
        return this.isEmpty() ? "" : Object.values(this.#items).join(", ");
    }
}

const deque = new Deque();

console.log(deque.isEmpty());
console.log(deque.search("teste"));
