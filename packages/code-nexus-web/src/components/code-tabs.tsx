"use client"

import { useState } from 'react';
import CodeSnippet from './code-snippet';

interface CodeTabsProps {
  reactCode: string;
  htmlCode: string;
  language?: 'js' | 'html' | 'css';
}

export default function CodeTabs({ reactCode, htmlCode, language = 'js' }: CodeTabsProps) {
  const [activeTab, setActiveTab] = useState<'react' | 'html'>('react');

  const handleTabChange = (tab: 'react' | 'html') => {
    setActiveTab(tab);
  };

  return (
    <div className="rounded-lg overflow-hidden border border-gray-700">
      <div className="flex bg-gray-900 border-b border-gray-700">
        <button
          type="button"
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'react'
              ? 'bg-gray-800 text-blue-400 border-b-2 border-blue-400'
              : 'text-gray-400 hover:text-gray-300'
          }`}
          onClick={() => handleTabChange('react')}
        >
          React
        </button>
        <button
          type="button"
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'html'
              ? 'bg-gray-800 text-blue-400 border-b-2 border-blue-400'
              : 'text-gray-400 hover:text-gray-300'
          }`}
          onClick={() => handleTabChange('html')}
        >
          HTML
        </button>
      </div>
      <div className="bg-gray-800" key={`tab-content-${activeTab}`}>
        {activeTab === 'react' ? (
          <CodeSnippet 
            key={`react-code-${language}`} 
            code={reactCode.trim()} 
            language={language} 
          />
        ) : (
          <CodeSnippet 
            key={`html-code-${language}`} 
            code={htmlCode.trim()} 
            language={language} 
          />
        )}
      </div>
    </div>
  );
} 