"use client"

import { useState, useCallback } from 'react';
import { CodeNexus } from "code-nexus-react";
import { useCodeFormatter } from '../hooks/useCodeFormatter';

export default function FormattedNexusExample() {
  const [html, setHtml] = useState('<div>\n  <h1>Hello World</h1>\n  <p>Welcome to <strong>Code Nexus</strong> with formatting capabilities!</p>\n</div>');
  const [css, setCss] = useState('h1 {\n  color: #3182ce;\n}\n\np {\n  color: #4a5568;\n  margin-top: 1rem;\n}');
  const [javascript, setJavascript] = useState('// Example JavaScript\nfunction greet() {\n  console.log("Hello from Code Nexus!");\n  const message = "Welcome!";\n  return message;\n}\n\ngreet();');
  
  const { formatCode } = useCodeFormatter();
  
  const handleFormatHtml = useCallback(async () => {
    const formatted = await formatCode(html, { parser: 'html' });
    setHtml(formatted);
  }, [html, formatCode]);
  
  const handleFormatCss = useCallback(async () => {
    const formatted = await formatCode(css, { parser: 'css' });
    setCss(formatted);
  }, [css, formatCode]);
  
  const handleFormatJs = useCallback(async () => {
    const formatted = await formatCode(javascript, { parser: 'babel' });
    setJavascript(formatted);
  }, [javascript, formatCode]);
  
  const handleFormatAll = useCallback(async () => {
    const [formattedHtml, formattedCss, formattedJs] = await Promise.all([
      formatCode(html, { parser: 'html' }),
      formatCode(css, { parser: 'css' }),
      formatCode(javascript, { parser: 'babel' })
    ]);
    
    setHtml(formattedHtml);
    setCss(formattedCss);
    setJavascript(formattedJs);
  }, [html, css, javascript, formatCode]);
  
  const handleContentChange = useCallback((event: any) => {
    const content = event.detail || event;
    setHtml(content.html);
    setCss(content.css);
    setJavascript(content.javascript);
  }, []);
  
  // Custom toolbar with format buttons
  const renderFormatToolbar = () => (
    <div className="flex justify-end gap-2 mb-2">
      <button 
        onClick={handleFormatAll}
        className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
        Format All
      </button>
    </div>
  );

  return (
    <div>
      {renderFormatToolbar()}
      <CodeNexus
        html={html}
        css={css}
        javascript={javascript}
        onContentChange={handleContentChange}
        tabbed={true}
      />
    </div>
  );
} 