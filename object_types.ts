let arr = [1, 2, 3, "Number"]; // type : (string | number)[]

// recommended is to keep one type for arrays
let arr1: number[] = [];

arr1[0] = 1;
arr1[1] = 2;

console.log(arr1);

let arr2 = [["Hello"], ["world"], ["!!!"]];
let arr3 = [["1", 1], ["2", 2], ["3", 3]];

// Readonly arrays

const arr4: readonly number[] = [1, 2, 3];

console.log(arr4);
console.log(arr4.length);


// tuple
// tuples are fixed length array
// we need to define a type for each position of array
let pair: [number, number] = [2, 2];
console.log(pair) // pair: [number, number]
console.log(pair[0]) // (property) 0: number

// some examples
let coords: [number, number][] = [
    [1, 2],
    [2, 3]
]

console.log(coords);

// Literals
let direction: "North" | "South" | "East" | "West";

direction = 'North';
// direction = "east"; // raise error

// Enums
// Number type enums
enum Size {
    Small = 1, // 1
    Medium, // 2
    Large, // 3
    xLarge // 4
}

let tShirt: Size = 1;

console.log(tShirt);

// String type enums
enum Direct {
    North = "North",
    South = "South",
    East = "East",
    West = "West"
}
let currentDir = Direct.North
console.log(currentDir); // "North"



