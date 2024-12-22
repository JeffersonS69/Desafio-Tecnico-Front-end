import { useEffect, useState } from "react";
import { Task } from "../interfaces/Props";

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: string) => {
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        text: task,
        completed: false,
      },
    ]);
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleTaskEdit = (id: string, text: string) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: text } : task))
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return { tasks, addTask, toggleTask, deleteTask, toggleTaskEdit };
};

export default useTasks;
