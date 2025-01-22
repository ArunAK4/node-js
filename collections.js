// Sets
const set = new Set([1, 2, 3]);
set.add(4)
console.log(set)
set.delete(4)
console.log(set)
console.log(set.has(1))

// Maps
const map = new Map([[1, "Apple"], [2, "Orange"], [3, "Banana"]])
console.log(map)
map.set(4, "Strawberry")
console.log(map)

console.log(map.get(1))
map.delete(4)
console.log(map)