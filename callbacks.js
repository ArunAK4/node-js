// Functions are first class objects in JS
// Its is also functional programming paradigm
// Callback functions


function greet(name) {
    console.log("Hi " + name + "!");
}

function greetSharan(greetfn) {
    name = "Sharan";
    greetfn(name);
}

// Higher order function
greetSharan(greet);

// Synchronous Callback
// Callback functions like map, filter, reduce and other built-in callbacks

// Asynchronous Callback
// Callback functions like fs, setTimeout, setInterval