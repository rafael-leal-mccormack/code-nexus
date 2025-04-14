"use client"

import { NexusPanel } from "code-nexus-react";

export default function NexusPanelExample() {
  return (
    <NexusPanel 
      panelName="JavaScript Example" 
      type="js" 
      readonly={true}
      content="// This is a read-only JavaScript panel
console.log(&apos;Hello from Nexus Panel&apos;);

function greet(name) {
  return `Hello, ${name}!`;
}

// This will output: Hello, World!
greet(&apos;World&apos;);"
    />
  );
} 