// Getting Data Using GET Method in XHR
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let data = JSON.parse(xhr.responseText);
    console.log("Title:", data.title);
    console.log("Completed:", data.completed);
  }
};
xhr.send();

// Posting Data using POST Method :"https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
xhr.setRequestHeader("Content-Type", "application/json:charset=UTF-8");
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 201) {
    console.log("Data Sent:", JSON.parse(xhr.responseText));
  }
};

let sample = {
  title: "Regis is learning XHR",
  body: "We are testing...",
  userId: 123,
};

xhr.send(JSON.stringify(sample));
