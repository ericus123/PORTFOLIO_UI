import axios from "axios";

const token = localStorage.getItem("auth-token");
const baseURL = process.env.REACT_APP_BACKEND_URL;

const http = axios.create({
  baseURL,
  headers: {
    "auth-token": token,
    "Content-Type": "application/json",
  },
});

export default http;
