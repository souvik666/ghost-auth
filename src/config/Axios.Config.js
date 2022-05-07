import axios from "axios";
/* https://ghost-auth-service.herokuapp.com/ */
const instance = axios.create({
  baseURL: "http://localhost:5000",
});

export default instance;
