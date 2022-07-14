class TodoClient {
  constructor() {}

  fetchTodos() {
    return fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => json);
  }
}

module.exports = TodoClient;
