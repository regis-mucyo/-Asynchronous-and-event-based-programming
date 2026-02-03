// Create a function called createAlarm that generates a wake-up message
// for a person after a specified time delay. This function should accept
// two parameters: the person's name and the delay time in seconds.
// The function should return a promise that resolves with the
// wake-up message (e.g., Wake up person), but if the delay is less than 2 seconds,
// the promise should be immediately rejected with an error message stating Delay is not sufficient.

const createAlarm = (name, time) => {
  return new Promise((resolve, reject) => {
    if (time < 2000) {
      reject(new Error("Delay is not sufficient!"));
    }
    setTimeout(() => resolve(`${name}, wake up please!`), time);
  });
};
createAlarm("Regis", 4000)
  .then((res) => console.log(res))
  .catch((error) => console.log(error.message));
