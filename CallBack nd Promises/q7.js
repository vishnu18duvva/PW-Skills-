function fetchMultipleData(urls) {
  const promises = urls.map(url => fetch(url).then(res => res.json()));
  return Promise.all(promises);
}


const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3"
];

fetchMultipleData(urls).then(results => console.log(results));
