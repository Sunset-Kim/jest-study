const TodoClient = require("./todo_client");

class TodoService {
  constructor() {
    this.todoClient = new TodoClient();
  }

  fetchCompletedTodos() {
    return this.todoClient
      .fetchTodos() //
      .then((items) => items.filter((item) => item.completed));
  }
}

module.exports = TodoService;
