function reverseString(str) {
  let reverse = "";
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    reverse = element + reverse;
  }
  return reverse;
}
const string = "Hello bor, how are you?";
const reult = reverseString(string);
console.log(reult);
