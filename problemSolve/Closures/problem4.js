/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let i = 0;
  return {
    increment: () => init + ++i,
    decrement: () => init + --i,
    reset: () => {
      i = 0;
      return init;
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

// way 2
// var createCounter = function (init) {
//   let count = init;

//   function increment() {
//     return (count += 1);
//   }

//   function decrement() {
//     return (count -= 1);
//   }

//   function reset() {
//     return (count = init);
//   }

//   return {
//     increment,
//     decrement,
//     reset,
//   };
// };

// let counter = createCounter(5);
// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.decrement());
