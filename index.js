export * from './core/type.js';
export * from './core/runner.js';
export * from './algorithms/sorting/bubbleSort.js';

import { bubbleSort } from './algorithms/sorting/bubbleSort.js';
import { runAlgorithm } from './core/runner.js';
const array = [5, 3, 8, 2];
const events = runAlgorithm(bubbleSort(array));

console.log(events); // pass this to your React animations