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

// New subclass that adheres to LSP
class Penguin extends Bird {
  swim() {
    console.log("Penguin is swimming.");
  }
  
  // Penguins cannot fly, so overriding fly method to reflect that
  fly() {
    console.log("Penguins cannot fly.");
  }
}

// Usage
const duck = new Duck();
const penguin = new Penguin();

duck.fly(); // Outputs: Bird is flying.
duck.swim(); // Outputs: Duck is swimming.

penguin.fly(); // Outputs: Penguins cannot fly.
penguin.swim(); // Outputs: Penguin is swimming.
