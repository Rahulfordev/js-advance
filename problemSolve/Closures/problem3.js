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
