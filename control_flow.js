// looping flow
let a = 0
while(a <= 5) {
    console.log("Print!!");
    a++
}

let i = 0;
do {
  console.log( i );
  i++;
} while (i <= 3);

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    console.log(i);
}

// Switch
a = 2

switch(a) {
    case 0:
        console.log("A");
        break;
    case 1:
        console.log("B");
        break;
    case 2:
        console.log("C");
        break;
    default:
        console.log("Error");

}