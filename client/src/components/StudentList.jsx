import React from "react";
import { withRouter } from "react-router";

function Students(props) {
  return (
    <div className="student-container">
      {props.students.map(student => (
        <div
          key={student.id}
          className="student-card"
          onClick={() => props.history.push(`/students/${student.id}`)}
        >
          <div className="image-cropper">
            <img alt={student.name} src={student.photo} />
          </div>
          <h3>
            <p>{student.name}</p>
          </h3>
        </div>
      ))}
      <div
        className="student-card"
        onClick={() => props.history.push("/new/student")}
      >
        <img
          alt="Create a new student"
          src="https://image.flaticon.com/icons/png/512/14/14980.png"
          className="plus-sign"
        />
        <h3>Create a new student</h3>
      </div>
    </div>
  );
}

export default withRouter(Students);
