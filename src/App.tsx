import React, { useState, useEffect } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

// Define the interface for a task
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  // State to store the list of tasks
  const [tasks, setTasks] = useState<Task[]>([]);

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever the tasks state changes
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      localStorage.removeItem("tasks");
    }
  }, [tasks]);

  // Function to add a new task
  const handleAddTask = (title: string) => {
    if (title.trim() === "") return; // Do not add a task if the title is empty
    const newTask: Task = { id: Date.now(), title, completed: false };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  // Function to toggle the completion status of a task
  const handleToggleComplete = (taskId: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete a task
  const handleDeleteTask = (taskId: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  // Calculate the total number of tasks, completed tasks, and incomplete tasks
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const incompleteTasks = totalTasks - completedTasks;

  return (
    <div className="container">
      <h1 className="title">Trade to World Task List</h1>
      <TaskForm onAddTask={handleAddTask} />
   <TaskList tasks={tasks} onToggleComplete={handleToggleComplete} onDelete={handleDeleteTask} />
      <div className="task-stats">
        <p>Total Tasks: {totalTasks}</p>
        <p>Completed Tasks: {completedTasks}</p>
        <p>Incomplete Tasks: {incompleteTasks}</p>
      </div>
    </div>
  );
};

export default App;
