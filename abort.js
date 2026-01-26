const signal = AbortSignal.timeout(10);
const url = "https://jsonplaceholder.typicode.com/todos/1";
const fetchData = async () => {
  try {
    const response = await fetch(url, { signal });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    if (error.name === "TimeoutError") {
      console.log("The abort is done by me!");
    }
  }
};

fetchData();
