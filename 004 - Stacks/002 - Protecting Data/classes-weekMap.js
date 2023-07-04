"use strict";

class Stack {
    items = new WeakMap();
    constructor() {
        this.items.set(this, []);
    }

    push(element) {
        const arr = this.items.get(this);
        arr.push(element);
    }

    pop() {
        const arr = this.items.get(this);
        const element = arr.pop();

        return element;
    }
}

const stack = new Stack();
stack.push();
console.log(stack.items);
