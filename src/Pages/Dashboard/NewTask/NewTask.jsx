import { v4 as uuidv4 } from 'uuid';
import { useState} from 'react';
import toast from 'react-hot-toast';

const NewTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({
    id: '',
    name: '',
    status: 'todo',
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    if (task.name.length<3) {
      return toast.error("Must have more 3 characters");
    }
    if (task.name.length>100) {
      return toast.error("Must haven't more than 100 characters");
    }

    const newTask = {
      id: uuidv4(),
      name: task.name,
      status: 'todo',
    };
    toast.success("Task created successfully")

    setTasks((prevTasks) => [...prevTasks, newTask]);
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Add the new task to the tasks array
    setTask({ id: '', name: '', status: 'todo' }); // Reset the task state
  };

  return (
    <div>
      <h1 className="text-2xl font-bold my-4">Create task {tasks?.length}</h1>
      <div>
        <form className="flex gap-5" onSubmit={handleSubmit}>
          {/* Register your input into the hook by invoking the "register" function */}
          <input
            onChange={(e) => setTask({ ...task, id: uuidv4(), name: e.target.value })}
            value={task.name}
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-blue-500 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            placeholder="Type task"
          />
          <input
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer"
            type="submit"
            value="Create"
          />
        </form>
        
      </div>
    </div>
  );
};

export default NewTask;
