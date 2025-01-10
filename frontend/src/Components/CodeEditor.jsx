import React, { useState } from 'react';
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleRunCode = () => {
    console.log('Code to run:', code);
    // Add functionality to run the code here, e.g., via an API call or in-browser execution
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Code Editor</h1>
      <div className="my-4">
        <Editor
          height="400px"
          defaultLanguage="javascript"
          defaultValue="// Write your code here"
          onChange={handleEditorChange}
        />
      </div>
      <button
        onClick={handleRunCode}
        className="bg-blue-500 text-white px-6 py-2 rounded mt-4"
      >
        Run Code
      </button>
    </div>
  );
};

export default CodeEditor;
