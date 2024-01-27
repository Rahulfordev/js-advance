//** way 1
var a = 10;
var b = 15;
// console.log("After swap a: " + a + " b: " + b);

var temp = a;
a = b;
b = temp;
// console.log("Before swap a: " + a + " b: " + b);

//** way 2
var x = 5;
var y = 7;

x = x + y;
y = x - y; // 5
x = x - y; // 7
// console.log("Before swap x: " + x + " y: " + y);

//** way 3
var p = 3;
var q = 5;

[p, q] = [q, p];
console.log("After swap p: " + p + " q: " + q);
