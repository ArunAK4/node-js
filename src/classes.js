"use strict";
// Class Basic Syntax
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const pt = new Point(2, 3);
console.log(pt);
// Abstract Classes
class Animal {
    move() {
        console.log("moving...");
    }
}
// const animal = new Animal() // Cannot create an instance of an abstract class
class Dog extends Animal {
    makeSound() {
        console.log("bark");
    }
}
class Cat extends Animal {
    makeSound() {
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
    constructor(name) {
        this.name = name;
        Person.addCount();
    }
    static addCount() {
        Person.count++;
    }
}
Person.count = 0;
let P1 = new Person("Sharan");
console.log(P1.name, Person.count);
let P2 = new Person("David");
console.log(P2.name, Person.count);
//# sourceMappingURL=classes.js.map