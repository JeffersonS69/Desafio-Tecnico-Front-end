import React, { FC, useState } from "react";
import { TaskInputProps } from "../interfaces/Props";

const TaskInput: FC<TaskInputProps> = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim()) {
      onAdd(task);
      setTask("");
    }
  };

  return (
    <div className="flex gap-2 align-center justify-between bg-whitePerso rounded-2xl pl-4 mb-4">
      <input
        className="flex-1 bg-transparent border-none outline-none p-2"
        type="text"
        value={task}
        placeholder="Añade tu texto"
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button
        onClick={handleAdd}
        className="bg-orangePerso hover:bg-orangePerso100 border-none outline-none py-2 px-4 sm:px-8 text-white cursor-pointer rounded-2xl"
      >
        Añadir
      </button>
    </div>
  );
};

export default TaskInput;
