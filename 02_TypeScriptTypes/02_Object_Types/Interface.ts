// 👉In TypeScript, you can define object types using interfaces or types. Here are some examples:

// 1️⃣ Interface :- Defining an interface for a simple object:


//↪️ Example: 1

interface Person {
    name: string;
    age: number;
    email?: string; // optional property
  }
  
  // 💥Defining a type for a complex object:

  type Product = {
    id: number;
    name: string;
    price: number;
    details: {
      description: string;
      manufacturer: string;
    };
  }
  