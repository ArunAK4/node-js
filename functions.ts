function add(x: number, y: number) {
  if (x === 0 || y === 0) {
    return "Invalid";
  } else {
    return x + y;
  }
}

let z = add(2, 3);
console.log(add(0, 2));
console.log(z);
// add("2", "3") // raises error

// Optional Parameter
function makeName(
  firstName: string,
  lastName: string,
  middleName?: string
): void {
  if (middleName) {
    console.log(`${firstName} ${middleName} ${lastName}`);
  } else {
    console.log(`${firstName} ${lastName}`);
  }
}

makeName("AJ", "Sharan");

// Function type
function callFunc(
  func: (x: number, y: number) => number | string,
  a: number,
  b: number
): void {
  let res = func(a, b);
  console.log("Func:", res);
}

callFunc(add, 10, 20);

// Advanced Function Types

