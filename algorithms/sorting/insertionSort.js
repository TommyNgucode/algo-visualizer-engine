import { EventType } from "../../core/type.js"

export function* insertionSort(arr){

    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]
        let j = i - 1;


        while (j >= 0 && arr[j] > key) {

            yield {
                action: EventType.COMPARE,
                indices: [j, j + 1]
            }

            arr[j + 1] = arr[j]
            

            yield {
                action: EventType.OVERWRITE,
                indices: [j + 1],
                value: arr[j]
            }

            j = j - 1
        }
        arr[j + 1] = key
        
        yield {
                action: EventType.OVERWRITE,
                indices: [j + 1],
                value: arr[j]
            }
        // yield marked sorted element
        yield {
            type: EventType.MARK,
            index: i // last index = latest sorted 
        }

    }   
 

    yield {
        type: EventType.DONE
    }

}