import React, { useState } from 'react';

const CreateTask = ({ addTask }) => {
  const [taskContent, setTaskContent] = useState('');

  const handleInputChange = (event) => {
    setTaskContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskContent.trim() !== '') {
      addTask(taskContent);
      setTaskContent('');
    }
  };

  return (
    <div>
      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskContent}
          onChange={handleInputChange}
          placeholder="Enter task details"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
