import axios from "axios";

const token = localStorage.getItem("auth-token");
const baseURL = "https://amanieric.herokuapp.com/";

const http = axios.create({
  baseURL,
  headers: {
    "auth-token":token,
    "Content-Type": "application/json",
  },
});

export default http;
