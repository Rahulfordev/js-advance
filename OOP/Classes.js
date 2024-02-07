class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  print() {
    console.log(`name: ${this.name} and age: ${this.age}`);
  }
}

class Student extends Person {
  constructor(name, age, id) {
    super(name, age);
    this.id = id;
  }

  print() {
    super.print();
    console.log(`id: ${this.id}`);
  }
}

const p1 = new Student("Khalid", 24, 11233);
p1.print();
