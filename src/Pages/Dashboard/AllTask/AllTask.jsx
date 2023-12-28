import { useEffect, useState } from "react";
import NewTask from "../NewTask/NewTask";
import ListTask from "../ListTask/ListTask";
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


const AllTask = () => {
    const [tasks,setTasks]=useState([]);

    useEffect   (() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      }, [setTasks]);

    return (
       <DndProvider backend={HTML5Backend}>
        <Toaster />
        <h1 className="text-center">Total Task: {tasks.length}</h1>
         <div className="bg-stone-200 w-full h-screen flex flex-col items-center pt-5 gap-20">
            <NewTask tasks={tasks} setTasks={setTasks}></NewTask>
            <ListTask tasks={tasks} setTasks={setTasks}></ListTask>
        </div>
       </DndProvider>
    );
};

export default AllTask;