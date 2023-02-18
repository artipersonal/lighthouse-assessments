const sayHello = function () {
  console.log("Hello, world");
}

sayHello();

const sayHello2 = function (name) {
  console.log("Hello, " + name);
}
sayHello2("Caliban");
sayHello2("Miranda");
sayHello2("Ferdinand");

const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John');

const returnSayHello = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);