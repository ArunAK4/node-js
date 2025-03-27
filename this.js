"use strict";
// This in global space

console.log(this); //* window object in browser in node js it is {} (module.exports)

// Inside a function

function myFunction() {
  console.log(this); //* global object
}
myFunction();

//* this in strict mode - (this substitution)
//* In non strict mode when the keyword is undefined it is replaced by global object
//* In strict mode the keyword is undefined as it is

function myFunction() {
  console.log(this); //* undefined
}
myFunction();

// this inside an object

const myObject = {
  name: "Sharan",
  //   this inside normal method
  method() {
    console.log(this);
  },
  x: function () {
    console.log(this);
  },
  //   This inside a arrow method
  y: () => {
    console.log(this);
  },
};
myObject.method(); //* myObject
myObject.x(); //* myObject
myObject.y(); //* window object in browser in node js it is {} (module.exports)

const x = () => {
  console.log(this);
};

x(); //* window object in browser in node js it is {} (module.exports)

// Call, Apply and Bind methods in JS

// Call Method
const Student = {
  name: "Sharan",
  printName() {
    console.log(this.name);
  },
};

const Student2 = {
  name: "David",
};
Student.printName(); //* Student
Student.printName.call(Student2); //* Student2

// Apply Method
//* This is similar to call method but the only difference
//*  is that the arguments are passed as an array.

const functionA = function (a, b, c) {
  console.log(a + b + c, this.name);
};

functionA.apply(Student, [1,2,3]); //* 6 Sharan

// Bind Method
//* The bind method is similar to the call method but the only difference
//* is that it returns a new function instead of calling the function.

Student2.sayHello = Student.printName.bind(Student2);

Student2.sayHello(); //* David
console.log(Student2)