// Any type
let any_type: any = 1;
any_type = 1;
any_type = [1, 2, 3];
any_type = "String";
// Everything works as javascript variable

// unknown type
let variable: unknown = 1;

variable = 1;
variable = "String";

if (typeof variable === "string") {
    console.log(variable.length);
} else if(typeof variable === "number") {
    console.log(variable + 1);
}
// This is much safer method to work

// Type casting using cast
variable = 1;
let result = (variable as number) + 1;
console.log(result);

variable = "String";
let result1 = (variable as string) + " type";
console.log(result1)

