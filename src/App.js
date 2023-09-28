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

  const [updateData, setUpdateData] = useState("");

  //function to add task

  const addTask = () => {
    // if there is a new task
    if (newTask) {
      //we create a id by using this
      let num = toDo.length + 1;
      // then we create a new todo object
      let newEntry = { id: num, title: newTask, status: false };
      //then we append the new task to the exsisting array using spread operator
      // ... means exsiting too do elements  and then we add a new Entry that is new task
      setToDo([...toDo, newEntry]);
      //and after appedning and create a new todo task list we empty the input field using
      setNewTask(" ");
    }
  };

  //function to delete task
  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  //function to mark task as done
  //so what happens here is that
  // the id passed to the mardone is the id which we ant to update as done
  // so we map through ecah of the task in to do
  //if the task id of the list matches with the id which we pressed then it returns the new array with the id of
  //that task as true so there will be a line strike on that task
  // and if no id is matched then it returns the task unchanged
  //and then chnages the state of settodo
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  //function to cancel update
  const cancelUpdate = () => {};

  //function to change task for update
  //read
  // here we update the data and can use new data and type of the
  //exiting input feild
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  //function to update task

  const updateTask = () => {
    // remove old todo with  with the same id and get the remaning data using filter method
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData(" ");
  };

  return (
    <div className="container App">
      <br></br>
      <h2> TO DO APP</h2>
      <br></br>

      {/* update task  */}
      {updateData ? (
        <>
          <div className="row">
            <div className="col">
              <input
                //read
                //The updateData && updateData.title part is used to ensure that the value is only displayed when updateData exists
                // and has a title. It helps prevent errors when updateData is initially empty.
                value={updateData && updateData.title}
                onChange={(e) => changeTask(e)}
                className="form-control form-control-lg"
              ></input>
            </div>
            <div className="col-auto">
              <button
                className="btn btn-lg btn-success mr-20"
                onClick={updateTask}
              >
                Update
              </button>
              <button className="btn btn-lg btn-warning">Cancel</button>
            </div>
          </div>
          <br />
        </>
      ) : (
        <>
          {/* add task */}
          <div className="row">
            <div className="col">
              <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="form-control form-control-lg"
              />
            </div>
            <div className="col-auto">
              <button className="btn btn-lg btn-success" onClick={addTask}>
                Add Task
              </button>
            </div>
          </div>
          <br />
        </>
      )}

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
                    <span
                      title="Completed/ Not Completed"
                      onClick={(e) => markDone(task.id)}
                    >
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    {/* if task status is true then dont show pen icon or else show the pen icon */}
                    {task.status ? null : (
                      //read
                      <span
                        title="edit"
                        // so when we click , we set the updated data as id as task id so that we click on that specfic task .
                        onClick={() =>
                          setUpdateData({
                            id: task.id,
                            title: task.title,
                            status: task.status ? true : false,
                          })
                        }
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                    )}

                    <span title="delete" onClick={() => deleteTask(task.id)}>
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

//when we hit the update button
// we take the updated objec from this temp state compare its id from the ids in our original state of to do list then
// we remove that record with that id from original to do list and
//add this updated object that is stored here in temp state into this task todo list
