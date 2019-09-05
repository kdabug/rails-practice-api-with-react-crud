import React, { Component } from "react";
import StudentEdit from "./StudentEdit";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    };
  }

  componentDidMount() {
    this.props.mountEditForm(this.props.id);
  }

  render() {
    const { student } = this.props;
    return (
      <div className="student-page">
        {student === undefined ? (
          <h2>Loading . . .</h2>
        ) : (
          <div>
            <div className="image-cropper">
              <img alt={student.name} src={student.photo} />
            </div>
            <h1>{student.name}</h1>
            <p>{student.description}</p>
            <a href={student.link}>Connect</a>
            {this.state.isEdit ? (
              <Route
                path={"/students/:id/edit"}
                render={() => (
                  <StudentEdit
                    handleFormChange={this.props.handleFormChange}
                    handleSubmit={e => {
                      e.preventDefault();
                      this.props.editStudent();
                      this.setState({ isEdit: false });
                      this.props.history.push(
                        `/students/${this.props.studentForm.id}`
                      );
                    }}
                    studentForm={this.props.studentForm}
                  />
                )}
              />
            ) : (
              <>
                <button
                  onClick={() => {
                    this.setState({
                      isEdit: true
                    });
                    this.props.history.push(`/students/${student.id}/edit`);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    this.props.deleteStudent(student.id);
                    this.props.history.push("/");
                  }}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Student);
