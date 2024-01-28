const largestNumber = (num1, num2, num3, num4) => {
  if (num1 > num2 && num1 > num3 && num1 > num4) {
    return num1;
  } else if (num2 > num1 && num2 > num3 && num2 > num4) {
    return num2;
  } else if (num3 > num1 && num3 > num2 && num3 > num4) {
    return num3;
  } else {
    return num4;
  }
};

const num1 = 100;
const num2 = 120;
const num3 = 80;
const num4 = 150;
console.log(largestNumber(num1, num2, num3, num4));
const largestNumberMax = Math.max(num1, num2, num3, num4); // using js mathod
console.log(largestNumberMax);
