const fs = require('fs');

fs.writeFile("output.txt", "This is Node First Program!!!", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("File Created Successfully")
    }
})

