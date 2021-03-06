import axios from "axios";

const token = localStorage.getItem("auth-token");
const baseURL = "http://localhost:3000/";

const http = axios.create({
  baseURL,
  headers: {
    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3VwZXJBZG1pbiIsImlkIjoiNWZjNTFlNDU1Zjk3MDVmM2MwYTM0YWJhIiwidXNlcm5hbWUiOm51bGwsImVtYWlsIjoiYW1hbmllcmljdXNAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiMTExMWZnaGprIiwibGFzdE5hbWUiOm51bGwsImlhdCI6MTYwNjc2MzAwOX0.klUKBQeIYzsvQSUDekAVkKofPUcISUta5sqTT0kc89s",
    "Content-Type": "application/json",
  },
});

export default http;
