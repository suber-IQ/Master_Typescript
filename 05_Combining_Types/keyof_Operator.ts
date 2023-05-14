// 4️⃣ keyof Operator:-The keyof operator in TypeScript is used to get the union of keys from an object type. Here’s an example of how it can be used:

// ↪️ Example :

interface User {
    name: string;
    age: number;
    location: string;
  }
  
  type UserKeys = keyof User; // "name" | "age" | "location"
  const key: UserKeys = 'name';

// ↪️ Example :

type Person = {
    name: string;
    age: number;
    address: string;
  }
  
  type PersonKeys = keyof Person;
  
  // PersonKeys is equal to "name" | "age" | "address"
  
  function getValueByKey<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  
  const person: Person = {
    name: "John Smith",
    age: 30,
    address: "123 Main St"
  };
  
  const name = getValueByKey(person, "name"); // name is a string
  const age = getValueByKey(person, "age"); // age is a number
  const address = getValueByKey(person, "address"); // address is a string
  
  
//   Take More Information 
// keyof Type Operator Link 🔗https://www.typescriptlang.org/docs/handbook/2/keyof-types.html#handbook-content