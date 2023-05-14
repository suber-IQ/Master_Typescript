// 👉 Type Inference :-  Type inference in TypeScript refers to the process of automatically determining the type of a variable based on the value assigned to it. This allows you to write code that is more concise and easier to understand, as the TypeScript compiler can deduce the types of variables without you having to explicitly specify them.

// ↪️ Example :

let x = 3;
// let x: number

let y = [0, 1, null];
// let x: (number | null)[]

let zoo = [new Rhino(), new Elephant(), new Snake()];
// let zoo: (Rhino | Elephant | Snake)[]