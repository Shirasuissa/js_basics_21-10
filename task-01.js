// Section 1: Variable Swap Without Temp
// Swap two string variables without using a third variable.
let a = "some string";
let b = "other string";

[a, b] = [b, a];

console.log("a =", a);
console.log("b =", b);