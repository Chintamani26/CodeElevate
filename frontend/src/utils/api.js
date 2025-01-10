export const getProblems = async () => {
    try {
      const response = await fetch("/api/problems");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching problems:", error);
    }
  };
  
  export const submitSolution = async (solution) => {
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ solution }),
      });
      return response.json();
    } catch (error) {
      console.error("Error submitting solution:", error);
    }
  };
  