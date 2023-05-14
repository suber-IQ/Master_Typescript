// 2️⃣ Intersection Types :- An intersection type creates a new type by combining multiple existing types. The new type has all features of the existing types.

// To combine types, you use the & operator as follows:

// ↪️ Example :
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



// The typeAB will have all properties from both typeA and typeB.

// Note that the union type uses the | operator that defines a variable which can hold a value of either typeA or typeB

// Take more Information 
// Typescript Intersection Types🔗https://www.typescripttutorial.net/typescript-tutorial/typescript-intersection-types/