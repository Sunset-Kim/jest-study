class TodoService {
  constructor(todoClient) {
    this.todoClient = todoClient;
  }

  fetchCompletedTodos() {
    return this.todoClient
      .fetchTodos() //
      .then((items) => items.filter((item) => item.completed));
  }
}

module.exports = TodoService;
