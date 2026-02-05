export const fundamentalsOfJS = `
<div class="prose prose-neutral dark:prose-invert max-w-none">

  <h2 class="text-2xl font-bold mt-8 mb-4">What Is JavaScript and Why It Matters</h2>
  <p class="leading-relaxed">
    JavaScript is the programming language of the web. While HTML defines structure and CSS defines appearance, JavaScript adds interactivity, logic, and dynamic behavior. It powers everything from simple button clicks to complex applications like Gmail, Figma, and modern web dashboards.
  </p>

  <p class="leading-relaxed">
    Understanding JavaScript is essential for any web developer. Even if you use frameworks like React, Vue, or Next.js, JavaScript is the foundation that makes everything work.
  </p>

  <h2 class="text-2xl font-bold mt-8 mb-4">Variables and Data Types</h2>
  <p class="leading-relaxed">
    JavaScript uses variables to store values. Modern JavaScript encourages the use of <code class="bg-gray-200 dark:bg-gray-800 dark:text-gray-100 px-1 rounded">let</code> and <code class="bg-gray-200 dark:bg-gray-800 dark:text-gray-100 px-1 rounded">const</code> instead of <code class="bg-gray-200 dark:bg-gray-800 dark:text-gray-100 px-1 rounded">var</code>.
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-js">
let age = 25;          // can be reassigned
const name = "Alice";  // cannot be reassigned

let isLoggedIn = true;
let score = 42;
let user = { name: "Bob", role: "admin" };
</code>
  </pre>

  <p class="leading-relaxed">
    JavaScript has several built-in data types: strings, numbers, booleans, objects, arrays, and more.
  </p>

  <h2 class="text-2xl font-bold mt-8 mb-4">Functions: The Building Blocks of Logic</h2>
  <p class="leading-relaxed">
    Functions let you reuse logic. Modern JavaScript often uses arrow functions because they are shorter and more predictable.
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-js">
// Traditional function
function greet(name) {
  return "Hello " + name;
}

// Arrow function
const greetUser = (name) => {
  return \`Hello \${name}\`;
};
</code>
  </pre>

  <p class="leading-relaxed">
    Arrow functions also behave differently with <code class="bg-gray-200 dark:bg-gray-800 dark:text-gray-100 px-1 rounded">this</code>, which makes them ideal for callbacks.
  </p>

  <h2 class="text-2xl font-bold mt-8 mb-4">Working with Arrays</h2>
  <p class="leading-relaxed">
    Arrays are one of the most commonly used data structures in JavaScript. Modern methods like <code class="bg-gray-200 dark:bg-gray-800 dark:text-gray-100 px-1 rounded">map</code>, <code class="bg-gray-200 dark:bg-gray-800 dark:text-gray-100 px-1 rounded">filter</code>, and <code class="bg-gray-200 dark:bg-gray-800 dark:text-gray-100 px-1 rounded">reduce</code> make working with arrays powerful and expressive.
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-js">
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((total, n) => total + n, 0);
</code>
  </pre>

  <p class="leading-relaxed">
    These methods help you write clean, functional-style code.
  </p>

  <h2 class="text-2xl font-bold mt-8 mb-4">Objects and Destructuring</h2>
  <p class="leading-relaxed">
    Objects store key-value pairs. Destructuring lets you extract values easily.
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-js">
const user = {
  name: "Alice",
  age: 30,
  role: "admin"
};

const { name, role } = user;
</code>
  </pre>

  <p class="leading-relaxed">
    Destructuring also works with arrays and function parameters.
  </p>

  <h2 class="text-2xl font-bold mt-8 mb-4">Asynchronous JavaScript: Promises and async/await</h2>
  <p class="leading-relaxed">
    JavaScript is single-threaded, but it handles asynchronous operations using promises and the <code class="bg-gray-200 dark:bg-gray-800 dark:text-gray-100 px-1 rounded">async/await</code> syntax.
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-js">
function fetchUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve("User loaded"), 1000);
  });
}

async function load() {
  const result = await fetchUser();
  console.log(result);
}

load();
</code>
  </pre>

  <p class="leading-relaxed">
    <strong>async/await</strong> makes asynchronous code easier to read and write.
  </p>

  <h2 class="text-2xl font-bold mt-8 mb-4">The DOM: Connecting JavaScript to the Page</h2>
  <p class="leading-relaxed">
    JavaScript can manipulate the DOM (Document Object Model) to update the page dynamically.
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-js">
const button = document.querySelector("button");
const counter = document.querySelector("#counter");

let count = 0;

button.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
</code>
  </pre>

  <p class="leading-relaxed">
    This is the foundation of all interactive web experiences.
  </p>

  <h2 class="text-2xl font-bold mt-8 mb-4">JavaScript and Modern Frameworks</h2>
  <p class="leading-relaxed">
    Frameworks like React, Vue, and Svelte build on top of JavaScript. Understanding the core language makes learning these tools much easier.
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-jsx">
export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;button onClick={() => setCount(count + 1)}&gt;
      You clicked {count} times
    &lt;/button&gt;
  );
}
</code>
  </pre>

  <p class="leading-relaxed">
    Even JSX is just JavaScript with a different syntax.
  </p>

  <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
  <p class="leading-relaxed">
    JavaScript is a versatile, powerful language that continues to evolve. By mastering variables, functions, arrays, objects, asynchronous programming, and DOM manipulation, you build a strong foundation for any modern web development work.
  </p>

  <p class="leading-relaxed">
    Whether you're building simple scripts or full-scale applications, strong JavaScript fundamentals will always serve you well.
  </p>

</div>
`
