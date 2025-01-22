// Asynchronous Javascript
// Promises Basics

const myPromise = new Promise((resolve, reject) => {
    if(true) {
        resolve("good");
    } else {
        reject("error");
    }
});

myPromise.then((value) => {
    console.log(value);
}).catch((value) => {
    console.log(value);
}).finally(() => {
    console.log("Runs always!!!");
})