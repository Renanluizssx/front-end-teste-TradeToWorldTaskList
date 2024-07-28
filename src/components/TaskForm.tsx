import React, { useState } from "react";
import "./TaskForm.css"
interface TaskFormProps {
  onAddTask: (title: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTask(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
