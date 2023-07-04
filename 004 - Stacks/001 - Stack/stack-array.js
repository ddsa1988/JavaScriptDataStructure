"use strict";

class Stack {
    #items = [];
    constructor() {}

    push(element) {
        this.#items.push(element);
    }

    pop() {
        return this.#items.pop();
    }

    peek() {
        return this.#items[this.#items.length - 1];
    }

    size() {
        return this.#items.length;
    }

    isEmpty() {
        return this.#items.length === 0;
    }

    clear() {
        this.#items = [];
    }

    toString() {
        if (this.isEmpty()) {
            return "";
        }

        return this.#items.join(", ");
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
