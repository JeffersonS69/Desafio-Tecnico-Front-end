"use client";
import { FC } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import useTasks from "./hooks/useTasks";

const Home: FC = () => {
  const { tasks, addTask, toggleTask, deleteTask, toggleTaskEdit } = useTasks();

  return (
    <div className="flex items-center justify-center p-16 md:p-20">
      <main className="flex flex-col gap-4 sm:w-full sm:max-w-2xl p-4 sm:p-6 bg-white rounded-md drop-shadow-2xl">
        <h1 className="text-2xl text-[#002765] font-bold">Lista de Tareas📑</h1>
        <TaskInput onAdd={addTask} />
        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onToggleTaskEdit={toggleTaskEdit}
        />
      </main>
    </div>
  );
};

export default Home;
