// 4️⃣ null :-In TypeScript, null is a built-in data type that represents the intentional absence of any object value. Unlike undefined, null is explicitly assigned to a variable to indicate that it has no value. Here's an example:

//↪️ Example: 1
let price: number | null = null;
console.log(price); // logs "null"


//↪️ Example: 2

function printMessage(message: string): null {
    console.log(message);
    return null;
  }
  
printMessage("hello world")
