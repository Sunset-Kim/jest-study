class LoginClient {
  login(email, password) {
    return fetch({
      url: "https://reqres.in/api/login",
      body: {
        email,
        password,
      },
    }).then((res) => res.json());
  }
}
