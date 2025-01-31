"use strict";
var _a;
const p1 = {
    name: "Sharan AJ",
    age: 23,
    hello: function () {
        console.log(this.message);
    }
};
p1.message = "Hello TypeScript";
console.log(p1.name, p1.age);
(_a = p1.hello) === null || _a === void 0 ? void 0 : _a.call(p1);
let e1 = {
    name: "Sharan AJ",
    age: 24,
    empID: 1442
};
console.log(e1.age, e1.empID, e1.name);
//# sourceMappingURL=interface.js.map