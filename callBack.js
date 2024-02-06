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

// funcOne("Rahul")
//   .then((res) => funcTwo(res))
//   .then((res) => funcThree(res))
//   .then((res) => funcFour(res));

// conditional callback
const person = {
  name: "Rahul Ali",
  age: 10,
  email: "rahul@gmail.com",
};

function personData(person, cb) {
  console.log("person", person.name, "age", person.age);
  if (person.age >= 18) {
    cb(person.email);
  } else {
    console.log("you are too little...");
  }
}

personData(person, (email) => {
  console.log("email", email);
});

function printData(data, cb1, cb2) {
  console.log(data);
  cb1(data);
  cb2(data);
}

printData(
  "This is awesome Book.",
  (data) => {
    const data1 = data.toUpperCase();
    console.log(data1);
  },
  (data) => {
    const data2 = data.toLowerCase();
    console.log(data2);
  }
);
