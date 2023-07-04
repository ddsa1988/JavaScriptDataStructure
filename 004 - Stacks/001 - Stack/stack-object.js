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
        if (this.isEmpty()) {
            return "";
        }

        return Object.values(this.#items).join(", ");
    }
}

export { Stack };

// const stack = new Stack();

// console.log(stack.isEmpty());
// stack.push(5);
// stack.push(8);
// console.log(stack.peek());
// stack.push(11);
// console.log(stack.size());
// console.log(stack.isEmpty());
// stack.push(15);
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.size());
// console.log(stack.toString());
