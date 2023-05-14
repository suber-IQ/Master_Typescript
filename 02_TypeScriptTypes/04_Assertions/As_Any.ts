// 👉 AS Any:-any is a special type in TypeScript that represents a value of any type. When a value is declared with the any type, the compiler will not perform any type checks or type inference on that value.


//↪️ Example:
let anyValue: any = 42;

// we can assign any value to anyValue, regardless of its type
anyValue = 'Hello, world!';
anyValue = true;

// 👉 take more Information
// Const Assections Link 🔗 https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions