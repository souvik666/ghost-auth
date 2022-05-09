import axios from "axios";
/* https://ghost-auth-service.herokuapp.com/ */
const instance = axios.create({
  baseURL: "https://ghost-auth-service.herokuapp.com/",
  withCredentials: true,
});

export default instance;
