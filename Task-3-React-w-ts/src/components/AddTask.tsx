import React, { useState } from "react";

interface Task {
  id: string;
  name: string;
  isCompleted: boolean;
}

const AddTask: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleAdd = () => {
    if (task.trim() !== "") {
      const newTask: Task = {
        id: Math.random().toString(36).substring(2, 9),
        name: task,
        isCompleted: false,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTask("");
    }
  };

  const handleEdit = (id: string) => {
    setEditingTaskId(id);
    const taskToEdit = tasks.find((t) => t.id === id);
    if (taskToEdit) {
      setTask(taskToEdit.name);
    }
  };

  const handleUpdate = () => {
    if (editingTaskId !== null && task.trim() !== "") {
      const updatedTasks = tasks.map((t) =>
        t.id === editingTaskId ? { ...t, name: task } : t
      );
      setTasks(updatedTasks);
      setEditingTaskId(null);
      setTask("");
    }
  };

  const handleDelete = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      <h1>To Do List</h1>
      <input
        type="text"
        placeholder="Add your Task"
        value={task}
        onChange={handleInputChange}
      />
      {editingTaskId !== null ? (
        <button className="edit-button" onClick={handleUpdate}>
          Update
        </button>
      ) : (
        <button className="add-button" onClick={handleAdd}>
          Add Task
        </button>
      )}
      <div>
        {tasks.map((t) => (
          <div key={t.id} className="task-item">
            {t.name}
            <div className="task-actions">
              <button className="edit-button" onClick={() => handleEdit(t.id)}>
                Edit
              </button>
              <button className="delete-button" onClick={() => handleDelete(t.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddTask;