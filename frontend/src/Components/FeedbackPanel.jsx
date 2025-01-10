import React from 'react';

const FeedbackPanel = ({ feedback }) => {
  return (
    <div className="bg-gray-200 p-4 rounded mt-4">
      <h2 className="font-semibold text-lg">Feedback</h2>
      <p className="mt-2">{feedback}</p>
    </div>
  );
};

export default FeedbackPanel;
