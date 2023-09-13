import { getData, setData } from "../Configs";
import * as types from "./ActionTypes";

const initialState = getData("Auth") || {
  isLoading: false,
  isError: false,
  isSignup: false,
  isLogin: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Signup request state ...................
    case types.GET_SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSignup: false,
        isError: false,
      };

    // Signup success state ...................
    case types.GET_SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSignup: true,
        isError: false,
      };

    // Signup error state ...................
    case types.GET_SIGNUP_ERROR:
      return {
        ...state,
        isLoading: false,
        isSignup: false,
        isError: true,
      };

    // Login isLoading state ...................
    case types.GET_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isLogin: false,
        isError: false,
      };

    // Login success state ...................
    case types.GET_LOGIN_SUCCESS:
      let loginObj = {
        ...state,
        isLoading: false,
        isLogin: true,
        isError: false,
      };

      setData("Auth", loginObj);
      return loginObj;

    // Login error state ...................
    case types.GET_LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        isError: true,
      };

    // Logout isLoading state ...................
    case types.GET_LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    // Logout success state ...................
    case types.GET_LOGOUT_SUCCESS:
      let logoutObj = {
        ...state,
        isLoading: false,
        isLogin: false,
        isError: false,
        isSignup: false,
      };
      setData("Auth", logoutObj);
      return logoutObj;

    // Logout error state ...................
    case types.GET_LOGOUT_ERROR:
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        isError: true,
      };

    // default case
    default:
      return state;
  }

  // ................................
};

export { reducer };
