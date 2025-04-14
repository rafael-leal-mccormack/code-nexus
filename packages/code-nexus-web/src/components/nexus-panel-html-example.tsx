"use client"

import { NexusPanel } from "code-nexus-react";

export default function NexusPanelHtmlExample() {
  return (
    <NexusPanel 
      panelName="HTML Example" 
      type="html" 
      readonly={true}
      content='<div class="card">
  <h2 class="card-title">Welcome to Code Nexus</h2>
  <div class="card-content">
    <p>This is an example of HTML content displayed in a Nexus Panel component.</p>
    <ul>
      <li>Simple to integrate</li>
      <li>Framework agnostic</li>
      <li>Customizable appearance</li>
    </ul>
    <a href="#">Learn more &rarr;</a>
  </div>
</div>'
    />
  );
} 