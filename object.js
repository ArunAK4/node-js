const Person = {
    name: "Sharan AJ",
    age: 23,
    hello() {
        console.log(`Hello ${this.name}`)
    },
    career: {}
}

delete Person.career // to delete a property in an object
console.log(Person)
Person.hello()
console.log(Object.values(Person))
console.log(Object.keys(Person))

// For loop to iterate over objects
console.log("\n")
for (key in Person) {
    console.log(`${key}: ${Person[key]}`)
}

const obj = {
    arr: [1, 2, 3],
    gender: "Male"
}

const obj2 = {...Person, ...obj}

console.log(obj2)

// Object destructuring
const {name, age, gender} = obj2

console.log(name, age, gender)

// "this" keyword and its scoping

const obj3 = {
    name: "Sharan",
    greet: () => {
        console.log(`Hello ${this.name}`)
    }
}

obj3.greet() // Hello undefined
// arrow functions are anonymous function so the scope is global or 
// function scope its not the object level scope