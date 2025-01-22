// Array declarations
const arr = [2, 3, 4, 5]
const arr2 = new Array(5)

console.log(arr, arr2)

const arr3 = Array.from("Text")
console.log(arr3)

// Accessing n modifying the elements
arr3[2] = "s"
console.log(arr3, arr3.length)

// Array methods
console.log(arr.push(6)) // returns the new length of the array
console.log(arr, arr.length)
console.log(arr.pop())
console.log(arr)

console.log(arr.shift())
console.log(arr)

console.log(arr.unshift(2)) // returns the new length of the array
console.log(arr)

arr3[0] = "t"
console.log(arr3.indexOf("t"))
console.log(arr3.lastIndexOf("t"))

console.log(arr3.includes("s")) // test includes 's'
const dup_arr = arr.concat(arr3)

console.log(dup_arr)

console.log(dup_arr.join(""))
console.log(dup_arr.slice(0, 3))
console.log(dup_arr.splice(0, 2))
console.log(dup_arr)

// Destructing and spread operator
let [x, y] = [2, 3]
console.log(x, y)

let [a, ...b] = [1, 2, 3, 4, 5]
console.log(a, b)

// creating a copy of another array
let new_arr = [...arr]
new_arr[0] = 1
console.log(new_arr, arr)

