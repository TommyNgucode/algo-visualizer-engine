import { EventType } from "./type.js";

export function mapToAnimation(event) {
    switch (event.type) {
        case EventType.COMPARE:
            return  {
                action: 'compare',
                indices: event.indices,
                color: 'yellow',
                duration: 300,
            };
        
        case EventType.SWAP:
            return {
                action:'swap',
                indices: event.indices,
                duration: 400,
            }

        case EventType.MARK: 
            return {
                action: 'mark',
                index: event.index,
                duration: 200,
            }
        
        case EventType.DONE:
            return {
                action: "done"
            }
        
        default:
            return null    
    }
}