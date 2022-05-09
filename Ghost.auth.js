import instance from "./src/config/Axios.Config.js";

export default class GhostAuth {
  constructor(ApiKey) {
    this.ApiKey = ApiKey;
  }

  async signUp({ email, name, password }) {
    return instance
      .post(
        "/v1/signup/api",
        {
          email: email,
          name: name,
          password: password,
        },
        {
          headers: {
            token: this.ApiKey,
          },
        }
      )
      .then((d) => {
        return d.data;
      })
      .catch((d) => {
        return d.data;
      });
  }
  async Login({ email, password }) {
    return instance
      .post(
        "/v1/login/api",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            token: this.ApiKey,
          },
        }
      )
      .then((d) => {
        return d.data;
      })
      .catch((e) => {
        return e.data;
      });
  }

  async isAuth() {
    return instance
      .post(
        "/v1/user",
        { token: this.ApiKey },
        {
          headers: {
            token: this.ApiKey,
          },
        }
      )
      .then((d) => {
        return d.data;
      })
      .catch((e) => {
        return e;
      });
  }

  async Logout() {
    return instance
      .get("/v1/logout/", {
        headers: {
          token: this.ApiKey,
        },
      })
      .then((d) => {
        return d.data;
      })
      .catch((e) => {
        return e.data;
      });
  }

  async Forgotpass(email) {
    return instance
      .post(
        "/v1/forgotpass/api",
        {
          email: email,
        },
        {
          headers: {
            token: this.ApiKey,
          },
        }
      )
      .then((d) => {
        return d.data;
      })
      .catch((e) => {
        return e;
      });
  }

  async ResetPassword(otp, password, jwt) {
    return instance
      .post(
        "/v1/reset/api",
        {
          otp: otp,
          password: password,
          token: jwt,
        },
        {
          headers: {
            token: this.ApiKey,
          },
        }
      )
      .then((d) => {
        return d.data;
      })
      .catch((e) => {
        return e;
      });
  }
}
