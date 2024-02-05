// let fibo = [0, 1];
// for (let i = 2; i <= 12; i++) {
//   fibo[i] = fibo[i - 1] + fibo[i - 2];
//   console.log(fibo[i], fibo[i - 1], fibo[i - 2]);
// }

// console.log(fibo);

// function fibonacchi(n) {
//   let fibo = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
//   }
//   return fibo;
// }
// const fiboResult = fibonacchi(12);
// console.log(fiboResult);

function fibonacchi(n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else {
    return fibonacchi(n - 1) + fibonacchi(n - 2);
  }
}

const recursiveWay = fibonacchi(12);
console.log(recursiveWay);
