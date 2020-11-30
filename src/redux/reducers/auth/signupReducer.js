import { types } from "../../actions/types";

const initialState = {
  message: null,
  error: null,
  isLoading: false,
  isLoggedIn: false,
  email: null,
};
const confirmEmailInitState = {
  message: null,
  error: null,
  isLoading: false,
  isVerified: false,
};
export const signup = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_CLICKED:
      return {
        ...state,
        isClicked: true,
        isLoading: true,
        error: null,
        message: "",
        email: null,
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        message: action.payload.msg,
        isLoading: false,
        isLoggedIn: true,
        email: action.payload.email,
        error: null,
      };

    case types.SIGNUP_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        isLoggedIn: false,
        message: "",
      };
    default:
      return state;
  }
};
export const confirmEmail = (state = confirmEmailInitState, action) => {
  switch (action.type) {
    case types.CONFIRM_EMAIL_CLICKED:
      return {
        ...state,
        isLoading: true,
      };
    case types.CONFIRM_EMAIL_SUCCESS:
      return {
        ...state,
        message: action.payload.msg,
        isLoading: false,
        isVerified: true,
      };

    case types.CONFIRM_EMAIL_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
