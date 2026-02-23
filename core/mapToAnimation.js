import { EventType } from "./type.js";

export function mapToAnimation(event) {
    switch (event.type) {
        case EventType.COMPARE:
            return {
                action: "compare",
                indices: event.indices,
                color: "yellow",
                duration: 300
            }
        case EventType.MARK:
            return { 
                action: 'mark', 
                index: event.index, 
                duration: 200, 
            }

        // TODO: add visual indiactors
        // case EventType.MERGE:
        // case EventType.OVERWRITE:
        // case EventType.RANGE:

        case EventType.OVERWRITE:
            return {
                action: 'overwrite',
                indices: event.indices,
                value: event.value,
                duration: 400
            }
        
        case EventType.SWAP:
             return {
                action: "swap",
                indices: event.indices,
                duration: 400
            }

        case EventType.SORTED:
            return {
                action: "markSorted",
                indices: event.indices,
                color: "green",
                duration: 250
            }

        case EventType.DONE:
            return {
                action: "done"
            }

        default:
            throw new Error(`Unkown event type: ${event.type}`)
            
    }
}