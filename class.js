// Classes and OOPS

// Basic Syntax
class User {
  constructor(name) {
    this.name = name;
  }

  greet = () => {
    console.log(`Hello ${this.name}`);
  };

  // get name() {
  //     return this._name;
  // }

  // set name(value) {
  //     if (value.length < 4) {
  //       console.log("Name is too short.");
  //       return;
  //     }
  //     this._name = value;
  // }
}

const user = new User("Sharan");
user.greet();
console.log(user.name);

// Another way to create a class

// Declare a constructor function
function Person(name) {
  this.name = name;
}

// Arrow functions will not define the "this" properly
Person.prototype.greet = function () {
  console.log("Hi", this.name);
};

new Person("Sharan").greet();

// Inheritance
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit("Jerry");

rabbit.run(5);
console.log(rabbit.speed)
rabbit.stop();
console.log(rabbit.speed)

