import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
const [filter, setFilter] = useState("all");

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };


  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const updateTask = (id, newText) => {
  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    )
  );
};
const filteredTasks = tasks.filter((task) => {
  if (filter === "completed") return task.completed;
  if (filter === "pending") return !task.completed;
  return true; // all
});

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Manager App</h1>

      <TaskForm addTask={addTask} />
<div style={{ margin: "20px 0" }}>
  <button onClick={() => setFilter("all")}>All</button>
  <button onClick={() => setFilter("completed")} style={{ marginLeft: "10px" }}>
    Completed
  </button>
  <button onClick={() => setFilter("pending")} style={{ marginLeft: "10px" }}>
    Pending
  </button>
</div>

      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </div>
  );
}

export default App;
