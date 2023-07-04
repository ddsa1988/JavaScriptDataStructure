"use strict";

/*
It consists of prefixing an underscore (_) before the name of the attribute. But
this option is just a convention; it does not protect the data and we depend on the
common sense of the developer who will use our code.
*/

class Stack {
    constructor() {
        this._count = 0;
        this._items = {};
    }
}

const stack = new Stack();

console.log(stack._count);
console.log(stack._items);
