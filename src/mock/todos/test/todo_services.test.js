const TodoClient = require("../todo_client");
const TodoService = require("../todo_services");

jest.mock("../todo_client");

describe("todo service test", () => {
  const fetchTodos = jest.fn(async () => [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
  ]);
  let todoService;

  // implement 로 mock mockmodule에 연결
  TodoClient.mockImplementation(() => {
    return {
      fetchTodos,
    };
  });

  beforeEach(() => {
    todoService = new TodoService(new TodoClient());
  });

  it("fetch Completed todos", async () => {
    const completedTodos = await todoService.fetchCompletedTodos();
    expect(completedTodos).toHaveLength(1);
    expect(completedTodos).toEqual([
      {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true,
      },
    ]);
  });
});
