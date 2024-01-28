const number = [1, 5, 3, 8, 7, 3, 5, 1];
let uniqueNumber = [];

for (let i = 0; i < number.length; i++) {
  const element = number[i];
  const index = uniqueNumber.indexOf(element);
  if (index == -1) {
    uniqueNumber.push(element);
  }
}
console.log(uniqueNumber);
