import { bubbleSort } from './algorithms/sorting/bubbleSort.js';
import { runAlgorithm } from './core/runner.js';
import { mapToAnimation } from './core/mapToAnimation.js';

const container = document.getElementById("array-container");

const arr = [5, 3, 8, 2];

renderArray(arr);

const events = runAlgorithm(bubbleSort([...arr]));
const animations = events
  .map(mapToAnimation)
  .filter(Boolean);

  console.log(animations)

playAnimations(animations);


function renderArray(arr) {
  container.innerHTML = "";
  arr.forEach(value => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 20}px`;
    container.appendChild(bar);
  });
}

async function playAnimations(animations) {
  const bars = document.querySelectorAll(".bar");

  for (const animation of animations) {

    if (animation.action === "compare") {
      const [a, b] = animation.indices;

      bars[a].style.background = animation.color;
      bars[b].style.background = animation.color;

      await sleep(animation.duration);

      bars[a].style.background = "steelblue";
      bars[b].style.background = "steelblue";
    }

    else if (animation.action === "swap") {
      const [a, b] = animation.indices;

      const tempHeight = bars[a].style.height;
      bars[a].style.height = bars[b].style.height;
      bars[b].style.height = tempHeight;

      await sleep(animation.duration);
    }

    else if (animation.action === "mark") {
      bars[animation.index].style.background = "green";
      await sleep(animation.duration);
    }

    else if (animation.action === "done") {
      console.log("Sorting complete");
    }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}