"use strict";

/*
ES2015 introduced a new primitive type called Symbol that is immutable, and it
can be used as an object property.

This approach provides a false class private property, because the method
Object.getOwnPropertySymbols was also introduced in ES6, and it can be used to
retrieve all the property symbols declared in the class.

It is possible to retrieve the items symbol by accessing stack[objectSymbols[0]]. 
And, as the _items property is an array, we can do any array operation such as 
removing or adding an element to the middle of the array.
*/

class Stack {
    _items = Symbol("stackItems");

    constructor() {
        this[this._items] = [];
    }

    push(element) {
        this[this._items].push(element);
    }
}

const stack = new Stack();
stack.push(8);
stack.push(5);

const objectSymbols = Object.getOwnPropertySymbols(stack);

console.log(objectSymbols.length);
console.log(objectSymbols);
console.log(objectSymbols[0]);
stack[objectSymbols[0]].push(100);
console.log(stack[objectSymbols[0]]);
stack[objectSymbols[0]].unshift(200);
console.log(stack[objectSymbols[0]]);
