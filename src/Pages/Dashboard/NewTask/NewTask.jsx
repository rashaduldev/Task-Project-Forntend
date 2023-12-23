// CreateTask.jsx

import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useForm } from 'react-hook-form';

const CreateTask = () => {
  const [tasks, setTasks] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const handleTaskSubmit = (data) => {
    const newTask = { id: tasks.length + 1, ...data };
    setTasks([...tasks, newTask]);
    reset(); // Clear form fields after submission
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const updatedTasks = Array.from(tasks);
    const [reorderedItem] = updatedTasks.splice(result.source.index, 1);
    updatedTasks.splice(result.destination.index, 0, reorderedItem);

    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl mb-4">Task Management Dashboard</h1>
      <form onSubmit={handleSubmit(handleTaskSubmit)} className="mb-8">
        <input
          type="text"
          className="border rounded px-3 py-2 mr-2 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Title"
          {...register('title', { required: true })}
        />
        <input
          type="text"
          className="border rounded px-3 py-2 mr-2 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Description"
          {...register('description')}
        />
        {/* Other form fields for deadline, priority, etc. */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring"
        >
          Add Task
        </button>
      </form>
      // TaskDashboard.jsx

// ... (previous code remains unchanged)

<div className="flex justify-between space-x-4">
  <div className="w-1/3">
    <h2 className="text-xl mb-2">To-Do</h2>
    {/* To-Do List */}
  </div>
  <div className="w-1/3">
    <h2 className="text-xl mb-2">Ongoing</h2>
    <Droppable droppableId="ongoing">
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {/* Ongoing tasks */}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
  <div className="w-1/3">
    <h2 className="text-xl mb-2">Completed</h2>
    <Droppable droppableId="completed">
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {/* Completed tasks */}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
</div>

    </div>
  );
};

export default CreateTask;
