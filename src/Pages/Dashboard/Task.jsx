const Task = () => {
  return (
    <div>
        <h1 className=" text-4xl font-bold text-center">All Task</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-[5%] mx-10">
        <button
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 mx-auto"
        >
          Button
        </button>
        <button
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-red-500 text-red-500 hover:border-red-400 hover:text-red-400 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 mx-auto"
        >
          Button
        </button>
        <button
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-yellow-500 text-yellow-500 hover:border-yellow-400 hover:text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 mx-auto"
        >
          Button
        </button>
      </div>
    </div>
  );
};

export default Task;
