function displayInfo(name, role) {
  console.log(`${name} is a ${role}`);
}

displayInfo.call(null, "Vishnu", "Developer");
displayInfo.apply(null, ["Duvva", "Designer"]);

const greet = {
  message: "Welcome!",
  sayHello: function() {
    console.log(this.message);
  }
};

const boundGreet = greet.sayHello.bind(greet);
boundGreet();
