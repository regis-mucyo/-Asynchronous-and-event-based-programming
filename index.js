// 9 Promise Tricky Questions

// Question 1 : Handling Errors

var p = new Promise((resolve, reject) => {
  reject(Error("The Fails!"));
});
p.catch((error) => console.log(error.message)); // The Fails!
p.catch((error) => console.log(error.message)); // The Fails!

// What will the output be for above the above code?

// The output will be "The Fails!" Twice

// Question 2 : Handling Errors

var p = new Promise((resolve, reject) => {
  return Promise.reject(Error("The Fails!"));
});
p.catch((error) => console.log(error.message));
p.catch((error) => console.log(error.message));

// What will the output be for the above code

// The output be error called "unhandledPromise" since we are not returning the resolve or reject

// Question 3 : Handling Errors

var p = new Promise((resolve, reject) => {
  reject(Error("The Fails!"));
})
  .catch((error) => console.log(error))
  .then((error) => console.log(error));

// What will the output be for the above code

// The output will be 'The Fails!' and undefined, it is
// because we are not returning anything from catch

// Question 4 : Handling Errors

var p = new Promise((resolve, reject) => {
  reject(Error("The Fails!"));
})
  .catch((error) => console.log(error.message))
  .catch((error) => console.log(error.message));

// What will the output be for the above code

// The output will be error because chaining catch is not possible
