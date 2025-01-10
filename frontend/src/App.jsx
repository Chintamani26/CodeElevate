import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import CodeEditor from './components/CodeEditor';
import ProblemLibrary from './components/ProblemLibrary';
import Profile from './components/Profile';
import Header from './Components/Header';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/editor" element={<CodeEditor />} />
        <Route path="/library" element={<ProblemLibrary />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
