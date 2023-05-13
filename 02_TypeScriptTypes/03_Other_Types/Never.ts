// 4️⃣Never:- In TypeScript, the never type represents a value that can never occur. This type is used to indicate that a function will not return normally, for example if it throws an exception or if it enters an infinite loop.


// 1. Error handling: If a function throws an error, it's important to make sure that the function doesn't return a value. You can use the never type to ensure that the function doesn't accidentally return a value when an error is thrown.

//↪️ Example:
function throwError(message: string): never {
    throw new Error(message);
  }

  
// 2. Infinite loops: If a function enters an infinite loop, it will never return normally. You can use the never type to indicate that the function will never return a value

//↪️ Example:
function infiniteLoop(): never {
    while (true) {}
  }
  
//  3. Exhaustive switch statements: If you have a switch statement that handles all possible cases for a given type, you can use the never type to ensure that the switch statement is exhaustive. If you forget to handle a case, the never type will ensure that you get a compile-time error

//↪️ Example:
type Animal = 'dog' | 'cat';

function animalSound(animal: Animal) {
  switch (animal) {
    case 'dog':
      return 'woof';
    case 'cat':
      return 'meow';
    default:
      // If we forget to handle a case, the `never` type will ensure that we get a compile-time error.
      const exhaustCheck: never = animal;
  }
}

// 👉 take more Information
// Never Link🔗https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type