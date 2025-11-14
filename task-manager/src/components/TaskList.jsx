import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, deleteTask, updateTask }) {
  return (
    <div>
      {tasks.length === 0 && <p>No tasks available</p>}

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
  
}

export default TaskList;
