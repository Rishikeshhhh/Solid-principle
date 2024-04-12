// Instead of a single large interface, break it into smaller interfaces.
// For example:

class Printer {
  print() {
    // Default implementation for demonstration purposes.
    console.log("Printing...");
  }
}

class Scanner {
  scan() {
    // Default implementation for demonstration purposes.
    console.log("Scanning...");
  }
}

// New classes adhering to ISP
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

// Usage
const printer = new Printer();
const scanner = new Scanner();
const faxMachine = new FaxMachine();
const photocopier = new Photocopier();

printer.print(); // Outputs: Printing...
scanner.scan(); // Outputs: Scanning...
faxMachine.fax(); // Outputs: Faxing...
photocopier.photocopy(); // Outputs: Photocopying...
