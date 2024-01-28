const speech = "I  am  a good person.";
let count = 0;
for (let i = 0; i < speech.length; i++) {
  const char = speech[i];
  if (char == " " && speech[i - 1] != " ") {
    count++;
  }
}
count++;
console.log(count);
