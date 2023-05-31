![Typescript](https://res.cloudinary.com/suberiq/image/upload/v1683830585/MASTER_TYPESCRIPT_2_-min_rhvi4x.png)

---
> # ✴️INTRODUCTION
---
# 💥TypeScript vs JavaScript
 
### 👉TypeScript and JavaScript are both programming languages, but they have some differences in their syntax and features.

## 🌀Static Typing

- ↪️TypeScript is a statically typed language, which means that variables and function parameters have to be declared with a specific type. This helps catch errors at compile-time, making code more robust and maintainable. JavaScript, on the other hand, is a dynamically typed language, which means that types are inferred at runtime.

## 🌀Optional Types

- ↪️TypeScript also has support for optional types, which allows developers to specify that a variable or parameter may be of a certain type, but doesn't have to be. This is useful for cases where you may not know the type of a variable until runtime.

## 🌀Classes and Interfaces

- ↪️TypeScript has a more robust support for classes and interfaces, which are used to define object-oriented programming (OOP) constructs. JavaScript also supports OOP, but its syntax is more limited.

## 🌀Compiler

- ↪️TypeScript requires a compiler to transpile the code into JavaScript, which can then be run in a browser or on a server. JavaScript does not require a compiler, as it is a scripting language that can be executed directly in a browser or server.

## 🌀Tooling

- ↪️TypeScript has excellent tooling support, with features like code completion, code navigation, and refactoring available in many integrated development environments (IDEs). JavaScript also has good tooling support, but it's not as advanced as TypeScript.

- ↪️In summary, TypeScript offers additional features and benefits over JavaScript, such as static typing, optional types, and better OOP support. However, it also requires additional setup and tooling to use effectively. JavaScript remains a popular and widely used language due to its simplicity, ubiquity, and ease of use.
---

# 💥TypeScript and JavaScript Interoperability

### 👉TypeScript and JavaScript are interoperable, which means that they can work together seamlessly in the same codebase. TypeScript is a superset of JavaScript, so any valid JavaScript code is also valid TypeScript code.

- ↪️TypeScript code can also use existing JavaScript code or libraries, without requiring any modification or conversion. This allows developers to gradually migrate from JavaScript to TypeScript by incrementally adding types and other TypeScript features to their codebase.

- ↪️On the other hand, JavaScript code can consume TypeScript code using TypeScript declaration files. Declaration files provide type information for TypeScript code, which can be used by JavaScript code to ensure that the TypeScript code is being used correctly.

- ↪️In addition, TypeScript provides a "any" type, which allows developers to use existing JavaScript code without type annotations. This is useful when working with third-party libraries that do not have TypeScript definitions.

- ↪️Overall, the interoperability between TypeScript and JavaScript allows developers to take advantage of the benefits of both languages in the same codebase. This enables them to improve the maintainability and scalability of their applications, while also leveraging existing JavaScript code and libraries.

---
# 💥Install and Configure

1. Install Node.js: TypeScript requires Node.js to be installed on your machine. You can download and install Node.js from the official website: *click Here :*  [https://nodejs.org](https://nodejs.org.)
2. Install TypeScript: Once Node.js is installed, open a command prompt or terminal and run the following command to install TypeScript globally:

`
npm install -g typescript
`
- This will install the latest version of TypeScript on your machine.

3. Create a TypeScript file: Create a new file with the extension .ts and add some TypeScript code, for example:

```typescript
function greet(name: string) {
console.log("Hello, " + name + "!");
}

greet("TypeScript");
```
4. Compile the TypeScript file: To compile the TypeScript file to JavaScript, run the following command in the command prompt or terminal:

`
tsc filename.ts
`
- This will create a new file with the extension .js that contains the compiled JavaScript code.

5. Run the JavaScript file: You can now run the JavaScript file using Node.js:

```
node filename.js

```

**tsconfig.json**

*tsconfig.json is a configuration file in TypeScript that specifies the compiler options for building your project. It helps the TypeScript compiler understand the structure of your project and how it should be compiled to JavaScript. Some common options include:*

- `target:`the version of JavaScript to compile to
- `module:`the module system to use
- `strict:`enables/disables strict type checking.
- `outDir:`the directory to output the compiled JavaScript files.
- `rootDir:`the root directory of the TypeScript files
- `include:` an array of file/directory patterns to include in the compilation.
- `exclude:`an array of file/directory patterns to exclude from the compilation.

*Given below is the sample tsconfig.json file:*
```typescript
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "exclude": ["node_modules"]
  },
  "include": ["src"]
}
```
*Learn more from the following links:*
- *click Here :*  [What is a tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#handbook-content)
- *click Here :*  [Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

---
# 💥Running TypeScript

- `tsc:`ts-node is a TypeScript execution engine and REPL (Read-Eval-Print Loop) for Node.js. It allows developers to run TypeScript code directly in a Node.js environment without the need for compiling it to JavaScript.

*To use ts-node, first, you need to install it globally via npm:*

```typescript
npm install -g ts-node
```

*Once installed, you can run a TypeScript file by simply executing it with the ts-node command, like this:*

```typescript
ts-node reptile.ts
or
node reptile.ts
```
*You can also use ts-node to start a TypeScript REPL by running the following command in your terminal:*

```typescript
ts-node
```
- *click Here :*  [ts-node - Github Project](https://github.com/TypeStrong/ts-node)
- *click Here :* [How to Run Typescript with ts-node](https://www.digitalocean.com/community/tutorials/typescript-running-typescript-ts-node)

---
# 💥Ts Playground

- TypeScript Playground is an online tool for writing, sharing, and testing TypeScript code. It provides an interactive environment where developers can experiment with TypeScript code without requiring any setup or installation.

- The TypeScript Playground includes a code editor with syntax highlighting, automatic code formatting, and error highlighting. It also includes a console that displays the output of the code, as well as any errors or warnings that may occur.

- Developers can use the TypeScript Playground to test out new features, debug code, or share code snippets with others. They can also configure the compiler options and target version of TypeScript, allowing them to see how their code will behave in different environments.

- The TypeScript Playground is a useful tool for learning and experimenting with TypeScript, as well as for quickly prototyping and sharing code snippets with others.

- *click Here :* [TypeScript-Playground](https://www.typescriptlang.org/play)

---

> # ✴️Typescript Types

## 🌀Primitive Types
 
- In TypeScript, a primitive is a basic data type that represents a single value, and is not an object. There are five/six primitive types in TypeScript:

1. ⚡boolean:-boolean is a primitive data type in TypeScript that represents a boolean value i.e. either true or false. Given below is an example of a boolean variable declaration:

**↪️Example :-**

```typescript
function isGreadterThanTen(num: number): boolean{
    return num > 10;
}

let result1: boolean = isGreadterThanTen(5) // returns false;
let result2: boolean = isGreadterThanTen(15) // returns true;


console.log(result1);  //then run command `ts-node boolean.ts`
console.log(result2);
```
2. ⚡string :- It is a primitive data type in TypeScript that represents textual data. It is a set of elements of the 16-bit Unicode character set.


**↪️Example :-**
```typescript
function sayHello(name: string): string{
    return `Hello , ${name}!`
}

let greeting: string = sayHello("Sumit"); //returns "Hello, Sumit!"

console.log(greeting);
```

3. ⚡number: - It is a primitive data type in TypeScript that represents numeric values. It includes both integer and floating-point values.


**↪️Example :-**
```typescript
function calculateSum(num1: number, num2: number): number {
    return num1 + num2;
}

let result: number  = calculateSum(5,10); //returns 15

console.log(`Sum of two numbers return: ${result}`); // run command `ts-node number.ts`
```

4. ⚡null :-In TypeScript, null is a built-in data type that represents the intentional absence of any object value. Unlike undefined, null is explicitly assigned to a variable to indicate that it has no value. Here's an example:

**↪️Example :-**
```typescript
function printMessage(message: string): null {
    console.log(message);
    return null;
  }
  
printMessage("hello world")
```
5. ⚡undefined:  In TypeScript, undefined is a built-in data type that represents the absence of a value. A variable that is declared but not initialized or assigned a value is automatically assigned the value undefined. Here's an example:


**↪️Example :-**
```typescript
let message: string | undefined;
if (message === undefined) {
  console.log("Message is undefined");
} else {
  console.log("Message is: " + message);
}
```

6. ⚡void :- void represents the return value of functions which don’t return a value. It’s the inferred type any time a function doesn’t have any return statements, or doesn’t return any explicit value from those return statements:

**↪️Example :-**
```typescript
function logMessage(message: string): void {
    console.log(message);
    
}

logMessage("Hello world!");  // logs "Hello world" to the console
```
7. ⚡symbol - used to represent unique identifiers.


**↪️Example :-**
```typescript
const mySymbol = Symbol("mySymbol");

console.log(mySymbol);
```

---
> # ✴️Type Interface
---

## 🌀Type Inference
- Type inference in TypeScript refers to the process of automatically determining the type of a variable based on the value assigned to it. This allows you to write code that is more concise and easier to understand, as the TypeScript compiler can deduce the types of variables without you having to explicitly specify them.

**↪️Example :-**
```typescript
let x = 3;
// let x: number

let y = [0, 1, null];
// let x: (number | null)[]

let zoo = [new Rhino(), new Elephant(), new Snake()];
// let zoo: (Rhino | Elephant | Snake)[]
```

---
> # ✴️Type Compatibility
---

## 🌀Type Compatibility
- TypeScript uses structural typing to determine type compatibility. This means that two types are considered compatible if they have the same structure, regardless of their names.

**↪️Example :-**
```typescript
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


```

---
> # ✴️Combining Types
---

## 🌀Combining Types
- In TypeScript, types can be combined to create more complex types using various type operators and syntax. This process is called "combining types".

// ▶️ Type Union  
// ▶️ Type intersection 

1. ⚡Union Types:- Union Types in TypeScript allow you to specify multiple possible types for a single variable or parameter. A union type is written as a vertical bar | separated list of types.

**↪️Example :-**
```typescript
function combine(input1: string | number, input2: string | number) {
    return input1 + input2;
  }
  function printId(id: number | string) {
    console.log("Your ID is: " + id);
  }
  // OK
  printId(101);
  // OK
  printId("202");
  // Error
  printId({ myID: 22342 });
  Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'


function printId(id: number | string) {
    console.log(id.toUpperCase());
  Property 'toUpperCase' does not exist on type 'string | number'.
    Property 'toUpperCase' does not exist on type 'number'.
  }

```

**Take More Infromation** 
- *click Here :* [Uninon Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)

---

2. ⚡Type Aliases:- A Type Alias in TypeScript allows you to create a new name for a type.

**↪️Example :-**
```typescript
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
  

```
- 🌟 NOTE:- In the example above, Name and Age are type aliases for string and number respectively. And User is a type alias for an object with properties name of type Name and age of type Age.

**Take More Infromation** 
- *click Here :* [Type Aliases Link](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases)

---


3. ⚡keyof Operator:-The keyof operator in TypeScript is used to get the union of keys from an object type. Here’s an example of how it can be used:

**↪️Example :-**
```typescript

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

```

**Take More Infromation** 
- *click Here :* [keyof Type Operator Link](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html#handbook-content)

---


4. ⚡Intersection Types :- An intersection type creates a new type by combining multiple existing types. The new type has all features of the existing types.

**↪️Example :-**
```typescript
// type typeAB = typeA & typeB;

// ↪️ Example :
let varName = typeA | typeB; // union type

// ↪️ Example :
interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}


type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;


type Employee = Identity & Contact;

let e: Employee = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684'
};

type Customer = BusinessPartner & Contact;

let c: Customer = {
    name: 'ABC Inc.',
    credit: 1000000,
    email: 'sales@abcinc.com',
    phone: '(408)-897-5735'
};


type Employee = Identity & BusinessPartner & Contact;

let e: Employee = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684',
    credit: 1000
};

// 💥Type Order
// When you intersect types, the order of the types doesn’t matter. For example:

// type typeAB = typeA & typeB;
// type typeBA = typeB & typeA;



// The typeAB will have all properties from both typeA and typeB

```
- 🌟 NOTE:- that the union type uses the | operator that defines a variable which can hold a value of either typeA or typeB


**Take More Infromation** 
- *click Here :* [Typescript Intersection Types](https://www.typescripttutorial.net/typescript-tutorial/typescript-intersection-types/)