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
