"use strict";
function add(x, y) {
    if (x === 0 || y === 0) {
        return "Invalid";
    }
    else {
        return x + y;
    }
}
let z = add(2, 3);
console.log(add(0, 2));
console.log(z);
// add("2", "3") // raises error
// Optional Parameter
function makeName(firstName, lastName, middleName) {
    if (middleName) {
        console.log(`${firstName} ${middleName} ${lastName}`);
    }
    else {
        console.log(`${firstName} ${lastName}`);
    }
}
makeName("AJ", "Sharan");
// Function type
function callFunc(func, a, b) {
    let res = func(a, b);
    console.log("Func:", res);
}
callFunc(add, 10, 20);
//# sourceMappingURL=functions.js.map