import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    students: [],
    selectedStudent: null
  };

  componentDidMount() {
    console.log("hi");
    axios
      .get("http://localhost:3000/students", {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(response => {
        this.setState({
          students: response.data.students
        });
      });
  }

  selectStudent = student => {
    this.setState({
      selectedStudent: student
    });
  };

  students = () => {
    return this.state.students.map(student => (
      <div key={student.id}>
        <Link
          to={`/students/${student.id}`}
          onClick={() => this.selectStudent(student)}
        >
          {student.name}
        </Link>
        <hr />
      </div>
    ));
  };

  student = () => {
    const student = this.state.selectedStudent;
    return (
      <div className="c-card">
        <img alt={student.name} src={student.photo} width="20%" />
        <h1>{student.name}</h1>
        <p>{student.description}</p>
      </div>
    );
  };

  render() {
    return (
      <Router>
        <div>
          <Link exact="true" to="/">
            Student App
          </Link>
          <Switch>
            <Route exact path="/" render={this.students} />
            <Route exact path="/students/:id" render={this.student} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
