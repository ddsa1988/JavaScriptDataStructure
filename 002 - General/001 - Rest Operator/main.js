"use strict";

//With rest operator
{
    function sum(a, b) {
        if (!(Number.isFinite(a) && Number.isFinite(b))) {
            throw new Error("Arguments must be numbers!");
        }

        return a + b;
    }

    const params = [3, 4, 5];

    console.log(sum.apply(undefined, params));
    console.log(sum(...params));
}

console.log();

{
    function sum(a, b, ...c) {
        if (!(Number.isFinite(a) && Number.isFinite(b))) {
            throw new Error("Arguments must be numbers!");
        }

        return (a + b) * c.length;
    }

    console.log(sum(3, 4, "diego", [1, 2, 3], { type: "car", model: "Fiat" }));
}

console.log();

//Without rest operator
{
    function sum(a, b) {
        if (!(Number.isFinite(a) && Number.isFinite(b))) {
            throw new Error("Arguments must be numbers!");
        }

        const c = Array.prototype.slice.call(arguments, 2);

        return (a + b) * c.length;
    }

    console.log(sum(3, 4, "diego", [1, 2, 3], { type: "car", model: "Fiat" }));
}
