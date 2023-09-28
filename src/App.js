import "./App.css";
import React, { useState } from "react";

import AddTaskForm from "./components/AddTaskForm";
import Updateform from "./components/Updateform";
import ToDo from "./components/ToDo";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [toDo, setToDo] = useState([
    // { id: 1, title: "Task 1", status: false },
    // { id: 2, title: "Task 2", status: false },
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
  const cancelUpdate = () => {
    setUpdateData("");
  };

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
        <Updateform
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}
      {/* display todos */}
      {toDo && toDo.length ? "" : "No tasks"}

      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;

//when we hit the update button
// we take the updated objec from this temp state compare its id from the ids in our original state of to do list then
// we remove that record with that id from original to do list and
//add this updated object that is stored here in temp state into this task todo list
