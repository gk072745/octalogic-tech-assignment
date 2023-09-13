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

export const getStudents = () => (dispatch) => {
  dispatch(getStudentRequest());
  try {
    axios({
      method: "get",
      url: "http://localhost:3000/bestStudents",
    }).then(({ data }) => {
      dispatch(getStudentSuccess(data));
    });
  } catch (error) {
    dispatch(getStudentError(error?.massage));
  }
};

export const getEnrollRequest = () => {
  return { type: types.GET_ENROLL_REQUEST };
};

export const getEnrollSuccess = (payload) => {
  return { type: types.GET_ENROLL_SUCCESS, payload };
};

export const getEnrollError = (payload) => {
  return { type: types.GET_ENROLL_ERROR, payload };
};

export const getEnrolls = () => (dispatch) => {
  dispatch(getEnrollRequest());
  try {
    axios({
      method: "GET",
      url: "http://localhost:3000/latestEnrollment",
    }).then(({ data }) => {
      dispatch(getEnrollSuccess(data));
    });
  } catch (error) {
    dispatch(getEnrollError(error?.massage));
  }
};
