"use strict";

//Export default when we have a single member in the module
export default class Book {
    #title;
    constructor(title) {
        this.#title = title;
    }

    printTitle() {
        console.log(this.#title);
    }
}
