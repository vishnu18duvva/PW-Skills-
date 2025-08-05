function fetchUserDataAndPosts(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
      return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
          return { user, posts };
        });
    });
}

fetchUserDataAndPosts(1).then(data => console.log(data));
