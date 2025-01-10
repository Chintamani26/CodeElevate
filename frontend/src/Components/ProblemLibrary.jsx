import React, { useState } from 'react';

const ProblemLibrary = () => {
  const [problems, setProblems] = useState([
    { id: 1, title: 'Reverse an Array', difficulty: 'Easy' },
    { id: 2, title: 'Binary Search', difficulty: 'Medium' },
    { id: 3, title: 'Dynamic Programming', difficulty: 'Hard' },
  ]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Problem Library</h1>
      <div className="mt-4">
        {problems.map((problem) => (
          <div
            key={problem.id}
            className="bg-gray-100 p-4 rounded mb-4 hover:bg-gray-200 cursor-pointer"
          >
            <h2 className="text-xl font-medium">{problem.title}</h2>
            <p className="text-sm text-gray-600">{problem.difficulty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemLibrary;
