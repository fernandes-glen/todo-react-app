const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  return (
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
  );
};
export default AddTaskForm;
