const getData = async (url, times) => {
  let retries = 0;
  while (retries < times) {
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error(`something went wrong! ${response.status}`);
      }
      let result = await response.json();
      console.log(result);
    } catch (error) {
      retries++;
      console.log(`The system retry ${retries}/${times}`);
      if (retries === times) {
        console.log(`The all ${times} retries are failed, ${error.message}`);
      }
    }
  }
};
getData("https://jsonplaceholder.code.com/post", 3);
