// modules in typescript
// import and export (external module)

export function addNums(a: number, b: number): number {
  return x + y;
}

// import { addNums } from "./modules.ts"

function subNums(a: number, b: number): number {
  return x - y;
}

export default subNums;

// import XXXX from "./modules.ts"
// we can import the method subNums with any variable name

// Namespaces (internal modules) these are rarely used
namespace Utils {
  export class Person {}

  export function func1() {}

  export const NUMBER = 1
}

const num = Utils.NUMBER
