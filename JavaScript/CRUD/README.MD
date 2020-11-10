## fetch

```js
// GET - read
const fetchUsers = () => {
  return fetch("http://localhost:4040/users")
    .then((response) => response.json())
    .then(console.log)
    .catch(console.warn);
};

// users/:id - dynamic value (:id)
const fetchUsersById = (userId) => {
  return fetch(`http://localhost:4040/users/${userId}`)
    .then((response) => response.json())
    .then(console.log)
    .catch(console.warn);
};

// POST - create
const addUser = (name, email) => {
  const url = "http://localhost:4040/users";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  };

  return fetch(url, options)
    .then((response) => response.json())
    .then(console.log)
    .catch(console.warn);
};

// PATCH - update
const updateUser = (userId, update) => {
  const url = `http://localhost:4040/users/${userId}`;
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(update),
  };

  return fetch()
    .then((response) => response.json())
    .then(console.log)
    .catch(console.warn);
};

// DELETE - delete
const deleteUser = (userId) => {
  const url = `http://localhost:4040/users/${userId}`;
  const options = {
    method: "DELETE",
  };

  return fetch(url, options)
    .then((response) => response.json())
    .then(console.log)
    .catch(console.warn);
};
```

## axios

```js
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
```

## async await && try catch

```js
import axios from "axios";

const url = "https://covid19.mathdro.id/api";

const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);
    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };

    return modifiedData;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};
```
