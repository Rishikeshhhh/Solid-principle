//SRP Principle
// User class
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getData() {
    return {
      name: this.name,
      email: this.email
    };
  }
}

//OCP Principle
// Shape class and its subclasses
class Shape {
  area() {
    throw new Error("This method should be overridden.");
  }
  volume() {
    throw new Error("This method should be overridden.");
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }
}

class Sphere extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  volume() {
    return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
  }
}

//LSP Principle
// Bird and its subclasses
class Bird {
  fly() {
    console.log("Bird is flying.");
  }
}

class Duck extends Bird {
  swim() {
    console.log("Duck is swimming.");
  }
}

class Penguin extends Bird {
  swim() {
    console.log("Penguin is swimming.");
  }

  fly() {
    console.log("Penguins cannot fly.");
  }
}

//ICP Principle
// Interfaces for Printer, Scanner, FaxMachine, and Photocopier
class Printer {
  print() {
    console.log("Printing...");
  }
}

class Scanner {
  scan() {
    console.log("Scanning...");
  }
}

class FaxMachine {
  fax() {
    console.log("Faxing...");
  }
}

class Photocopier {
  photocopy() {
    console.log("Photocopying...");
  }
}

//DIP Principle
// Database and UserSaver classes
class Database {
  save(data) {
    console.log("Saving data to database:", data);
  }
}

class UserSaver {
  constructor(database) {
    this.database = database;
  }

  saveUser(user) {
    const userData = user.getData();
    this.database.save(userData);
  }
}

// Usage
const user1 = new User("Rishikesh", "rishikesh@example.com");
const user2 = new User("Abc", "abc@gmail.com");

console.log("User 1's name:", user1.getName());
console.log("User 1's email:", user1.getEmail());

console.log("User 2's name:", user2.getName());
console.log("User 2's email:", user2.getEmail());

const square = new Square(5);
console.log("Area of the square:", square.area());

const sphere = new Sphere(6);
console.log("Volume of Sphere:", sphere.volume());

const duck = new Duck();
const penguin = new Penguin();

duck.fly();
duck.swim();

penguin.fly();
penguin.swim();

const printer = new Printer();
const scanner = new Scanner();
const faxMachine = new FaxMachine();
const photocopier = new Photocopier();

printer.print();
scanner.scan();
faxMachine.fax();
photocopier.photocopy();

const database = new Database();
const user = new User("Rishikesh", "rishikesh20032000@gmail.com");
const userSaver = new UserSaver(database);

userSaver.saveUser(user);
