interface Person {
    name: string,
    age: number,
    message?: string
    hello?: () => void;
}

const p1: Person = {
    name: "Sharan AJ",
    age: 23,
    hello: function() {
        console.log(this.message);
    }
}

p1.message = "Hello TypeScript"

console.log(p1.name, p1.age)
p1.hello?.();

// Extending Interfaces
interface Exployee extends Person {
    empID: number
}

let e1: Exployee = {
    name: "Sharan AJ",
    age: 24,
    empID: 1442
}

console.log(e1.age, e1.empID, e1.name)
