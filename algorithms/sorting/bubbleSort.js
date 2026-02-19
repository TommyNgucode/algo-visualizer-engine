
import { EventType } from "../../core/type.js"

export function* bubbleSort(arr) {

  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length - i - 1; j++) {
      yield { type: EventType.COMPARE, indices: [j, j + 1] };
      if (arr[j] > arr[j + 1]) {
        yield { type: EventType.SWAP, indices: [j, j + 1] };
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }

    }

    yield { type: EventType.MARK, index: arr.length - i - 1, state: 'sorted' };

  }

  yield { type: EventType.DONE };
}
