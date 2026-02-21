// Write a JavaScript function that fetches data from an API and
// cancels the request if it takes longer than a specified time.

// api: https://jsonplaceholder.typicode.com/todos/1

const fetchData = async (url, timeOut) => {
  try {
    let controller = new AbortController();
    let signal = controller.signal;
    let id = setTimeout(() => controller.abort(), timeOut);
    let response = await fetch(url, { signal });
    if (!response.ok) {
      throw new Error(`Something went wrong, ${response.status}`);
    }

    let result = await response.json();
    console.log(result);
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Request timed out");
    } else {
      console.error(error.message);
    }
  } finally {
    clearTimeout(id);
  }
};
fetchData("https://jsonplaceholder.typicode.com/todos/1", 3000);
