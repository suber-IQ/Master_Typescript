// 3️⃣ Type Aliases: -A Type Alias in TypeScript allows you to create a new name for a type.

// ↪️ Example
type Name = string;
type Age = number;
type User = { name: Name; age: Age };

const user: User = { name: 'John', age: 30 };

// ↪️ Example
type MyCustomType = {
    id: number;
    name: string;
    age?: number;
  }

  function getPerson(id: number): MyCustomType {
    // implementation here
  }
  
  const person: MyCustomType = {
    id: 1,
    name: "John Smith"
  };
  
  

// 🌟 NOTE:- In the example above, Name and Age are type aliases for string and number respectively. And User is a type alias for an object with properties name of type Name and age of type Age.

// Take More Infromation 
//Type Aliases Link 🔗https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases