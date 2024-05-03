var nameOfPerson = "max";
console.log(nameOfPerson);

var secondName = nameOfPerson;
console.log(secondName);

nameOfPerson = "chris";
console.log(secondName);
console.log(nameOfPerson);

console.log("\n");
var obj = {
  age: 22,
  name: "Ali",
  hobbies: ["reading", "coding"],
};

console.log(obj);

var obj1 = obj;
console.log(obj1);

obj.name = 43;

console.log(obj1);
