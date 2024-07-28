import React from "react";
import TaskListItem from "./TaskListItem";
import "./TaskListItem.css"
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleComplete, onDelete }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskListItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
