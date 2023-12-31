const Updateform = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
  return (
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
          <button className="btn btn-lg btn-success mr-20" onClick={updateTask}>
            Update
          </button>
          <button className="btn btn-lg btn-warning" onClick={cancelUpdate}>
            Cancel
          </button>
        </div>
      </div>
      <br />
    </>
  );
};
export default Updateform;
