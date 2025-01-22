// Data types conversions

// String conversion
let value = 2;
let strValue = String(value); // "2"
console.log(value, strValue);

// Number conversion
let str = "123";
let num = Number(str); //123

console.log(str, num);

let str2 = "hello";
let num2 = Number(str2); //NaN

console.log(num2);

// Undefined conversion
let x;
console.log(String(x) === "undefined"); // true
console.log(Number(x)) // NaN
console.log(Boolean(x)) // false

// Boolean Conversion
console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false
console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false
console.log( Boolean(NaN) ); // false



