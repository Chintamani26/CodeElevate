import React, { useState } from "react";
import CodeEditor from "../Components/CodeEditor";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const EditorPage = () => {
  const [output, setOutput] = useState("");

  const handleRunCode = (code) => {
    try {
      // Mock code execution (replace with actual logic later)
      const result = `Code executed successfully!\nOutput: ${code.length} characters`;
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Solve Your Problem</h1>
        <div className="bg-white p-4 shadow rounded-lg">
          <CodeEditor initialCode="// Write your code here" onRun={handleRunCode} />
          <div className="mt-4 p-4 bg-gray-100 rounded">
            <h2 className="text-lg font-bold">Output</h2>
            <pre className="mt-2 p-2 bg-black text-white rounded overflow-auto">{output}</pre>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EditorPage;
