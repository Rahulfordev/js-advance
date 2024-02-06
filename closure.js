function parentFun() {
  let a = 3;
  let b = 4;
  return function child() {
    let c = 5;
    console.log(a);
  };
}

let child = parentFun();
child();

const userName = "Khalid"; // this is closure

function getUser() {
  console.log("hello", userName);
}

getUser();
