"use strict";

class Stack {
    #items = {};
    #counter = 0;

    constructor() {}

    push(element) {
        this.#items[this.#counter++] = element;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("EmptyStackException");
        }

        const element = this.#items[--this.#counter];
        delete this.#items[this.#counter];

        return element;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("EmptyStackException");
        }

        return this.#items[this.#counter - 1];
    }

    search(element) {
        const searchIndex = [];

        for (let i = 0; i < this.size(); i++) {
            if (element === this.#items[i]) {
                searchIndex.push(i);
            }
        }

        if (searchIndex.length === 0) {
            searchIndex.push(-1);
        }

        return searchIndex;
    }

    size() {
        return this.#counter;
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.#items = {};
        this.#counter = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return "";
        }

        let str = String(this.#items[0]);

        for (let i = 1; i < this.size(); i++) {
            str = str.concat(", ", String(this.#items[i]));
        }

        return str;
    }
}

const stack = new Stack();

console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(10);
console.log(stack.search(10));
console.log(stack.search(30));
console.log(stack.search(50));
console.log(stack.peek());
console.log(stack.toString());
