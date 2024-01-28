function findSmallestNumber(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

// Example usage:
const numbers = [5, 7, 1, 5, 9, 5];
const smallestNumber = findSmallestNumber(numbers);
console.log("The smallest number is:", smallestNumber);
