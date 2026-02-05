/**
 * HTML content for the "Fundamentals of CSS" article.
 *
 * This module exports a template string containing fully formatted HTML,
 * including headings, paragraphs, code blocks, and prose classes.
 *
 * The content is injected directly into the Post page using `dangerouslySetInnerHTML`,
 * which allows to store article content as plain strings instead of MDX.
 *
 * Each <pre><code> block includes syntax‑highlighting classes so that
 * the code examples render correctly in the UI.
 *
 * This file is part of the `posts` system:
 * - `/data/posts.ts` imports this content
 * - Each post object includes a `content` field referencing this string
 * - The Post page renders it dynamically based on the route handle
 */

export const fundamentalsOfCss = `
<div class="prose prose-neutral dark:prose-invert max-w-none">

  <h2 class="text-2xl font-bold mt-8 mb-4">What Is CSS and Why It Matters</h2>
  <p class="leading-relaxed">
    CSS (Cascading Style Sheets) is the language that controls the visual appearance of your HTML. While HTML defines the structure and meaning of content, CSS defines how that content looks — colors, spacing, layout, typography, and more.
  </p>

  <p class="leading-relaxed">
    Understanding CSS deeply helps you build interfaces that are not only visually appealing, but also consistent, responsive, and maintainable. Even in a world of utility frameworks and component libraries, strong CSS fundamentals remain essential.
  </p>

  <h2 class="text-2xl font-bold mt-8 mb-4">How CSS Connects to HTML</h2>
  <p class="leading-relaxed">
    CSS can be applied to HTML in three main ways: inline styles, internal styles, and external stylesheets. In modern development, external stylesheets are preferred because they keep structure and presentation separate.
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-html">
&lt;!-- External stylesheet --&gt;
&lt;link rel="stylesheet" href="styles.css" /&gt;

&lt;!-- Internal styles --&gt;
&lt;style&gt;
  h1 {
    color: #1f2933;
  }
&lt;/style&gt;

&lt;!-- Inline styles (not recommended for most cases) --&gt;
&lt;h1 style="color: #1f2933;"&gt;Hello World&lt;/h1&gt;
</code>
  </pre>

  <p class="leading-relaxed">
    In real projects, you typically use external stylesheets or CSS-in-JS solutions, but the underlying concepts remain the same.
  </p>

  <h2 class="text-2xl font-bold mt-8 mb-4">Selectors and the Cascade</h2>
  <p class="leading-relaxed">
    Selectors tell CSS which elements to style. The cascade determines which rules win when multiple styles target the same element. Understanding selectors and specificity is crucial for writing predictable CSS.
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-css">
/* Type selector */
p {
  font-size: 1rem;
}

/* Class selector */
.button {
  background-color: #2563eb;
  color: white;
}

/* ID selector */
#hero-title {
  font-size: 2.5rem;
}

/* Descendant selector */
.card p {
  color: #4b5563;
}
</code>
  </pre>

  <p class="leading-relaxed">
    Specificity determines which rule is applied when there is a conflict. In general:
  </p>

  <ul class="list-disc pl-6 space-y-1">
    <li><code class="bg-gray-200 dark:bg-gray-800 dark:text-gray-100 px-1 rounded">id</code> selectors are stronger than</li>
    <li><code class="bg-gray-200 dark:bg-gray-800 dark:text-gray-100 px-1 rounded">class</code> selectors, which are stronger than</li>
    <li><code class="bg-gray-200 dark:bg-gray-800 dark:text-gray-100 px-1 rounded">type</code> selectors</li>
  </ul>

  <p class="leading-relaxed mt-4">
    Overusing high-specificity selectors or <code class="bg-gray-200 dark:bg-gray-800 dark:text-gray-100 px-1 rounded">!important</code> can make your styles hard to maintain.
  </p>

  <h2 class="text-2xl font-bold mt-8 mb-4">The Box Model</h2>
  <p class="leading-relaxed">
    Every element in CSS is a rectangular box. The box model describes how width, height, padding, borders, and margins interact. Misunderstanding the box model is a common source of layout bugs.
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-css">
.card {
  width: 300px;
  padding: 16px;
  border: 1px solid #e5e7eb;
  margin: 24px auto;
  box-sizing: border-box;
}
</code>
  </pre>

  <p class="leading-relaxed">
    The <code class="bg-gray-200 dark:bg-gray-800 dark:text-gray-100 px-1 rounded">box-sizing: border-box;</code> rule makes width and height include padding and border, which usually matches how designers think about sizes.
  </p>

  <h2 class="text-2xl font-bold mt-8 mb-4">Working with Colors and Typography</h2>
  <p class="leading-relaxed">
    CSS gives you fine-grained control over colors, fonts, and text spacing. Consistent typography and color usage are key to a professional-looking interface.
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-css">
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: #111827;
  background-color: #f9fafb;
}

h1 {
  font-size: 2.25rem;
  font-weight: 700;
}

p {
  line-height: 1.7;
  color: #374151;
}
</code>
  </pre>

  <p class="leading-relaxed">
    For dark themes, you typically invert the relationship between background and text colors while maintaining sufficient contrast for readability.
  </p>

  <h2 class="text-2xl font-bold mt-8 mb-4">Modern Layout: Flexbox and Grid</h2>
  <p class="leading-relaxed">
    Modern CSS layout is powered by Flexbox and Grid. Flexbox is ideal for one-dimensional layouts (rows or columns), while Grid is designed for two-dimensional layouts.
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-css">
/* Flexbox example */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Grid example */
.grid-layout {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}
</code>
  </pre>

  <p class="leading-relaxed">
    These tools replace many older layout hacks like floats and table-based layouts, making your CSS cleaner and more predictable.
  </p>

  <h2 class="text-2xl font-bold mt-8 mb-4">Responsive Design with Media Queries</h2>
  <p class="leading-relaxed">
    Responsive design ensures your layout adapts to different screen sizes. Media queries let you apply different styles based on viewport width and other conditions.
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-css">
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</code>
  </pre>

  <p class="leading-relaxed">
    Instead of designing for a single screen size, you think in terms of flexible layouts that adapt gracefully.
  </p>

  <h2 class="text-2xl font-bold mt-8 mb-4">CSS and Modern Frameworks</h2>
  <p class="leading-relaxed">
    In frameworks like React or Next.js, you might use CSS Modules, CSS-in-JS, or utility-first frameworks. Regardless of the tooling, the underlying CSS concepts remain the same.
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-jsx">
import styles from './Button.module.css';

export function Button() {
  return (
    &lt;button className={styles.primary}&gt;
      Click me
    &lt;/button&gt;
  );
}
</code>
  </pre>

  <p class="leading-relaxed">
    Understanding core CSS makes it much easier to reason about how these abstractions behave under the hood.
  </p>

  <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
  <p class="leading-relaxed">
    CSS is more than just “making things pretty” — it is a powerful language for expressing visual design, layout, and interaction. By mastering selectors, the box model, typography, layout systems, and responsive design, you build a strong foundation for any front-end work.
  </p>

  <p class="leading-relaxed">
    Whether you are styling simple components or architecting large design systems, solid CSS skills will always be a competitive advantage.
  </p>

</div>
`
