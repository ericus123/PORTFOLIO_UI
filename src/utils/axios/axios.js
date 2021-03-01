import axios from "axios";

const token = localStorage.getItem("auth-token");
const baseURL = "http://localhost:3000/";

const http = axios.create({
  baseURL,
  headers: {
    "auth-token": token,
    "Content-Type": "application/json",
  },
});

export default http;
