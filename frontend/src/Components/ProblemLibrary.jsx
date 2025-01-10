import React, { useEffect, useState } from "react";
import { getProblems } from "../utils/api";

const ProblemLibrary = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const fetchProblems = async () => {
      const fetchedProblems = await getProblems();
      setProblems(fetchedProblems);
    };
    fetchProblems();
  }, []);

  return (
    <div>
      <h1>Problem Library</h1>
      <ul>
        {problems.map((problem) => (
          <li key={problem.id}>{problem.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemLibrary;
