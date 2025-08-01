const contacts = new Map();
contacts.set("Vishnu", {age: 25, email: "alice@mail.com", location: "Delhi"});
contacts.set("Duvva", {age: 30, email: "bob@mail.com", location: "Mumbai"});

function getContact(name) {
  return contacts.get(name) || "Not found";
}

console.log(getContact("Duvva"));
