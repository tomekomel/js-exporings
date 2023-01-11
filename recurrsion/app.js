function sum(elements) {
    if (elements.length === 0) {
        return 0;
    }
    if (elements.length === 1) {
        return elements[0];
    }

    return elements[0] + sum(elements.slice(1));
}

console.log('Result: ' + sum([2, 4, 6]));
console.log('Result: ' + sum([2]));
console.log('Result: ' + sum([]));
