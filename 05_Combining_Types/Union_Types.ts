// 1️⃣ Union Types:- Union Types in TypeScript allow you to specify multiple possible types for a single variable or parameter. A union type is written as a vertical bar | separated list of types.

// ↪️ Example: 
function combine(input1: string | number, input2: string | number) {
    return input1 + input2;
  }

// ↪️ Example: 

//   function printId(id: number | string) {
//     console.log("Your ID is: " + id);
//   }
//   // OK
//   printId(101);
//   // OK
//   printId("202");
//   // Error
//   printId({ myID: 22342 });
//   Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'

// ↪️ Example: 

// function printId(id: number | string) {
//     console.log(id.toUpperCase());
//   Property 'toUpperCase' does not exist on type 'string | number'.
//     Property 'toUpperCase' does not exist on type 'number'.
//   }


//   Take More Information 
// Uninon Types🔗https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types