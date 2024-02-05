/* 
Ascending ----> smaller to larger: [2, 3, 4, 6, 7, 8]
Descending --> larger to smaller:  [8, 7, 6, 4, 3, 2]
*/
const numbers = [4, 7, 12, 8, 43, 6, 1];
// const numbers_asc = numbers.sort() // not working
const numbers_asc = [...numbers].sort((a, b) => a - b);
const numbers_dsc = [...numbers].sort((a, b) => b - a);

// console.log(numbers_asc);
// console.log(numbers_dsc);

const person = [
  { name: "Md Rahul", age: 20 },
  { name: "Abir Azam", age: 24 },
  { name: "Johir Ali", age: 16 },
  { name: "Al hassan", age: 23 },
  { name: "Mr. Y", age: 22 },
];

// const personAge = person.sort((a, b) => a.age - b.age);
// console.log(personAge);

const personName = person.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else {
    return 0;
  }
});
console.log(personName);
