import React, { useState } from "react";

function TaskInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <div className="bg-sky-500 p-6 rounded shadow-md text-white">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-3xl font-bold opacity-80">Child 1</h2>

        <div className="text-right">
          <h3 className="text-2xl font-bold">To-Do App!</h3>
          <p className="text-xs font-light">Add New To-Do</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter new task"
          className="p-2 rounded text-black outline-none focus:ring-2 focus:ring-sky-300"
        />

        <button
          type="submit"
          className="bg-sky-700 hover:bg-sky-800 self-end px-8 py-1 rounded transition duration-200 shadow-sm"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TaskInput;
