import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { CodeSnippetProps } from '../types';

SyntaxHighlighter.registerLanguage('tsx', tsx);

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language = 'tsx' }) => {
  return (
    <div className="rounded-xl overflow-hidden my-6 border border-gray-800 shadow-2xl">
      <div className="bg-gray-900 px-4 py-2 border-b border-gray-800 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
        </div>
        <span className="text-xs text-gray-500 font-mono ml-2">example.{language}</span>
      </div>
      <SyntaxHighlighter 
        language={language} 
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: '1.5rem',
          fontSize: '0.9rem',
          background: '#0d1117',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
