const numbers = [1, 2, 2, 3, 4, 4, 5];
const unique = new Set(numbers);
const squares = new Map();

unique.forEach(n => squares.set(n, n * n));

console.log("Unique:", [...unique]);
console.log("Squares:");
squares.forEach((val, key) => console.log(key, "=>", val));
