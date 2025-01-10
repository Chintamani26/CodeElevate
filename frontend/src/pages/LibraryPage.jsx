// src/pages/LibraryPage.jsx
import React from 'react';
import ProblemLibrary from '../components/ProblemLibrary';

const LibraryPage = () => {
  return (
    <div className="library-page">
      <h1>Problem Library</h1>
      <ProblemLibrary />
    </div>
  );
};

export default LibraryPage;
