const getData = async (url, times) => {
  try {
    let response = await fetch(url);
    let result = await response.json();
    if (!response.ok) {
      throw new Error(response.status);
    } else {
      console.log(result[0]);
    }
  } catch (err) {
    for (let i = 1; i <= times; i++) {
      console.log("Not Found");
    }
  }
};

getData("https://jsonplaceholder.typicode.com/post", 3);
