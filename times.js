// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails
async function getData(url, times) {
  let retries = 0;

  while (retries < times) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      retries++;
      console.log(`Request failed. Retrying (${retries}/${times})...`);

      if (retries === times) {
        console.log(`Failed after ${times} retries: ${error.message}`);
      }
    }
  }
}

getData(`https://jsonplaceholder.typicode.com/posts`, 3);
