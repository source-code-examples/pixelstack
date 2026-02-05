export const fundamentalsOfTS = `
<div class="prose prose-neutral dark:prose-invert max-w-none">

  <h2 class="text-2xl font-bold mt-8 mb-4">What Is TypeScript and Why It Matters</h2>
  <p class="leading-relaxed">
    TypeScript is a superset of JavaScript that adds static typing. It helps developers catch errors early, write more predictable code, and build large applications with confidence. TypeScript compiles down to plain JavaScript, meaning it works everywhere JavaScript runs.
  </p>

  <p class="leading-relaxed">
    Modern frameworks like Angular, React, Next.js, and Node.js projects increasingly rely on TypeScript because it improves maintainability and developer experience.
  </p>

  <h2 class="text-2xl font-bold mt-8 mb-4">Basic Types</h2>
  <p class="leading-relaxed">
    TypeScript introduces explicit types for variables, making your code more predictable and self-documenting.
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-ts">
let age: number = 30;
let name: string = "Alice";
let isAdmin: boolean = true;

let scores: number[] = [10, 20, 30];
</code>
  </pre>

  <p class="leading-relaxed">
    TypeScript can also infer types automatically, reducing the need for explicit annotations.
  </p>

  <h2 class="text-2xl font-bold mt-8 mb-4">Type Inference</h2>
  <p class="leading-relaxed">
    TypeScript is smart enough to infer types from context. Explicit types are only needed when inference is unclear.
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-ts">
let message = "Hello"; // inferred as string
message = 42;          // ❌ Error
</code>
  </pre>

  <h2 class="text-2xl font-bold mt-8 mb-4">Interfaces and Type Aliases</h2>
  <p class="leading-relaxed">
    Interfaces and type aliases let you describe the shape of objects. They are essential for structuring data in TypeScript.
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-ts">
interface User {
  name: string;
  age: number;
  isAdmin?: boolean; // optional
}

type Product = {
  id: number;
  title: string;
  price: number;
};
</code>
  </pre>

  <p class="leading-relaxed">
    Interfaces are extendable, while type aliases are more flexible for unions and intersections.
  </p>

  <h2 class="text-2xl font-bold mt-8 mb-4">Union and Intersection Types</h2>
  <p class="leading-relaxed">
    Union types allow a variable to hold multiple possible types. Intersection types combine multiple types into one.
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-ts">
let id: string | number;

type Admin = { role: "admin" };
type Member = { role: "member" };

type AdminMember = Admin & Member; // rarely used but possible
</code>
  </pre>

  <h2 class="text-2xl font-bold mt-8 mb-4">Functions and Generics</h2>
  <p class="leading-relaxed">
    TypeScript lets you type function parameters and return values. Generics allow you to write reusable, type-safe functions.
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-ts">
function add(a: number, b: number): number {
  return a + b;
}

function wrap&lt;T&gt;(value: T): T {
  return value;
}

const result = wrap("Hello"); // inferred as string
</code>
  </pre>

  <h2 class="text-2xl font-bold mt-8 mb-4">Narrowing: Making Types More Specific</h2>
  <p class="leading-relaxed">
    Type narrowing lets TypeScript refine a variable’s type based on conditions. This is essential when working with union types.
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-ts">
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}
</code>
  </pre>

  <h2 class="text-2xl font-bold mt-8 mb-4">Enums</h2>
  <p class="leading-relaxed">
    Enums let you define a set of named constants. They are useful for representing fixed sets of values.
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-ts">
enum Status {
  Pending,
  Success,
  Error
}

const current: Status = Status.Success;
</code>
  </pre>

  <h2 class="text-2xl font-bold mt-8 mb-4">Classes and Access Modifiers</h2>
  <p class="leading-relaxed">
    TypeScript enhances JavaScript classes with access modifiers like <code class="bg-gray-200 dark:bg-gray-800 dark:text-gray-100 px-1 rounded">private</code>, <code class="bg-gray-200 dark:bg-gray-800 dark:text-gray-100 px-1 rounded">protected</code>, and <code class="bg-gray-200 dark:bg-gray-800 dark:text-gray-100 px-1 rounded">public</code>.
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-ts">
class User {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    return \`Hello, \${this.name}\`;
  }
}
</code>
  </pre>

  <h2 class="text-2xl font-bold mt-8 mb-4">Modules</h2>
  <p class="leading-relaxed">
    TypeScript uses ES modules to organize code into reusable files. This helps keep large codebases maintainable.
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-ts">
// utils.ts
export function multiply(a: number, b: number) {
  return a * b;
}

// app.ts
import { multiply } from "./utils";

console.log(multiply(2, 3)); // 6
</code>
  </pre>

  <h2 class="text-2xl font-bold mt-8 mb-4">Utility Types</h2>
  <p class="leading-relaxed">
    TypeScript includes built-in utility types that transform existing types. These are extremely useful in real-world applications.
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-ts">
interface User {
  id: number;
  name: string;
  email?: string;
}

type RequiredUser = Required&lt;User&gt;;
type PartialUser = Partial&lt;User&gt;;
type ReadonlyUser = Readonly&lt;User&gt;;
</code>
  </pre>

  <h2 class="text-2xl font-bold mt-8 mb-4">Discriminated Unions</h2>
  <p class="leading-relaxed">
    Discriminated unions are a powerful pattern for modeling complex data structures safely.
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-ts">
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number };

function area(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.size ** 2;
  }
}
</code>
  </pre>

  <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
  <p class="leading-relaxed">
    TypeScript brings structure, safety, and clarity to JavaScript. By mastering types, interfaces, generics, narrowing, classes, modules, and advanced type patterns, you gain the tools needed to build robust and scalable applications.
  </p>

  <p class="leading-relaxed">
    Whether you're working on small components or large enterprise systems, TypeScript helps you write cleaner, more reliable code.
  </p>

</div>
`
