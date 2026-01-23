// Here is api https://jsonplaceholder.typicode.com/todos/1

const getData = (url)=>{
  return new Promise((resolve,reject)=>{
    fetch(url)
    .then(result=>result.json())
    .then(data=>resolve(data))
    .catch(error=>reject(error))
  })
}

getData("https://jsonplaceholder.typicode.com/todos/1")
.then(data=>console.log(data))
.catch(error=>console.log(error))