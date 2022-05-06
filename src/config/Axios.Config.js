import axios from "axios";

const instance = axios.create({
  baseURL: "https://ghost-auth-service.herokuapp.com/",
});

export default instance;
