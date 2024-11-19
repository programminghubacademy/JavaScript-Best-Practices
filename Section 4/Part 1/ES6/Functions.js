// Importing and Exporting Functions

// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.js
import { add, subtract } from './math.js';
console.log(add(5, 3));  // 8
console.log(subtract(5, 3));  // 2


// logger.js
const log = (message) => console.log(message);
export default log;

// main.js
import log from './logger.js';
log('Hello, world!');



// utils.js
export const pi = 3.14;
export function square(x) {
  return x * x;
}

// main.js
import { pi, square } from './utils.js';
console.log(pi);  // 3.14
console.log(square(4));  // 16