const person1 = { name: "Rahul", age: 28 };
const person2 = { name: "Neha", age: 24 };

function introduce() {
  console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
}

introduce.call(person2);
