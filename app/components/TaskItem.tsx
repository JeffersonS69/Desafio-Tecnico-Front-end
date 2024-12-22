import React, { FC } from "react";
import { TaskItemProps } from "../interfaces/Props";

const TaskItem: FC<TaskItemProps> = ({
  task,
  onToggle,
  onDelete,
  onToggleTaskEdit,
}) => {
  return (
    <div className="flex items-center justify-between p-3 gap-4">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="h-4 w-4 appearance-none cursor-pointer border-2 rounded border-white outline outline-stone-500 checked:outline-orangePerso outline-2 checked:bg-orangePerso"
      />
      <textarea
        disabled={task.completed}
        value={task.text}
        className={`flex-1 ${
          task.text.length > 50 ? "h-auto" : "h-6"
        }  resize-none outline-none disabled:bg-transparent ${
          task.completed ? "line-through text-gray-500" : ""
        }`}
        onChange={(e) => onToggleTaskEdit(task.id, e.target.value)}
      />
      <svg
        fill="#78716c"
        width="24px"
        height="24px"
        onClick={() => onDelete(task.id)}
        viewBox="-3.5 0 19 19"
        xmlns="http://www.w3.org/2000/svg"
        className="cf-icon-svg hover:fill-red-600 cursor-pointer"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"></path>
        </g>
      </svg>
    </div>
  );
};

export default TaskItem;
