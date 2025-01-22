// Basic Operations
// with numbers
console.log(2 + 3, 2-3, 2*3, 3/2, 1/0, 5%2, 3**2)

// with strings
console.log("2" + 3) // concat
console.log("2" + "3") // concat
console.log("2" - "3") // number coercion returns -1
console.log("100" / "5") // 20
console.log("string" - "another string") // NaN
console.log(+"100" - +"5") // 95
console.log(+"str") // NaN

// No effect on numbers
let x = 1;
console.log( +x ); // 1

let y = -2;
console.log( +y ); // -2

// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   // 0

// Assignment operator

let a, b, c;

a = b = c = 2 + 2;

console.log( a ); // 4
console.log( b ); // 4
console.log( c ); // 4

// Modify same variable
console.log(a += 1) // 5
console.log(a -= 2) // 3

console.log(a++) // 3
console.log(a) // 4
console.log(a--) // 4
console.log(a) // 3

console.log(++a) // 4
console.log(--a) // 3

// Comma operator
let p = (1 + 2, 3 + 4);
console.log(p) // 7 = 3+4
// Usage
let res = (w = 2, r = 3, w*r)
console.log(res) // 6

// Comparisons
console.log(2 > 3) // false
console.log(1 == 1) // true
console.log(1 === 1) // true

console.log("" > "th") // false
console.log("th" > "") // true
console.log("1" == 1) // true
console.log("" == 0) // true
console.log("" == "0") // false
console.log(NaN > 123, NaN < 123, NaN == 123,"abc" == 123) // false

console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true

// Strict Equality
console.log( 0 == false ); // true
console.log( '' == false ); // true
console.log( 0 === false ); // false

// weird parts
console.log( null > 0 );  // false
console.log( null == 0 ); // false
console.log( null >= 0 ); // true

console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false
console.log(undefined == null); // true
console.log(undefined === null); // false

// conditional branching - ternary operator
console.log(1 < 2 ? 1 : 2) // 1

// Logical operators
console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false

console.log(0 || 1); // 1
console.log(0 || 1 || 2); // 1 first truthy value
console.log(null || undefined || 1); // 1
console.log(undefined || null || 0); // 0

console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false

console.log(0 && 1) // 0
console.log(0 && "" && 2) // 0
console.log("" && 0 && null) // ""

// Nullish coalescing operator '??'
// a !== null && a!== undefined ? a : b
// '??' returns first defined value only (null / undefined) are undefined values
console.log(2 ?? 3) // 2
console.log(null  ?? 3) // 3
console.log(0 ?? 3) // 0 ?? one returns first defined value
console.log(0 || 3) // 3 OR returns first truthy value
console.log(undefined ?? 3) // 3
console.log(null ?? 2 ?? 3) // 2
console.log(NaN ?? 3) // NaN, since NaN is a defined value