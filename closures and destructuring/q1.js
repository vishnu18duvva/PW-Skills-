function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(`Button clicked ${count} times`);
    };
}

// Example usage
const counter = createCounter();
counter(); // Button clicked 1 times
counter(); // Button clicked 2 times
counter(); // Button clicked 3 times
