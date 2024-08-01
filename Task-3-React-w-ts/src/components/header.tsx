import React from "react";

interface HeaderProps {
  task: string;
  editingTaskId: string | null;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdate: () => void;
  handleAdd: () => void;
}

const header: React.FC<HeaderProps> = ({
  task,
  handleAdd,
  handleInputChange,
  handleUpdate,
  editingTaskId,
}) => {
  return (
    <div>
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
    </div>
  );
};

export default header;
