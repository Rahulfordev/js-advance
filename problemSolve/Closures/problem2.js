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
