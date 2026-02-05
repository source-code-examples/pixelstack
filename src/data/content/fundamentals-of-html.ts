/**
 * HTML content for the "Fundamentals of HTML" article.
 * Stored as a template string and rendered via `dangerouslySetInnerHTML`.
 * Used by the posts system through the `content` field in /data/posts.ts.
 */

export const fundamentalsOfHtml = `
<div class="prose prose-neutral dark:prose-invert max-w-none">

  <h2 class="text-2xl font-bold mt-8 mb-4">What Is HTML and Why It Matters</h2>
  <p class="leading-relaxed">
    HTML (HyperText Markup Language) is the backbone of every website. It defines the structure of a page and gives meaning to its content. Even with modern frameworks like React, Vue, or Next.js, HTML remains essential because all web interfaces ultimately render down to HTML in the browser.
  </p>

  <p class="leading-relaxed">
    Understanding HTML deeply helps you write cleaner code, improve accessibility, and build interfaces that search engines and assistive technologies can interpret correctly.
  </p>

  <h2 class="text-2xl font-bold mt-8 mb-4">Core Building Blocks of HTML</h2>
  <p class="leading-relaxed">
    HTML is made up of elements, each represented by tags. These elements describe the purpose of the content they wrap. For example:
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-html">
&lt;h1&gt;This is a heading&lt;/h1&gt;
&lt;p&gt;This is a paragraph of text.&lt;/p&gt;
&lt;a href="https://example.com"&gt;This is a link&lt;/a&gt;
</code>
  </pre>

  <p class="leading-relaxed">
    Every element can also include attributes that provide additional information:
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-html">
&lt;img src="image.jpg" alt="A beautiful landscape" /&gt;
</code>
  </pre>

  <p class="leading-relaxed">
    The <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">alt</code> attribute is especially important for accessibility and SEO.
  </p>

  <h2 class="text-2xl font-bold mt-8 mb-4">The Importance of Semantic HTML</h2>
  <p class="leading-relaxed">
    Semantic HTML uses meaningful tags to describe content. Instead of relying on generic
    <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;div&gt;</code> elements, semantic tags help browsers and assistive technologies understand the structure of your page.
  </p>

  <ul class="list-disc pl-6 space-y-1">
    <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;header&gt;</code> – introductory content or navigation</li>
    <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;main&gt;</code> – the primary content of the page</li>
    <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;section&gt;</code> – grouped thematic content</li>
    <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;article&gt;</code> – standalone content like a blog post</li>
    <li><code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;footer&gt;</code> – closing content or metadata</li>
  </ul>

  <p class="leading-relaxed mt-4">
    Using semantic HTML improves:
  </p>

  <ul class="list-disc pl-6 space-y-1">
    <li><strong>Accessibility</strong> – screen readers can navigate more easily</li>
    <li><strong>SEO</strong> – search engines understand your content better</li>
    <li><strong>Maintainability</strong> – your code becomes more readable</li>
  </ul>

  <h2 class="text-2xl font-bold mt-8 mb-4">Structuring a Modern Webpage</h2>
  <p class="leading-relaxed">
    A typical HTML page layout might look like this:
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-html">
&lt;header&gt;
  &lt;nav&gt;...&lt;/nav&gt;
&lt;/header&gt;

&lt;main&gt;
  &lt;article&gt;
    &lt;h1&gt;Page Title&lt;/h1&gt;
    &lt;p&gt;Your content goes here.&lt;/p&gt;
  &lt;/article&gt;
&lt;/main&gt;

&lt;footer&gt;
  &lt;p&gt;© 2024 Your Website&lt;/p&gt;
&lt;/footer&gt;
</code>
  </pre>

  <h2 class="text-2xl font-bold mt-8 mb-4">HTML and Modern Frameworks</h2>
  <p class="leading-relaxed">
    Even when working with frameworks like React or Next.js, you are still writing HTML — just in a slightly different syntax (JSX). Understanding HTML fundamentals helps you avoid common mistakes, such as invalid nesting or missing accessibility attributes.
  </p>

  <pre class="bg-[#1e1e1e] dark:bg-[#2a2a2a] text-gray-200 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed my-4">
<code class="language-jsx">
export default function Page() {
  return (
    &lt;main&gt;
      &lt;h1&gt;Hello World&lt;/h1&gt;
      &lt;p&gt;This is rendered using JSX, but it's still HTML under the hood.&lt;/p&gt;
    &lt;/main&gt;
  );
}
</code>
  </pre>

  <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
  <p class="leading-relaxed">
    Mastering HTML is not optional — it's the foundation of everything you build on the web. By understanding semantic structure, accessibility best practices, and how HTML interacts with modern tools, you set yourself up for long‑term success as a developer.
  </p>

  <p class="leading-relaxed">
    Whether you're building simple landing pages or complex web applications, strong HTML skills will always pay off.
  </p>

</div>
`
