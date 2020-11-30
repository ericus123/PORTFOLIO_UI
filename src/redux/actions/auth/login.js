import { types } from "../types";
import jwt_decode from "jwt-decode";
import http from "../../../utils/axios/axios";

export const loginRequest = (Email, Password) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_CLICKED });
    const res = await http.post("/api/auth/login/", {
      email: Email,
      password: Password,
    });
    dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
    const user = await jwt_decode(res.data.token);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("auth-token",res.data.token);
    const logedIn = JSON.parse(localStorage.getItem("user"));
    
    setTimeout(() => {
      window.location.assign("/");
    }, 3000);
  } catch (error) {
    if (error.response.data) {
      dispatch({
        type: types.LOGIN_ERROR,
        payload: error.response.data.error,
      });
    } else {
      dispatch({
        type: types.LOGIN_ERROR,
        payload: "error occured",
      });
    }
  }
};
