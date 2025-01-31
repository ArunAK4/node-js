// Type Aliases
// These are the combination of combining different types to new type

type Coordinates = [number, number];

let C1: Coordinates = [2, 3];
let C2: Coordinates = [3, 4];

const cords: Coordinates[] = [C1, C2];

console.log(cords)

// We create create object type also using type aliases,
// but better approach is to use Interface for that
// We can't implement or extend a type using type aliases

// Union and Intersection
// | = Union operator

type orType = number | string

let z1: orType = 1;
let z2: orType = "Test";

console.log(z1 + z2);

// & = Intersection Operator
interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}

type Employee = Identity & Contact;

let E1: Employee = {
    id: 1,
    name: "Sharan",
    email: "",
    phone: ""
}

console.log(E1);

// Type Guards
// typeof to check the type of the variable
// instanceof to check the object belongs to particular instance


