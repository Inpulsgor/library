import axios from "axios";

axios.defaults.baseURL = "http://localhost:4040/users";
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

// axios GET - read
const fetchUsers = () => {
  return axios.get("/users").then(console.log).catch(console.warn);
};
// users/:id - dynamic value (:id)
const fetchUsersById = (userId) => {
  return axios.get(`/users/${userId}`).then(console.log).catch(console.warn);
};

// axios POST - create
const addUser = (name, email) => {
  const body = { name, email };
  return axios.post("/users", body).then(console.log).catch(console.warn);
};

// axios PATCH - update
const updateUser = (userId, update) => {
  return axios
    .patch(`/users/${userId}`, update)
    .then(console.log)
    .catch(console.warn);
};

// axios DELETE - delete
const deleteUser = (userId) => {
  return axios.delete(`/users/${userId}`).then(console.log).catch(console.warn);
};
