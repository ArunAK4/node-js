"use strict";
let arr = [1, 2, 3, "Number"]; // type : (string | number)[]
// recommended is to keep one type for arrays
let arr1 = [];
arr1[0] = 1;
arr1[1] = 2;
console.log(arr1);
let arr2 = [["Hello"], ["world"], ["!!!"]];
let arr3 = [["1", 1], ["2", 2], ["3", 3]];
// Readonly arrays
const arr4 = [1, 2, 3];
console.log(arr4);
console.log(arr4.length);
// tuple
// tuples are fixed length array
// we need to define a type for each position of array
let pair = [2, 2];
console.log(pair); // pair: [number, number]
console.log(pair[0]); // (property) 0: number
// some examples
let coords = [
    [1, 2],
    [2, 3]
];
console.log(coords);
// Literals
let direction;
direction = 'North';
// direction = "east"; // raise error
// Enums
// Number type enums
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
    Size[Size["xLarge"] = 4] = "xLarge"; // 4
})(Size || (Size = {}));
let tShirt = 1;
console.log(tShirt);
// String type enums
var Direct;
(function (Direct) {
    Direct["North"] = "North";
    Direct["South"] = "South";
    Direct["East"] = "East";
    Direct["West"] = "West";
})(Direct || (Direct = {}));
let currentDir = Direct.North;
console.log(currentDir); // "North"
//# sourceMappingURL=object_types.js.map