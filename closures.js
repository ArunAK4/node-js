// Simple closure
function x() {
    let a=7;
    function y() {
        console.log(a);
    }
    y();
}
x();


function x2() {
    let b = 7;
    function y2() {
        console.log(b);
    }
    return y2;
}

let z = x2();
console.log(z);
z();