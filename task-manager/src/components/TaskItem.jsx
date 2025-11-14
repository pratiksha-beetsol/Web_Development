import { useState } from "react";

function TaskItem({ task, toggleTask, deleteTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleSave = () => {
    if (newText.trim() === "") return;
    updateTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <div style={{
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      marginBottom: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>

      {/* If editing */}
      {isEditing ? (
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          style={{ flex: 1, marginRight: "10px" }}
        />
      ) : (
        <span
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            cursor: "pointer"
          }}
          onClick={() => toggleTask(task.id)}
        >
          {task.text}
        </span>
      )}

      {/* Buttons */}
      <div>
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)} style={{ marginLeft: "5px" }}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button
              onClick={() => deleteTask(task.id)}
              style={{ marginLeft: "5px", color: "red" }}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TaskItem;
