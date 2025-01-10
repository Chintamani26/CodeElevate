import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { abcdef } from "@uiw/codemirror-theme-abcdef";


const CodeEditor = ({ initialCode = "", language = "javascript", onRun }) => {
  const [code, setCode] = useState(initialCode);

  // Language configuration
  const languageSupport = language === "python" ? python() : javascript();

  const handleRun = () => {
    if (onRun) {
      onRun(code); // Pass code to parent component
    }
  };

  return (
    <div className="flex flex-col h-full">
      <CodeMirror
        value={code}
        height="400px"
        theme={dracula}
        extensions={[languageSupport]}
        onChange={(value) => setCode(value)}
      />
      <div className="mt-4 text-right">
        <button
          onClick={handleRun}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Run Code
        </button>
      </div>
    </div>
  );
};

export default CodeEditor;
