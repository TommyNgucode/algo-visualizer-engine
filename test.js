import { bubbleSort, runAlgorithm } from './index.js';

const arr = [5, 3, 8, 2];
const events = runAlgorithm(bubbleSort([...arr]));
console.log(events);
