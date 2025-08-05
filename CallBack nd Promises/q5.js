function multiplyWithCallback(numbers, callback) {
  const result = numbers.map(num => num * 2);
  callback(result);
}

multiplyWithCallback([1, 2, 3], (res) => {
  console.log("Doubled array:", res); // Output: [2, 4, 6]
});
