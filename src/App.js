import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [toDo, setToDo] = useState([
    { id: 1, title: "Task 1", status: false },
    { id: 2, title: "Task 2", status: false },
  ]);

  // temp
  // this is for holding temp data that will be added as new task in task list

  const [newTask, setNewTask] = useState("");
  //hold data that is being edited

  const [updateData, setUpdateDate] = useState("");

  //function to add task

  const addTask = () => {};

  //function to delete task
  const deleteTask = (id) => {};

  //function to mark task as done
  const markDone = (id) => {};

  //function to cancel update
  const cancelUpdate = () => {};

  //function to chnage task for update
  const changeTask = (e) => {};

  //function to update task

  const updateTask = () => {};

  return (
    <div className="container App">
      <br></br>
      <h2> TO DO APP</h2>
      <br></br>
    </div>
  );
}

export default App;
