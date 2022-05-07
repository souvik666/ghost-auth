<h1 align="center">Welcome to ghost-auth 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/ghost-auth" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/ghost-auth.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> Rapidly integrate authentication and authorization for web, mobile, and legacy applications so you can focus on your core business.

## Install

```sh
npm i ghost-auth
```

## Import

```js
import GhostAuth from "ghost-auth";
```

## Instance

```js
const API_KEY = "YOUR_API_KEY";
const ghost = new GhostAuth(API_KEY);
```

## signUp

```js
ghost
  .signUp({
    email: "souvik@gmail.com",
    password: "souvik@12345",
    name: "souvik",
  })
  .then((d) => {
    console.log(d);
  });
```

## Login

```js
ghost.Login({ email: "souvik@gmail.com", password: "souvik@12345" });
```

## IsAuth

```js
ghost.isAuth(token).then((d) => {
  console.log(d);
});
```

## Logout

```js
ghost.Logout().then((d) => {
  console.log(d);
});
```

## Author

👤 **souvik666**

- Github: [@souvik666](https://github.com/souvik666)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
