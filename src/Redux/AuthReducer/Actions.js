import * as types from "./ActionTypes";
import axios from "axios";

// Signup request.........................

export const getSignupRequest = () => {
  return { type: types.GET_SIGNUP_REQUEST };
};

export const getSignupSuccess = (payload) => {
  return { type: types.GET_SIGNUP_SUCCESS, payload };
};

export const getSignupError = (payload) => {
  return { type: types.GET_SIGNUP_ERROR, payload };
};

export const signup = (payload) => (dispatch) => {
  dispatch(getSignupRequest());
  try {
    axios({
      method: "POST",
      data: payload,
      url: "http://localhost:3000/users",
    }).then((res) => {
      if (res.status === 201) {
        dispatch(getSignupSuccess(res.data));
      }
    });
  } catch (error) {
    dispatch(getSignupError(error.massage));
  }
};

// login request.........................
export const getLoginRequest = () => {
  return { type: types.GET_LOGIN_REQUEST };
};

export const getLoginSuccess = (payload) => {
  return { type: types.GET_LOGIN_SUCCESS, payload };
};

export const getLoginError = (payload) => {
  return { type: types.GET_LOGIN_ERROR, payload };
};

export const login = (payload) => (dispatch) => {
  dispatch(getLoginRequest());
  try {
    axios({
      method: "GET",
      params: payload,
      url: "http://localhost:3000/users",
    }).then(({ data }) => {
      if (data.length) {
        dispatch(getLoginSuccess(data[0]));
      } else {
        dispatch(getLoginError("Please check username or password!"));
      }
    });
  } catch (error) {
    dispatch(getLoginError("Please check username or password!"));
  }
};

// logout request.........................

export const getLogoutRequest = () => {
  return { type: types.GET_LOGOUT_REQUEST };
};

export const getLogoutSuccess = () => {
  return { type: types.GET_LOGOUT_SUCCESS };
};

export const getLogoutError = () => {
  return { type: types.GET_LOGOUT_ERROR };
};

export const logout = () => (dispatch) => {
  dispatch(getLogoutRequest());
  try {
    dispatch(getLogoutSuccess());
  } catch (error) {
    dispatch(getLogoutError());
  }
};
