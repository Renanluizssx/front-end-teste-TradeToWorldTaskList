import React, { useState, useEffect } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Carregar tarefas do localStorage quando o componente for montado
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Salvar tarefas no localStorage apenas se houver tarefas
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      localStorage.removeItem("tasks");
    }
  }, [tasks]);

  const handleAddTask = (title: string) => {
    if (title.trim() === "") return; // Não adiciona tarefas com título vazio
    const newTask: Task = { id: Date.now(), title, completed: false };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const handleToggleComplete = (taskId: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

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
