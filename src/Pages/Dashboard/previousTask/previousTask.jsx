import React from 'react';

const PreviousTasks = ({ tasks }) => {
  return (
    <div>
      <h2>Previous Tasks</h2>
      <ul>
        {tasks?.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default PreviousTasks;
