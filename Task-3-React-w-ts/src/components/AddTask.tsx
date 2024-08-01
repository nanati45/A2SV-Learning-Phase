import React, { useState } from "react";
import Header from "./header";
import TaskLists from "./TaskLists";
export interface Task {
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
      <Header
        task={task}
        handleAdd={handleAdd}
        handleInputChange={handleInputChange}
        handleUpdate={handleUpdate}
        editingTaskId={editingTaskId}
      />
      <TaskLists
        tasks={tasks}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default AddTask;
