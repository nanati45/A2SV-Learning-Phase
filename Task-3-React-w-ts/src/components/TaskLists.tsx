import React from "react";
import { Task } from "./AddTask";

interface TaskProps {
  tasks: Task[];

  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
}
const TaskLists: React.FC<TaskProps> = ({
  tasks,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div>
      {tasks.map((t) => (
        <div key={t.id} className="task-item">
          {t.name}
          <div className="task-actions">
            <button className="edit-button" onClick={() => handleEdit(t.id)}>
              Edit
            </button>
            <button
              className="delete-button"
              onClick={() => handleDelete(t.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskLists;
