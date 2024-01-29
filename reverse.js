function reverseString(str) {
  let reverse = "";
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    reverse = element + reverse;
  }
  return reverse;
}
const string = "Hello bor, how are you?";
const number = [7, 6, 5, 4, 3, 2, 1];
const reult = reverseString(number);
// console.log(reult);

const numbers = [1, 2, 3, 4, 5, 6, 7];

// using for of loop
const reverse = [];
for (const num of numbers) {
  reverse.unshift(num);
}
// console.log(reverse);

// using for loop
const reverseFor = [];

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  reverseFor.unshift(element);
}
console.log(reverseFor);

// using for loop with push
const rev_rev_numbers = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  const num = numbers[i];
  // console.log(num);
  rev_rev_numbers.push(num);
}
// console.log(rev_rev_numbers);
