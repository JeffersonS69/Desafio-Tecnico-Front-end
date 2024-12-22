import React, { FC } from "react";
import { TaskListProps } from "../interfaces/Props";
import TaskItem from "./TaskItem";

const TaskList: FC<TaskListProps> = ({
  tasks,
  onToggle,
  onDelete,
  onToggleTaskEdit,
}) => {
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onToggleTaskEdit={onToggleTaskEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;
