import axios from "axios";

const instance = axios.create({
  baseURL: "..." //this i where we have the API url
});

export default instance;
