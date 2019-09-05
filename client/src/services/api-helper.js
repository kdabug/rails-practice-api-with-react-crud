const baseUrl = "http://localhost:3000";

const createStudent = data => {
  const opts = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };
  return fetch(`${baseUrl}/students`, opts).then(resp => resp.json());
};

const readAllStudents = () => {
  return fetch(`${baseUrl}/students`)
    .then(resp => resp.json())
    .then(json => json.students);
};

const readOneStudent = id => {
  return fetch(`${baseUrl}/students/${id}`).then(resp => resp.json());
};

const updateStudent = (id, data) => {
  const opts = {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };
  return fetch(`${baseUrl}/students/${id}`, opts).then(resp => resp.json());
};

const destroyStudent = id => {
  const opts = {
    method: "DELETE"
  };
  return fetch(`${baseUrl}/students/${id}`, opts);
};

export {
  createStudent,
  readAllStudents,
  readOneStudent,
  updateStudent,
  destroyStudent
};
