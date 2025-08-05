function racePromises(promises) {
  return Promise.race(promises);
}
const p1 = new Promise(resolve => setTimeout(() => resolve("First"), 100));
const p2 = new Promise(resolve => setTimeout(() => resolve("Second"), 200));

racePromises([p1, p2]).then(result => console.log("Winner:", result));
