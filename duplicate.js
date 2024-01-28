const number = [1, 5, 3, 8, 7, 3, 5, 1]; // number
const userName = ["Rahul", "Rohim", "Rahul", "Korim", "Rohim", "Sabur"]; // string
let uniqueNumber = [];

for (let i = 0; i < userName.length; i++) {
  const element = userName[i];
  const index = uniqueNumber.indexOf(element);
  if (index == -1) {
    uniqueNumber.push(element);
  }
}
console.log(uniqueNumber);
