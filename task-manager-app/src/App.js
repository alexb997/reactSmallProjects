import "./App.css";
import Header from "./components/Header.js";
import { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import { Container } from "react-bootstrap";
import Tasks from "./components/Tasks.js";
import AddTask from "./components/AddTask.js";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  const getTasks = JSON.parse(localStorage.getItem("taskAdded"));
  useEffect(() => {
    if (getTasks == null) {
      setTasks([]);
    } else {
      setTasks(getTasks);
    }
  }, []);

  const addTask = (task) => {
    const id = uuidv4();
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    Swal.fire({
      icon: "success",
      title: "Adding",
      text: "You have successfully added a new task!",
    });
    localStorage.setItem("taskAdded", JSON.stringify([...tasks, newTask]));
  };

  const deleteTask = (id) => {
    const deleteTask = tasks.filter((task) => task.id !== id);
    setTasks(deleteTask);
    Swal.fire({
      icon: "success",
      title: "Deleting",
      text: "You have successfully deleted a task!",
    });
    localStorage.setItem("taskAdded", JSON.stringify(deleteTask));
  };

  const editTask = (id) => {
    const text = prompt("Task Name");
    const day = prompt("Day and Time");
    let data = JSON.parse(localStorage.getItem("taskAdded"));
    const myData = data.map((x) => {
      if (x.id === id) {
        return {
          ...x,
          text: text,
          day: day,
          id: uuidv4(),
        };
      }
      return x;
    });
    Swal.fire({
      icon: "success",
      title: "Editing",
      text: "You have successfully edited an existing task!",
    });
    localStorage.setItem("taskAdded", JSON.stringify(myData));
    window.location.reload();
  };
  return (
    <Container>
      <Header
        showForm={() => setShowAddTask(!showAddTask)}
        changeTextAndColor={showAddTask}
      />

      {showAddTask && <AddTask onSave={addTask} />}

      <h3>Number of Tasks: {tasks.length}</h3>

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
      ) : (
        "No Task Found!"
      )}
    </Container>
  );
}

export default App;
