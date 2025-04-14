"use client"

import { useState } from 'react';
import { CodeNexus } from "code-nexus-react";

export default function CodeNexusExample() {
  const [html, setHtml] = useState(`<div class="container">
  <h1>Hello World</h1>
  <p>Welcome to <strong>Code Nexus</strong>!</p>
  <button class="btn">Click Me</button>
</div>`);

  const [css, setCss] = useState(`/* Styles for the container */
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

/* Heading styles */
h1 {
  color: #3182ce;
  font-size: 2rem;
  margin-bottom: 16px;
}

/* Paragraph styles */
p {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 20px;
}

/* Button styles */
.btn {
  background-color: #3182ce;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #2c5282;
}`);

  const [javascript, setJavascript] = useState(`// Example JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Get the button element
  const button = document.querySelector('.btn');
  
  // Add a click event listener
  button.addEventListener('click', function() {
    alert('Button clicked!');
    
    // Change heading color
    const heading = document.querySelector('h1');
    heading.style.color = '#9f7aea';
    
    // Add some text to paragraph
    const paragraph = document.querySelector('p');
    paragraph.innerHTML += '<br>Button was clicked!';
  });
  
  console.log('Code Nexus is ready to go!');
});`);

  const handleContentChange = (event: any) => {
    const content = event.detail || event;
    if (content.html !== undefined) setHtml(content.html);
    if (content.css !== undefined) setCss(content.css);
    if (content.javascript !== undefined) setJavascript(content.javascript);
  };

  return (
    <div style={{ maxHeight: "90vh", display: "flex", flexDirection: "column" }}>
      <div className="bg-blue-900 text-white px-4 py-2 text-sm font-medium">
        Editable Example - Try modifying the code below
      </div>
      <CodeNexus
        html={html}
        css={css}
        javascript={javascript}
        onContentChange={handleContentChange}
        tabbed={true}
        style={{ maxHeight: "90vh", flex: 1 }}
      />
    </div>
  );
} 