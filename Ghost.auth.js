import instance from "./src/config/Axios.Config.js";
const t = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjc1MmYzYjljOTMwMmQ0ZTE2MTViZmMiLCJuYW1lIjoic291dmlrIiwiZW1haWwiOiJhZG1pbjExQGdtYWlsLmNvbSIsInRva2VuU2VjcmV0IjoiZGZlNWQwZjRlMjE2MmU5YzYxYmJlM2I4N2Y5NmVkZWU0YWM2NWQ0NjU1ZmMzODkyIiwiX192IjowLCJpYXQiOjE2NTE4NDY5ODAsImV4cCI6MTY4MzM4Mjk4MH0.sxorFaxt-vDqcvqPeHqC3NrzP6fUzrRAt_YZNoZ_j8k`;

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
      .catch((d) => {
        return d;
      });
  }

  async isAuth() {
    return instance
      .post(
        "/v1/user/api",
        {
          jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjc1NDIyYWE1NjQyY2E3MTY0M2VlMWYiLCJhZG1pbiI6IjYyNzUyZjNiOWM5MzAyZDRlMTYxNWJmYyIsIm5hbWUiOiJzb3V2aWsiLCJlbWFpbCI6ImFkbWluMTNAZ21haWwuY29tIiwiX192IjowLCJpYXQiOjE2NTE4NTIwMzUsImV4cCI6MTY4MzM4ODAzNX0.3WQW7xx9V5xqLEwU4FjTrlVtj7vZFXMaitcIlDnM5kY",
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
        return d;
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
      .catch((d) => {
        return d;
      });
  }
}

/* ghost
  .signUp({
    email: "admin16@gmail.com",
    password: "Admin@12345",
    name: "souvik",
  })
  .then((d) => {
    console.log(d);
  }); */

/* ghost.Login({ email: "admin13@gmail.com", password: "Admin@12345" }); */
/* console.log(
  ghost.isAuth().then((d) => {
    console.log(d);
  })
);
 */

/* const ghost = new GhostAuth(t);

ghost.Logout().then((d) => {
  console.log(d);
});
 */