function distributeShirts(shirts, bags) {
  const shirtsEveryBag = Math.floor(shirts / bags);

  const fillUpBags = Array(bags).fill(shirtsEveryBag);
  const extraShirts = shirts % bags;

  for (let i = 0; i < extraShirts; i++) {
    fillUpBags[i]++;
  }

  return fillUpBags;
}

const test1 = distributeShirts(100, 10);
const test2 = distributeShirts(107, 10);
const test3 = distributeShirts(99, 10);
const test4 = distributeShirts(50, 5);

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
