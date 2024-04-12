// High-level modules should not depend on low-level modules.
// Instead, both should depend on abstractions.

class Database {
  save(data) {
    // Default implementation for demonstration purposes.
    console.log("Saving data to database:", data);
  }
}

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

  // Define a method to get user data
  getData() {
    return {
      name: this.name,
      email: this.email
    };
  }
}

// New class adhering to DIP
class UserSaver {
  constructor(database) {
    this.database = database;
  }

  saveUser(user) {
    // Assume user has a method to get data to save
    const userData = user.getData();
    this.database.save(userData);
  }
}

// Usage
const database = new Database();
const user = new User("Rishikesh", "rishikesh20032000@gmail.com");
const userSaver = new UserSaver(database);

userSaver.saveUser(user);
