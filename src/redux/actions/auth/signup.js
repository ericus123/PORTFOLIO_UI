import { types } from "../types";
import http from "../../../utils/axios/axios";

export const signupRequest = (formData) => async (dispatch) => {
  try {
    dispatch({ type: types.SIGNUP_CLICKED });
    console.log(formData);
    const res = await http.post("/api/auth/register/", {
      firstName: formData.FirstName,
      lastName: formData.LastName,
      email: formData.Email,
      password: formData.Password,
      confPassword: formData.ConfPassword,
      username: formData.Username,
    });
    dispatch({ type: types.SIGNUP_SUCCESS, payload: res.data });
    localStorage.setItem("Unverified", res.data.email);
  } catch (error) {
    if (error.response.data) {
      dispatch({
        type: types.SIGNUP_ERROR,
        payload: error.response.data.error,
      });
    } else {
      dispatch({
        type: types.SIGNUP_ERROR,
        payload: "error occured",
      });
    }
  }
};
export const confirmEmail = (email, token) => async (dispatch) => {
  try {
    dispatch({ type: types.CONFIRM_EMAIL_CLICKED });

    const res = await http.get(`/api/auth/confirmation/${email}/${token}`);
    console.log(res);
    dispatch({ type: types.CONFIRM_EMAIL_SUCCESS, payload: res.data });
    localStorage.removeItem("Unverified");
  } catch (error) {
    if (error.response.data) {
      dispatch({
        type: types.CONFIRM_EMAIL_ERROR,
        payload: error.response.data.error,
      });
    } else {
      dispatch({
        type: types.CONFIRM_EMAIL_ERROR,
        payload: "error occured",
      });
    }
  }
};
