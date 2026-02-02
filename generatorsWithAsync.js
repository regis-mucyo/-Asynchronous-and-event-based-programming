//"https://jsonplaceholder.typicode.com/todos/1";

function* fetchData() {
  const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = yield response.json();
  console.log(data);
}

function handleData(generator) {
  let finalData = generator();

  function getData(result) {
    let dataResult = finalData.next(result);
    if (dataResult.done) return;
    dataResult.value.then((res) => getData(res));
  }
  getData();
}
handleData(fetchData);
