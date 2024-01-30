const student = [
  { id: 1, name: "Sabbir" },
  { id: 2, name: "Faruk" },
  { id: 3, name: "Rakib" },
  { id: 4, name: "Raju" },
];

let studentName = [];
for (let i = 0; i < student.length; i++) {
  const element = student[i].name;
  studentName.push(element);
}
// console.log(studentName);

const allName = student.map((n) => n.name);
// console.log(allName);
const allNameFilter = student.filter((n) => n.id > 2).map((n) => n.name);
console.log(allNameFilter);

function arguments(a, b, ...arg) {
  const allSum = arg.reduce((prev, curr) => prev + curr, 0);
  return a + b + allSum;
}

const sumResult = arguments(5, 10, 5, 5, 5);
console.log(sumResult);
