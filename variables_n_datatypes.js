// datatypes in js

// string
let name = "sharan";
// boolean
let is_live = true;
// number
let year = 2001;
let amount = 12.45;

// Big int
let bigint = 1234556239263912734924924782148691264918247n;
// undefined
let x;
// null
let y = null;

console.log(bigint, typeof bigint) // bigint
console.log(typeof x) // undefined
console.log(y, typeof y) // null, object

// infinity
console.log(1/0);

// NaN
console.log("two" - 2);
console.log("a" * 2);
console.log("Type of NaN is :",typeof NaN) // type of NaN is number


// Variables
var a = "hello";
let b = true;
const z = 12345;

console.log(a + "!!", !b);

// Cannot change the value of const variable
try {
    z = 3
} catch {
    console.log("Error cached");
}

// Variable scope
// var is function scoped or hoisted
// let is block scoped
// const is also black scoped

