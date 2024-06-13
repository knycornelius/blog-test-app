import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const source = `
  ---
  title: "next-mdx-remote"
  date: "2024-06-13"
  ---
  
  # Heading Level 1
  
  ## Heading Level 2
  
  ### Heading Level 3
  
  #### Heading Level 4
  
  ##### Heading Level 5
  
  ###### Heading Level 6
  
  ---
  
  ## Emphasis
  
  _This text is italicized_
  
  _This text is also italicized_
  
  **This text is bold**
  
  **This text is also bold**
  
  **_This text is bold and italic_**
  
  **_This text is also bold and italic_**
  
  ---
  
  ## Blockquotes
  
  > This is a blockquote.
  
  > This is a blockquote
  > that spans multiple lines.
  
  ---
  
  ## Lists
  
  ### Unordered List
  
  - Item 1
  - Item 2
    - Subitem 1
    - Subitem 2
  - Item 3
  
  ### Ordered List
  
  1. First item
  2. Second item
     1. Subitem 1
     2. Subitem 2
  3. Third item
  
  ---
  
  ## Code
  
  ### Inline Code
  
  Here is some \`inline code\`.
  
  ### Code Block
  
  \`\`\`
  const message = "Hello, World!";
  console.log(message);
  \`\`\`
  
  ### Code Block with Language Specified
  
  \`\`\`javascript
  function helloWorld(name) {
    return \`Hello World!\`;
  }
  \`\`\`
  
  ---
  
  ## Links

  I **love** using [Next.js](https://nextjs.org/)

  ---

  ## Components
  
  <button>Button</button>
  
  <button style={{ backgroundColor: "black", color: "white" }}>Button</button>
  `;
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
}

export default function TestPage({ source }) {
  return (
    <div className="wrapper">
      <MDXRemote {...source} />
    </div>
  );
}
