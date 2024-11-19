
// Inefficient Looping Using items.length to recalculate again.
const items = [1, 2, 3, 4, 5];
let results = [];

for (let i = 0; i < items.length; i++) {
  results.push(items[i] * 2);
}


// Efficient Looping Using items.length to recalculate again.
const items_with_len = [1, 2, 3, 4, 5];
let results_with_len = [];
const len = items.length;

for (let i = 0; i < len; i++) {
  results.push(items[i] * 2);
}


// Remove Use of For Loop and use Map Function
const items_with_map_func = [1, 2, 3, 4, 5];
// Use map to multiply each element by 2
const results_with_map = items.map(item => item * 2);
console.log(results);