"use strict";

class Stack {
    #items = new Map();

    constructor() {}

    push(element) {
        this.#items.set(this.size(), element);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("EmptyStackException");
        }

        const key = this.size() - 1;
        const element = this.#items.get(key);
        this.#items.delete(key);

        return element;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("EmptyStackException");
        }

        return this.#items.get(this.size() - 1);
    }

    search(element) {
        const searchIndex = [];

        for (let i = 0; i < this.size(); i++) {
            if (element === this.#items.get(i)) {
                searchIndex.push(i);
            }
        }

        if (searchIndex.length === 0) {
            searchIndex.push(-1);
        }

        return searchIndex;
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
        if (this.isEmpty()) {
            return "";
        }

        let str = String(this.#items.get(0));

        for (let i = 1; i < this.size(); i++) {
            str = str.concat(", ", String(this.#items.get(i)));
        }

        return str;
    }
}

export { Stack };
