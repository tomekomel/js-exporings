function sum(elements) {
  if (elements.length === 0) {
    return 0;
  }
  if (elements.length === 1) {
    return elements[0];
  }

  return elements[0] + sum(elements.slice(1));
}

console.log("Result: " + sum([2, 4, 6]));
console.log("Result: " + sum([2]));
console.log("Result: " + sum([]));

function findTheBiggest(elements) {
  if (elements.length === 0) {
    return;
  }
  if (elements.length === 1) {
    return elements[0];
  }
  if (elements.length === 2) {
    return elements[0] > elements[1] ? elements[0] : elements[1];
  }

  return elements[0] > findTheBiggest(elements.slice(1))
    ? elements[0]
    : findTheBiggest(elements.slice(1));
}

console.log("Result: " + findTheBiggest([2, 4, 6, 5, 3]));
console.log("Result: " + findTheBiggest([2, 43, 6, 545, 3, 9090, 12]));
console.log("Result: " + findTheBiggest([7]));
