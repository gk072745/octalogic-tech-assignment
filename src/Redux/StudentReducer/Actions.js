import * as types from "./ActionTypes";
import axios from "axios";

export const getStudentRequest = () => {
  return { type: types.GET_STUDENT_REQUEST };
};

export const getStudentSuccess = (payload) => {
  return { type: types.GET_STUDENT_SUCCESS, payload };
};

export const getStudentError = (payload) => {
  return { type: types.GET_STUDENT_ERROR, payload };
};

export const getStudents = (payload) => (dispatch) => {
  dispatch(getStudentRequest());
  try {
  } catch (error) {}
};
