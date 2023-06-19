"use strict";

{
    const names = ["Diego", "Amanda", "Ivanice", "Rodrigo", "Tainara"];
    console.log(names[0]);
    console.log(names[names.length - 1]);
}
console.log();
{
    const names = ["Diego", "Amanda", "Ivanice", "Rodrigo", "Tainara"];

    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}
console.log();
{
    const names = ["Diego", "Amanda", "Ivanice", "Rodrigo", "Tainara"];

    for (let i = names.length - 1; i >= 0; i--) {
        console.log(names[i]);
    }
}
console.log();
{
    const names = ["Diego", "Amanda", "Ivanice", "Rodrigo", "Tainara"];

    names.forEach((names) => {
        console.log(names);
    });
}
console.log();
{
    const names = ["Diego", "Amanda", "Ivanice", "Rodrigo", "Tainara"];
    const namesIterator = names[Symbol.iterator]();

    console.log(namesIterator.next().value);
    console.log(namesIterator.next().value);
}
