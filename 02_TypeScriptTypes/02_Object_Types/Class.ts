
// 2️⃣ Class:- In TypeScript, classes provide a way to define blueprints for creating objects that have similar properties and methods. A class is essentially a blueprint for creating objects that share the same characteristics and behaviors.

//↪️ Example: 1


class Person {
    private name: string;
    private age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  }

  const person = new Person('Sumit', 20);
  person.greet(); // Output: "Hello, my name is Sumit and I'm 20 years old."
  
  