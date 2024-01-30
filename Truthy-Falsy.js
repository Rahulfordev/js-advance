/**
 * Falsy
 * false
 * 0, -0,
 * NaN,
 * ""
 * null,
 * undefiend
 *
 * Truthy
 * " "
 * [],
 * {}
 * "o"
 * "false"
 */

let x = 10;
let y = "10";

console.log(x < y); // true

let a = 20;
let b = "5";

console.log(a - b); // 15

let str = "Hello"; // truthy
let num = 0; // falsy

console.log(num || str); // truthy valu return korbe = "hello";

let value = "10" + 10;
value = true + "10"; // ture10
console.log(value); // 1010

let value1 = !null;
let value2 = !!undefined;

console.log(value1, value2); // true, false

let array = [1, 2, 3];
let result = array && array.length > 0;

console.log(result); // true

let obj = { key: "value" };
let objResult = obj && obj.key;

console.log(objResult); // value

let num1 = "5";
let num2 = 9;

console.log(num1 + num2); // 59

let value3 = 100 / "Apple";

console.log(value3); // NaN ={-,*,/}
