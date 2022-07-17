const TodoService = require("../todo_services_stub");
const StubTodoClient = require("./stub_todo_client");

describe("TodoService - Stub", () => {
  let todoService;

  beforeEach(() => {
    todoService = new TodoService(new StubTodoClient());
  });

  // done 방식
  it("Completed Todo done", (done) => {
    todoService.fetchCompletedTodos().then((item) => {
      expect(item).toEqual([
        {
          userId: 1,
          id: 4,
          title: "et porro tempora",
          completed: true,
        },
      ]);

      done();
    });
  });

  // return 방식
  it("Completed Todo return", () => {
    return todoService.fetchCompletedTodos().then((res) => {
      expect(res).toEqual([
        {
          userId: 1,
          id: 4,
          title: "et porro tempora",
          completed: true,
        },
      ]);
    });
  });

  // async await 방식
  it("Completed Todo", async () => {
    const result = await todoService.fetchCompletedTodos();

    expect(result).toEqual([
      {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true,
      },
    ]);
  });
});
