// Class Basic Syntax
class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const pt = new Point(2, 3);
console.log(pt);

// Abstract Classes
abstract class Animal {
  abstract makeSound(): void;

  move(): void {
    console.log("moving...");
  }
}

// const animal = new Animal() // Cannot create an instance of an abstract class

class Dog extends Animal {
  makeSound(): void {
    console.log("bark");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meow Meow");
  }
}

const d1 = new Dog();
d1.move();
d1.makeSound();

const c1 = new Cat();
c1.move();
c1.makeSound();

// Static Variables and Methods in Classes
class Person {
  static count = 0;
  name: string;

  constructor(name: string) {
    this.name = name;
    Person.addCount();
  }

  static addCount() {
    Person.count++;
  }
}

let P1 = new Person("Sharan");
console.log(P1.name, Person.count);

let P2 = new Person("David");
console.log(P2.name, Person.count);
