"use strict";

/* Prototype based class */

function Person(firstName, lastName, birthyear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthyear = birthyear;
}

Person.prototype.getAge = function (year) {
    if (!(Number.isInteger(year) && year >= this.birthyear)) {
        throw new Error("Year must be a number and greater than birthyear.");
    }

    return year - this.birthyear;
};

const diego = new Person("Diego", "Alexandre", 1988);
console.log(diego);
console.log(diego.getAge(2023));
console.log(diego.__proto__);

console.log();

/* Prototype Inherited based class */

function Student(firstName, lastName, birthyear, id) {
    Person.call(this, firstName, lastName, birthyear);
    this.id = id;
}

Student.prototype = Object.create(Person.prototype);

const amanda = new Student("Amanda", "Perna", 1993, 100);
console.log(amanda);
console.log(amanda.getAge(2023));
console.log(amanda.__proto__);
