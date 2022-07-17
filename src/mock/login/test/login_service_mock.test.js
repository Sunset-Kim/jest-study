const LoginClient = require("../login_client");
const LoginService = require("../login_service");

// 특정상황에 검사를 하고 안하고 체크를 원한다면 mock을 써야함

jest.mock("../login_client");

describe("Login Test Mock", () => {
  let loginService;
  let loginClient;

  const login = jest.fn(async () => ({
    token: "QpwL5tke4Pnpja7X4",
  }));

  LoginClient.mockImplementation(() => {
    return {
      login,
    };
  });

  beforeEach(() => {
    loginClient = new LoginClient();
    loginService = new LoginService(loginClient);
  });

  it("Login 첫번쨰", async () => {
    await loginService.login();

    expect(loginService.isLoggedIn).toBe(true);
    expect(loginService.token).toEqual("QpwL5tke4Pnpja7X4");
  });

  it("login 두번째", async () => {
    await loginService.login();
    await loginService.login();

    expect(login).toBeCalledTimes(1);
  });
});
