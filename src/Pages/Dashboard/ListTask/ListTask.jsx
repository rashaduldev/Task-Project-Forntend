import { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import toast from "react-hot-toast";

const ListTask = ({ tasks, setTasks }) => {
  const [todos, setTodos] = useState([]);
  const [progress, setProgress] = useState([]);
  const [complete, setComplete] = useState([]);

  useEffect(() => {
    const filterTodos = tasks.filter((task) => task.status === "todo");
    const filterProgress = tasks.filter((task) => task.status === "progress");
    const filterComplete = tasks.filter((task) => task.status === "complete");

    setTodos(filterTodos);
    setProgress(filterProgress);
    setComplete(filterComplete);
  }, [tasks]);

  const statuses = ["todo", "progress", "complete"];

  console.log(tasks);
  return (
    <div className="flex flow-row gap-20">
      {statuses.map((status, index) => (
        <Section
          key={index}
          status={status}
          tasks={tasks}
          setTasks={setTasks}
          todos={todos}
          progress={progress}
          complete={complete}
        ></Section>
      ))}
    </div>
  );
};

export default ListTask;

const Section = ({ status, tasks, setTasks, todos, progress, complete }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
      }));
      
  let text = "Todo";
  let bg = "bg-slate-400";
  let tasksToMap = todos;

  if (status === "progress") {
    text = "In Progress";
    bg = "bg-purple-500";
    tasksToMap = progress;
  }
  if (status === "complete") {
    text = "Complete";
    bg = "bg-green-500";
    tasksToMap = complete;
  }
  const addItemToSection=id=>{
    setTasks((prev)=>{
        const mTasks=prev.map((m)=>{
            if (m.id === id) {
                return {...m,status:status};
            }
            return m;
        });
        localStorage.setItem('tasks', JSON.stringify(mTasks));
        toast("Task Status updated",{icon:"u"})
        return mTasks;
    });
    console.log("Drop this id",id,status);
  }
  return (
    <div ref={drop} className={`w-64 rounded-md p-2 ${isOver ? "bg-slate-200" : ""}`}>
      <Header text={text} bg={bg} count={tasksToMap?.length}></Header>
      {tasksToMap?.length > 0 &&
        tasksToMap.map((task) => (
          <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
        ))}
    </div>
  );
};
const Header = ({ text, bg, count }) => {
  return (
    <div
      className={`${bg} flex flex-row items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}
    >
      <h2>
        {text}
        <span className="ml-3 bg-white text-black px-2 py-1 rounded-full ">
          {count}
        </span>
      </h2>
    </div>
  );
};

const Task = ({ task, tasks, setTasks }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item:{id: task.id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))

    const handleRemove=(id) => {
        console.log(id);
        const FTask=tasks.filter(tas=>tas.id !== id);
        localStorage.setItem('tasks', JSON.stringify(FTask));
        setTasks(FTask);
        toast("Task Remove Successfully")
    }

  return (
    <div ref={drag} className={`relative p-4 mt-8 shadow-2xl rounded-md cursor-grab ${isDragging?"opacity-25":"opacity-100"}`}>
      <p>{task.name}</p>
      <button className="absolute bottom-1 right-1 text-slate-500" onClick={()=>handleRemove(task.id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </div>
  );
};
