import React, { useState } from "react";
import TaskInput from "./componenets/TaskInput";
import TaskList from "./componenets/TaskList";
function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-xl border-[6px] border-orange-400 p-6 bg-white rounded-xl shadow-2xl">
        <h1 className="text-blue-900 font-black text-3xl mb-6 tracking-tight">
          Task : To Do App
        </h1>

        <div className="flex flex-col gap-6">
          <TaskInput onAdd={addTask} />

          <TaskList
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleComplete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
