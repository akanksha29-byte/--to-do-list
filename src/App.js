import "./styles.css";

import Form from "./components/Form";
import Tasks from "./components/Tasks";
import { useState } from "react";

let count = 0;
export default function App() {
  const [tasks, setTasks] = useState([]);
  const [temp, setTemp] = useState("");

  const handleClick = () => {
    count++;
    setTasks([...tasks, { id: count, task: temp }]);
  };

  const handleDelete = (task) => {
    let copyTasks = [...tasks];
    copyTasks = copyTasks.filter((t) => t.id !== task.id);
    setTasks(copyTasks);
  };

  const handleEdit = (task) => {
    console.log(task);
  };

  return (
    <div className="App">
      <Form temp={temp} setTemp={setTemp} handleClick={handleClick} />
      <Tasks
        tasks={tasks}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
