const fs = require('node:fs');

const content = fs.readFileSync('./output.txt', "utf-8");
console.log(content.toString())
console.log(content) // both return same as we have given character code "utf-8"

// This way we can read the file asynchronously
fs.readFile("./output.txt", "utf-8", (error, data) => {
    if (error) {
        console.error(error)
    } else {
        console.log(data)
    }
})

fs.writeFileSync("./greet.txt", "Hello !!!");

// flag a is for append mode from a existing file
fs.writeFile("./greet.txt", " Sharan", { flag: "a" }, (error) => {
    if(error) {
        console.error(error);
    } else {
        console.log("File written successfully!");
    }
})
