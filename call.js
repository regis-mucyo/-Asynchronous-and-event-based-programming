const call = (callback) => {
    setTimeout(callback,3000)
};

const callback = () => {
    console.log("Hello");
};

call(callback);