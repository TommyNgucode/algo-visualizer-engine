// Simple runner: takes a generator (algorithm) and returns events
export function runner(generator) {
    const events = []

    // iterator loop, repeatedly calls .next()
    for (const event of generator) {
        events.push(event)
    }
    return events
}