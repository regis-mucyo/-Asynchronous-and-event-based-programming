// Imagine you are developing a real-time news application, and you need to fetch posts from three
// different sources to provide users with the latest updates.

// The API endpoints for getting posts are:

// https://dummyjson.com/posts
// https://this-may-not-exist.com/posts
// https://jsonplaceholder.typicode.com/posts

// To ensure a seamless user experience, you are supposed to create
// a function called getFastPosts that fetches posts from these endpoints
// simultaneously (concurrently) and only presents data from the source that responds
// the quickest, while ignoring slower or potentially unreliable sources.

const getFastPosts = async () => {
  const apiUrls = [
    "https://dummyjson.com/posts",
    "https://this-may-not-exist.com/posts",
    "https://jsonplaceholder.typicode.com/posts",
  ];
  //   let fetching = apiUrls.map((res) =>
  //     fetch(res)
  //       .then((da) => {
  //         if (!res.ok) {
  //           throw new Error("Failed");
  //         }
  //         return da.json();
  //       })
  //       .catch((error) => error),
  //   );

  //   let final = await Promise.any(fetching);
  //   console.log(final);
  const promiseOne = fetch("https://dummyjson.com/posts");
  const promiseTwo = fetch("https://this-may-not-exist.com/posts");
  const promiseThree = fetch("https://jsonplaceholder.typicode.com/posts");

  const firstOne = Promise.race([promiseOne, promiseTwo, promiseThree]);
  console.log(promiseOne);
};
getFastPosts();
