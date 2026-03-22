import React from "react";

function TaskList({ tasks, onDelete, onToggle }) {
  return (
    <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 min-h-[250px] relative">
      <div className="flex justify-between items-center mb-8">
        <p className="text-orange-700 font-semibold italic text-lg">
          Let's get some work done!
        </p>
        <h2 className="text-4xl font-bold text-sky-500 opacity-80">Child 2</h2>
      </div>

      <div className="space-y-4">
        {tasks.length === 0 ? (
          <p className="text-gray-400 text-center mt-10">emptey list !!</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="flex items-center gap-3 group">
              <div
                onClick={() => onToggle(task.id)}
                className={`flex-1 p-3 bg-white border-2 border-gray-200 rounded cursor-pointer transition-all duration-300
                  ${task.completed ? "line-through text-gray-400 bg-gray-50 border-gray-100 italic" : "text-gray-700 font-medium hover:border-sky-300 shadow-sm"}`}
              >
                {task.text}
              </div>

              <button
                onClick={() => onDelete(task.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition shadow-md active:scale-95"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      <div className="absolute bottom-2 left-0 w-full text-center">
        <p className="text-[10px] text-gray-400">
          Proudly powered by Cosmic JS
        </p>
      </div>
    </div>
  );
}

export default TaskList;
