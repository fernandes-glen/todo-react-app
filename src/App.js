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

      {/* add task */}
      <div className="row">
        <div className="col">
          <input className="form-control form-control-lg" />
        </div>
        <div className="col-auto">
          <button className="btn btn-lg btn-success">Add Task</button>
        </div>
      </div>
      <br />

      {/* display todos */}

      {toDo && toDo.length ? "" : "No tasks"}

      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="col taskBg">
                  {/* if task.status is true then display done esle no */}
                  <div className={task.status ? "done" : ""}>
                    <span className="taskNumber">{index + 1}</span>
                    <span className="taskText">{task.title}</span>
                  </div>
                  <div className="iconsWrap">
                    <span title="Completed/ Not Completed">
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    <span title="edit">
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                    <span title="delete">
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </div>
  );
}

export default App;
