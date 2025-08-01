const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort((a, b) => a - b);

let min = ages[0];
let max = ages[ages.length - 1];

let mid = Math.floor(ages.length / 2);
let median = (ages[mid - 1] + ages[mid]) / 2;

let sum = ages.reduce((acc, age) => acc + age, 0);
let average = sum / ages.length;

let range = max - min;

console.log("Sorted:", ages);
console.log("Min:", min, "Max:", max);
console.log("Median:", median);
console.log("Average:", average);
console.log("Range:", range);
console.log("|Min - Avg|:", Math.abs(min - average));
console.log("|Max - Avg|:", Math.abs(max - average));
console.log("Difference between Min and Max:", max - min);
