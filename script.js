import fibonacci from "./modules/fibonacci.js";
import filter from "./modules/filter.js";
import pow from "./modules/pow.js";
import powList from "./modules/powList.js";
import powAndFilter from "./modules/powAndFilter.js";
import { sum, handler } from "./modules/sum.js";

import { announce, callFunction } from "./modules/helper.js";

announce("2. Get a fibonacci sequence number with recursion");

callFunction(fibonacci, [1]);
callFunction(fibonacci, [5]);
callFunction(fibonacci, [9]);

announce("3. Filter function");

callFunction(filter, [[1, 2, 3, 4, 5], (a) => a % 2]);
callFunction(filter, [[1, 2, 3, 4, 5], (a) => a > 3]);
callFunction(filter, [[1, 2, 3, 4, 5], (a) => a !== 4]);

announce("4. Pow function");

callFunction(pow, [2, 8]);
callFunction(pow, [5, 4]);
callFunction(pow, [8, 2]);

announce("5. Pow list");

callFunction(powList, [[6, 9, 3, 4, 7, 9, 6], 3]);
callFunction(powList, [[1, 7, 5, 2, 9], 2]);

announce("6. Pow and filter function");

callFunction(powAndFilter, [[1, 2, 3, 4, 5], 2, 20]);
callFunction(powAndFilter, [[6, 3, 5, 1, 8], 3, 100]);
callFunction(powAndFilter, [[4, 7, 8, 5, 9], 5, 10]);

announce("7. Sum function with handler function as an argument");

console.log("Calling function sum with a function handler as an argument");
console.log("handler: " + handler);

let calc = sum(handler);

console.log(calc);

console.log("Calling function calc, that was returned");

console.log(calc());
