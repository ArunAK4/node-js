// Asynchronous Javascript
// Promises Basics

// const myPromise = new Promise((resolve, reject) => {
//     if(true) {
//         resolve("good");
//     } else {
//         reject("error");
//     }
// });

// myPromise.then((value) => {
//     console.log(value);
// }).catch((value) => {
//     console.log(value);
// }).finally(() => {
//     console.log("Runs always!!!");
// })

// console.log("Start");

// setTimeout(() => {
//   console.log("Callback 1");
// }, 1000);

// console.log("End");

// setTimeout(() => {
//   console.log("Callback 2");
// }, 1000);

// let count = 0;
// let interval = setInterval(() => {
//     count++;
//     console.log(count);
//     if (count === 5) {
//         console.log("Done");
//         clearInterval(interval);
//     }
// }, 1000);

// Example on Promises

const cart = ["tomato", "apple", "banana", "mango"];

function createOrder(cart) {
  return new Promise((resolve, reject) => {
    if (cart.length > 0) {
      resolve({ orderID: "1234", items: cart, message: "Order Created" });
    } else {
      reject(new Error("Cart is Empty"));
    }
  });
}

console.log("Start");

createOrder(cart)
  .then((data) => {
    console.log(data.message, data.orderID);
  })
  .catch((error) => {
    console.log("Error: ", error.message);
  })
  .finally(() => {
    console.log("Runs always!!! 1st");
  });

createOrder([])
  .then((data) => {
    console.log(data.message, data.orderID);
  })
  .catch((error) => console.log("Error: ", error.message))
  .finally(() => {
    console.log("Runs always!!! 2nd");
  });

console.log("End");


// Async Await
//* this function always returns a promise
async function a() {
    return "Hello";
}

a().then((value) => console.log(value));

// using await keyword
const p = new Promise((resolve, reject) => resolve("Resolved Promise value"));

//* await can only be used inside an async function
//* await pauses the execution of the function until the promise is resolved
async function b() {
    const value = await p;
    console.log(value);
    console.log("End!!");
}

async function c() {
    p.then((value) => console.log(value));
    console.log("End!!!");
}

b();
c();