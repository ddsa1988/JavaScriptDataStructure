"use strict";

const friends = [
    { firstName: "John", age: 30 },
    { firstName: "Ana", age: 20 },
    { firstName: "Chris", age: 25 },
];

function comparePersonAge(a, b) {
    return a.age < b.age ? -1 : a.age > b.age ? 1 : 0;
}

friends.sort(comparePersonAge);
console.log(friends);
