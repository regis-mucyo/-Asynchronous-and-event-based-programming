// https://dummyjson.com/posts
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/todos/1

// Write a JavaScript function that fetches data from multiple
// APIs concurrently and returns a combined result using Promises and 'Promise.all()'

const handleData = () => {
  let apiUrls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3",
    "https://jsonplaceholder.typicode.com/todos/4",
    "https://jsonplaceholder.typicode.com/todos/5",
  ];
  let concurrently = apiUrls.map((api) =>
    fetch(api)
      .then((re) => {
        if (!re.ok) {
          throw new Error(`There is problem ${re.status}`);
        }
        return re.json();
      })
      .then((d) => `${d.id}--${d.title}`),
  );
  return Promise.all(concurrently);
};
handleData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
