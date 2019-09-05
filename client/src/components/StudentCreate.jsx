import React from "react";
import { withRouter } from "react-router-dom";

function StudentCreate(props) {
  return (
    <div className="create-form">
      <h2>Create a new student</h2>
      <form onSubmit={props.newStudent}>
        <div className="input-ctn">
          <p>Student's name:</p>

          <input
            type="text"
            name="name"
            value={props.studentForm.name}
            onChange={props.handleFormChange}
          />
        </div>

        <div className="input-ctn">
          <p>Photo Link:</p>
          <input
            type="text"
            name="photo"
            value={props.studentForm.photo}
            onChange={props.handleFormChange}
          />
        </div>

        <div className="input-ctn">
          <p>Student's Description:</p>
          <input
            type="text"
            name="description"
            value={props.studentForm.description}
            onChange={props.handleFormChange}
          />
        </div>

        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default withRouter(StudentCreate);
