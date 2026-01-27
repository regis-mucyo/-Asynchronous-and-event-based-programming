//  You are given a function that performs an asynchronous operation using a callback.

// Tasks

// Refactor the below function to return a **Promise** instead of using a callback.

// functionfetchUser(callback) {
// setTimeout(() => {
// const user = {id:1,name:'Adeline' }
// callback(null, user)
//   },1000)
// }

const fetchUser = () => {
  const user = { id: 1, name: "Adeline" };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user);
    }, 1000);
  });
};
fetchUser()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
