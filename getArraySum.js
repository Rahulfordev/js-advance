function getArraySum(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  return sum;
}

const number = [13, 23, 33, 43, 53];
console.log(getArraySum(number));
