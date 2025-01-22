// functions

function hello() {
    console.log("Hello!!!")
}

hello();

function add(a, b) {
    console.log(a+b);
}

add(2, 3);

function display(...a) {
    console.log(a);
}

display(2); // [2]
display(2, 3); // [2,3]

function add_two(a, b=0) {
    console.log(a+b)
}

add_two(2);
add_two(2, 3);

console.log(add_two) // [Function: add_two]
let add_num = add_two
add_num(5)

console.log(add_num(5)) // 5 and undefined


// Callback functions
function findTruth(exp, yes, no) {
    exp ? yes() : no()
}

function yes() {
    console.log("True");
}

function no() {
    console.log("False");
}

findTruth(2>3, yes, no);

// function expression vs declaration
// expression can be called only after the written
// but function declaration can be called at the beginning of the code

sayHi("John"); // Hello, John

function sayHi(name) {
  console.log( `Hello, ${name}` );
}

try {
    sayHello("John"); // error!
} catch(e) {
    console.log("Function error:", e.message)
}


let sayHello = function(name) {  // (*) no magic any more
  console.log( `Hello, ${name}` );
};

// Arrow Functions
let func = x => {
    console.log(x);
}
func(3);

let func2 = () => console.log("Hello");

func2();
// Arrow functions are not declared so it cannot be called.

// Map, Filter and Reduce Methods
const nums = [1, 2, 3, 4]

const double = nums.map((num) => num * 2);
// Map is used to iterate over the array and make changes to each element and it returns new array

console.log(nums, double)

const sum = nums.reduce((acc, num) => acc + num, 0)
// Reduce iterates over an array and accumulate all the values and return an result with the
// initial value too in the last argument
console.log(sum)

const odd_nums = nums.filter((nums) => nums % 2 !== 0)
// Filter iterate overs an array and return the set of values in another array with the condition
// applied in the callback method/fn

console.log(odd_nums)



