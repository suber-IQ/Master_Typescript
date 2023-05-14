// 1️⃣ Type Compatibility :- TypeScript uses structural typing to determine type compatibility. This means that two types are considered compatible if they have the same structure, regardless of their names.

// ↪️ Example :

interface Point {
    x: number;
    y: number;
  }
  
  let p1: Point = { x: 10, y: 20 };
  let p2: { x: number; y: number } = p1;
  
  console.log(p2.x); // Output: 10

// ↪️ Example :


  interface Pet {
    name: string;
  }
  class Dog {
    name: string;
  }
  let pet: Pet;
  // OK, because of structural typing
  pet = new Dog();

//💥   Comparing two functions

let x = (a: number) => 0;
let y = (b: number, s: string) => 0;
y = x; // OK
x = y; // Error

// And 

let x = () => ({ name: "Alice" });
let y = () => ({ name: "Alice", location: "Seattle" });
x = y; // OK
y = x; // Error, because x() lacks a location property


// Read more Information
// Type Compatibility 🔗https://www.typescriptlang.org/docs/handbook/type-compatibility.html