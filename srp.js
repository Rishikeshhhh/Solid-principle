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
    
  }
  const user1 = new User("Rishikesh", "rishikesh@example.com");
  const user2 = new User("Abc","abc@gmail.com");
  
  console.log("User's name:", user1.getName());
  console.log("User's email:", user1.getEmail());

  console.log("User's name:", user2.getName());
  console.log("User's email:", user2.getEmail());

  