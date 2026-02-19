// import { bubbleSort, runAlgorithm } from './index.js';
// index.js includes top level code, immediately triggers when imported

export * from './core/type.js';
export * from './core/runner.js';
export * from './algorithms/sorting/bubbleSort.js';

import { bubbleSort } from './algorithms/sorting/bubbleSort.js';
import { runAlgorithm } from './core/runner.js';
import { mapToAnimation } from './core/mapToAnimation.js'

const arr = [5, 3, 8, 2];

const events = runAlgorithm(bubbleSort([...arr]));

const animations = events.map(mapToAnimation)

console.log('Events:', events);
console.log('Animations:', animations);
