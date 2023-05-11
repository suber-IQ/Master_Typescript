# TypeScript vs JavaScript
 
### TypeScript and JavaScript are both programming languages, but they have some differences in their syntax and features.

## Static Typing

- TypeScript is a statically typed language, which means that variables and function parameters have to be declared with a specific type. This helps catch errors at compile-time, making code more robust and maintainable. JavaScript, on the other hand, is a dynamically typed language, which means that types are inferred at runtime.

## Optional Types

- TypeScript also has support for optional types, which allows developers to specify that a variable or parameter may be of a certain type, but doesn't have to be. This is useful for cases where you may not know the type of a variable until runtime.

## Classes and Interfaces

- TypeScript has a more robust support for classes and interfaces, which are used to define object-oriented programming (OOP) constructs. JavaScript also supports OOP, but its syntax is more limited.

## Compiler

- TypeScript requires a compiler to transpile the code into JavaScript, which can then be run in a browser or on a server. JavaScript does not require a compiler, as it is a scripting language that can be executed directly in a browser or server.

## Tooling

- TypeScript has excellent tooling support, with features like code completion, code navigation, and refactoring available in many integrated development environments (IDEs). JavaScript also has good tooling support, but it's not as advanced as TypeScript.

- In summary, TypeScript offers additional features and benefits over JavaScript, such as static typing, optional types, and better OOP support. However, it also requires additional setup and tooling to use effectively. JavaScript remains a popular and widely used language due to its simplicity, ubiquity, and ease of use.
---

# TypeScript and JavaScript Interoperability

### TypeScript and JavaScript are interoperable, which means that they can work together seamlessly in the same codebase. TypeScript is a superset of JavaScript, so any valid JavaScript code is also valid TypeScript code.

- TypeScript code can also use existing JavaScript code or libraries, without requiring any modification or conversion. This allows developers to gradually migrate from JavaScript to TypeScript by incrementally adding types and other TypeScript features to their codebase.

- On the other hand, JavaScript code can consume TypeScript code using TypeScript declaration files. Declaration files provide type information for TypeScript code, which can be used by JavaScript code to ensure that the TypeScript code is being used correctly.

- In addition, TypeScript provides a "any" type, which allows developers to use existing JavaScript code without type annotations. This is useful when working with third-party libraries that do not have TypeScript definitions.

- Overall, the interoperability between TypeScript and JavaScript allows developers to take advantage of the benefits of both languages in the same codebase. This enables them to improve the maintainability and scalability of their applications, while also leveraging existing JavaScript code and libraries.

# Install and Configure

1. Install Node.js: TypeScript requires Node.js to be installed on your machine. You can download and install Node.js from the official website: [https://nodejs.org](https://nodejs.org.)
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
- [What is a tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#handbook-content)
- [Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)