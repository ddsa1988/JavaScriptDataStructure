"use strict";

/* Parent class */

class Person {
    #firstName; // Private attribute
    #lastName;
    #birthyear;

    constructor(firstName, lastName, birthyear) {
        this.#setFirstName(firstName);
        this.#setLastName(lastName);
        this.#setBirthyear(birthyear);
    }

    setFirstName(firstName) {
        this.#firstName = firstName;
    }

    setLastName(lastName) {
        this.#lastName = lastName;
    }

    getFullName() {
        return this.#firstName + " " + this.#lastName;
    }

    #setBirthyear(birthyear) {
        // Private method
        this.#birthyear = birthyear;
    }

    getBirthyear() {
        return this.#birthyear;
    }

    getAge(year) {
        if (!(Number.isInteger(year) && year >= this.#birthyear)) {
            throw new Error(
                "Year must be a number and greater than birthyear."
            );
        }

        return year - this.#birthyear;
    }
}

const diego = new Person("Diego", "Alexandre", 1988);

console.log(diego);
console.log(diego.getFullName());
console.log(diego.getAge(2023));
console.log(diego.__proto__);

console.log();

/* Child class */

class Student extends Person {
    #id;

    constructor(firstName, lastName, birthyear, id) {
        super(firstName, lastName, birthyear);
        this.setId(id);
    }

    setId(id) {
        this.#id = id;
    }

    getId() {
        return this.#id;
    }
}

const amanda = new Student("Amanda", "Perna", 1993, 100);
console.log(amanda);
console.log(amanda.getFullName());
console.log(amanda.getAge(2023));
console.log(amanda.__proto__);
