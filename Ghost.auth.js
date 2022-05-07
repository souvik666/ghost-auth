import instance from "./src/config/Axios.Config.js";
//const t = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjc1MmYzYjljOTMwMmQ0ZTE2MTViZmMiLCJuYW1lIjoic291dmlrIiwiZW1haWwiOiJhZG1pbjExQGdtYWlsLmNvbSIsInRva2VuU2VjcmV0IjoiZGZlNWQwZjRlMjE2MmU5YzYxYmJlM2I4N2Y5NmVkZWU0YWM2NWQ0NjU1ZmMzODkyIiwiX192IjowLCJpYXQiOjE2NTE4NDY5ODAsImV4cCI6MTY4MzM4Mjk4MH0.sxorFaxt-vDqcvqPeHqC3NrzP6fUzrRAt_YZNoZ_j8k`;

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
}

/* const ghost = new GhostAuth(t); */
/* ghost
  .Login({ email: "admin12@gmail.com", password: "Admin@12345" })
  .then((d) => {
    console.log(d);
  }); */

/* ghost.isAuth().then((d) => {
  console.log(d);
});
 */