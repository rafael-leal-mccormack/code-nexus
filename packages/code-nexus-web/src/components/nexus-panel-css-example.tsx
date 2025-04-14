"use client"

import { NexusPanel } from "code-nexus-react";

export default function NexusPanelCssExample() {
  return (
    <NexusPanel 
      panelName="CSS Example" 
      type="css" 
      readonly={true}
      content="/* Styling for a card component */
.card {
  max-width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  background-color: #ffffff;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #2d3748;
}

.card-content {
  color: #4a5568;
  line-height: 1.5;
}"
    />
  );
} 