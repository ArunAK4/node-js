// In short terms generics are used to dynamically assign type of a function, class or interface
class DataStore {
  private items: number[] = [];

  addItem(x: number) {
    this.items.push(x);
    return this.items;
  }

  removeItem() {
    this.items.pop();
    return this.items;
  }
}

let D1 = new DataStore();

console.log(D1.addItem(5));
console.log(D1.addItem(10));
console.log(D1.removeItem());

// Support now i need to implement the same datastore for string means i need to
// implement new logic for string or in that case we can use generics
class genericDataStore<T> {
  private items: T[] = [];

  addItem(x: T) {
    this.items.push(x);
    return this.items;
  }

  removeItem() {
    this.items.pop();
    return this.items;
  }
}

let G1 = new genericDataStore<string>();

console.log(G1.addItem("T"));
console.log(G1.addItem("E"));
console.log(G1.removeItem());

let G2 = new genericDataStore<number[]>();

console.log(G2.addItem([1, 2]));
console.log(G2.addItem([2, 3]));

interface User {
  name: string;
  age: number;
}

let G3 = new genericDataStore<User>();

console.log(G3.addItem({ name: "Sharan", age: 23 }));
console.log(G3.addItem({ name: "David", age: 25 }));
