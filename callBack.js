// function funcOne(name, callback) {
//   console.log("gum theke uth", name);
//   return callback(name);
// }

// function funcTwo(name, callback) {
//   console.log("Namaj por", name);
//   callback(name);
// }

// function funcThree(name, callback) {
//   console.log("porte bos", name);
//   callback(name);
// }

// function funcFour(name) {
//   console.log("khate ai", name);
// }

// funcOne("Rahul", (name) => {
//   funcTwo(name, () => {
//     funcThree(name, () => {
//       funcFour(name);
//     });
//   });
// });

// es6
function funcOne(name) {
  console.log("gum theke uth", name);

  return new Promise((res, rej) => {
    res(name);
  });
}

function funcTwo(name) {
  console.log("Namaj por", name);
  return new Promise((res, rej) => {
    res(name);
  });
}

function funcThree(name) {
  console.log("porte bos", name);
  return new Promise((res, rej) => {
    res(name);
  });
}

function funcFour(name) {
  console.log("khate ai", name);
  return new Promise((res, rej) => {
    res(name);
  });
}

funcOne("Rahul")
  .then((res) => funcTwo(res))
  .then((res) => funcThree(res))
  .then((res) => funcFour(res));
