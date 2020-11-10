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
