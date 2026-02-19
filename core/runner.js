// Simple runner: takes a generator and returns events
export function runAlgorithm(generator) {
    const events = [];
    for (const event of generator) {
        events.push(event);
    }

    return events;
}