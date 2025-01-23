// Common JS modules

// console.log(module);

// Creating and importing a module
const math = require('./math');

result = math.addNums(2, 3, 5);
console.log(result);

// ES Modules
// We need to use 'mjs' extension or we can setup type: module property in package.json to work,
// if we enable esm old CommonJS will not work.
// import { add, subtract } from './math2.mjs'

// console.log(add(5,5))
// console.log(subtract(5,5))
