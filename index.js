// 9 Promise Tricky Questions

// Question 1 : Handling Errors

var p = new Promise((resolve, reject) => {
  reject(Error("The Fails!"));
});
p.catch((error) => console.log(error.message));
p.catch((error) => console.log(error.message));

// What will the output be for above the above code?

// Question 2 : Handling Errors

var p = new Promise((resolve, reject) => {
  return Promise.reject(Error("The Fails!"));
});
p.catch((error) => console.log(error.message));
p.catch((error) => console.log(error.message));

// What will the output be for the above code
