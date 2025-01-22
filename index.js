// Javascript Basics

const prompt = require("prompt-sync")();
console.log("node js training");

const name = prompt("What is your name? ");
const password = prompt.hide("password: ");
console.log(`Hello ${name}!`);

if(password === "12345") {
    console.log("Congrats, You password is right!");
} else {
    console.warn("wrong password, please try again!");
}