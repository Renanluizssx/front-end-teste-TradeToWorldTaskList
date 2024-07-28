import React from "react";
import "./TaskListItem.css";

// Define the interface for a task
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// Define the props for the TaskListItem component
interface TaskListItemProps {
  task: Task;
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskListItem: React.FC<TaskListItemProps> = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
      />
    
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </span>
  
      <button className="task-list-item-button" onClick={() => onDelete(task.id)}>Delete</button>
    </div> 
  );
};

export default TaskListItem;
