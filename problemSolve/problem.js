// problem 1
var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

const f = createHelloWorld();
console.log(f());

// problem 2
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  return function () {
    // return (n = n + 1); //start 11 ->
    return n++; // start -> 10
  };
};

const counter = createCounter(10);
console.log(counter());
console.log(counter());
/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

// problem 3
/**
 * @param {string} val
 * @returns {object}
 */

let expect = function (val) {
  return {
    toBe: function (anotherVal) {
      if (val === anotherVal) {
        return true;
      } else {
        return new Error("Not Equal");
      }
    },
    notToBe: function (anotherVal) {
      if (val !== anotherVal) {
        return true;
      } else {
        return new Error("Equal");
      }
    },
  };
};
const result = expect(5);
console.log(result.toBe(5));
console.log(result.notToBe(null));

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
