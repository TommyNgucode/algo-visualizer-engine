
import { EventType } from "../../core/type.js"

// generator stops and execute yields and resumes
export function* bubbleSort(arr) {
  const n = [...arr].length

  for (let i = 0; i < n; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {

      // yield compare
      yield {
        type: EventType.COMPARE,
        indices: [j, j + 1]
      }
      if (arr[j] > arr[j + 1]) {
        // yield swap
        yield {
          type: EventType.SWAP,
          indices: [j, j + 1]
        }

        // Swap arr[j] and arr[j + 1]
        let temp = arr[j];
        arr[j] = arr[j + 1]
        arr[j + 1] = temp

        swapped = true
      }
    }


    // // No swaps occur, then break
    // if (!swapped) {
    //   console.log(arr[i])
    //   for (let k = 0; k < n - i; k++) {
    //     yield {
    //       type: EventType.MARK,
    //       index: k
    //     }
    //   }
    //   break
    // }
    // else {
      // yield marked sorted element
      yield {
        type: EventType.MARK,
        index: n - i - 1 // last index = latest sorted 
      }
    // }
  }

  // yield done
  yield {
    type: EventType.DONE
  }

}
