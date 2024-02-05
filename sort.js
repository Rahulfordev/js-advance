/* 
Ascending ----> smaller to larger: [2, 3, 4, 6, 7, 8]
Descending --> larger to smaller:  [8, 7, 6, 4, 3, 2]
*/
const numbers = [4, 7, 12, 8, 43, 6, 1];
// const numbers_asc = numbers.sort() // not working
const numbers_asc = [...numbers].sort((a, b) => a - b);
const numbers_dsc = [...numbers].sort((a, b) => b - a);

console.log(numbers_asc);
console.log(numbers_dsc);
