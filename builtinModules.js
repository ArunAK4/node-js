// Imp Builtin Modules
// path
// events
// fs
// stream
// http

// Path Module
const path = require('path'); // require('node:path');

console.log(path);
console.log(__dirname);
console.log(__filename.split('/').pop());

console.log(path.basename(__dirname));
console.log(path.basename(__filename));

console.log(path.extname(__filename));

console.log(path.parse(__filename));

console.log(path.join('folder_name', 'index.html'));

console.log(path.join(__dirname, 'data.json'));

// Events Module
// This allows us to run non blocking code, the events will be triggered based
// on the emitter.
const EventEmitter = require('node:events');

const emitter = new EventEmitter();

emitter.on("order-burger", (size) => {
    console.log(`Your Order is Successful, We are preparing ${size} burger`);
})

emitter.on("order-burger", (size) => {
    if(size === "large") {
        console.log("You have received an offer!!");
    }
})

emitter.emit("order-burger", "large");

// Buffers
const buffer = new Buffer.from("Sharan");

console.log(buffer)
console.log(buffer.toString()); // Sharan
console.log(buffer.toJSON());

