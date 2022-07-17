class LoginService {
  constructor(LoginClient) {
    this.LoginClient = LoginClient;
    this.isLoggedIn = false;
    this.token = undefined;
  }

  async login(email, password) {
    if (!this.isLoggedIn) {
      this.LoginClient.login(email, password).then((data) => {
        this.token = data.token;
        this.isLoggedIn = true;
      });
    }
  }
}

module.exports = LoginService;
