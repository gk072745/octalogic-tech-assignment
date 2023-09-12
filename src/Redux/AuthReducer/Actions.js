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
  } catch (error) {}
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
  } catch (error) {}
};

// logout request.........................

export const getLogoutRequest = () => {
  return { type: types.GET_LOGOUT_REQUEST };
};

export const getLogoutSuccess = (payload) => {
  return { type: types.GET_LOGIN_SUCCESS, payload };
};

export const getLogoutError = (payload) => {
  return { type: types.GET_LOGOUT_ERROR, payload };
};

export const logout = (payload) => (dispatch) => {
  dispatch(getLogoutRequest());
  try {
  } catch (error) {}
};
