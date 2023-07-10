"use strict";

import { Queue } from "./queue-object.js";

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue("John");
queue.enqueue("Jack");
queue.enqueue("Camilla");

console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.search("Jack"));
console.log(queue.toString());

queue.dequeue();
queue.dequeue();

console.log(queue.toString());
