import { bubbleSort } from './algorithms/sorting/bubbleSort.js';
import { runner } from './core/runner.js';
import { mapToAnimation } from './core/mapToAnimation.js';

const container = document.getElementById("array-container");

const arr = [5, 3, 8, 2];

renderArray(arr);

const events = runner(bubbleSort([...arr]));

// Pass each event to mapToAnimation, returns array
const animations = events.map(mapToAnimation);

playAnimations(animations);
// console.log(animations)


// render's each element as a bar 
function renderArray(arr) {
  container.innerHTML = ''
  arr.forEach(element => {
    const bar = document.createElement('div')
    bar.classList.add('bar')
    bar.style.height = `${element * 20}px`
    container.appendChild(bar)
  });
}


async function playAnimations(animations) {
  const bars = document.querySelectorAll('.bar')
  for (const animation of animations) {

    if (animation.action === 'compare') {
      const [a,b] = animation.indices

      bars[a].style.background = animation.color
      bars[b].style.background = animation.color

      await sleep(animation.duration)

      bars[a].style.background = 'steelblue'
      bars[b].style.background = 'steelblue'
    }
    
    else if (animation.action === 'mark') {
      const index = animation.index
      bars[index].style.background = 'green'
      await sleep(animation.duration)
    }

    else if (animation.action === 'swap') {
      const [a, b] = animation.indices

      const tempHeight = bars[a].style.height
      bars[a].style.height = bars[b].style.height
      bars[b].style.height = tempHeight

      // await -> pauses everything until the promise is done
      // w/o await -> done in the background
      await sleep(animation.duration)
    }

    // else if (animation.action === 'markSorted') {
    //   const [a,b] = animation.indices

    //   bars[a].style.background = animation.color
    //   bars[b].style.background = animation.color

    //   sleep(animation.duration)

    //   bars[a].style.background = 'steelblue'
    //   bars[b].style.background = 'steelblue'
    // }

    else if (animation.action === 'done') {
      console.log('done')
    }
  }
}



function sleep(ms) {
  return new Promise(resoleve => setTimeout(resoleve, ms));
}





