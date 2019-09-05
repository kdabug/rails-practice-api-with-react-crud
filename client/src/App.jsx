import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import StudentList from "./components/StudentList";
import Student from "./components/Student";
import StudentCreate from "./components/StudentCreate";

import {
  createStudent,
  readAllStudents,
  updateStudent,
  destroyStudent
} from "./services/api-helper";

import "./App.css";

class App extends Component {
  state = {
    students: [],
    studentForm: {
      name: "",
      description: "",
      link: "",
      photo: ""
    }
  };

  getStudents = async () => {
    const students = await readAllStudents();
    this.setState({
      students
    });
  };

  newStudent = async e => {
    e.preventDefault();
    const student = await createStudent(this.state.studentForm);
    this.setState(prevState => ({
      students: [...prevState.students, student],
      studentForm: {
        name: "",
        description: "",
        link: "",
        photo: ""
      }
    }));
  };

  editStudent = async () => {
    const { studentForm } = this.state;
    await updateStudent(studentForm.id, studentForm);
    this.setState(prevState => ({
      students: prevState.students.map(student =>
        student.id === studentForm.id ? studentForm : student
      )
    }));
  };

  deleteStudent = async id => {
    await destroyStudent(id);
    this.setState(prevState => ({
      students: prevState.students.filter(student => student.id !== id)
    }));
  };

  handleFormChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      studentForm: {
        ...prevState.studentForm,
        [name]: value
      }
    }));
  };

  mountEditForm = async id => {
    const students = await readAllStudents();
    const student = students.find(el => el.id === parseInt(id));
    this.setState({
      students,
      studentForm: student
    });
  };

  componentDidMount() {
    this.getStudents();
  }

  render() {
    return (
      <div>
        <header>
          <h1>
            <Link
              to="/"
              onClick={() =>
                this.setState({
                  studentForm: {
                    name: "",
                    description: "",
                    link: "",
                    photo: ""
                  }
                })
              }
            >
              Course App
            </Link>
          </h1>
          <h3>Find the student for you.</h3>
        </header>
        <Route
          exact
          path="/"
          render={() => (
            <StudentList
              students={this.state.students}
              studentForm={this.state.studentForm}
              handleFormChange={this.handleFormChange}
              newStudent={this.newStudent}
            />
          )}
        />
        <Route
          path="/new/student"
          render={() => (
            <StudentCreate
              handleFormChange={this.handleFormChange}
              studentForm={this.state.studentForm}
              newStudent={this.newStudent}
            />
          )}
        />
        <Route
          path="/students/:id"
          render={props => {
            const { id } = props.match.params;
            const student = this.state.students.find(
              el => el.id === parseInt(id)
            );
            return (
              <Student
                id={id}
                student={student}
                handleFormChange={this.handleFormChange}
                mountEditForm={this.mountEditForm}
                editStudent={this.editStudent}
                studentForm={this.state.studentForm}
                deleteStudent={this.deleteStudent}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default App;
